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

      {/* COUNTDOWN TIMER