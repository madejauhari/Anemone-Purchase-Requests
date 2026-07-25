export default function PageContainer({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200 selection:text-blue-900">
      {children}
    </div>
  );
}