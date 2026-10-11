"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Target: Selasa, 13 Oktober 2026 jam 07:00 pagi (WIB)
    const targetDate = new Date("2026-10-13T07:00:00+07:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#FDF8E7] text-emerald-950 font-sans selection:bg-emerald-500 selection:text-white pb-20">
      
      {/* NAVBAR SECTION */}
      <nav className="fixed w-full bg-[#FDF8E7]/90 backdrop-blur-md z-50 border-b border-amber-200 top-0 left-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-wider text-emerald-800 cursor-pointer">
            <a href="#beranda">AVA<span className="text-rose-600">SSCO</span></a>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-bold tracking-wide text-emerald-900">
            <a href="#beranda" className="hover:text-rose-500 transition-colors">BERANDA</a>
            <a href="#event" className="hover:text-rose-500 transition-colors">GUEST STAR & TIKET</a>
            <a href="#lomba" className="hover:text-rose-500 transition-colors">LOMBA</a>
            <a href="#merch" className="hover:text-rose-500 transition-colors">MERCHANDISE</a>
          </div>
        </div>
      </nav>

      {/* HERO / BERANDA SECTION */}
      <section id="beranda" className="relative pt-44 pb-20 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4 text-emerald-900 drop-shadow-sm">
            AVA<span className="text-rose-600">SSCO</span> <span className="text-amber-500">XI</span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-emerald-800 mb-6">
            Pentas Seni & Kreativitas Al Azhar 8
          </p>
          <p className="text-lg font-medium max-w-2xl mx-auto text-emerald-700/80 mb-10 leading-relaxed">
            Siapkan dirimu untuk perayaan paling bersejarah tahun ini! Tunjukkan bakat, kreativitas, dan semangat budaya tanpa batas bersama kami.
          </p>
        </div>
      </section>

      {/* COUNTDOWN TIMER */}
      <section className="px-6 max-w-4xl mx-auto -mt-6 relative z-20 mb-24">
        <div className="bg-gradient-to-r from-amber-400 to-yellow-400 p-8 rounded-3xl text-center shadow-xl border-4 border-white">
          <h3 className="text-2xl font-black mb-6 text-emerald-900 uppercase tracking-wide">Hitung Mundur Acara (Opening)</h3>
          <div className="grid grid-cols-4 gap-3 md:gap-6 text-center">
            <div className="bg-white/90 p-4 md:p-6 rounded-2xl shadow-sm">
              <span className="block text-4xl md:text-5xl font-black text-rose-600 mb-1">{timeLeft.days}</span>
              <span className="text-[10px] md:text-sm text-emerald-800 uppercase font-bold">Hari</span>
            </div>
            <div className="bg-white/90 p-4 md:p-6 rounded-2xl shadow-sm">
              <span className="block text-4xl md:text-5xl font-black text-rose-600 mb-1">{timeLeft.hours}</span>
              <span className="text-[10px] md:text-sm text-emerald-800 uppercase font-bold">Jam</span>
            </div>
            <div className="bg-white/90 p-4 md:p-6 rounded-2xl shadow-sm">
              <span className="block text-4xl md:text-5xl font-black text-rose-600 mb-1">{timeLeft.minutes}</span>
              <span className="text-[10px] md:text-sm text-emerald-800 uppercase font-bold">Menit</span>
            </div>
            <div className="bg-white/90 p-4 md:p-6 rounded-2xl shadow-sm">
              <span className="block text-4xl md:text-5xl font-black text-rose-600 mb-1">{timeLeft.seconds}</span>
              <span className="text-[10px] md:text-sm text-emerald-800 uppercase font-bold">Detik</span>
            </div>
          </div>
        </div>
      </section>

      {/* GUEST STAR & TIKET SECTION */}
      <section id="event" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="bg-emerald-900 border-4 border-emerald-700 rounded-3xl p-8 md:p-14 shadow-2xl text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Guest Star */}
            <div>
              <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">Penampilan Utama</span>
              <h2 className="text-4xl md:text-5xl font-black mt-2 mb-8 text-white">GUEST STAR</h2>
              <div className="flex items-start space-x-6">
                <div className="text-6xl mt-2">🤘</div>
                <div>
                  <h3 className="text-3xl font-black text-amber-300 tracking-wide uppercase">The Changcuters</h3>
                  <p className="text-emerald-200 mt-3 leading-relaxed text-sm">
                    Grup band rock and roll legendaris asal Bandung yang terbentuk sejak 2004. Siap mengguncang panggung AVASSCO XI dengan energi maksimal, gaya vintage 50-an, dan lagu-lagu ikonik seperti "Racun Dunia" dan "I Love U Bibeh"!
                  </p>
                </div>
              </div>
            </div>

            {/* Info Tiket */}
            <div className="bg-emerald-950/50 p-8 rounded-3xl border border-emerald-800 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-amber-400 text-center uppercase tracking-wide">Info Tiket</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex justify-between items-center border-b border-emerald-700/50 pb-3">
                    <span className="font-medium text-emerald-100">Presale 1</span> 
                    <span className="font-bold text-rose-400 bg-rose-950/50 px-3 py-1 rounded-lg text-sm">SOLD OUT</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-emerald-700/50 pb-3">
                    <span className="font-medium text-emerald-100">Presale 2 (Reguler)</span> 
                    <span className="font-bold text-amber-300">Rp 110.000</span>
                  </li>
                  <li className="flex justify-between items-center pb-2">
                    <span className="font-medium text-emerald-100">On The Spot (OTS)</span> 
                    <span className="font-bold text-amber-300">Rp 150.000</span>
                  </li>
                </ul>
              </div>
              <a 
                href="https://booking.tribunnews.com/musik/avassco-xi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-emerald-950 font-black px-6 py-4 rounded-xl transition-all shadow-lg mt-auto"
              >
                🎟️ BELI TIKET SEKARANG
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* INFO LOMBA */}
      <section id="lomba" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-emerald-900 tracking-tight">Kategori Lomba</h2>
          <p className="text-emerald-700 mt-2 font-medium">Berkompetisi secara sportif dan raih prestasi di AVASSCO XI.</p>
        </div>

        {/* Kategori SMA */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-rose-600 border-b-2 border-rose-200 pb-2 inline-block uppercase tracking-wider">SMA Category</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl border-2 border-emerald-100 shadow-md hover:border-amber-300 transition-colors flex flex-col text-center">
              <div className="text-4xl mb-4">⚽</div>
              <h4 className="font-bold text-xl text-emerald-900 mb-6">Futsal</h4>
              <div className="border-t border-emerald-50 pt-4 mt-auto">
                <span className="block text-xs text-emerald-600 mb-1 font-bold">Contact Person:</span>
                <span className="font-black text-rose-600">Dito - 0811-1234-5678</span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border-2 border-emerald-100 shadow-md hover:border-amber-300 transition-colors flex flex-col text-center">
              <div className="text-4xl mb-4">🏀</div>
              <h4 className="font-bold text-xl text-emerald-900 mb-6">Basket (Putra & Putri)</h4>
              <div className="border-t border-emerald-50 pt-4 mt-auto">
                <span className="block text-xs text-emerald-600 mb-1 font-bold">Contact Person:</span>
                <span className="font-black text-rose-600">Bima - 0822-2345-6789</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-emerald-100 shadow-md hover:border-amber-300 transition-colors flex flex-col text-center">
              <div className="text-4xl mb-4">🎤</div>
              <h4 className="font-bold text-xl text-emerald-900 mb-6">Solo Vokal</h4>
              <div className="border-t border-emerald-50 pt-4 mt-auto">
                <span className="block text-xs text-emerald-600 mb-1 font-bold">Contact Person:</span>
                <span className="font-black text-rose-600">Rara - 0833-3456-7890</span>
              </div>
            </div>
          </div>
        </div>

        {/* Kategori SMP */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-amber-500 border-b-2 border-amber-200 pb-2 inline-block uppercase tracking-wider">SMP Category</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl border-2 border-emerald-100 shadow-md hover:border-rose-300 transition-colors flex flex-col text-center">
              <div className="text-4xl mb-4">📖</div>
              <h4 className="font-bold text-xl text-emerald-900 mb-6">MTQ</h4>
              <div className="border-t border-emerald-50 pt-4 mt-auto">
                <span className="block text-xs text-emerald-600 mb-1 font-bold">Contact Person:</span>
                <span className="font-black text-rose-600">Fikri - 0844-4567-8901</span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border-2 border-emerald-100 shadow-md hover:border-rose-300 transition-colors flex flex-col text-center">
              <div className="text-4xl mb-4">💃</div>
              <h4 className="font-bold text-xl text-emerald-900 mb-6">Ratoh Jaroe</h4>
              <div className="border-t border-emerald-50 pt-4 mt-auto">
                <span className="block text-xs text-emerald-600 mb-1 font-bold">Contact Person:</span>
                <span className="font-black text-rose-600">Dina - 0855-5678-9012</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-emerald-100 shadow-md hover:border-rose-300 transition-colors flex flex-col text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h4 className="font-bold text-xl text-emerald-900 mb-6">Science Quest</h4>
              <div className="border-t border-emerald-50 pt-4 mt-auto">
                <span className="block text-xs text-emerald-600 mb-1 font-bold">Contact Person:</span>
                <span className="font-black text-rose-600">Aris - 0866-6789-0123</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MERCHANDISE SECTION */}
      <section id="merch" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-emerald-900">Find Our Merch!</h2>
            <p className="text-emerald-700 mt-2 font-medium">Koleksi item spesial dari AVASSCO XI sebelum kehabisan.</p>
          </div>

          {/* 5 Merch Items Grid */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white p-6 rounded-2xl border border-emerald-100 text-center shadow-sm w-full sm:w-[220px]">
              <div className="w-full h-32 bg-amber-50 rounded-xl mb-4 flex items-center justify-center text-5xl">🛍️</div>
              <h4 className="font-bold text-lg text-emerald-900">Foldable Bag</h4>
              <p className="font-black text-2xl text-rose-600 my-2">35 K</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-emerald-100 text-center shadow-sm w-full sm:w-[220px]">
              <div className="w-full h-32 bg-amber-50 rounded-xl mb-4 flex items-center justify-center text-5xl">✨</div>
              <h4 className="font-bold text-lg text-emerald-900">Sticker</h4>
              <p className="font-black text-2xl text-rose-600 my-2">9 K</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-emerald-100 text-center shadow-sm w-full sm:w-[220px]">
              <div className="w-full h-32 bg-amber-50 rounded-xl mb-4 flex items-center justify-center text-5xl">💳</div>
              <h4 className="font-bold text-lg text-emerald-900">Card Holder</h4>
              <p className="font-black text-2xl text-rose-600 my-2">40 K</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-emerald-100 text-center shadow-sm w-full sm:w-[220px]">
              <div className="w-full h-32 bg-amber-50 rounded-xl mb-4 flex items-center justify-center text-5xl">🧢</div>
              <h4 className="font-bold text-lg text-emerald-900">Topi</h4>
              <p className="font-black text-2xl text-rose-600 my-2">40 K</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-emerald-100 text-center shadow-sm w-full sm:w-[220px]">
              <div className="w-full h-32 bg-amber-50 rounded-xl mb-4 flex items-center justify-center text-5xl">🪭</div>
              <h4 className="font-bold text-lg text-emerald-900">Kipas</h4>
              <p className="font-black text-2xl text-rose-600 my-2">10 K</p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSc0IHoaIfhCyf7gUxVK-O4XvNdIC0qHRkp0GaQ3Ns_PLmW89A/viewform" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 py-4 rounded-full transition-colors shadow-md"
            >
              🛒 PESAN MERCHANDISE DI SINI
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER & LOKASI */}
      <footer className="bg-emerald-950 text-emerald-300 py-16 text-center border-t-8 border-amber-400 mt-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="font-black text-4xl text-white mb-2 tracking-wider">AVA<span className="text-rose-500">SSCO</span> <span className="text-amber-400">XI</span></div>
          <p className="mb-10 text-emerald-200">SMA Islam Al Azhar 8 Kota Bekasi</p>
          
          <div className="bg-emerald-900/50 p-6 rounded-2xl border border-emerald-800 mb-10 max-w-lg mx-auto">
            <p className="text-sm mb-4 leading-relaxed text-emerald-100">
              Jl. Bulevar Utara Blok L, RT.006/RW.003, Marga Mulya, Kec. Bekasi Utara, Kota Bekasi, Jawa Barat 17426
            </p>
            <a 
              href="https://maps.google.com/?q=SMA+Islam+Al+Azhar+8+Kota+Bekasi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-colors"
            >
              📍 Buka Petunjuk Arah
            </a>
          </div>

          <div className="mb-6">
            <a 
              href="https://www.instagram.com/avassco_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-white hover:text-amber-300 transition-colors bg-emerald-800/80 px-6 py-3 rounded-full border border-emerald-700"
            >
              <svg className="w-5 h-5 fill-current text-rose-400" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="font-bold tracking-wide">@avassco_</span>
            </a>
          </div>
          <p className="text-xs text-emerald-600/80">&copy; 2026 AVASSCO SMA Islam Al Azhar 8. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}