'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import Button from '@/components/ui/Button'
import { Gauge, TrendingUp } from 'lucide-react'

export default function AssessmentSection() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  const industries = [
    { value: '', label: '请选择行业' },
    { value: 'tech', label: '科技/互联网' },
    { value: 'retail', label: '零售/电商' },
    { value: 'manufacturing', label: '制造业' },
    { value: 'finance', label: '金融/保险' },
    { value: 'education', label: '教育培训' },
    { value: 'healthcare', label: '医疗健康' },
    { value: 'other', label: '其他' },
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // 模拟API调用
    setTimeout(() => {
      setResult({
        totalScore: 78,
        level: 'B+',
        scores: {
          toolUsage: 85,
          contentProduction: 72,
          businessConversion: 65,
          geoCapability: 60,
        },
      })
      setIsLoading(false)
    }, 2000)
  }

  return (
    <section className="py-20 bg-neutral-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* 标题 */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-orange/10 text-accent-orange text-sm font-semibold mb-4">
              <Gauge size={16} />
              核心转化入口
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AI能力测评系统
            </h2>
            <p className="text-xl text-neutral-silver">
              用10分钟，获得你的AI能力等级评估报告
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 左侧：表单 */}
            <Card>
              <h3 className="text-2xl font-bold text-white mb-6">开始测评</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    姓名/企业名称
                  </label>
                  <Input
                    type="text"
                    placeholder="请输入您的姓名或企业名称"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    行业类别
                  </label>
                  <Select options={industries} required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    联系方式（可选）
                  </label>
                  <Input
                    type="text"
                    placeholder="手机号或邮箱"
                  />
                </div>

                <Button
                  type="submit"
                  variant="secondary"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? '评估中...' : '开始测评'}
                </Button>
              </form>
            </Card>

            {/* 右侧：结果展示 */}
            <Card>
              {result ? (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">测评结果</h3>

                  {/* 总分 */}
                  <div className="text-center mb-8">
                    <div className="text-6xl font-bold gradient-text mb-2">
                      {result.totalScore}
                    </div>
                    <div className="text-xl text-neutral-silver">
                      综合得分 ({result.level}级)
                    </div>
                  </div>

                  {/* 各维度评分 */}
                  <div className="space-y-4">
                    <ScoreBar label="AI工具使用能力" score={result.scores.toolUsage} />
                    <ScoreBar label="AI内容生产能力" score={result.scores.contentProduction} />
                    <ScoreBar label="AI业务转化能力" score={result.scores.businessConversion} />
                    <ScoreBar label="GEO可见度能力" score={result.scores.geoCapability} />
                  </div>

                  <Button variant="secondary" className="w-full mt-6">
                    <TrendingUp size={16} />
                    查看完整报告
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <Gauge size={48} className="text-neutral-silver mb-4" />
                  <p className="text-neutral-silver">
                    填写左侧表单开始测评
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function ScoreBar({ label, score }: { label: string; score: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm text-white mb-2">
        <span>{label}</span>
        <span className="font-bold">{score}</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-accent-orange to-accent-green transition-all duration-1000"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  )
}
