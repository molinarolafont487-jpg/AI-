#!/bin/bash

echo "🚀 大成智改AI商学院官网 - 部署脚本"
echo "========================================"
echo ""

# 颜色定义
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}第一步: 初始化Git仓库${NC}"
echo "----------------------------------------"
cd "/Users/yanlyubo/Desktop/大成智改商学院"

# 初始化Git
if [ ! -d ".git" ]; then
    git init
    echo -e "${GREEN}✓ Git仓库初始化完成${NC}"
else
    echo -e "${YELLOW}! Git仓库已存在${NC}"
fi

echo ""
echo -e "${BLUE}第二步: 添加所有文件${NC}"
echo "----------------------------------------"
git add .
echo -e "${GREEN}✓ 文件添加完成${NC}"

echo ""
echo -e "${BLUE}第三步: 提交代码${NC}"
echo "----------------------------------------"
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

技术栈:
- Next.js 14 + TypeScript
- Tailwind CSS + Three.js
- 20+组件，9大首页区块
- 完全响应式设计

域名: daadg.com
联系: 18188761820
地址: 深圳市龙华区景龙建设路青年创业园健行楼C座307室

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"

echo -e "${GREEN}✓ 代码提交完成${NC}"

echo ""
echo -e "${BLUE}第四步: 关联GitHub仓库${NC}"
echo "----------------------------------------"
echo -e "${YELLOW}请先在GitHub创建一个新仓库，然后输入仓库URL:${NC}"
echo "例如: https://github.com/你的用户名/dacheng-ai-academy.git"
read -p "GitHub仓库URL: " REPO_URL

if [ ! -z "$REPO_URL" ]; then
    git remote add origin "$REPO_URL"
    echo -e "${GREEN}✓ 远程仓库关联完成${NC}"
else
    echo -e "${YELLOW}! 跳过远程仓库关联${NC}"
    echo "你可以稍后手动执行: git remote add origin <仓库URL>"
fi

echo ""
echo -e "${BLUE}第五步: 推送到GitHub${NC}"
echo "----------------------------------------"
git branch -M main

if [ ! -z "$REPO_URL" ]; then
    echo "正在推送到GitHub..."
    git push -u origin main
    echo -e "${GREEN}✓ 代码推送完成${NC}"
else
    echo -e "${YELLOW}! 请先关联远程仓库后再推送${NC}"
    echo "执行: git push -u origin main"
fi

echo ""
echo -e "${GREEN}========================================"
echo "✅ Git准备完成！"
echo "========================================${NC}"
echo ""
echo -e "${BLUE}下一步: 在Vercel部署${NC}"
echo "1. 访问 https://vercel.com"
echo "2. 使用GitHub账号登录"
echo "3. 点击 'New Project'"
echo "4. 选择刚才推送的仓库"
echo "5. ${YELLOW}重要！${NC} Root Directory 设置为: ${YELLOW}website${NC}"
echo "6. 点击 'Deploy'"
echo "7. 等待2-3分钟构建完成"
echo "8. 获得预览URL并访问！"
echo ""
echo -e "${BLUE}绑定域名 daadg.com:${NC}"
echo "在域名DNS管理面板添加:"
echo "  A记录:    @ → 76.76.21.21"
echo "  CNAME:    www → cname.vercel-dns.com"
echo ""
echo -e "${GREEN}🎉 祝部署顺利！${NC}"
