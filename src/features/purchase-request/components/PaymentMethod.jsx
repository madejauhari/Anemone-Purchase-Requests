export default function PaymentMethod({ selectedMethod, onChange }) {
  const methods = [
    { id: 'transfer', label: 'Transfer Bank', icon: '🏦' },
    { id: 'cod', label: 'Bayar di Tempat (COD)', icon: '🚚' },
    { id: 'qris', label: 'QRIS', icon: '📱' }
  ];
  
  return (
    <div className="mt-6 border-t border-slate-100 pt-5">
      <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-3">Pilih Metode Pembayaran</h3>
      <div className="grid grid-cols-1 gap-2">
        {methods.map(method => (
          <label 
            key={method.id} 
            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all border-2 ${
              selectedMethod === method.label 
                ? 'border-pink-500 bg-pink-50/50 shadow-sm' 
                : 'border-slate-100 bg-white hover:border-pink-200 hover:bg-slate-50'
            }`}
          >
            <input 
              type="radio" 
              name="payment" 
              value={method.label} 
              checked={selectedMethod === method.label}
              onChange={(e) => onChange(e.target.value)}
              className="w-4 h-4 text-pink-600 border-slate-300 focus:ring-pink-500 accent-pink-600"
            />
            <span className="text-lg">{method.icon}</span>
            <span className={`text-sm font-semibold ${selectedMethod === method.label ? 'text-pink-900' : 'text-slate-700'}`}>
              {method.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}