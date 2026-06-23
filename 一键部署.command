#!/bin/bash
# 大成智改AI商学院 - 一键部署脚本
# 使用方法：在终端中执行 ./一键部署.command

clear
echo "╔════════════════════════════════════════╗"
echo "║  🚀 大成智改AI商学院 - 一键部署      ║"
echo "╚════════════════════════════════════════╝"
echo ""
echo "📦 项目信息："
echo "   - 20+专业组件"
echo "   - 9大首页区块"
echo "   - 3500+行代码"
echo "   - 完全响应式"
echo ""
echo "🌐 GitHub仓库："
echo "   https://github.com/molinarolafont487-jpg/AI-"
echo ""
echo "⏳ 开始部署..."
echo ""

# 进入项目目录
cd "/Users/yanlyubo/Desktop/大成智改商学院" || exit 1

# 初始化Git
echo "📦 步骤1/6: 初始化Git..."
if [ -d ".git" ]; then
    echo "   ℹ️  Git已初始化，跳过"
else
    git init
    if [ $? -eq 0 ]; then
        echo "   ✅ Git初始化成功"
    else
        echo "   ❌ Git初始化失败"
        echo ""
        echo "💡 解决方法："
        echo "   在终端执行: sudo chown -R $(whoami) ."
        exit 1
    fi
fi

# 添加文件
echo ""
echo "📝 步骤2/6: 添加文件到Git..."
git add .
if [ $? -eq 0 ]; then
    echo "   ✅ 文件添加成功"
else
    echo "   ❌ 文件添加失败"
    exit 1
fi

# 提交代码
echo ""
echo "💾 步骤3/6: 提交代码..."
git commit -m "feat: 大成智改AI商学院官网初始版本

✅ Next.js 14 + TypeScript + Tailwind CSS
✅ 20+专业组件，9大首页区块
✅ Three.js 3D粒子动画
✅ 完全响应式设计

联系方式:
- 电话: 18188761820
- 地址: 深圳市龙华区景龙建设路青年创业园健行楼C座307室
- 域名: daadg.com

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>" 2>&1

if [ $? -eq 0 ]; then
    echo "   ✅ 代码提交成功"
else
    echo "   ⚠️  代码提交跳过（可能已提交）"
fi

# 添加远程仓库
echo ""
echo "🔗 步骤4/6: 关联GitHub仓库..."
git remote add origin https://github.com/molinarolafont487-jpg/AI-.git 2>&1
if [ $? -eq 0 ]; then
    echo "   ✅ 远程仓库关联成功"
else
    echo "   ⚠️  远程仓库已存在（跳过）"
fi

# 设置主分支
echo ""
echo "🌿 步骤5/6: 设置主分支..."
git branch -M main
echo "   ✅ 主分支设置完成"

# 推送到GitHub
echo ""
echo "☁️  步骤6/6: 推送到GitHub..."
echo "   ⏳ 正在推送，可能需要登录..."
echo ""
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "╔════════════════════════════════════════╗"
    echo "║  🎉 推送成功！                        ║"
    echo "╚════════════════════════════════════════╝"
    echo ""
    echo "✅ 代码已推送到GitHub"
    echo ""
    echo "🚀 下一步：在Vercel部署"
    echo ""
    echo "1️⃣ 访问: https://vercel.com/new"
    echo "2️⃣ 导入仓库: AI-"
    echo "3️⃣ ⚠️  Root Directory 设置为: website"
    echo "4️⃣ 点击 Deploy"
    echo ""
    echo "⏱️  预计2-3分钟完成部署"
    echo ""
    echo "📱 你的Vercel账号:"
    echo "   molinarolafont487@gmail.com"
    echo ""
    echo "🌐 部署后访问:"
    echo "   https://ai-xxxx.vercel.app"
    echo ""
else
    echo ""
    echo "❌ 推送失败"
    echo ""
    echo "💡 可能的原因："
    echo "   1. 需要GitHub登录"
    echo "   2. 网络问题"
    echo "   3. 仓库权限问题"
    echo ""
    echo "🔧 解决方法："
    echo "   1. 确保已登录GitHub"
    echo "   2. 手动执行: git push -u origin main"
    echo ""
fi

echo "按任意键退出..."
read -n 1
