// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// const isPublicRoute = createRouteMatcher(['/sign-in(.sk_test_uSyRycdlRF0WbMXqM9RTTEDph8qfORE7S0SCaX0Ea0)', '/sign-up(.sk_test_uSyRycdlRF0WbMXqM9RTTEDph8qfORE7S0SCaX0Ea0)'])

// export default clerkMiddleware((auth, request) => {
//   if (!isPublicRoute(request)) {
//     auth().protect()
//   }
// })

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]sk_test_uSyRycdlRF0WbMXqM9RTTEDph8qfORE7S0SCaX0Ea0\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).sk_test_uSyRycdlRF0WbMXqM9RTTEDph8qfORE7S0SCaX0Ea0)',
//     // Always run for API routes
//     '/(api|trpc)(.sk_test_uSyRycdlRF0WbMXqM9RTTEDph8qfORE7S0SCaX0Ea0)',
//   ],
// }

import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};