// 참고 https://velog.io/@gwak2837/Next.js%EC%97%90%EC%84%9C-SVG-%ED%8C%8C%EC%9D%BC-%EB%B6%88%EB%9F%AC%EC%98%A4%EB%8A%94-%EB%B0%A9%EB%B2%95
// 외부링크 이미지 참고: https://jae04099.tistory.com/entry/ERROR-Error-Invalid-src-prop-on-nextimage
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    domains: ['lh3.googleusercontent.com'] // 이곳에 에러에서 hostname 다음 따옴표에 오는 링크를 적으면 된다.
  },
};
