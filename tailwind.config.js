/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "dist/**/*.html", "./node_modules/flowbite/**/*.js" ],
  theme: {
    extend: {
      colors: {
        primary: "#4C005B",
        sec: "#EEAD1F",
      },
      screens: {
        max2xl: { max: "1535px" },
        maxxl: { max: "1279px" },
        maxlg: { max: "1023px" },
        maxmd: { max: "767px" },
        maxsm: { max: "550px" },
        maxxs: { max: "320px" },
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [ 'prettier-plugin-tailwindcss', require( 'flowbite/plugin' )
  ]
}

