export default function CartItem({ item, onRemove }) {
  return (
    <div className="flex justify-between items-start text-sm mb-3 pb-3 border-b border-slate-100 last:border-0 last:pb-0 last:mb-0 group">
      
      {/* Nama dan Harga Satuan */}
      <div className="flex-1 pr-2">
        <p className="font-semibold text-slate-800 line-clamp-2">{item.name}</p>
        <p className="text-slate-500 text-xs mt-0.5">Rp {item.price.toLocaleString('id-ID')}</p>
      </div>
      
      {/* Jumlah, Tombol Hapus, dan Subtotal per Item */}
      <div className="flex flex-col items-end gap-1.5">
        <div className="flex items-center gap-3">
          <span className="font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">x {item.quantity}</span>
          
          {/* Tombol Hapus (Tong Sampah) */}
          <button
            onClick={onRemove}
            className="text-slate-400 hover:text-red-500 transition-colors p-1"
            title="Hapus dari keranjang"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
            </svg>
          </button>
        </div>
        
        <span className="font-bold text-slate-900">
          Rp {(item.price * item.quantity).toLocaleString('id-ID')}
        </span>
      </div>
      
    </div>
  );
}