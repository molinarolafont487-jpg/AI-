# 大成智改AI商学院官网开发技术方案

## 一、项目概述

**项目定位**：AI能力认证体系 + 企业增长系统入口 + 城市人才合作平台
**核心目标**：不是传统培训网站，而是AI能力标准入口

---

## 二、技术架构方案

### 2.1 技术栈选型

#### 前端技术栈
- **框架**：Next.js 14+ (App Router)
- **语言**：TypeScript 5+
- **样式**：Tailwind CSS 3+
- **动画**：Framer Motion
- **3D效果**：Three.js (Hero区粒子动画)
- **图标**：Lucide React
- **表单**：React Hook Form + Zod验证

#### 后端技术栈
- **运行时**：Next.js API Routes / Server Actions
- **数据库**：PostgreSQL 15+ (证书系统、测评系统)
- **缓存**：Redis (测评结果缓存)
- **ORM**：Prisma
- **认证**：NextAuth.js (管理后台)

#### 基础设施
- **部署**：Vercel (推荐) / 自有服务器
- **CDN**：Vercel Edge / Cloudflare
- **图片存储**：Cloudinary / 阿里云OSS
- **邮件服务**：Resend / 阿里云邮件推送

### 2.2 项目结构

```
大成智改商学院/
├── website/                          # 官网项目根目录
│   ├── src/
│   │   ├── app/                      # Next.js App Router
│   │   │   ├── (home)/              # 首页组
│   │   │   │   └── page.tsx
│   │   │   ├── certification/       # 认证体系
│   │   │   │   ├── page.tsx
│   │   │   │   └── verify/         # 证书查询
│   │   │   ├── academy/             # 实战学院
│   │   │   ├── assessment/          # AI能力测评
│   │   │   ├── cases/               # 案例中心
│   │   │   ├── cooperation/         # 合作入口
│   │   │   ├── api/                 # API路由
│   │   │   │   ├── assessment/     # 测评API
│   │   │   │   ├── certification/  # 证书查询API
│   │   │   │   └── contact/        # 联系表单API
│   │   │   ├── layout.tsx
│   │   │   └── globals.css
│   │   ├── components/              # 组件库
│   │   │   ├── ui/                 # 基础UI组件
│   │   │   ├── sections/           # 页面区块组件
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── ThreeEntries.tsx
│   │   │   │   ├── AssessmentSection.tsx
│   │   │   │   ├── CertificationSystem.tsx
│   │   │   │   └── ...
│   │   │   ├── layout/             # 布局组件
│   │   │   │   ├── Header.tsx
│   │   │   │   └── Footer.tsx
│   │   │   └── animations/         # 动画组件
│   │   ├── lib/                     # 工具库
│   │   │   ├── db.ts               # 数据库连接
│   │   │   ├── redis.ts            # Redis连接
│   │   │   └── utils.ts
│   │   ├── types/                   # TypeScript类型
│   │   └── styles/                  # 全局样式
│   ├── prisma/
│   │   └── schema.prisma           # 数据库模型
│   ├── public/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   ├── .env.example
│   ├── .env.local
│   ├── next.config.js
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── package.json
├── docs/                            # 文档中心
└── design/                          # 设计资源
```

---

## 三、核心功能模块设计

### 3.1 首页模块

#### 模块1：导航栏 (Header)
- **功能**：顶部固定导航、吸顶效果、毛玻璃背景
- **技术**：Sticky定位 + Backdrop blur
- **响应式**：移动端汉堡菜单

#### 模块2：Hero主视觉区
- **功能**：
  - 3D粒子动画背景 (Three.js)
  - 核心价值主张展示
  - 3个CTA按钮（测评、诊断、认证）
- **技术难点**：Three.js性能优化、移动端降级方案

#### 模块3：三大入口卡片
- **功能**：个人认证 / 企业增长 / 城市合作
- **交互**：Hover动效、渐变边框
- **响应式**：PC 3列、移动端堆叠

#### 模块4：AI能力测评系统（核心转化入口）
- **功能**：
  - 表单输入（姓名、行业、企业）
  - 实时测评（模拟或真实AI评分）
  - 生成能力报告
  - 推荐认证课程
- **技术**：
  - 表单验证 (Zod)
  - API调用 (Server Actions)
  - 结果缓存 (Redis 5分钟)
- **数据库表**：`assessments`

#### 模块5：AI认证体系展示
- **功能**：S/A/B等级展示、认证详情
- **交互**：等级卡片点击查看详情

#### 模块6：证书查询系统
- **功能**：
  - 输入编号查询
  - 显示证书信息
  - 二维码验证
- **技术**：
  - API查询 `/api/certification/verify`
  - 数据库表：`certifications`
- **安全**：防爬虫限流

#### 模块7：企业案例展示
- **功能**：案例轮播、数据对比
- **技术**：Swiper / 自定义轮播

