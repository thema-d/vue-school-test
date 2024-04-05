// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-fonts', {
      families: {
        Rubik: {
          ital: '300..900',
          wght: '300..900',
        }
      }
    }],
    [
      '@storyblok/nuxt',
      {
        accessToken: 'ZwDTc98zGPXCFUw58w4xFAtt'
      },
    ],
  ],
})
