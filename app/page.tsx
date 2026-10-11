"use client";

import { useState, useEffect } from "react";

export default function Home() {
  // Logic untuk Countdown Timer berjalan
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set target hari H (misal: 18 Oktober 2026 jam 07:30 WIB)
    const targetDate = new Date("2026-10-18T07:30:00+07:00").getTime();

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
        clearInterval(interval); // Hentikan jika waktu habis
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    // Background diubah jadi warna terang/krem ala tema AVASSCO XI
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
          <span className="inline-block bg-rose-100 text-rose-700 border border-rose-300 text-xs font-bold px-5 py-2 rounded-full mb-6 tracking-widest uppercase animate-bounce">
            🔥 MINGGU DEPAN
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4 text-emerald-900 drop-shadow-sm">
            AVA<span className="text-rose-600">SSCO</span> <span className="text-amber-500">XI</span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-emerald-800 mb-6">
            Pentas Seni & Kreativitas Al Azhar 8
          </p>
          <p className="text-lg font-medium max-w-2xl mx-auto text-emerald-700/80 mb-10 leading-relaxed">
            Siapkan dirimu untuk malam puncak paling bersejarah tahun ini! Rayakan semangat budaya dan kreativitas tanpa batas bersama kami.
          </p>
        </div>
      </section>

      {/* COUNTDOWN TIMER (SEKARANG JALAN!) */}
      <section className="px-6 max-w-4xl mx-auto -mt-6 relative z-20 mb-24">
        <div className="bg-gradient-to-r from-amber-400 to-yellow-400 p-8 rounded-3xl text-center shadow-xl border-4 border-white">
          <h3 className="text-2xl font-black mb-6 text-emerald-900 uppercase tracking-wide">Hitung Mundur Acara</h3>
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
              <h2 className="text-4xl md:text-5xl font-black mt-2 mb-8 text-white">GUEST STARS</h2>
              <ul className="space-y-6">
                <li className="flex items-center space-x-4">
                  <div className="text-4xl">🎸</div>
                  <div>
                    <h3 className="text-2xl font-bold text-amber-300">MALIQ & D'Essentials</h3>
                    <p className="text-emerald-200/80 text-sm">Menemani malam puncak dengan lagu hits andalan.</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="text-4xl">🎙️</div>
                  <div>
                    <h3 className="text-2xl font-bold text-amber-300">TULUS</h3>
                    <p className="text-emerald-200/80 text-sm">Menyuarakan harmoni indah di panggung AVASSCO XI.</p>
                  </div>
                </li>
              </ul>
              <p className="mt-8 text-sm text-emerald-300 italic">*Guest star dapat berubah atau bertambah, ikuti update di IG @avassco_</p>
            </div>

            {/* Info Tiket */}
            <div className="bg-emerald-950/50 p-8 rounded-3xl border border-emerald-800 backdrop-blur-sm">
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
              <a 
                href="https://www.instagram.com/avassco_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-emerald-950 font-black px-6 py-4 rounded-xl transition-all shadow-lg"
              >
                🎟️ BELI TIKET SEKARANG
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* INFO LOMBA & CP */}
      <section id="lomba" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-emerald-900 tracking-tight">Kategori Lomba</h2>
          <p className="text-emerald-700 mt-2 font-medium">Tunjukkan bakatmu dan raih total hadiah jutaan rupiah!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl border-2 border-emerald-100 shadow-md hover:border-amber-300 transition-colors">
            <div className="text-4xl mb-4">💃</div>
            <h4 className="font-bold text-xl text-emerald-900 mb-2">Tari Tradisional</h4>
            <p className="text-emerald-700/80 text-sm mb-6">Kompetisi tari kreasi budaya tingkat SMA sederajat.</p>
            <div className="border-t border-emerald-50 pt-4 mt-auto">
              <span className="block text-xs text-emerald-600 mb-1 font-bold">Contact Person (WA):</span>
              <span className="font-black text-rose-600">Rara - 0812-3456-7890</span>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-3xl border-2 border-emerald-100 shadow-md hover:border-amber-300 transition-colors">
            <div className="text-4xl mb-4">🎵</div>
            <h4 className="font-bold text-xl text-emerald-900 mb-2">Band Competition</h4>
            <p className="text-emerald-700/80 text-sm mb-6">Ajang unjuk gigi band sekolah membawakan lagu bebas & wajib.</p>
            <div className="border-t border-emerald-50 pt-4 mt-auto">
              <span className="block text-xs text-emerald-600