export default {
  theme: {
    extend: {
      colors: {
        "light-white": "#F3F5FF",
        "dark-blue": "#212435",
        "vs-accent": "#0BD88F",
        "vs-blue": "#075EBF",
        "vs-cyan": "#00F0FF",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
  content: [
    `~~/components/**/*.{vue,js,ts}`,
    `~~/layouts/**/*.vue`,
    `~~/pages/**/*.vue`,
    `~~/composables/**/*.{js,ts}`,
    `~~/plugins/**/*.{js,ts}`,
    `~~/utils/**/*.{js,ts}`,
    `~~/App.{js,ts,vue}`,
    `~~/app.{js,ts,vue}`,
    `~~/Error.{js,ts,vue}`,
    `~~/error.{js,ts,vue}`,
    `~~/app.config.{js,ts}`,
  ],
};
