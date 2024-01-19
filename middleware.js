import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['lt', 'en'],
  defaultLocale: 'lt',
  localeDetection: false
})

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
}
