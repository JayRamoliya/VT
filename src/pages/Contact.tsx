import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  Building2, 
  Truck, 
  CheckCircle2, 
  FileCheck 
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { ContactForm } from '../components/ContactForm';
import { useQuote } from '../context/QuoteContext';

interface ContactProps {
  onNavigateHome?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onNavigateHome }) => {
  const { generateWhatsAppLink } = useQuote();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    if (onNavigateHome) onNavigateHome();
    else navigate('/');
  };

  const whatsappUrl = generateWhatsAppLink(
    "Hello VARAIA TRADERS, I would like to discuss a bulk corporate gift requirement for our company."
  );

  return (
    <div className="w-full bg-white">
      {/* Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <Breadcrumb
          items={[{ label: 'Contact Factory Desk', active: true }]}
          onNavigateHome={handleHomeClick}
        />
      </div>

      {/* Hero Header */}
      <section className="py-12 sm:py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#DD2B1C] block mb-2">
              Factory Sales & Procurement Assistance
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151616] tracking-tight">
              Let's Discuss Your Bulk Corporate Gift Requirements
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
              Connect directly with our Rajkot manufacturing team for customized sample CAD layouts, direct factory price tiering, and pan-India express logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left: Contact Info Cards & Quick WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Cards */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-[#151616]">
                Rajkot Manufacturing Facility
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DD2B1C] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block">Plant & Sales Office:</span>
                    <span className="text-gray-600 leading-relaxed block mt-0.5">
                      Plot No. 14, Aji GIDC Industrial Area, Phase-II, Rajkot - 360003, Gujarat, India.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DD2B1C] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block">Factory Direct Helpline:</span>
                    <a href="tel:+917567999989" className="text-[#DD2B1C] font-bold block mt-0.5 hover:underline text-sm">
                      +91 75679 99989
                    </a>
                    <span className="text-gray-400 text-[11px]">Direct Line to Jigneshbhai / Procurement Desk</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DD2B1C] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block">Email RFQ & Artwork:</span>
                    <a href="mailto:jignesh@varaiatraders.com" className="text-gray-700 hover:text-[#DD2B1C] block mt-0.5 font-medium">
                      jignesh@varaiatraders.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DD2B1C] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block">Working Hours:</span>
                    <span className="text-gray-600 block mt-0.5">
                      Monday to Saturday: 9:00 AM – 8:00 PM IST
                    </span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Priority Button */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start WhatsApp Chat Now</span>
                </a>
              </div>
            </div>

            {/* Statutory Compliance & Credentials */}
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 text-xs space-y-3">
              <span className="font-bold uppercase tracking-wider text-[#151616] block">
                Official Business Credentials
              </span>
              <div className="grid grid-cols-2 gap-3 text-[11px]">
                <div className="bg-white p-3 rounded-xl border border-gray-200">
                  <span className="text-gray-400 block font-semibold">UDYAM Reg.</span>
                  <span className="font-mono font-bold text-gray-800 text-xs">UDYAM-GJ-20-0089421</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-gray-200">
                  <span className="text-gray-400 block font-semibold">GSTIN</span>
                  <span className="font-mono font-bold text-gray-800 text-xs">24AABCV9821M1ZT</span>
                </div>
              </div>
              <p className="text-[11px] text-gray-500 flex items-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                <span>100% compliant with standard corporate vendor onboarding protocols.</span>
              </p>
            </div>

          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

        {/* Embedded Plant Location Map / Travel Directions */}
        <div className="mt-14 pt-10 border-t border-gray-200">
          <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#DD2B1C] block mb-1">
                Industrial Hub
              </span>
              <h4 className="text-xl font-bold text-[#151616]">
                Visiting Our Plant in Rajkot?
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
                We welcome corporate procurement managers and gifting agency partners to visit our showroom and fiber laser marking lab in Aji GIDC, Rajkot.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Aji+GIDC+Rajkot+Gujarat"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#151616] hover:bg-[#DD2B1C] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 whitespace-nowrap shadow-sm"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions on Map</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Contact;
