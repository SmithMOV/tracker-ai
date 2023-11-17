//this this middleware file is used to protect the routes provided by Clerk

import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  //these are the routes we are not protecting
  publicRoutes: ['/'],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
