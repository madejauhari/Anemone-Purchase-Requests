export default function EmptyState({ message }) {
  return (
    <div className="text-center p-6 border-2 border-dashed border-gray-300 rounded-lg text-gray-500">
      <p>{message}</p>
    </div>
  );
}