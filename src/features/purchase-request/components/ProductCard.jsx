import Button from "../../../components/ui/Button";
import QuantityInput from "../../../components/ui/QuantityInput";

export default function ProductCard({ product, cartQuantity, onAdd, onDecrease }) {
  const isOutOfStock = product.stock === 0;
  const isMaxStock = cartQuantity >= product.stock;
  const stockWarning = product.stock > 0 && product.stock <= 100;

  return (
    // 1. Ubah menjadi flex-row di semua ukuran layar, sesuaikan padding untuk mobile (p-4)
    <div className="group flex flex-row gap-4 p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-pink-200 transition-all duration-300">
      
      {/* 2. Sesuaikan ukuran gambar agar kotak mungil (w-24 h-24) di HP, dan sedikit membesar (w-32) di PC */}
      <div className="w-24 h-24 sm:w-32 sm:h-32 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0 relative">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        {isOutOfStock && (
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center">
            <span className="bg-red-500 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full shadow-sm uppercase tracking-wide">Habis</span>
          </div>
        )}
      </div>
      
      {/* Product Details */}
      <div className="flex flex-col justify-between w-full">
        <div>
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold text-slate-800 text-base sm:text-lg leading-tight group-hover:text-pink-600 transition-colors line-clamp-2">{product.name}</h3>
          </div>
          
          <div className="flex items-center mt-1">
            <span className={`text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-md ${stockWarning ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-600'}`}>
              Stok: {product.stock}
            </span>
          </div>
          
          <p className="font-extrabold text-slate-900 text-lg sm:text-xl mt-2">
            Rp {product.price.toLocaleString('id-ID')}
            <span className="text-[10px] sm:text-xs font-medium text-slate-500 font-normal"> / pcs</span>
          </p>
        </div>
        
        {/* Actions - Atur margin dan ukuran elemen interaktif untuk mobile */}
        <div className="mt-3">
          {isOutOfStock ? (
             <Button disabled className="w-full text-xs py-1.5 sm:py-2.5 sm:w-auto">Stok Habis</Button>
          ) : cartQuantity > 0 ? (
            <QuantityInput 
              quantity={cartQuantity} 
              onIncrease={onAdd} 
              onDecrease={onDecrease} 
              isMaxStock={isMaxStock} 
            />
          ) : (
            // Tombol tambah yang lebih slim di mobile
            <Button onClick={onAdd} variant="outline" className="w-full sm:w-auto text-xs py-1.5 sm:py-2 sm:text-sm">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
              Tambah
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}