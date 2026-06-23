import Card from '@/components/ui/Card'
import { TrendingUp, Eye, Target } from 'lucide-react'

export default function CasesSection() {
  const cases = [
    {
      company: 'SANAG',
      industry: '消费电子',
      achievement: 'AI可见度提升 320%',
      description: 'GEO优化后进入AI推荐TOP3',
      metrics: [
        { label: '搜索可见度', value: '+320%' },
        { label: 'AI推荐排名', value: 'TOP 3' },
        { label: '自然流量', value: '+280%' },
      ],
      icon: Eye,
    },
    {
      company: 'BIKI',
      industry: '时尚零售',
      achievement: '品牌AI认知提升 4.6倍',
      description: '获客成本下降 52%',
      metrics: [
        { label: '品牌认知度', value: '+460%' },
        { label: '获客成本', value: '-52%' },
        { label: '转化率', value: '+85%' },
      ],
      icon: TrendingUp,
    },
    {
      company: '某教育集团',
      industry: '在线教育',
      achievement: 'AI内容工厂建设',
      description: '内容生产效率提升10倍',
      metrics: [
        { label: '内容产量', value: '+1000%' },
        { label: '生产成本', value: '-75%' },
        { label: '内容质量', value: '+30%' },
      ],
      icon: Target,
    },
  ]

  return (
    <section className="py-20 bg-neutral-dark">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            企业AI升级案例
          </h2>
          <p className="text-xl text-neutral-silver">
            真实案例，可验证的增长结果
          </p>
        </div>

        {/* 案例卡片 */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cases.map((caseItem, index) => (
            <Card key={index} hover>
              {/* 图标 */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-orange to-accent-green flex items-center justify-center mb-6">
                <caseItem.icon size={24} className="text-white" />
              </div>

              {/* 公司信息 */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {caseItem.company}
                </h3>
                <p className="text-sm text-neutral-silver">
                  {caseItem.industry}
                </p>
              </div>

              {/* 成果 */}
              <div className="mb-6">
                <div className="text-xl font-bold gradient-text mb-2">
                  {caseItem.achievement}
                </div>
                <p className="text-sm text-neutral-silver">
                  {caseItem.description}
                </p>
              </div>

              {/* 数据指标 */}
              <div className="space-y-3 pt-6 border-t border-white/10">
                {caseItem.metrics.map((metric, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-sm text-neutral-silver">
                      {metric.label}
                    </span>
                    <span className="text-lg font-bold text-accent-orange">
                      {metric.value}
                    </span>
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
