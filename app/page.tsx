export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* NAVBAR SECTION */}
      <nav className="fixed w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800 top-0 left-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-black tracking-wider text-white cursor-pointer">
            <a href="#beranda">AVASSCO<span className="text-indigo-500">.</span></a>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide text-slate-300">
            <a href="#beranda" className="hover:text-indigo-400 transition-colors">BERANDA</a>
            <a href="#event" className="hover:text-indigo-400 transition-colors">AVASSCO XI</a>
            <a href="#lokasi" className="hover:text-indigo-400 transition-colors">LOKASI</a>
            <a href="#kontak" className="hover:text-indigo-400 transition-colors">TIKET & KONTAK</a>
          </div>
        </div>
      </nav>

      {/* HERO / BERANDA SECTION */}
      <section id="beranda" className="relative pt-44 pb-32 px-6 text-center bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 overflow-hidden">
        {/* Ornamen Background */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase animate-pulse">
            🔥 MINGGU DEPAN
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4 text-white">
            AVASSCO <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">XI</span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-slate-300 mb-6">
            The Ultimate Art & Music Festival
          </p>
          <p className="text-lg font-light max-w-2xl mx-auto text-slate-400 mb-10 leading-relaxed">
            Siapkan dirimu untuk malam puncak paling bersejarah tahun ini! Penampilan spektakuler dari bakat-bakat terbaik SMA Islam Al Azhar 8 dan Guest Star rahasia yang siap mengguncang panggung.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#event" 
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)]"
            >
              Lihat Line-Up & Info
            </a>
            <a 
              href="https://www.instagram.com/avassco_" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-8 py-4 rounded-xl transition-all border border-slate-700"
            >
              Beli Tiket Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT EVENT SECTION */}
      <section id="event" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Info Acara */}
            <div>
              <span className="text-indigo-400 font-bold uppercase tracking-widest text-xs">Puncak Acara</span>
              <h2 className="text-4xl md:text-5xl font-black mt-2 mb-6 text-white">Minggu Depan: Waktunya Bersinar!</h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                Setelah kesuksesan luar biasa tahun lalu, AVASSCO XI kembali dengan tata panggung yang lebih megah, pameran seni memukau, dan kolaborasi musik lintas generasi yang nggak boleh kamu lewati.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-slate-800/50 p-4 rounded-2xl border border-slate-800">
                  <div className="text-3xl">🎤</div>
                  <div>
                    <h4 className="text-white font-bold">Mystery Guest Stars</h4>
                    <p className="text-sm text-slate-400">Musisi papan atas siap meramaikan malam puncak AVASSCO XI.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-slate-800/50 p-4 rounded-2xl border border-slate-800">
                  <div className="text-3xl">🎨</div>
                  <div>
                    <h4 className="text-white font-bold">Art Exhibition</h4>
                    <p className="text-sm text-slate-400">Pameran karya seni rupa, instalasi, dan kreativitas siswa/i Al Azhar 8.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Countdown Box */}
            <div className="bg-indigo-950/40 border border-indigo-500/30 p-8 rounded-3xl text-center backdrop-blur-sm">
              <div className="text-5xl mb-6">⏳</div>
              <h3 className="text-2xl font-bold mb-2 text-white">Hitung Mundur Acara</h3>
              <p className="text-slate-400 text-sm mb-8">Amankan tiket presale sebelum kehabisan!</p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-slate-900 p-4 md:p-6 rounded-2xl border border-slate-800 shadow-inner">
                  <span className="block text-3xl md:text-4xl font-black text-indigo-400 mb-1">07</span>
                  <span className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold">Hari</span>
                </div>
                <div className="bg-slate-900 p-4 md:p-6 rounded-2xl border border-slate-800 shadow-inner">
                  <span className="block text-3xl md:text-4xl font-black text-indigo-400 mb-1">24</span>
                  <span className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold">Jam</span>
                </div>
                <div className="bg-slate-900 p-4 md:p-6 rounded-2xl border border-slate-800 shadow-inner">
                  <span className="block text-3xl md:text-4xl font-black text-indigo-400 mb-1">00</span>
                  <span className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest font-bold">Menit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOKASI SECTION */}
      <section id="lokasi" className="py-24 px-6 border-y border-slate-900 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-indigo-400 font-bold uppercase tracking-widest text-xs">Venue Utama</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-2 mb-10 text-white">Lokasi Acara</h2>
          
          <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl inline-block w-full">
            <h3 className="text-2xl font-bold text-white mb-2">SMA Islam Al Azhar 8 Kota Bekasi</h3>
            <p className="text-slate-400 mb-8 leading-relaxed max-w-lg mx-auto">
              Jl. Bulevar Utara Blok L, RT.006/RW.003, Marga Mulya, Kec. Bekasi Utara, Kota Bekasi, Jawa Barat 17426
            </p>
            <a 
              href="https://maps.google.com/?q=SMA+Islam+Al+Azhar+8+Kota+Bekasi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-xl transition-all border border-slate-700"
            >
              <span>📍 Buka Petunjuk Arah di Maps</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER / KONTAK */}
      <footer id="kontak" className="bg-slate-950 text-slate-400 py-16 text-center">
        <div className="font-black text-3xl text-white mb-3 tracking-wider">AVASSCO<span className="text-indigo-500">XI</span></div>
        <p className="mb-8 text-sm text-slate-400">Ajang Pentas Seni & Kreativitas Siswa SMA Islam Al Azhar 8</p>
        
        {/* Tombol IG */}
        <div className="mb-10">
          <a 
            href="https://www.instagram.com/avassco_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 text-slate-200 hover:text-indigo-400 transition-colors bg-slate-900 px-8 py-4 rounded-full border border-slate-800 shadow-md hover:border-indigo-500/50"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="font-bold tracking-wide">@avassco_</span>
          </a>
        </div>

        <p className="text-xs text-slate-600">&copy; 2026 AVASSCO. All rights reserved.</p>
      </footer>
    </main>
  );
}