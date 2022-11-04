
import { extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
  colors: {
    transparent: 'transparent',
    light: '#013220'
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    p: `'Inter', sans-serif`,
    footer:`'Inter', sans-serif`
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },

})

export default theme