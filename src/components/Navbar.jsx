import React from 'react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl bg-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/10 border border-white/20 shadow-lg">
          <div className="px-4 sm:px-6 py-3 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-600 shadow-inner" />
              <span className="text-white font-semibold tracking-tight">RedGlobe</span>
            </a>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
              <a href="#about" className="text-white/80 hover:text-white transition">About</a>
              <a href="/test" className="text-white/80 hover:text-white transition">Status</a>
              <a href="#contact" className="text-white/90 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-1.5 rounded-lg transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
