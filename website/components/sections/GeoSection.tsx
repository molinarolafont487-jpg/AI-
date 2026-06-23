import Card from '@/components/ui/Card'
import { Search, TrendingUp, Target, ArrowRight } from 'lucide-react'

export default function GeoSection() {
  const steps = [
    {
      icon: Search,
      title: '用户搜索',
      description: '用户通过AI搜索引擎查找信息',
    },
    {
      icon: Target,
      title: 'AI模型理解',
      description: 'AI理解用户意图并匹配内容',
    },
    {
      icon: TrendingUp,
      title: '推荐概率提升',
      description: '优化后的内容获得更高推荐权重',
    },
  ]

  const capabilities = [
    {
      title: 'AI搜索可见度优化',
      description: '让AI引擎更容易发现和推荐你的内容',
      metrics: ['可见度提升300%+', 'AI推荐TOP3'],
    },
    {
      title: 'AI推荐系统优化',
      description: '提高在AI系统中的推荐概率',
      metrics: ['推荐频次+4.6倍', '转化率提升52%'],
    },
    {
      title: '企业内容资产结构化',
      description: '构建AI可理解的内容知识图谱',
      metrics: ['内容资产化', '知识图谱化'],
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/10 text-accent-green text-sm font-semibold mb-4">
            <TrendingUp size={16} />
            核心差异化
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            企业AI可见度与增长系统（GEO）
          </h2>
          <p className="text-xl text-neutral-silver max-w-3xl mx-auto">
            在AI时代，不是SEO，而是GEO（Generative Engine Optimization）
          </p>
        </div>

        {/* 流程可视化 */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent-orange to-accent-green flex items-center justify-center">
                    <step.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-silver">
                    {step.description}
                  </p>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="text-accent-orange" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 三大能力 */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {capabilities.map((capability, index) => (
            <Card key={index} hover>
              <div className="mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-accent-orange to-accent-green rounded-full mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">
                  {capability.title}
                </h3>
                <p className="text-neutral-silver text-sm mb-4">
                  {capability.description}
                </p>
              </div>
              <div className="space-y-2">
                {capability.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-2 rounded-lg bg-accent-green/10 text-accent-green text-sm font-semibold"
                  >
                    {metric}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
