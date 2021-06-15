const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class',
    prefix: 'tw-',
    theme: {
      extend: {
        colors: {
          coolGray: colors.coolGray,
          warmGray: colors.warmGray,
        },
        fontFamily: {
          'encode-sans': ['Encode Sans', 'sans-serif'],
          'open-sans': ['Open Sans', 'sans-serif']
        },
        spacing: {
          '1/2': '50%',
          '1/3': '33.333333%',
          '2/3': '66.666667%',
          '1/4': '25%',
          '2/4': '50%',
          '3/4': '75%',
          '1/5': '20%',
          '2/5': '40%',
          '3/5': '60%',
          '4/5': '80%',
          '1/8': '12.5%',
          '1/12': '8.333333%',
          '2/12': '16.666667%',
          '5/12': '41.666667%',
          '7/12': '58.333333%',
          '10/12': '83.333333%',
          '11/12': '91.666667%',
          '9/16': '56.25%',
          '4/3': '133.33333%',
          '16/9': '177.77778%',
          'full': '100%',
          '1/100': '1%',
          '7/100': '7%',
          '1/20': '5%',
          '0.25': '0.25%',
          '1px': '1px',
          '2px': '2px',
          '250px': '15.625rem',
          '264px': '16.5rem',
          '294px': '18.375rem',
          '300px': '18.75rem',
          '340px': '21.25rem',
          '376px': '23.5rem',
          '400px': '25rem',
          '438px': '27.375rem',
          '456px': '28.5rem',
          '466px': '29.125rem',
          '480px': '30rem',
          '525px': '32.8125rem',
          '552px': '34.5rem',
          '690px': '43.125rem',
          '95vh': '95vh'
        },
        fontSize: {
          '50px/54px': ['3.125rem', '1.08'],
          '32px/40px': ['2rem', '1.25'],
          '26px/33px': ['1.625rem', '1.269'],
          '22px/28px': ['1.375rem', '1.273'],
          '20px/25px': ['1.25rem', '1.25'],
          '18px/24px': ['1.125rem', '1.333'],
          '16px/24px': ['1rem', '1.4'],
          '18px/36px': ['1.125rem', '2'],
          '45px/56px': ['2.8125rem', '1.244'],
          '20px/29px': ['1.25rem', '1.45'],
          '28px/34px': ['1.75rem', '1.214'],
          '14px/20px': ['0.875rem', '1.429'],
          '12px/16px': ['0.75rem', '1.333'],
          '16px/22px': ['1rem', '1.375'],
          '36px/42px': ['2.25rem', '1.167'],
          '24px/44px': ['1.5rem', '1.833'],
          '24px/36px': ['1.5rem', '1.5'],
          '80px/94px': ['5rem', '1.175']
         },
         gridTemplateColumns: {
           '6/4': '60% 40%',
           'auto-fit': 'repeat(auto-fit, 1fr)'
         },
         gridTemplateRows: {
          '75/25': '75% 25%'
         },
         maxWidth: {
          '690px': '43.125rem',
         },
         maxHeight: {
          '400px': '25rem',
         }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }