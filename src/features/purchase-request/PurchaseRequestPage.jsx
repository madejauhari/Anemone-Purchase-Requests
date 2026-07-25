import { useState } from 'react';
import { mockProducts } from './data/mockProducts';
import ProductCatalog from './components/ProductCatalog';
import OrderSummary from './components/OrderSummary';
import Header from '../../components/layout/Header';
import PageContainer from '../../components/layout/PageContainer';

export default function PurchaseRequestPage() {
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        if (existingItem.quantity >= product.stock) return prevCart; // Validasi stok
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleDecreaseQuantity = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (existingItem.quantity === 1) {
        return prevCart.filter((item) => item.id !== productId);
      }
      return prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const handleRemoveItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Berhasil! Pesanan Anda telah dikirim ke Head Office.');
      setCart([]);
      setPaymentMethod('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <PageContainer>
      <Header />
      
      {/* Bungkus bagian bawah header dengan container agar berada di tengah layar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Form Pemesanan Stock (PO)</h1>
          <p className="text-slate-500 mt-1">Pilih kebutuhan operasional untuk dikirim dari Head Office.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-[60%] xl:w-[65%]">
            <ProductCatalog 
              products={mockProducts} 
              onAddToCart={handleAddToCart} 
              cart={cart}
              onDecrease={handleDecreaseQuantity}
            />
          </div>
          <div className="w-full lg:w-[40%] xl:w-[35%]">
            <OrderSummary 
              cart={cart} 
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              onRemove={handleRemoveItem}
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}