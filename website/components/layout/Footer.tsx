import Link from 'next/link'
import { Phone, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'AI认证体系', href: '/certification' },
    { label: '实战学院', href: '/academy' },
    { label: '能力测评', href: '/assessment' },
    { label: '案例中心', href: '/cases' },
  ]

  const cooperationLinks = [
    { label: '企业合作', href: '/cooperation?type=enterprise' },
    { label: '政府合作', href: '/cooperation?type=government' },
    { label: '城市合伙人', href: '/cooperation?type=partner' },
  ]

  return (
    <footer className="bg-primary-dark border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">大成智改</h3>
            <p className="text-xs text-neutral-silver mb-4 tracking-wider">
              AI CAPABILITY & GROWTH INSTITUTE
            </p>
            <p className="text-sm text-neutral-silver">
              AI能力认证与企业增长系统
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-silver hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cooperation */}
          <div>
            <h4 className="text-white font-semibold mb-4">合作入口</h4>
            <ul className="space-y-2">
              {cooperationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-silver hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">商务联系</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-neutral-silver">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>18188761820</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-silver">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>深圳市龙华区景龙建设路青年创业园健行楼C座307室</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-silver">
                <Clock size={16} className="mt-1 flex-shrink-0" />
                <span>周一至周六 09:00-18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 text-center text-sm text-neutral-silver">
          <p>© {currentYear} 大成智改AI商学院. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
