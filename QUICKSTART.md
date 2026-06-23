# 快速启动指南

## 🚀 最快部署方式：使用Vercel（推荐）

由于本地npm访问受限，最快的方式是直接部署到Vercel，让Vercel在云端完成依赖安装和构建。

### 步骤1: 推送到GitHub

```bash
# 进入项目目录
cd /Users/yanlyubo/Desktop/大成智改商学院

# 初始化Git（如果还没有）
git init

# 添加所有文件
git add .

# 提交
git commit -m "feat: 大成智改AI商学院官网初始版本

- ✅ 完整的Next.js 14项目结构
- ✅ 响应式导航栏和页脚
- ✅ Hero区（Three.js粒子动画）
- ✅ AI能力测评系统
- ✅ AI认证体系展示
- ✅ 企业实战学院
- ✅ GEO增长系统
- ✅ 企业案例展示
- ✅ 证书查询系统
- ✅ 合作入口

域名: daadg.com
联系: 18188761820"

# 关联远程仓库（替换为你的GitHub仓库地址）
git remote add origin https://github.com/你的用户名/dacheng-ai-academy.git

# 推送
git branch -M main
git push -u origin main
```

### 步骤2: 在Vercel部署

1. **访问Vercel**
   - 打开 https://vercel.com
   - 使用GitHub账号登录

2. **导入项目**
   - 点击 "New Project"
   - 选择刚才推送的GitHub仓库
   - 点击 "Import"

3. **配置项目**
   - **Framework Preset**: Next.js（自动检测）
   - **Root Directory**: `website`（重要！）
   - **Build Command**: `npm run build`（默认）
   - **Output Directory**: `.next`（默认）
   - **Install Command**: `npm install`（默认）

4. **环境变量（可选，后期配置）**
   暂时跳过，点击 "Deploy"

5. **等待部署**
   - 大约2-3分钟
   - 完成后会获得一个 `.vercel.app` 的预览URL

6. **查看网站**
   - 点击预览URL
   - 🎉 你的网站已经上线了！

### 步骤3: 绑定域名daadg.com

1. **在Vercel添加域名**
   - 进入项目 → Settings → Domains
   - 输入 `daadg.com`
   - 点击 "Add"

2. **配置DNS**
   在域名DNS管理面板添加：
   
   ```
   类型: A
   主机记录: @
   记录值: 76.76.21.21
   TTL: 600
   ```
   
   ```
   类型: CNAME
   主机记录: www
   记录值: cname.vercel-dns.com
   TTL: 600
   ```

3. **等待生效**
   - DNS传播需要5-30分钟
   - Vercel会自动验证并配置SSL证书
   - 完成后可通过 https://daadg.com 访问

---

## 🔧 本地开发方式（如果npm可用）

### 方法1: 使用yarn

```bash
cd website

# 安装yarn（如果没有）
npm install -g yarn

# 安装依赖
yarn install

# 运行开发服务器
yarn dev

# 访问 http://localhost:3000
```

### 方法2: 使用pnpm

```bash
cd website

# 安装pnpm（如果没有）
npm install -g pnpm

# 安装依赖
pnpm install

# 运行开发服务器
pnpm dev
```

### 方法3: 修复npm权限后使用npm

```bash
# 修复npm权限
sudo chown -R $USER ~/.npm

# 安装依赖
cd website
npm install

# 运行开发服务器
npm run dev
```

---

## 📋 部署后的待办事项

### 1. 配置环境变量（Vercel）

在 Vercel项目 → Settings → Environment Variables 添加：

```env
# Supabase数据库（后续配置）
DATABASE_URL=postgresql://...

# 网站配置
NEXT_PUBLIC_SITE_URL=https://daadg.com
NEXT_PUBLIC_SITE_NAME=大成智改AI商学院

# 联系信息（已硬编码，可选）
NEXT_PUBLIC_PHONE=18188761820
NEXT_PUBLIC_ADDRESS=深圳市龙华区景龙建设路青年创业园健行楼C座307室
NEXT_PUBLIC_WORK_TIME=周一至周六 09:00-18:00
```

### 2. 设置Supabase数据库

1. 访问 https://supabase.com
2. 创建新项目
3. 获取数据库连接字符串
4. 添加到Vercel环境变量
5. 创建数据表（参考 PLAN.md）

### 3. 开发API接口

目前测评和证书查询使用模拟数据，需要：

- `/api/assessment` - 测评API
- `/api/certification/verify` - 证书查询API
- `/api/contact` - 联系表单API

### 4. 添加内容

- Logo图片 → `website/public/images/logo.png`
- 案例图片 → `website/public/images/cases/`
- 证书模板 → 设计证书样式

---

## ✅ 检查清单

部署后检查：

- [ ] 网站可以访问
- [ ] 首页所有区块正常显示
- [ ] Three.js粒子动画正常（PC端）
- [ ] 移动端导航菜单正常
- [ ] 表单可以提交（虽然是模拟数据）
- [ ] 页面响应式正常
- [ ] 页面加载速度正常

---

## 🆘 常见问题

### Q: Vercel构建失败？
A: 检查：
- Root Directory 是否设置为 `website`
- Node.js版本（Vercel默认使用18.x，兼容）

### Q: 页面显示不正常？
A: 检查：
- 浏览器控制台是否有JavaScript错误
- 是否使用了现代浏览器（Chrome/Edge/Safari/Firefox最新版）

### Q: Three.js动画不显示？
A: 正常现象：
- 移动端会降级为CSS动画（性能考虑）
- 部分旧浏览器不支持WebGL

### Q: 如何更新网站？
A: 
```bash
# 修改代码后
git add .
git commit -m "更新说明"
git push

# Vercel会自动检测并重新部署
```

---

## 📞 需要帮助？

如果遇到问题，检查：
1. PROJECT_STATUS.md - 项目状态
2. DEPLOYMENT.md - 详细部署指南
3. README.md - 完整项目文档
4. PLAN.md - 技术方案

---

**祝部署顺利！🎉**
