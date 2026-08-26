import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QuoteProvider } from './context/QuoteContext';
import { SmoothScroll } from './components/SmoothScroll';
import { AppRoutes } from './routes/AppRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <QuoteProvider>
        <SmoothScroll>
          <AppRoutes />
        </SmoothScroll>
      </QuoteProvider>
    </BrowserRouter>
  );
}
