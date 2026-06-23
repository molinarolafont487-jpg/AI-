import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { Award, CheckCircle2 } from 'lucide-react'

export default function CertificationSystem() {
  const certificationLevels = [
    {
      level: 'S' as const,
      title: 'S级认证（战略级）',
      certifications: [
        'AI企业增长架构师认证',
        'AI战略决策认证',
        'AI系统设计认证',
      ],
      features: ['企业AI战略规划', '高管决策支持', 'AI系统架构'],
    },
    {
      level: 'A' as const,
      title: 'A级认证（应用级）',
      certifications: [
        'AI营销增长认证',
        'GEO优化工程师认证',
        'AI内容策略认证',
      ],
      features: ['AI营销实战', 'GEO优化技能', 'AI内容生产'],
    },
    {
      level: 'B' as const,
      title: 'B级认证（基础级）',
      certifications: [
        'AI工具使用认证',
        'AI办公能力认证',
        'AI内容生成认证',
      ],
      features: ['AI工具基础', '日常办公应用', '内容生成技能'],
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/10 text-accent-green text-sm font-semibold mb-4">
            <Award size={16} />
            能力认证体系
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI认证体系
          </h2>
          <p className="text-xl text-neutral-silver max-w-2xl mx-auto">
            建立标准化AI能力评价体系，让你的AI能力被看见
          </p>
        </div>

        {/* 认证等级卡片 */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificationLevels.map((item, index) => (
            <Card key={index} hover className="relative overflow-hidden">
              {/* 等级标识 */}
              <div className="flex items-center justify-between mb-6">
                <Badge variant={item.level} className="text-lg px-4 py-2">
                  {item.level}级
                </Badge>
                <Award className="text-white/20" size={32} />
              </div>

              {/* 标题 */}
              <h3 className="text-xl font-bold text-white mb-6">
                {item.title}
              </h3>

              {/* 认证列表 */}
              <div className="space-y-3 mb-6">
                {item.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-white/80 text-sm">
                    <CheckCircle2 size={16} className="text-accent-green mt-0.5 flex-shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>

              {/* 特性 */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {item.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-white/5 text-neutral-silver text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
