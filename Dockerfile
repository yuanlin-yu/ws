# 使用官方 Node 镜像
FROM node:18-alpine

# 创建工作目录
WORKDIR /app

# 复制依赖清单
COPY package*.json ./

# 安装依赖（生产环境）
RUN npm install --production

# 复制全部源代码
COPY . .

# Fly.io 会自动分配 PORT
EXPOSE 8080

# 启动 WebSocket 服务
CMD ["node", "server.js"]
