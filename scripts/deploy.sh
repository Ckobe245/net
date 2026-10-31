#!/usr/bin/env bash
set -e

echo "=== 开始构建小c个人网站前端 ==="
cd "$(dirname "$0")/.."
pnpm --filter=@xiaoc/web build

echo "=== 构建完成！产物位于 apps/web/out/ ==="
echo "如需部署至服务器，可执行："
echo "scp -r apps/web/out/* user@xzzcy.com:/opt/site/"
