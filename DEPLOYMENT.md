# Vercel部署指南

## 前置条件

- GitHub账号
- Vercel账号（可用GitHub登录）
- 域名daadg.com的DNS管理权限

## 部署步骤

### 1. 准备Git仓库

```bash
cd website
git init
git add .
git commit -m "Initial commit: 大成智改AI商学院官网"
```

### 2. 推送到GitHub

```bash
# 创建GitHub仓库后
git remote add origin <你的仓库URL>
git branch -M main
git push -u origin main
```

### 3. 在Vercel导入项目

1. 访问 [vercel.com](https://vercel.com)
2. 点击 "New Project"
3. 导入GitHub仓库
4. 配置：
   - Framework Preset: **Next.js**
   - Root Directory: **website**
   - Build Command: `npm run build`
   - Output Directory: `.next`

### 4. 配置环境变量

在Vercel项目设置 → Environment Variables 中添加：

```env
DATABASE_URL=你的Supabase连接字符串
NEXT_PUBLIC_SITE_URL=https://daadg.com
NEXT_PUBLIC_SITE_NAME=大成智改AI商学院
NEXT_PUBLIC_PHONE=18188761820
NEXT_PUBLIC_ADDRESS=深圳市龙华区景龙建设路青年创业园健行楼C座307室
NEXT_PUBLIC_WORK_TIME=周一至周六 09:00-18:00
```

### 5. 部署

点击 "Deploy"，等待构建完成。

### 6. 绑定域名

#### 6.1 在Vercel添加域名

1. 进入项目 → Settings → Domains
2. 添加域名：`daadg.com` 和 `www.daadg.com`
3. Vercel会显示需要配置的DNS记录

#### 6.2 配置DNS

在你的域名DNS管理面板添加以下记录：

**A记录**（用于根域名）:
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**CNAME记录**（用于www）:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

#### 6.3 验证

等待DNS传播（通常5-30分钟），Vercel会自动验证并配置SSL证书。

## 持续部署

配置完成后，每次推送到main分支都会自动触发部署。

## 常见问题

### Q: 构建失败？
A: 检查：
1. Node.js版本（建议18+）
2. package.json中的依赖是否完整
3. 环境变量是否配置正确

### Q: 域名无法访问？
A: 检查：
1. DNS记录是否正确配置
2. DNS传播是否完成（可用 dig daadg.com 检查）
3. Vercel域名验证状态

### Q: Three.js动画不显示？
A: Three.js使用了客户端渲染，确保：
1. 使用了 `'use client'` 指令
2. 使用了 `dynamic` 导入并设置 `ssr: false`

## 性能优化建议

1. **图片优化**
   - 使用Next.js的Image组件
   - 使用WebP格式
   - 配置适当的图片CDN

2. **代码分割**
   - 使用动态导入（已配置Three.js）
   - 路由级代码分割（Next.js自动）

3. **缓存策略**
   - 配置Vercel的Edge Cache
   - 使用ISR（增量静态再生）

4. **监控**
   - Vercel Analytics（自动）
   - Vercel Speed Insights

## 回滚策略

如果新版本有问题：
1. 进入Vercel Deployments
2. 找到上一个稳定版本
3. 点击 "Promote to Production"

## 环境区分

- **Production**: main分支 → daadg.com
- **Preview**: 其他分支 → vercel自动生成预览URL
- **Development**: 本地开发 → localhost:3000
