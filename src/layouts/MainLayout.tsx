import React, { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollProgressBar } from '../components/ScrollProgressBar';
import { BulkQuoteModal } from '../components/BulkQuoteModal';
import { LaserMarkingPreview } from '../components/LaserMarkingPreview';
import { CatalogueDownloadModal } from '../components/CatalogueDownloadModal';
import { FloatingActions } from '../components/FloatingActions';
import { ScrollToTop } from '../components/ScrollToTop';
import { PageLoader } from '../components/PageLoader';

export const MainLayout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white text-[#151616] flex flex-col font-sans selection:bg-[#007BFF] selection:text-white relative">
      {/* Scroll to Top Manager on route changes */}
      <ScrollToTop />

      {/* Top Subtle Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Persistent Global Header */}
      <Header />

      {/* Page Content with Lazy Suspense & Subtle Fade/Upward Route Transitions */}
      <main className="flex-1 w-full" id="main-content">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>

      {/* Persistent Global Footer */}
      {/* <Footer /> */}

      {/* Persistent Global Modals & Interactive Floating Actions */}
      <BulkQuoteModal />
      <LaserMarkingPreview />
      <CatalogueDownloadModal />
      <FloatingActions />
    </div>
  );
};
export default MainLayout;
