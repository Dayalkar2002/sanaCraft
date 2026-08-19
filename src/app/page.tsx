'use client';

import React from 'react';
import { CartProvider } from '@/context/CartContext';
import { AuthProvider } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandStory from '@/components/BrandStory';
import ProductCatalog from '@/components/ProductCatalog';
import CustomOrderWizard from '@/components/CustomOrderWizard';
import InstagramSection from '@/components/InstagramSection';
import UserQueryContact from '@/components/UserQueryContact';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import ProductModal from '@/components/ProductModal';
import AuthModal from '@/components/AuthModal';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';

export default function Home() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col justify-between selection:bg-[#7A3E38] selection:text-white">
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <BrandStory />
            <ProductCatalog />
            <CustomOrderWizard />
            <InstagramSection />
            <UserQueryContact />
          </main>
          <Footer />

          {/* Global Overlays & Modals */}
          <CartDrawer />
          <ProductModal />
          <AuthModal />
          <WhatsAppFloatingButton />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}
