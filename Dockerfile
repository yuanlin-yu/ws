# 使用官方 Node 镜像
FROM node:18-alpine

# 创建工作目录
WORKDIR /app

# 复制依赖清单并安装
COPY package*.json ./
RUN npm install --production

# 复制全部代码
COPY . .

# 暴露 Fly.io 分配的端口（会自动用 PORT 环境变量）
EXPOSE 8080

# 启动命令
CMD ["node", "server.js"]