#### 模块8：合作入口
- **功能**：企业合作、政府合作、城市合伙人表单
- **技术**：表单提交 + 邮件通知

---

## 四、数据库设计

### 4.1 核心数据表

#### 表1：certifications (证书表)
```prisma
model Certification {
  id            String   @id @default(cuid())
  certificateNo String   @unique // DAC-AI-2026-XXXX
  name          String
  level         String   // S / A / B
  type          String   // 认证类型
  issueDate     DateTime @default(now())
  expiryDate    DateTime?
  status        String   @default("active") // active / expired / revoked
  qrCode        String?  // 二维码URL
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}
```

#### 表2：assessments (测评记录表)
```prisma
model Assessment {
  id          String   @id @default(cuid())
  name        String
  company     String?
  industry    String
  email       String?
  phone       String?
  scores      Json     // 各维度评分
  totalScore  Int
  level       String   // S / A / B / C
  suggestions Json     // 推荐课程
  createdAt   DateTime @default(now())
}
```

#### 表3：contacts (联系表单表)
```prisma
model Contact {
  id          String   @id @default(cuid())
  type        String   // enterprise / government / partner
  name        String
  company     String
  position    String?
  phone       String
  email       String
  message     String?
  status      String   @default("pending") // pending / contacted / converted
  createdAt   DateTime @default(now())
}
```

---

## 五、实施计划

### Phase 1：基础框架搭建 (Day 1-2)
- [x] 项目初始化
- [ ] Next.js + TypeScript + Tailwind配置
- [ ] 项目结构创建
- [ ] 基础UI组件库 (Button, Card, Input等)
- [ ] Header/Footer组件
- [ ] 响应式布局系统

### Phase 2：首页核心模块 (Day 3-5)
- [ ] Hero区 + 3D动画
- [ ] 三大入口卡片
- [ ] AI测评系统前端
- [ ] 认证体系展示
- [ ] 案例展示区
- [ ] 合作入口表单

### Phase 3：后端功能开发 (Day 6-8)
- [ ] 数据库设计 + Prisma配置
- [ ] 证书查询API
- [ ] AI测评API (Mock数据)
- [ ] 表单提交API + 邮件通知
- [ ] Redis缓存集成

### Phase 4：子页面开发 (Day 9-12)
- [ ] 认证体系页面 (/certification)
- [ ] 证书查询页面 (/certification/verify)
- [ ] 实战学院页面 (/academy)
- [ ] 测评详情页 (/assessment)
- [ ] 案例中心 (/cases)
- [ ] 合作页面 (/cooperation)

### Phase 5：优化与上线 (Day 13-15)
- [ ] SEO优化 (Meta标签、结构化数据)
- [ ] 性能优化 (图片懒加载、代码分割)
- [ ] 移动端适配测试
- [ ] 部署到Vercel/服务器
- [ ] 域名配置 + SSL
- [ ] 监控与分析 (Google Analytics)

---

## 六、技术难点与解决方案

### 6.1 Hero区3D动画性能
**问题**：Three.js在移动端性能差
**方案**：
- PC端：完整Three.js粒子动画
- 移动端：降级为CSS渐变动画
- 使用 `useMediaQuery` 检测设备

### 6.2 AI测评算法
**问题**：真实AI评分需要复杂模型
**方案 A (MVP)**：基于规则的评分系统（权重计算）
**方案 B (后期)**：集成真实AI模型 (OpenAI API / 本地模型)

### 6.3 证书防伪
**问题**：证书真伪验证
**方案**：
- 唯一编号 + 数据库验证
- 二维码 → 跳转官网查询页
- 防爬虫限流 (每IP每分钟5次查询)

### 6.4 数据库选择
**问题**：Vercel部署的数据库方案
**方案 A**：Vercel Postgres (推荐，集成方便)
**方案 B**：Supabase (免费额度大)
**方案 C**：自建PostgreSQL + 连接池

---

## 七、需要决策的关键问题

### 🎯 决策点1：部署方案
**选项A**：Vercel (推荐)
- ✅ 优点：零配置、自动CI/CD、全球CDN、免费SSL
- ❌ 缺点：数据库需额外付费、流量限制

**选项B**：自有服务器（阿里云/腾讯云）
- ✅ 优点：完全控制、无流量限制、数据在国内
- ❌ 缺点：需要运维、备案、手动配置

**推荐**：先用Vercel快速上线，后期迁移

---

### 🎯 决策点2：数据库方案
**选项A**：Vercel Postgres ($20/月起)
- ✅ 无缝集成、自动扩展
- ❌ 需付费

**选项B**：Supabase (免费额度：500MB存储)
- ✅ 免费、功能丰富、有管理后台
- ❌ 海外服务器、可能需要代理

