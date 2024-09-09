const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Mio Bao",
    image: "https://notion-avatar.vercel.app/api/img/eyJmYWNlIjoxLCJub3NlIjowLCJtb3V0aCI6MTIsImV5ZXMiOjksImV5ZWJyb3dzIjoxMSwiZ2xhc3NlcyI6MCwiaGFpciI6MjQsImFjY2Vzc29yaWVzIjowLCJkZXRhaWxzIjowLCJiZWFyZCI6MCwiZmxpcCI6MCwiY29sb3IiOiJyZ2JhKDI1NSwgMCwgMCwgMCkiLCJzaGFwZSI6Im5vbmUifQ==", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "  ",
    bio: " An AI enthusiast and beginner coder diving into neural networks. I love simplifying complex concepts and sharing my learning journey through my blog.",
    email: "miobaoxi@gmail.com",
    linkedin: "Mio Bao",
    github: "MioBaoBao",
    instagram: "",
  },
  projects: [
    {
      name: ` `,
      href: " ",
    },
  ],
  // blog setting (required)
  blog: {
    title: "AI Journey with Mio",
    description: "Exploring AI, coding, and investing one step at a time.",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: "0a6514581ffa4896b62981dbc8a34e81",
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 60, // revalidate time for [slug], index
}

module.exports = { CONFIG }
