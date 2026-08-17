'use client';

import React from 'react';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCatalog from '@/components/ProductCatalog';
import CustomOrderWizard from '@/components/CustomOrderWizard';
import InstagramSection from '@/components/InstagramSection';
import UserQueryContact from '@/components/UserQueryContact';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import ProductModal from '@/components/ProductModal';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col justify-between selection:bg-[#E88D7D] selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <ProductCatalog />
          <CustomOrderWizard />
          <InstagramSection />
          <UserQueryContact />
        </main>
        <Footer />

        {/* Global Overlays & Modals */}
        <CartDrawer />
        <ProductModal />
        <WhatsAppFloatingButton />
      </div>
    </CartProvider>
  );
}
