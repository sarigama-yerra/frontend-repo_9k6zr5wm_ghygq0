import React from 'react'

export default function CTA() {
  return (
    <section id="contact" className="relative bg-[linear-gradient(180deg,#0a0a0d_0%,#14070b_100%)] text-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-rose-600/20 to-red-800/20 p-10 backdrop-blur">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Bring your 3D ideas to life</h2>
            <p className="mt-3 text-white/80">We can extend this into a full product site with sections for curriculum, sustainability data, or corporate storytelling — all backed by a real API.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="rounded-lg bg-white text-black px-5 py-2.5 font-medium">Request a demo</a>
              <a href="/test" className="rounded-lg border border-white/20 bg-white/10 hover:bg-white/15 text-white px-5 py-2.5 font-medium">Check system status</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
