# ⚡ 最简单的部署方案 - 3步完成

## 🎯 你只需要做3件事

---

## 第1步：打开终端，复制粘贴这些命令（2分钟）

**打开"终端"应用**，然后复制粘贴以下命令：

```bash
cd /Users/yanlyubo/Desktop/大成智改商学院
git init
git add .
git commit -m "feat: 大成智改AI商学院官网初始版本"
```

如果看到 "Operation not permitted" 错误，执行：
```bash
sudo chown -R yanlyubo /Users/yanlyubo/Desktop/大成智改商学院
```
然后重新执行上面的命令。

---

## 第2步：创建GitHub仓库并推送（3分钟）

### A. 创建仓库
1. 访问：https://github.com/new
2. Repository name：`dacheng-ai-academy`
3. 选择：**Public**
4. **不要勾选** "Add a README"
5. 点击：**Create repository**

### B. 推送代码
GitHub创建成功后会显示一些命令，或者直接执行：

```bash
# 把下面的"你的用户名"替换成你的GitHub用户名
git remote add origin https://github.com/你的用户名/dacheng-ai-academy.git
git branch -M main
git push -u origin main
```

---

## 第3步：在Vercel部署（2分钟）

### A. 导入项目
1. 访问：https://vercel.com/new
2. 登录（你已经登录了：molinarolafont487@gmail.com）
3. 找到 `dacheng-ai-academy` 仓库
4. 点击：**Import**

### B. 配置（⚠️ 最重要）
- Framework Preset：**Next.js**（自动检测）
- **Root Directory**：点击"Edit"，输入 `website` ⚠️⚠️⚠️
- Build Command：`npm run build`（默认）
- Output Directory：`.next`（默认）

### C. 部署
点击：**Deploy**

等待2-3分钟，完成！🎉

---

## ✅ 成功标志

部署成功后你会看到：
- 🎊 Congratulations!
- 🌐 预览URL：`https://dacheng-ai-academy-xxx.vercel.app`
- 🚀 点击 "Visit" 查看你的网站

---

## 📱 你会看到的效果

### 首页内容：
1. **Hero区** - 粒子动画 + "AI能力认证与企业增长系统"
2. **三大入口** - 个人认证/企业增长/城市合作
3. **AI测评** - 4维度评分系统
4. **认证体系** - S/A/B三级展示
5. **实战学院** - 3个课程（¥9,800-¥268,000）
6. **GEO系统** - 企业增长方法论
7. **企业案例** - SANAG/BIKI等真实案例
8. **证书查询** - 编号验证功能
9. **合作入口** - 3种合作方式

### 联系信息：
- 电话：18188761820
- 地址：深圳市龙华区景龙建设路青年创业园健行楼C座307室
- 工作时间：周一至周六 09:00-18:00

---

## 🆘 常见问题

### Q: Git报错 "Operation not permitted"？
```bash
sudo chown -R yanlyubo /Users/yanlyubo/Desktop/大成智改商学院
```

### Q: Vercel构建失败？
- 检查 Root Directory 是否设置为 `website`
- 这是最常见的错误原因

### Q: 页面空白？
- 等待3-5分钟（首次部署较慢）
- 清除浏览器缓存（Cmd+Shift+R）
- 检查浏览器Console（F12）

### Q: 动画不显示？
- PC端才有Three.js动画
- 移动端自动降级为CSS动画（正常）

---

## 🎉 完成后

### 分享你的网站
- 预览URL可以立即分享
- 绑定域名后使用 daadg.com

### 更新网站
以后修改代码，只需：
```bash
git add .
git commit -m "更新内容"
git push
```
Vercel会自动重新部署！

---

## 📞 你的账号信息

**Vercel账号**：
- 邮箱：molinarolafont487@gmail.com
- 控制台：https://vercel.com/dashboard

**项目位置**：
- 本地：/Users/yanlyubo/Desktop/大成智改商学院
- GitHub：https://github.com/你的用户名/dacheng-ai-academy
- 线上：https://dacheng-ai-academy-xxx.vercel.app

---

## ⏱️ 预计时间

- 步骤1：2分钟
- 步骤2：3分钟
- 步骤3：2分钟
- **总计：7分钟完成部署！**

---

## 🚀 现在开始吧！

1. 打开终端
2. 执行步骤1的命令
3. 创建GitHub仓库
4. 在Vercel部署

7分钟后，你的AI商学院官网就上线了！🎊

有任何问题随时问我！加油！💪
