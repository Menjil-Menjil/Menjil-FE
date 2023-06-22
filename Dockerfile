FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /

# Install dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn --frozen-lockfile --production;
RUN rm -rf ./.next/cache

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /
COPY . .

# Build
RUN yarn add sharp
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
