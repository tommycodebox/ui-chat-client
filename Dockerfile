FROM node:10-alpine AS builder

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

COPY . .

FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]