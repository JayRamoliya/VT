import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';

// Route Lazy Loading using React.lazy() for optimal bundle performance
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Products = lazy(() => import('../pages/Products'));
const ProductDetails = lazy(() => import('../pages/ProductDetails'));
const Gallery = lazy(() => import('../pages/Gallery'));
const Blog = lazy(() => import('../pages/Blog'));
const BlogDetails = lazy(() => import('../pages/BlogDetails'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Home */}
        <Route index element={<Home />} />

        {/* Corporate Profile & Plant Infrastructure */}
        <Route path="about" element={<About />} />

        {/* Product Catalogue & Dynamic Product Details */}
        <Route path="products" element={<Products />} />
        <Route path="products/:slug" element={<ProductDetails />} />

        {/* Showcase Gallery */}
        <Route path="gallery" element={<Gallery />} />

        {/* Corporate Insights Blog & Single Post */}
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogDetails />} />

        {/* Factory Contact & Sales Desk */}
        <Route path="contact" element={<Contact />} />

        {/* 404 Catch All Route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
