# 使用官方 Node.js 镜像作为基础镜像
FROM node:20.14.0-alpine3.20

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制项目文件
COPY . .

# 暴露端口
EXPOSE 1337

# 启动 Parse Server
CMD ["node", "index.js"]