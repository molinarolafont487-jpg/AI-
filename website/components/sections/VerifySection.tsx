'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { Search, CheckCircle2, XCircle } from 'lucide-react'

export default function VerifySection() {
  const [certNo, setCertNo] = useState('')
  const [result, setResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // 模拟API调用
    setTimeout(() => {
      // 模拟查询结果
      if (certNo.includes('0001')) {
        setResult({
          found: true,
          certificateNo: certNo,
          name: '张三',
          level: 'A',
          type: 'AI营销增长认证',
          issueDate: '2026-06-15',
          status: 'active',
        })
      } else {
        setResult({ found: false })
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-4">
            <Search size={16} />
            证书验证
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            证书查询系统
          </h2>
          <p className="text-xl text-neutral-silver">
            输入证书编号，验证证书真伪
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            {/* 查询表单 */}
            <form onSubmit={handleVerify} className="mb-8">
              <label className="block text-sm font-medium text-white mb-2">
                证书编号
              </label>
              <div className="flex gap-3">
                <Input
                  type="text"
                  placeholder="例如：DAC-AI-2026-A-0001-7C"
                  value={certNo}
                  onChange={(e) => setCertNo(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button
                  type="submit"
                  variant="secondary"
                  disabled={isLoading}
                >
                  {isLoading ? '查询中...' : '查询证书'}
                </Button>
              </div>
            </form>

            {/* 查询结果 */}
            {result && (
              <div className="pt-8 border-t border-white/10">
                {result.found ? (
                  <div>
                    {/* 成功图标 */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-accent-green/20 flex items-center justify-center">
                        <CheckCircle2 size={24} className="text-accent-green" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">证书验证成功</h3>
                        <p className="text-sm text-neutral-silver">该证书真实有效</p>
                      </div>
                    </div>

                    {/* 证书信息 */}
                    <div className="space-y-4">
                      <InfoRow label="证书名称" value={result.type} />
                      <InfoRow label="姓名" value={result.name} />
                      <InfoRow label="证书编号" value={result.certificateNo} />
                      <InfoRow
                        label="认证等级"
                        value={<Badge variant={result.level}>{result.level}级</Badge>}
                      />
                      <InfoRow label="发证日期" value={result.issueDate} />
                      <InfoRow
                        label="有效状态"
                        value={
                          <span className="text-accent-green font-semibold">
                            {result.status === 'active' ? '有效' : '已失效'}
                          </span>
                        }
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    {/* 失败图标 */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                        <XCircle size={24} className="text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">未找到证书</h3>
                        <p className="text-sm text-neutral-silver">
                          请检查证书编号是否正确
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </Card>

          {/* 提示 */}
          <p className="text-center text-sm text-neutral-silver mt-6">
            证书编号格式：DAC-AI-年份-等级-序号-校验位
          </p>
        </div>
      </div>
    </section>
  )
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
      <span className="text-neutral-silver text-sm">{label}</span>
      <span className="text-white font-medium">{value}</span>
    </div>
  )
}
