import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '大成智改AI商学院 - AI能力认证与企业增长系统',
  description: '从AI学习到AI认证到AI应用到企业增长，大成智改提供AI能力认证体系、企业AI增长系统、城市AI人才合作计划',
  keywords: 'AI认证,AI培训,企业AI转型,GEO优化,AI商学院,人工智能培训',
  authors: [{ name: '大成智改AI商学院' }],
  openGraph: {
    title: '大成智改AI商学院 - AI能力认证与企业增长系统',
    description: '从AI学习到AI认证到AI应用到企业增长',
    url: 'https://daadg.com',
    siteName: '大成智改AI商学院',
    locale: 'zh_CN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
