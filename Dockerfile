FROM node:16.13.2-alpine

# Directory 지정
WORKDIR /

# Install dependencies
COPY package.json ./
COPY yarn.lock ./

RUN yarn

# 필요한 모든 파일을 복사
COPY . .

# Build
RUN yarn add sharp
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]