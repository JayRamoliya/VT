import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  FileText, 
  Layers, 
  Boxes, 
  Truck, 
  ShieldCheck, 
  Clock, 
  Share2, 
  ChevronRight, 
  Star, 
  Check, 
  Building, 
  Info, 
  Sliders, 
  HelpCircle,
  ArrowLeft
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { useQuote } from '../context/QuoteContext';

interface ProductDetailsProps {
  product?: Product;
  onNavigateHome?: () => void;
  onNavigateProducts?: () => void;
  onSelectProduct?: (product: Product) => void;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  product: directProduct,
  onNavigateHome,
  onNavigateProducts,
  onSelectProduct
}) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { openQuoteModal, openLaserPreviewModal, generateWhatsAppLink, addToQuote } = useQuote();

  // Find product from route param slug/id or use directProduct
  const product = directProduct || PRODUCTS.find(
    p => p.slug === slug || p.id === slug || p.itemCode.toLowerCase() === slug?.toLowerCase()
  );

  const [selectedImage, setSelectedImage] = useState(product?.images[0] || '');
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'customisation' | 'faq'>('description');
  const [orderVolume, setOrderVolume] = useState<string>('100 - 250 pcs');

  // Update selected image whenever product changes
  useEffect(() => {
    if (product?.images?.length) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-[60vh] max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="bg-gray-50 border border-dashed border-gray-300 rounded-3xl p-12 max-w-xl mx-auto">
          <Boxes className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-[#151616]">Product Not Found</h1>
          <p className="text-xs sm:text-sm text-gray-600 mt-2 mb-6">
            The product you requested might have been moved, renamed, or is currently out of catalogue circulation.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/products"
              className="bg-[#DD2B1C] hover:bg-[#b82215] text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              Browse Full Catalogue
            </Link>
            <Link
              to="/"
              className="bg-[#151616] hover:bg-black text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const handleWhatsAppEnquiry = () => {
    const phone = '917567999989';
    const text = `*Bulk Corporate Enquiry - VARAIA TRADERS*\n` +
      `• *Product:* ${product.name}\n` +
      `• *Item Code:* ${product.itemCode}\n` +
      `• *Material:* ${product.material}\n` +
      `• *Finish:* ${product.finish}\n` +
      `• *Target Quantity:* ${orderVolume}\n\n` +
      `Please share official factory rate quotation, ready stock availability, and laser logo sample process.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleAddAndQuote = () => {
    addToQuote(product, 100);
    openQuoteModal(product);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.shortDescription,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Product link copied to clipboard!');
    }
  };

  return (
    <div className="w-full bg-white">
      {/* Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <Breadcrumb
          items={[
            { label: 'Products', to: '/products' },
            { label: product.category, to: `/products?category=${encodeURIComponent(product.category)}` },
            { label: product.name, active: true }
          ]}
          onNavigateHome={onNavigateHome}
        />
      </div>

      {/* Main Product Showcase Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Image Gallery Preview */}
          <div className="lg:col-span-6 space-y-4">
            {/* Big Active Image Box */}
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden bg-gray-50 border border-gray-200 p-6 flex items-center justify-center shadow-xs">
              <img
                src={selectedImage || product.images[0]}
                alt={product.name}
                className="w-full h-full object-contain object-center transition-all duration-300"
              />

              {/* Badges Over Image */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                <span className="bg-[#151616] text-white text-[11px] font-bold px-3 py-1 rounded-md uppercase tracking-wider shadow-sm">
                  {product.category}
                </span>
                {product.laserMarkingAvailable && (
                  <span className="bg-[#DD2B1C] text-white text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-3 h-3" /> Laser Marking Available
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Carousel Strip */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer p-1 bg-gray-50 ${
                      selectedImage === img
                        ? 'border-[#DD2B1C] shadow-md'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} angle ${idx + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Laser Marking Simulator Mini Banner */}
            <div className="bg-red-50/70 border border-red-200/80 rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#DD2B1C] text-white flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#151616] block">
                    Want to see your corporate logo on this product?
                  </span>
                  <span className="text-[11px] text-gray-600">
                    Use our interactive visual preview simulator right now.
                  </span>
                </div>
              </div>
              <button
                onClick={openLaserPreviewModal}
                className="bg-[#151616] hover:bg-[#DD2B1C] text-white text-[11px] font-bold px-3.5 py-2 rounded-xl transition-colors cursor-pointer flex-shrink-0"
              >
                Test Simulator
              </button>
            </div>
          </div>

          {/* Right Column: Product Information & RFQ Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                <span className="font-mono bg-gray-100 px-2.5 py-1 rounded text-xs font-bold text-gray-800">
                  Item Code: {product.itemCode}
                </span>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={handleShare}
                    className="flex items-center gap-1 text-gray-500 hover:text-[#151616] text-xs font-semibold cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" /> Share
                  </button>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-[#151616] tracking-tight leading-snug mt-2">
                {product.name}
              </h1>

              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            {/* Key Value Badges Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-bold">MOQ</span>
                <span className="font-bold text-[#DD2B1C] text-sm">{product.minOrderQty} Pieces</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-bold">Dispatch Timeline</span>
                <span className="font-bold text-gray-800 text-sm">{product.estimatedLeadTime || '2-4 Days'}</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-bold">Raw Material</span>
                <span className="font-bold text-gray-800 text-sm truncate block">{product.material}</span>
              </div>
            </div>

            {/* Volume Tier Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                Select Your Required Corporate Volume:
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {['100 - 250 pcs', '250 - 1000 pcs', '1000+ pcs'].map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setOrderVolume(tier)}
                    className={`py-2 px-2.5 rounded-xl border text-center font-bold transition-all cursor-pointer ${
                      orderVolume === tier
                        ? 'border-[#DD2B1C] bg-red-50 text-[#DD2B1C]'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700 bg-white'
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>

            {/* Core Action Buttons: Request RFQ + WhatsApp */}
            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleAddAndQuote}
                  id="product-details-get-quote-btn"
                  className="w-full bg-[#151616] hover:bg-[#DD2B1C] text-white py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request Factory Quote</span>
                </button>

                <button
                  onClick={handleWhatsAppEnquiry}
                  id="product-details-whatsapp-btn"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Enquiry</span>
                </button>
              </div>

              <p className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                <span>GST Tax Invoice Provided • Direct Wholesale Pricing • Express Freight Dispatch</span>
              </p>
            </div>

            {/* Fast Highlights List */}
            <div className="border-t border-gray-100 pt-4 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#151616] block mb-2">
                Factory Assurance & Specs
              </span>
              <ul className="space-y-1.5 text-xs text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                  <span><strong>Finish:</strong> {product.finish}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                  <span><strong>Dimensions & Weight:</strong> {product.dimensions} | {product.weight}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                  <span><strong>Packaging:</strong> {product.packaging}</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Detailed Tabs Section */}
        <div className="mt-16 border-t border-gray-200 pt-10">
          {/* Tab Navigation */}
          <div className="flex items-center gap-2 border-b border-gray-200 overflow-x-auto pb-px">
            {[
              { id: 'description', label: 'Detailed Description' },
              { id: 'specifications', label: 'Technical Specifications' },
              { id: 'customisation', label: 'Laser Customisation' },
              { id: 'faq', label: 'Bulk Order FAQ' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 px-5 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-[#DD2B1C] text-[#DD2B1C]'
                    : 'border-transparent text-gray-500 hover:text-[#151616]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Contents */}
          <div className="py-8">
            {activeTab === 'description' && (
              <div className="max-w-4xl space-y-6 text-sm text-gray-700 leading-relaxed">
                <p>{product.description}</p>
                
                <h4 className="font-bold text-base text-[#151616] pt-2">Key Engineering Features:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <CheckCircle2 className="w-4 h-4 text-[#DD2B1C] flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-800">{feat}</span>
                    </li>
                  ))}
                </ul>

                {product.bestFor && (
                  <div className="pt-4">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-gray-500 mb-2">
                      Ideal Use Cases & Applications:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.bestFor.map((item, idx) => (
                        <span key={idx} className="bg-red-50 text-[#DD2B1C] text-xs font-semibold px-3 py-1 rounded-full border border-red-100">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="max-w-3xl">
                <div className="rounded-2xl border border-gray-200 overflow-hidden">
                  <table className="w-full text-xs text-left">
                    <tbody className="divide-y divide-gray-200">
                      {Object.entries(product.specifications).map(([key, val]) => (
                        <tr key={key} className="hover:bg-gray-50">
                          <td className="py-3 px-4 font-bold text-gray-500 w-1/3 bg-gray-50/50">
                            {key}
                          </td>
                          <td className="py-3 px-4 text-gray-800 font-medium">
                            {val}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'customisation' && (
              <div className="max-w-3xl space-y-4 text-xs sm:text-sm text-gray-700">
                <div className="bg-red-50/50 p-5 rounded-2xl border border-red-100 space-y-2">
                  <h4 className="font-bold text-[#DD2B1C] text-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> High-Resolution Fiber Laser Annealing
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Our in-house 50W MOPA Fiber Laser systems produce permanent, high-contrast dark or silvery-white markings on metal surfaces without any ink or chemical solvents.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-gray-200">
                    <strong className="block font-bold text-[#151616] text-xs mb-1">Corporate Logos</strong>
                    <p className="text-[11px] text-gray-500">Provide CDR, AI, EPS, SVG, or high-res PDF files for razor-sharp reproduction.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-200">
                    <strong className="block font-bold text-[#151616] text-xs mb-1">Individual Recipient Names</strong>
                    <p className="text-[11px] text-gray-500">Upload an Excel sheet of employee names for personalized gifting at zero extra setup fee.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-200">
                    <strong className="block font-bold text-[#151616] text-xs mb-1">Serial Numbers & QR Codes</strong>
                    <p className="text-[11px] text-gray-500">Engrave website URLs, anniversary milestones, or scannable asset tags.</p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={openLaserPreviewModal}
                    className="bg-[#151616] hover:bg-[#DD2B1C] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                  >
                    Open Live Interactive Simulator
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'faq' && (
              <div className="max-w-3xl space-y-3 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <h4 className="font-bold text-[#151616] mb-1">What is the standard production turnaround for 500 pcs?</h4>
                  <p className="text-xs text-gray-600">Standard lead time is 2 to 4 business days including laser branding, as we maintain raw/finished buffer inventory in our Rajkot plant.</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <h4 className="font-bold text-[#151616] mb-1">Can we request physical sample pieces before issuing a formal Purchase Order?</h4>
                  <p className="text-xs text-gray-600">Yes! We provide sample dispatch via express courier with sample laser marking for corporate verification.</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <h4 className="font-bold text-[#151616] mb-1">How is the packaging handled for corporate distribution?</h4>
                  <p className="text-xs text-gray-600">Every item is packed in an individual protective polybag inside a matte laminated corporate presentation box, packaged securely in master corrugated shipper cartons.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Category Products Carousel */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 border-t border-gray-200 pt-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#DD2B1C] block">
                  More in this Category
                </span>
                <h3 className="text-2xl font-black text-[#151616]">
                  Related {product.category} Items
                </h3>
              </div>
              <Link
                to={`/products?category=${encodeURIComponent(product.category)}`}
                className="text-xs font-bold text-[#151616] hover:text-[#DD2B1C] flex items-center gap-1 transition-colors"
              >
                View Category <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard
                  key={relProduct.id}
                  product={relProduct}
                  onViewDetails={(p) => {
                    if (onSelectProduct) {
                      onSelectProduct(p);
                    } else {
                      navigate(`/products/${p.slug || p.id}`);
                    }
                  }}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
export default ProductDetails;
