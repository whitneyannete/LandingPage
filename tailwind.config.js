/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    borderWidth: {
      '0':'0',
      '2':'2px',
      '3':'3px',
      '4':'4px',
      '6':'6px',
      '8':'8px',

    },
    extend: {
      flexBasis: {
        "1/3-gap-4": "calc(33.3% - (2/3 * 1rem))"
    },
    fontFamily:{
      poppins:['poppins'],
     },
    colors:{
      transparent: 'transparent',
      current:'currentColor',
      green:'#437223',
      lb:'#333333',
      gray:'#F2F2F2',
      dg:'#D9D9D9',s
      white:'#FFFFFF',
    },
    fontWeight:{
      semibold: 600,
      normal: 400,
    },
    
  },
  plugins: [],
}
}
