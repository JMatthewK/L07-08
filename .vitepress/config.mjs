import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PaperBeam",
  description: "A VitePress Site",
  themeConfig: {
    logo: '.vitepress/dist/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Products', link: '/products' },
      { text: 'Reference', link: '/reference' },
      {
        text: 'Learning',
        items: [
          { text: 'Docs', link: '/learning/docs' },
          { text: 'Tutorial', link: '/learning/tutorial' },
          { text: 'Examples', link: '/learning/examples' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Homepage', link: '/' },
          { text: 'Products', link: '/products' },
          { text: 'Reference', link: '/reference' }
        ]
      },
      {
        text: 'Learning',
        items: [
          { text: 'Docs', link: '/learning/docs' },
          { text: 'Tutorial', link: '/learning/tutorial' },
          { text: 'Examples', link: '/learning/examples' }
        ]
      }
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/JMatthewK/L07-08.git' }
    ]
  }
})
