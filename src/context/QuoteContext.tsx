import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, QuoteItem } from '../types';

interface QuoteContextType {
  quoteItems: QuoteItem[];
  addToQuote: (product: Product, quantity?: number, customizationNotes?: string) => void;
  removeFromQuote: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearQuote: () => void;
  isQuoteModalOpen: boolean;
  openQuoteModal: (initialProduct?: Product) => void;
  closeQuoteModal: () => void;
  isCatalogueModalOpen: boolean;
  openCatalogueModal: () => void;
  closeCatalogueModal: () => void;
  isLaserPreviewModalOpen: boolean;
  openLaserPreviewModal: (product?: Product) => void;
  closeLaserPreviewModal: () => void;
  selectedPreviewProduct: Product | null;
  totalItemsCount: number;
  generateWhatsAppLink: (customMessage?: string) => string;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>(() => {
    try {
      const saved = localStorage.getItem('vt_quote_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isCatalogueModalOpen, setIsCatalogueModalOpen] = useState(false);
  const [isLaserPreviewModalOpen, setIsLaserPreviewModalOpen] = useState(false);
  const [selectedPreviewProduct, setSelectedPreviewProduct] = useState<Product | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('vt_quote_items', JSON.stringify(quoteItems));
    } catch {
      // ignore
    }
  }, [quoteItems]);

  const addToQuote = (product: Product, quantity: number = 100, customizationNotes: string = '') => {
    setQuoteItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity, customizationNotes: customizationNotes || item.customizationNotes }
            : item
        );
      }
      return [...prev, { product, quantity, customizationNotes }];
    });
  };

  const removeFromQuote = (productId: string) => {
    setQuoteItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setQuoteItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity: Math.max(100, quantity) } : item
      )
    );
  };

  const clearQuote = () => {
    setQuoteItems([]);
  };

  const openQuoteModal = (initialProduct?: Product) => {
    if (initialProduct) {
      addToQuote(initialProduct, 100);
    }
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  const openCatalogueModal = () => setIsCatalogueModalOpen(true);
  const closeCatalogueModal = () => setIsCatalogueModalOpen(false);

  const openLaserPreviewModal = (product?: Product) => {
    if (product) {
      setSelectedPreviewProduct(product);
    }
    setIsLaserPreviewModalOpen(true);
  };

  const closeLaserPreviewModal = () => {
    setIsLaserPreviewModalOpen(false);
    setSelectedPreviewProduct(null);
  };

  const totalItemsCount = quoteItems.reduce((acc, item) => acc + item.quantity, 0);

  const generateWhatsAppLink = (customMessage?: string) => {
    const basePhone = '917567999989';
    let text = "Thank you for contacting VARAIA TRADERS – Rajkot.\nI'm looking for premium Steel/MS corporate gifting products in bulk.";

    if (customMessage) {
      text = customMessage;
    } else if (quoteItems.length > 0) {
      text += "\n\n*My Bulk Order Enquiry List:*";
      quoteItems.forEach((item, index) => {
        text += `\n${index + 1}. *${item.product.name}* (Code: ${item.product.itemCode})`;
        text += `\n   - Quantity: ${item.quantity} pcs`;
        text += `\n   - Material: ${item.product.material}`;
        if (item.customizationNotes) {
          text += `\n   - Customization: ${item.customizationNotes}`;
        }
      });
      text += "\n\nPlease share direct factory quotation and delivery timeline to our location.";
    }

    return `https://wa.me/${basePhone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <QuoteContext.Provider
      value={{
        quoteItems,
        addToQuote,
        removeFromQuote,
        updateQuantity,
        clearQuote,
        isQuoteModalOpen,
        openQuoteModal,
        closeQuoteModal,
        isCatalogueModalOpen,
        openCatalogueModal,
        closeCatalogueModal,
        isLaserPreviewModalOpen,
        openLaserPreviewModal,
        closeLaserPreviewModal,
        selectedPreviewProduct,
        totalItemsCount,
        generateWhatsAppLink
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};