**选项C**：自建PostgreSQL
- ✅ 完全控制、成本可控
- ❌ 需要配置、备份策略

**推荐**：MVP阶段用Supabase，商业化后用自建

---

### 🎯 决策点3：AI测评算法实现
**选项A**：规则引擎（MVP）
- 基于问卷选项的权重计算
- 4个维度评分（工具使用、内容生产、业务转化、GEO能力）
- 固定算法：`总分 = Σ(维度分 × 权重)`

**选项B**：真实AI模型
- 集成OpenAI API进行语义分析
- 成本：$0.01-0.05/次评测
- 需要API Key

**推荐**：先规则引擎，埋点后期升级

---

### 🎯 决策点4：证书编号生成规则
**格式建议**：`DAC-AI-{年份}-{类型}-{序号}`
- 示例：`DAC-AI-2026-S-0001`
- S/A/B：等级
- 序号：5位递增

**问题**：是否需要校验位（防伪）？
**选项**：
- A：简单递增（易记）
- B：加校验位（更安全）如 `DAC-AI-2026-S-0001-7C`

---

### 🎯 决策点5：首页动画复杂度
**选项A**：完整Three.js动画
- ✅ 视觉震撼、科技感强
- ❌ 首屏加载慢（+200KB）、移动端性能差

**选项B**：纯CSS动画
- ✅ 轻量、性能好
- ❌ 效果一般

**选项C**：渐进式（推荐）
- PC端：Three.js
- 移动端：CSS降级
- 懒加载Three.js库

---

### 🎯 决策点6：多语言支持
**问题**：是否需要中英双语？
- 如果需要：使用 `next-intl`
- 如果不需要：纯中文即可

**建议**：MVP纯中文，后期扩展

---

### 🎯 决策点7：CMS内容管理
**问题**：课程、案例、新闻等内容是否需要后台管理？

**选项A**：纯代码管理（Markdown文件）
- ✅ 简单、无额外成本
- ❌ 非技术人员无法编辑

**选项B**：集成CMS（Strapi / Payload）
- ✅ 可视化编辑、权限管理
- ❌ 增加复杂度、需要额外服务器

**推荐**：MVP阶段纯代码，有运营需求后加CMS

---

### 🎯 决策点8：域名与品牌
**问题**：
- 域名已准备好了吗？（如 `dacheng-ai.com`）
- 公司名称、备案主体是否确定？

**影响**：
- 需要在代码中配置域名
- SSL证书配置
- 邮箱配置（如 `contact@dacheng-ai.com`）

---

### 🎯 决策点9：支付系统
**问题**：首页是否需要直接支付功能？

**建议**：MVP阶段不做支付，使用"立即咨询"按钮，人工转化
**后期**：集成微信支付/支付宝

---

### 🎯 决策点10：监控与分析
**需要集成的服务**：
- Google Analytics (流量分析)
- 百度统计 (国内SEO)
- Sentry (错误监控)
- Hotjar (用户行为录制)

**决策**：哪些现在就集成？

---

## 八、风险与应对

### 风险1：开发周期
**预估**：15个工作日（完整版）
**MVP版本**：7天（核心功能）

### 风险2：性能问题
**应对**：
- 图片使用WebP + 懒加载
- 代码分割、按需加载
- CDN加速

### 风险3：合规性
**应对**：
- 证书措辞审查（避免"资格认证"）
- ICP备案（如果用国内服务器）
- 隐私政策、用户协议

---

## 九、成本预估

### 开发成本
- **MVP版本**：7-10天
- **完整版本**：15天

### 运营成本（月）
**方案A (Vercel + Supabase)**
- Vercel Pro: $20
- Supabase: $0 (免费额度)
- 域名: ¥50/年
- **总计**: ~¥150/月

**方案B (自建服务器)**
- 阿里云ECS: ¥200-500/月
- RDS数据库: ¥300/月
- CDN流量: ¥100/月
- **总计**: ¥600-900/月

---

## 十、下一步行动

基于以上方案，我需要你确认这些决策点：

### 必答问题（影响技术架构）
1. **部署方案**：Vercel 还是 自有服务器？
2. **数据库**：Supabase(免费) 还是 自建？
3. **AI测评**：规则引擎(快) 还是 真实AI(贵)？
4. **域名**：已有域名是什么？还是需要我建议？

### 可选问题（影响功能范围）
5. **动画**：要完整Three.js(炫酷)还是简化版(快速)？
6. **多语言**：MVP阶段需要英文吗？
7. **CMS**：需要后台管理系统吗？
8. **支付**：MVP阶段需要在线支付吗？

### 业务问题
9. **证书编号格式**：喜欢哪种？`DAC-AI-2026-S-0001` 还是带校验位？
10. **联系方式**：客服电话、邮箱、微信是什么？（填到网站）

---

回答完这些问题后，我会立即开始编码！🚀
