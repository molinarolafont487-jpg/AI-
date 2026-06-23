'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Button from '@/components/ui/Button'
import { ArrowRight, Sparkles, TrendingUp, Award } from 'lucide-react'

// 动态导入Three.js组件，避免SSR问题
const ParticleBackground = dynamic(() => import('@/components/animations/ParticleBackground'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-tech" />,
})

export default function Hero() {
  const trustItems = [
    { icon: Award, text: 'AI能力认证体系' },
    { icon: TrendingUp, text: 'GEO企业增长模型' },
    { icon: Sparkles, text: '企业AI改造系统' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-tech">
      {/* 3D粒子背景 */}
      <Suspense fallback={<div className="absolute inset-0 bg-gradient-tech" />}>
        <ParticleBackground />
      </Suspense>

      {/* 内容 */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* 主标题 */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            AI能力认证与
            <br />
            <span className="gradient-text">企业增长系统</span>
          </h1>

          {/* 副标题 */}
          <p className="text-xl md:text-2xl text-neutral-silver mb-12 max-w-3xl mx-auto">
            从AI学习 → AI能力认证 → 企业AI应用 → 业务增长系统化升级
          </p>

          {/* CTA按钮组 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" variant="secondary" className="group">
              立即进行AI能力测评
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10">
              获取企业AI诊断报告
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10">
              申请AI认证考试
            </Button>
          </div>

          {/* 信任信息条 */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {trustItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-white/80">
                <div className="w-8 h-8 rounded-full bg-accent-orange/20 flex items-center justify-center">
                  <item.icon size={16} className="text-accent-orange" />
                </div>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 底部渐变 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
