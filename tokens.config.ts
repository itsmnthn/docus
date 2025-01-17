import { defineTheme } from 'pinceau'
import nuxtThemeTokens from '@nuxt-themes/tokens/tokens'

export default defineTheme({
  color: {
    primary: (nuxtThemeTokens.color as any).lightblue
  },
  docus: {
    page: {
      height: 'calc(100vh - calc(calc({docus.header.height} + {docus.footer.height})))',
      maxWidth: '90rem'
    },
    header: { height: '64px' },
    footer: { height: '50px' }
  },
  typography: {
    color: {
      primary: {
        50: '{color.primary.50}',
        100: '{color.primary.100}',
        200: '{color.primary.200}',
        300: '{color.primary.300}',
        400: '{color.primary.400}',
        500: '{color.primary.500}',
        600: '{color.primary.600}',
        700: '{color.primary.700}',
        800: '{color.primary.800}',
        900: '{color.primary.900}'
      },
      secondary: {
        50: '{color.gray.50}',
        100: '{color.gray.100}',
        200: '{color.gray.200}',
        300: '{color.gray.300}',
        400: '{color.gray.400}',
        500: '{color.gray.500}',
        600: '{color.gray.600}',
        700: '{color.gray.700}',
        800: '{color.gray.800}',
        900: '{color.gray.900}'
      }
    }
  }
})
