/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'xs': '350px',

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    extend: {
    spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '60rem',
    },
        keyframes:{
          'trans-right':{
            "0%, 100%" : {transform : 'translateX(100px)'},
            "50%": {transform: "translateX(0)"}
          },
          'trans-left':{
            "0%, 100%" : {transform : 'translateX(-100px)'},
            "50%": {transform: "translateX(0)"}
          },
          spin: {
            to: {
              transform: 'rotate(360deg)',
            },
          },
          ping: {
            '75%, 100%': {
              transform: 'scale(2)',
              opacity: '0',
            },
          },
          wiggle: {
            "0% , 100%" :{ transform : 'rotate(-3deg)'
            },
            "50%": {transform: "rotate(3deg)"},
          },
          beat: {
            "0% , 100%" :{ transform : 'scale(1)'
            },
            "50%": {transform: "scale(2)"},
          },
          RtL:{
            "0%":{transform:'translateX(110%)'},
            "100%":{transform:'translate(0%)'}
          }
          
        },
        animation:{
          'trans-right' : 'trans-right 1.5s ease-in-out infinite',
          'trans-left' : 'trans-left 1.5s ease-in-out infinite',
          'spin' : 'spin 20s ',
          'ping' : 'ping 5s infinite',
          'wiggle' : 'wiggle 2s ease-in-out infinite',
          'beat' : 'beat 2s ease-in-out infinite',
          'RtL': 'RtL 2.5s ease-in-out 2.3s',
          
        }

      
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true })
  ],
}
