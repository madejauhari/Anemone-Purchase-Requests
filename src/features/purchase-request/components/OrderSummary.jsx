import Button from "../../../components/ui/Button";
import CartItem from "./CartItem";
import PaymentMethod from "./PaymentMethod";

export default function OrderSummary({ cart, paymentMethod, setPaymentMethod, onSubmit, isSubmitting, onRemove }) {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = cart.length > 0 ? 50000 : 0;
  const total = subtotal + shippingCost;
  
  const isSubmitDisabled = cart.length === 0 || !paymentMethod;

  return (
    <div className="sticky top-6">
      <h2 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
        Ringkasan Pesanan
      </h2>

      {/* Kotak Putih Utama */}
      <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-6 xl:p-8">
        {cart.length === 0 ? (
          <div className="text-center py-10 px-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <svg className="w-12 h-12 mx-auto text-slate-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            <p className="text-slate-500 font-medium text-sm">Keranjang masih kosong.</p>
            <p className="text-slate-400 text-xs mt-1">Pilih produk operasional di samping.</p>
          </div>
        ) : (
          <>
            <div className="max-h-80 overflow-y-auto pr-2 mb-4 space-y-4 custom-scrollbar">
              {cart.map(item => (
                <CartItem 
                  key={item.id} 
                  item={item} 
                  onRemove={() => onRemove(item.id)} // Teruskan id item yang ingin dihapus
                />
              ))}
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-5 space-y-3 text-sm mt-5">
              <div className="flex justify-between items-center text-slate-600">
                <span>Subtotal Produk</span>
                <span className="font-semibold text-slate-800">Rp {subtotal.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between items-center text-slate-600">
                <span className="flex items-center gap-1">
                  Estimasi Ongkir <span className="text-xs bg-slate-200 px-1.5 py-0.5 rounded text-slate-500">Cargo</span>
                </span>
                <span className="font-semibold text-slate-800">Rp {shippingCost.toLocaleString('id-ID')}</span>
              </div>
              
              <div className="flex justify-between items-center pt-4 mt-4 border-t border-slate-200">
                <span className="font-bold text-slate-900">Total Tagihan</span>
                <span className="font-black text-pink-600 text-xl">Rp {total.toLocaleString('id-ID')}</span>
              </div>
            </div>
          </>
        )}

        {cart.length > 0 && (
          <PaymentMethod selectedMethod={paymentMethod} onChange={setPaymentMethod} />
        )}

        <Button 
          onClick={onSubmit} 
          disabled={isSubmitDisabled} 
          isLoading={isSubmitting}
          className="w-full mt-6 py-4 text-base rounded-2xl"
        >
          {isSubmitDisabled && cart.length > 0 ? "Pilih Metode Pembayaran" : "Proses Pesanan Sekarang"}
        </Button>
      </div>
    </div>
  );
}