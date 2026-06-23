#\!/bin/bash
echo "🚀 推送到GitHub"
echo "================"
echo ""
cd /Users/yanlyubo/Desktop/大成智改商学院
git init
git add .
git commit -m "feat: 大成智改AI商学院官网初始版本"
git remote add origin https://github.com/molinarolafont487-jpg/AI-.git
git branch -M main
git push -u origin main
echo ""
echo "✅ 推送完成！"
echo "下一步: 访问 https://vercel.com/new 部署"
