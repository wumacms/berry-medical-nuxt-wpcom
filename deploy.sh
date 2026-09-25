#!/usr/bin/env bash

# ========================================================
# 贝瑞医疗 - GitHub Pages 部署辅助脚本
# ========================================================

set -e

# 终端颜色定义
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}=======================================${NC}"
echo -e "${BLUE}  Berry Medical - GitHub Pages 部署  ${NC}"
echo -e "${BLUE}=======================================${NC}"

# 获取当前分支
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "main")

# 检查是否存在未提交的变更
if [ -n "$(git status --porcelain 2>/dev/null)" ]; then
  echo -e "\n${YELLOW}检测到未提交的代码变更：${NC}"
  git status -s

  # 获取提交信息
  COMMIT_MSG="$1"
  if [ -z "$COMMIT_MSG" ]; then
    read -p "请输入提交信息 (直接回车默认: 'chore: deploy to github pages'): " INPUT_MSG
    COMMIT_MSG=${INPUT_MSG:-"chore: deploy to github pages"}
  fi

  echo -e "\n${GREEN}==> 正在提交代码变更...${NC}"
  git add .
  git commit -m "$COMMIT_MSG"
else
  echo -e "\n${GREEN}工作区干净，无需额外 commit。${NC}"
fi

# 检测远程仓库
REMOTES=$(git remote)
TARGET_REMOTE=""

if echo "$REMOTES" | grep -q "^github$"; then
  TARGET_REMOTE="github"
elif echo "$REMOTES" | grep -q "^origin$"; then
  TARGET_REMOTE="origin"
else
  echo -e "${RED}未找到 Git 远程仓库配置，请先通过 git remote add 添加远程仓库。${NC}"
  exit 1
fi

echo -e "\n${GREEN}==> 正在推送分支 [${CURRENT_BRANCH}] 到远程仓库 [${TARGET_REMOTE}]...${NC}"
git push -u "$TARGET_REMOTE" "$CURRENT_BRANCH"

echo -e "\n${GREEN}===============================================${NC}"
echo -e "${GREEN}✓ 代码已成功推送到远程仓库！${NC}"
echo -e "${GREEN}GitHub Actions 正在自动构建并部署到 GitHub Pages。${NC}"
echo -e "您可以在 GitHub 仓库的 'Actions' 页面查看实时构建日志。"
echo -e "${GREEN}===============================================${NC}\n"
