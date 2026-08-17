'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, PRODUCTS } from '@/data/products';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  customNote?: string;
}

interface CartContextType {
  cart: CartItem[];
  currency: 'USD' | 'INR';
  setCurrency: (c: 'USD' | 'INR') => void;
  addToCart: (product: Product, quantity?: number, selectedColor?: string, customNote?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPriceUSD: number;
  totalPriceINR: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  selectedProductForModal: Product | null;
  setSelectedProductForModal: (p: Product | null) => void;
  formatPrice: (priceUSD: number, priceINR: number) => string;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [currency, setCurrency] = useState<'USD' | 'INR'>('INR');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);

  // Load saved state from localStorage if available
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('sanacraft_cart');
      if (savedCart) setCart(JSON.parse(savedCart));
      const savedCurrency = localStorage.getItem('sanacraft_currency');
      if (savedCurrency === 'USD' || savedCurrency === 'INR') {
        setCurrency(savedCurrency);
      } else {
        setCurrency('INR');
      }
      const savedWishlist = localStorage.getItem('sanacraft_wishlist');
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('sanacraft_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('sanacraft_currency', currency);
    } catch (e) {
      console.error(e);
    }
  }, [currency]);

  useEffect(() => {
    try {
      localStorage.setItem('sanacraft_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  const addToCart = (product: Product, quantity = 1, selectedColor = 'Standard Blend', customNote = '') => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        if (customNote) updated[existingIndex].customNote = customNote;
        if (selectedColor) updated[existingIndex].selectedColor = selectedColor;
        return updated;
      } else {
        return [...prev, { product, quantity, selectedColor, customNote }];
      }
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const totalPriceUSD = cart.reduce((acc, item) => acc + item.product.priceUSD * item.quantity, 0);
  const totalPriceINR = cart.reduce((acc, item) => acc + item.product.priceINR * item.quantity, 0);

  const formatPrice = (priceUSD: number, priceINR: number) => {
    if (currency === 'INR') {
      return `₹${priceINR.toLocaleString('en-IN')}`;
    }
    return `$${priceUSD.toFixed(1)}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        currency,
        setCurrency,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPriceUSD,
        totalPriceINR,
        isCartOpen,
        setIsCartOpen,
        selectedProductForModal,
        setSelectedProductForModal,
        formatPrice,
        wishlist,
        toggleWishlist
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
