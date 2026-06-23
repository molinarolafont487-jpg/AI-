import Link from 'next/link'
import Card from '@/components/ui/Card'
import { User, Building2, MapPin, ArrowRight } from 'lucide-react'

export default function ThreeEntries() {
  const entries = [
    {
      icon: User,
      title: '个人AI能力认证体系',
      subtitle: '构建AI时代标准化能力标签',
      features: [
        'AI工具能力评估',
        'AI内容生成认证',
        'AI办公与自动化认证',
      ],
      href: '/certification',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Building2,
      title: '企业AI增长系统',
      subtitle: '从流量到转化的AI全链路升级',
      features: [
        'GEO可见度优化',
        'AI获客系统',
        'AI内容工厂',
      ],
      href: '/academy',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: MapPin,
      title: '城市AI人才合作计划',
      subtitle: '政企联合AI人才基础设施',
      features: [
        '园区AI培训中心',
        '政府人才项目',
        '城市认证基地',
      ],
      href: '/cooperation',
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {entries.map((entry, index) => (
            <Link key={index} href={entry.href}>
              <Card hover className="h-full group">
                {/* 图标 */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${entry.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <entry.icon size={32} className="text-white" />
                </div>

                {/* 标题 */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {entry.title}
                </h3>
                <p className="text-neutral-silver text-sm mb-6">
                  {entry.subtitle}
                </p>

                {/* 特性列表 */}
                <ul className="space-y-3 mb-6">
                  {entry.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-white/80 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* 箭头 */}
                <div className="flex items-center gap-2 text-accent-orange font-semibold text-sm group-hover:gap-4 transition-all">
                  了解更多
                  <ArrowRight size={16} />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
