import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'hi'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
export const config = {
  // Skip all paths that should not be internationalized. This is a more robust matcher.
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};