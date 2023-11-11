FROM node:14.19.1-alpine AS builder

WORKDIR /app/frontend
COPY front/vite-project/package.json ./
COPY front/vite-project/package-lock.json ./
RUN npm ci --silent
RUN npm cache clean --force
COPY front/vite-project ./
RUN npm install
RUN npm run build

# The second stage
# Copy React static files and start nginx
FROM nginx:stable-alpine
COPY --from=builder /app/frontend/dist/ /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
CMD ["nginx", "-g", "daemon off;"]
