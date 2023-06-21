FROM node:16.13.2-alpine

# Directory 지정
WORKDIR /

# 의존성 설치를 위해 package.json, yarn.lock 복사
COPY package.json ./
COPY yarn.lock ./

# 의존성 설치
RUN yarn

# 필요한 모든 파일을 복사
COPY . .

# next.js build
RUN yarn add sharp
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
