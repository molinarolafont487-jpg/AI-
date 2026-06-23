# 🚀 立即部署 - 一步一步操作指南

## ⚡ 方式1: 使用部署脚本（推荐）

### 在终端执行：

```bash
cd /Users/yanlyubo/Desktop/大成智改商学院
./deploy.sh
```

这个脚本会自动完成：
1. ✅ 初始化Git仓库
2. ✅ 添加所有文件
3. ✅ 提交代码
4. ✅ 关联GitHub远程仓库（需要你输入URL）
5. ✅ 推送到GitHub

---

## 📋 方式2: 手动执行命令

### 步骤1: 初始化Git

```bash
cd /Users/yanlyubo/Desktop/大成智改商学院
git init
```

### 步骤2: 添加文件

```bash
git add .
```

### 步骤3: 提交代码

```bash
git commit -m "feat: 大成智改AI商学院官网初始版本

✅ 完整的Next.js 14项目结构
✅ 响应式导航栏和页脚
✅ Hero区（Three.js粒子动画）
✅ AI能力测评系统
✅ AI认证体系展示
✅ 企业实战学院
✅ GEO增长系统
✅ 企业案例展示
✅ 证书查询系统
✅ 合作入口

域名: daadg.com
联系: 18188761820"
```

### 步骤4: 创建GitHub仓库

1. 访问 https://github.com
2. 点击右上角 "+" → "New repository"
3. 仓库名称: `dacheng-ai-academy`
4. 选择 "Public" 或 "Private"
5. **不要**勾选 "Add a README file"
6. 点击 "Create repository"

### 步骤5: 关联远程仓库

```bash
# 替换为你的GitHub用户名
git remote add origin https://github.com/你的用户名/dacheng-ai-academy.git
```

### 步骤6: 推送到GitHub

```bash
git branch -M main
git push -u origin main
```

---

## 🌐 步骤7: 在Vercel部署

### 1. 访问Vercel

打开浏览器，访问：https://vercel.com

### 2. 登录

- 点击 "Sign Up" 或 "Log In"
- 选择 "Continue with GitHub"
- 授权Vercel访问你的GitHub账号

### 3. 创建新项目

- 点击 "New Project"
- 在仓库列表中找到 `dacheng-ai-academy`
- 点击 "Import"

### 4. 配置项目（重要！）

在配置页面：

**Framework Preset**: Next.js（自动检测）

**Root Directory**: 点击 "Edit"，输入 `website` ⚠️ **这步很重要！**

**Build and Output Settings**:
- Build Command: `npm run build` (默认)
- Output Directory: `.next` (默认)
- Install Command: `npm install` (默认)

**Environment Variables**: 暂时跳过（后续配置）

### 5. 开始部署

- 点击 "Deploy" 按钮
- 等待2-3分钟（你会看到构建日志）

### 6. 查看结果

部署成功后：
- 你会看到 🎉 Congratulations!
- 获得一个预览URL，格式: `https://dacheng-ai-academy-xxxx.vercel.app`
- 点击 "Visit" 查看你的网站！

---

## 🌍 步骤8: 绑定域名 daadg.com

### 1. 在Vercel添加域名

- 进入你的项目
- 点击 "Settings" 标签
- 点击左侧 "Domains"
- 输入 `daadg.com`
- 点击 "Add"

### 2. 配置DNS记录

Vercel会显示需要配置的DNS记录，在你的域名管理面板添加：

**A记录**（根域名）:
```
类型: A
主机记录: @
记录值: 76.76.21.21
TTL: 600
```

**CNAME记录**（www子域名）:
```
类型: CNAME
主机记录: www
记录值: cname.vercel-dns.com
TTL: 600
```

### 3. 等待生效

- DNS传播通常需要 5-30分钟
- Vercel会自动验证并配置SSL证书
- 完成后可通过 https://daadg.com 访问

---

## ✅ 部署完成检查清单

访问你的网站，检查以下项目：

- [ ] 网站可以访问
- [ ] Hero区粒子动画正常显示（PC端）
- [ ] 导航栏正常工作
- [ ] 所有9个区块都显示正常
- [ ] 移动端导航菜单可以打开/关闭
- [ ] 表单可以填写（虽然是模拟数据）
- [ ] 页面滚动流畅
- [ ] 页面加载速度正常

---

## 🔧 如果遇到问题

### Vercel构建失败？

1. 检查 Root Directory 是否设置为 `website`
2. 查看构建日志中的错误信息
3. 确认package.json文件存在于 website/ 目录

### 页面显示不正常？

1. 打开浏览器开发者工具（F12）
2. 查看Console是否有错误
3. 检查Network标签，看资源是否正确加载

### Three.js动画不显示？

这是正常的：
- 移动端会自动降级为CSS动画（性能优化）
- 某些旧浏览器不支持WebGL

---

## 📞 需要帮助？

如果遇到任何问题：

1. 查看 [QUICKSTART.md](./QUICKSTART.md) - 快速启动指南
2. 查看 [DEPLOYMENT.md](./DEPLOYMENT.md) - 详细部署指南
3. 查看 [PROJECT_STATUS.md](./PROJECT_STATUS.md) - 项目状态
4. 查看Vercel构建日志中的错误信息

---

## 🎉 部署成功后

### 后续工作：

1. **配置Supabase数据库**（查看 PLAN.md）
2. **开发后端API**
3. **添加内容图片**（Logo、案例图片）
4. **开发子页面**
5. **SEO优化**

### 更新网站：

```bash
# 修改代码后
git add .
git commit -m "更新说明"
git push

# Vercel会自动检测并重新部署
```

---

## 🎊 恭喜！

你的AI商学院官网即将上线！

**预览URL**: `https://xxx.vercel.app`（部署后获得）  
**正式域名**: `https://daadg.com`（DNS配置后）  

**祝项目成功！🚀**
