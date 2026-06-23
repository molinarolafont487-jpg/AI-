import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { GraduationCap, Users, Calendar, ArrowRight } from 'lucide-react'

export default function AcademySection() {
  const courses = [
    {
      title: 'AI增长训练营',
      price: '¥9,800',
      duration: '3天',
      level: 'basic' as const,
      description: '企业AI入门，快速掌握AI工具应用',
      features: [
        'AI工具实战操作',
        'AI办公自动化',
        'AI内容生成技巧',
      ],
    },
    {
      title: '企业AI系统升级班',
      price: '¥39,800',
      duration: '30天',
      level: 'advanced' as const,
      description: 'GEO + AI营销 + 自动化全链路',
      features: [
        'GEO可见度优化',
        'AI获客系统搭建',
        'AI内容工厂建设',
      ],
      badge: '热门',
    },
    {
      title: 'CEO AI决策私董会',
      price: '¥268,000',
      duration: '全年',
      level: 'expert' as const,
      description: '决策层AI战略升级与实战',
      features: [
        'AI战略规划',
        'AI系统设计',
        '高管决策支持',
      ],
      badge: 'VIP',
    },
  ]

  const levelColors = {
    basic: 'from-blue-500 to-cyan-500',
    advanced: 'from-orange-500 to-red-500',
    expert: 'from-purple-500 to-pink-500',
  }

  return (
    <section className="py-20 bg-neutral-dark">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-4">
            <GraduationCap size={16} />
            实战学院
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            企业AI实战学院
          </h2>
          <p className="text-xl text-neutral-silver max-w-2xl mx-auto">
            不是学习AI，而是用AI重构企业增长系统
          </p>
        </div>

        {/* 课程卡片 */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {courses.map((course, index) => (
            <Card key={index} hover className="relative">
              {/* 角标 */}
              {course.badge && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-accent-orange text-white text-xs font-bold">
                    {course.badge}
                  </span>
                </div>
              )}

              {/* 等级条 */}
              <div className={`h-1 w-full rounded-full bg-gradient-to-r ${levelColors[course.level]} mb-6`} />

              {/* 标题和价格 */}
              <h3 className="text-2xl font-bold text-white mb-2">
                {course.title}
              </h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold gradient-text">
                  {course.price}
                </span>
              </div>

              {/* 描述 */}
              <p className="text-neutral-silver text-sm mb-6">
                {course.description}
              </p>

              {/* 特性列表 */}
              <div className="space-y-2 mb-6">
                {course.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-white/80 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
                    {feature}
                  </div>
                ))}
              </div>

              {/* 元信息 */}
              <div className="flex items-center gap-4 text-xs text-neutral-silver mb-6 pt-4 border-t border-white/10">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users size={14} />
                  小班教学
                </div>
              </div>

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
