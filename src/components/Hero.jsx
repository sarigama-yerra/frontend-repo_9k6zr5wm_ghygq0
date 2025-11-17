import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#0b0b10] via-[#12080d] to-[#110306]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-36 pb-20 sm:pt-44 sm:pb-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80 shadow">
              <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
              Live 3D • Interactive
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-rose-200 to-rose-400">
              Explore a Red, Futuristic Earth in 3D
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/80 max-w-xl">
              Spin, explore, and learn. A technology-forward, educational experience with a rotating globe you can drag and interact with.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#features" className="rounded-lg bg-rose-600 hover:bg-rose-700 text-white px-5 py-2.5 font-medium shadow-lg shadow-rose-900/30 transition">Get Started</a>
              <a href="/test" className="rounded-lg border border-white/20 bg-white/10 hover:bg-white/15 text-white px-5 py-2.5 font-medium transition">System Status</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
