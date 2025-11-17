import React from 'react'
import { Cpu, Globe2, Sparkles, Shield } from 'lucide-react'

const features = [
  {
    icon: Globe2,
    title: 'Interactive Globe',
    desc: 'Drag to spin and explore an elegant, red-tinted Earth in 3D.'
  },
  {
    icon: Cpu,
    title: 'Tech-forward',
    desc: 'Built with modern web tech, optimized for speed and immersion.'
  },
  {
    icon: Shield,
    title: 'Secure & Stable',
    desc: 'Backed by a reliable environment with integrated backend health checks.'
  },
  {
    icon: Sparkles,
    title: 'Futuristic Design',
    desc: 'A minimal, corporate aesthetic with cinematic gradients and glow.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative bg-[#0a0a0d] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(244,63,94,0.25),rgba(0,0,0,0)_70%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-rose-600 to-red-700 flex items-center justify-center shadow-inner">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-white/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
