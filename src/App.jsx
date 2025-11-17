import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(244,63,94,0.2),rgba(0,0,0,0)_70%)]" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="bg-black/80 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-center text-white/60">
          © {new Date().getFullYear()} RedGlobe. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
