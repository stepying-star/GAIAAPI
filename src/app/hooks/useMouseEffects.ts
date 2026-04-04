import { useEffect } from 'react'

export function useMouseEffects() {
  useEffect(() => {
    // ── Canvas setup ──────────────────────────────────────────
    const canvas = document.createElement('canvas')
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9998'
    document.body.appendChild(canvas)
    const ctx = canvas.getContext('2d')!
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)

    // ── Particle types ────────────────────────────────────────
    interface Particle {
      x: number; y: number
      vx: number; vy: number
      size: number; alpha: number
      color: string; decay: number
      type: 'trail' | 'burst'
    }

    const particles: Particle[] = []
    const TRAIL_COLORS = ['#60a5fa','#a78bfa','#f472b6','#ffffff','#fbbf24','#34d399']
    const BURST_COLORS = ['#fbbf24','#ffffff','#a78bfa','#60a5fa','#f472b6','#fb923c']

    // ── Trail ─────────────────────────────────────────────────
    let mouse = { x: 0, y: 0 }
    let lastTrail = 0
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      const now = performance.now()
      if (now - lastTrail < 20) return   // throttle: 1 particle per 20ms
      lastTrail = now
      const count = Math.floor(Math.random() * 2) + 1
      for (let i = 0; i < count; i++) {
        const size = Math.random() * 4 + 2
        particles.push({
          x: mouse.x + (Math.random() - 0.5) * 6,
          y: mouse.y + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 1.2,
          vy: -(Math.random() * 1.5 + 0.5),
          size,
          alpha: 1,
          color: TRAIL_COLORS[Math.floor(Math.random() * TRAIL_COLORS.length)],
          decay: Math.random() * 0.02 + 0.025,
          type: 'trail',
        })
      }
    }

    // ── Click burst ───────────────────────────────────────────
    const onClick = (e: MouseEvent) => {
      const count = Math.floor(Math.random() * 7) + 10  // 10–16
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4
        const speed = Math.random() * 5 + 3
        const size  = Math.random() * 5 + 3
        particles.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size,
          alpha: 1,
          color: BURST_COLORS[Math.floor(Math.random() * BURST_COLORS.length)],
          decay: Math.random() * 0.018 + 0.014,
          type: 'burst',
        })
      }
    }

    // ── Draw sparkle shape ────────────────────────────────────
    const drawSparkle = (p: Particle) => {
      ctx.save()
      ctx.globalAlpha = p.alpha
      ctx.fillStyle = p.color
      ctx.shadowBlur = 8
      ctx.shadowColor = p.color
      if (p.type === 'burst') {
        // 4-point star
        ctx.translate(p.x, p.y)
        ctx.rotate(performance.now() * 0.002)
        ctx.beginPath()
        const r1 = p.size, r2 = p.size * 0.4
        for (let i = 0; i < 8; i++) {
          const r = i % 2 === 0 ? r1 : r2
          const a = (i * Math.PI) / 4
          i === 0 ? ctx.moveTo(Math.cos(a)*r, Math.sin(a)*r) : ctx.lineTo(Math.cos(a)*r, Math.sin(a)*r)
        }
        ctx.closePath()
        ctx.fill()
      } else {
        // simple glowing dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.restore()
    }

    // ── RAF loop ──────────────────────────────────────────────
    let rafId: number
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x  += p.vx
        p.y  += p.vy
        p.vy += 0.04   // slight gravity
        p.alpha -= p.decay
        p.size  *= 0.97
        if (p.alpha <= 0 || p.size < 0.3) { particles.splice(i, 1); continue }
        drawSparkle(p)
      }
      rafId = requestAnimationFrame(loop)
    }
    loop()

    window.addEventListener('mousemove', onMove)
    window.addEventListener('click', onClick)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('click', onClick)
      window.removeEventListener('resize', resize)
      canvas.remove()
    }
  }, [])
}
