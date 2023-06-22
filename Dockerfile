FROM node:16.13.2-alpine AS builder

RUN apk add --no-cache libc6-compat

# Directory 지정
WORKDIR /

# Install dependencies
COPY package.json ./
COPY yarn.lock ./

RUN yarn
RUN rm -rf ./.next/cache

# 필요한 모든 파일을 복사
COPY . .

# Build
RUN yarn add sharp
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
