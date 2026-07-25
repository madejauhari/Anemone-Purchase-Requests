import ProductCard from "./ProductCard";

export default function ProductCatalog({ products, onAddToCart, cart, onDecrease }) {
  return (
    <div className="w-full">
      <h2 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
        Katalog Produk HO
      </h2>
      <div className="flex flex-col gap-4">
        {products.map((product) => {
          const cartItem = cart.find(item => item.id === product.id);
          return (
            <ProductCard 
              key={product.id} 
              product={product} 
              cartQuantity={cartItem ? cartItem.quantity : 0}
              onAdd={() => onAddToCart(product)}
              onDecrease={() => onDecrease(product.id)}
            />
          );
        })}
      </div>
    </div>
  );
}