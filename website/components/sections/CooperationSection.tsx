import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Building2, MapPin, Users, ArrowRight } from 'lucide-react'

export default function CooperationSection() {
  const cooperationTypes = [
    {
      icon: Building2,
      title: '企业合作',
      description: '为企业提供AI转型全链路服务',
      features: [
        '企业AI诊断',
        'AI培训定制',
        '系统落地支持',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MapPin,
      title: '政府/园区合作',
      description: '共建城市级AI人才培养基地',
      features: [
        'AI人才培养基地',
        '数字经济培训中心',
        '企业AI转型服务站',
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Users,
      title: '城市合伙人计划',
      description: '共同打造区域AI能力认证中心',
      features: [
        '品牌授权',
        '课程体系支持',
        '运营指导',
      ],
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section className="py-20 bg-neutral-dark">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            合作与生态
          </h2>
          <p className="text-xl text-neutral-silver">
            携手共建AI时代的人才基础设施
          </p>
        </div>

        {/* 合作类型卡片 */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cooperationTypes.map((type, index) => (
            <Card key={index} hover>
              {/* 图标 */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-6`}>
                <type.icon size={32} className="text-white" />
              </div>

              {/* 标题 */}
              <h3 className="text-2xl font-bold text-white mb-3">
                {type.title}
              </h3>
              <p className="text-neutral-silver text-sm mb-6">
                {type.description}
              </p>

              {/* 特性列表 */}
              <ul className="space-y-3 mb-6">
                {type.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-white/80 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* 按钮 */}
              <Button variant="outline" className="w-full group">
                立即咨询
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
