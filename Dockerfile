FROM node:18-alpine AS base

# Stage 1: Install dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /

# Install dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn --frozen-lockfile
RUN rm -rf ./.next/cache

# Stage 2: Build the app
FROM base AS builder
WORKDIR /
COPY . .

RUN yarn add sharp
RUN yarn build

# Stage 3: Run the production
FROM base AS runner
WORKDIR /
ENV NODE_ENV=production
COPY --from=builder next.config.js ./
COPY --from=builder public ./public
COPY --from=builder .next ./.next
COPY --from=builder node_modules ./node_modules


EXPOSE 3000

CMD ["yarn", "start"]
