export default function QuantityInput({ quantity, onIncrease, onDecrease, isMaxStock }) {
  return (
    <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg p-1 w-fit shadow-sm">
      <button
        onClick={onDecrease}
        className="w-8 h-8 rounded-md flex items-center justify-center font-bold text-slate-600 hover:bg-white hover:shadow-sm hover:text-indigo-600 transition-all"
        aria-label="Kurangi"
      >
        −
      </button>
      <span className="font-bold w-8 text-center text-slate-800 text-sm">{quantity}</span>
      <button
        onClick={onIncrease}
        disabled={isMaxStock}
        className={`w-8 h-8 rounded-md flex items-center justify-center font-bold transition-all ${
          isMaxStock 
            ? 'text-slate-300 cursor-not-allowed' 
            : 'text-slate-600 hover:bg-white hover:shadow-sm hover:text-indigo-600'
        }`}
        aria-label="Tambah"
      >
        +
      </button>
    </div>
  );
}