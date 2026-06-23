# 大成智改AI商学院官网

## 项目简介

大成智改AI商学院官网 - AI能力认证与企业增长系统平台。

**核心定位**：
- AI能力认证体系
- 企业AI增长系统
- 城市AI人才合作平台

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript 5
- **样式**: Tailwind CSS 3
- **动画**: Framer Motion + Three.js
- **数据库**: Supabase (PostgreSQL)
- **部署**: Vercel
- **域名**: daadg.com

## 功能模块

### 已完成
- ✅ 响应式导航栏和页脚
- ✅ Hero区（Three.js粒子动画）
- ✅ 三大入口卡片
- ✅ AI能力测评系统（前端）
- ✅ AI认证体系展示
- ✅ 企业实战学院
- ✅ GEO增长系统介绍
- ✅ 企业案例展示
- ✅ 证书查询系统（前端）
- ✅ 合作入口

### 待完成
- ⏳ Supabase数据库配置
- ⏳ API接口开发
- ⏳ 证书生成和二维码
- ⏳ 邮件通知系统
- ⏳ 子页面开发

## 快速开始

### 1. 安装依赖

```bash
cd website
npm install
```

### 2. 配置环境变量

复制 `.env.example` 为 `.env.local`：

```bash
cp .env.example .env.local
```

编辑 `.env.local`，填入你的配置：

```env
# Supabase Database
DATABASE_URL="你的Supabase连接字符串"

# Site Configuration
NEXT_PUBLIC_SITE_URL="https://daadg.com"
NEXT_PUBLIC_SITE_NAME="大成智改AI商学院"

# Contact Information
NEXT_PUBLIC_PHONE="18188761820"
NEXT_PUBLIC_ADDRESS="深圳市龙华区景龙建设路青年创业园健行楼C座307室"
NEXT_PUBLIC_WORK_TIME="周一至周六 09:00-18:00"
```

### 3. 运行开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 4. 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
website/
├── app/                          # Next.js App Router
│   ├── api/                      # API路由
│   │   ├── assessment/          # 测评API
│   │   ├── certification/       # 证书查询API
│   │   └── contact/             # 联系表单API
│   ├── certification/           # 认证体系页面
│   ├── academy/                 # 实战学院页面
│   ├── assessment/              # 测评页面
│   ├── cases/                   # 案例中心
│   ├── cooperation/             # 合作页面
│   ├── layout.tsx               # 根布局
│   ├── page.tsx                 # 首页
│   └── globals.css              # 全局样式
├── components/                   # 组件库
│   ├── ui/                      # 基础UI组件
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   └── Badge.tsx
│   ├── sections/                # 页面区块
│   │   ├── Hero.tsx
│   │   ├── ThreeEntries.tsx
│   │   ├── AssessmentSection.tsx
│   │   ├── CertificationSystem.tsx
│   │   ├── AcademySection.tsx
│   │   ├── GeoSection.tsx
│   │   ├── CasesSection.tsx
│   │   ├── VerifySection.tsx
│   │   └── CooperationSection.tsx
│   ├── layout/                  # 布局组件
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── animations/              # 动画组件
│       └── ParticleBackground.tsx
├── lib/                         # 工具库
│   └── utils.ts
├── types/                       # TypeScript类型
│   └── index.ts
├── public/                      # 静态资源
│   ├── images/
│   └── icons/
├── prisma/                      # Prisma配置（待添加）
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 部署到Vercel

### 方法1: 通过Vercel CLI

```bash
# 安装Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
vercel

# 部署到生产环境
vercel --prod
```

### 方法2: 通过GitHub集成

1. 将代码推送到GitHub
2. 在 [Vercel](https://vercel.com) 导入仓库
3. 配置环境变量
4. 自动部署

### 域名配置

在Vercel项目设置中：
1. 进入 Domains
2. 添加 `daadg.com`
3. 按照提示配置DNS记录

## 数据库设置（Supabase）

### 1. 创建Supabase项目

1. 访问 [supabase.com](https://supabase.com)
2. 创建新项目
3. 获取数据库连接字符串

### 2. 配置Prisma（待完成）

```bash
# 生成Prisma客户端
npx prisma generate

# 推送数据库模式
npx prisma db push

# 打开Prisma Studio
npx prisma studio
```

## 设计系统

### 颜色方案

- **主色（Primary）**: 深蓝 #0A2463
- **辅色（Accent）**: 
  - 橙色 #FF6B35
  - 绿色 #00D9A3
- **中性色**: 银灰 #8B92A8

### 证书编号格式

```
DAC-AI-{年份}-{等级}-{序号}-{校验位}
示例: DAC-AI-2026-A-0001-7C
```

- **等级**: S（战略级）/ A（应用级）/ B（基础级）
- **校验位**: 2位16进制，用于防伪

## 开发计划

### Phase 1: MVP上线（当前阶段）
- [x] 前端页面开发
- [ ] 数据库配置
- [ ] API接口开发
- [ ] Vercel部署

### Phase 2: 功能完善
- [ ] 真实AI测评算法
- [ ] 证书生成系统
- [ ] 邮件通知
- [ ] 用户后台

### Phase 3: 运营优化
- [ ] SEO优化
- [ ] 性能优化
- [ ] 数据分析
- [ ] A/B测试

## 联系方式

- **商务联系**: 18188761820
- **地址**: 深圳市龙华区景龙建设路青年创业园健行楼C座307室
- **工作时间**: 周一至周六 09:00-18:00

## License

© 2026 大成智改AI商学院. All Rights Reserved.
