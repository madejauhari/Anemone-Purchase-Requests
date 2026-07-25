import logo from '../../assets/anemone-logo-2.png';

export default function Header() {
  return (
    <header className="bg-linear-to-r from-pink-600 to-pink-500 shadow-md sm:rounded-b-3xl mb-6 sm:mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        
        {/* Container Utama Fleksibel */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
          
          {/* Sisi Kiri: Logo & Badge */}
          <div className="flex flex-row items-center justify-between w-full sm:w-auto gap-3">
            <div className="flex items-center gap-3 bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl shadow-sm">
              <img 
                src={logo} 
                alt="Anemone Logo" 
                className="h-7 sm:h-9 w-auto object-contain" 
              />
            </div>

            <div className="hidden sm:block h-8 w-px bg-pink-400/50 mx-2"></div>
            
            <div className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs sm:text-sm font-semibold shadow-sm">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              Denpasar Utara II
            </div>
          </div>

          {/* Sisi Kanan: Tombol */}
          <button className="w-full sm:w-auto px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-pink-600 bg-white rounded-xl shadow-sm hover:bg-pink-50 hover:shadow-md transition-all focus:ring-4 focus:ring-pink-300">
            Riwayat Pesanan
          </button>
          
        </div>
      </div>
    </header>
  );
}