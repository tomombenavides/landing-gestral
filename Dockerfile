# Dockerfile opcional para desplegar en Azure App Service
#
# FROM node:18-alpine AS deps
# WORKDIR /app
# COPY package.json package-lock.json* ./
# RUN npm ci
#
# FROM node:18-alpine AS builder
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .
# RUN npm run build
#
# FROM node:18-alpine AS runner
# WORKDIR /app
# ENV NODE_ENV=production
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public
# COPY package.json package-lock.json* ./
# RUN npm ci --omit=dev
# EXPOSE 3000
# CMD ["npm", "run", "start", "--", "-p", "${PORT:-3000}"]
