import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const { pathname } = request.nextUrl;
  
  // Debug logging for development
  if (process.env.NODE_ENV === 'development') {
    console.log(`🔍 Middleware: ${hostname}${pathname}`);
  }

  // Handle Yoga domain (yoga.vacademy.io)
  if (hostname.includes('yoga.vacademy')) {
    console.log(`🧘 Yoga domain detected: ${hostname}${pathname}`);
    
    // Redirect all paths to the yoga page
    if (pathname !== '/yoga') {
      console.log(`🔄 Redirecting ${pathname} to /yoga`);
      const url = request.nextUrl.clone();
      url.pathname = '/yoga';
      return NextResponse.redirect(url);
    }
    
    // Allow access to yoga page
    console.log(`✅ Allowing yoga route: ${pathname}`);
    return NextResponse.next();
  }

  // Handle Vacademy domain (lms.vacademy.localhost or lms.vacademy.io)
  if (hostname.includes('vacademy')) {
    console.log(`🟢 Vacademy domain detected: ${hostname}${pathname}`);
    
    // If on Vacademy domain but trying to access AI pages, redirect to blog
    if (pathname === '/' || pathname === '/ai-course-creator' || pathname === '/booking') {
      console.log(`🔄 Redirecting ${pathname} to /blog`);
      const url = request.nextUrl.clone();
      url.pathname = '/blog';
      return NextResponse.redirect(url);
    }
    
    // Allow Vacademy specific routes (blog and its sub-routes)
    if (pathname.startsWith('/blog')) {
      console.log(`✅ Allowing blog route: ${pathname}`);
      return NextResponse.next();
    }
    
    // Redirect any other paths to blog
    console.log(`🔄 Redirecting unknown path ${pathname} to /blog`);
    const url = request.nextUrl.clone();
    url.pathname = '/blog';
    return NextResponse.redirect(url);
  }

  // Handle AI domain (default for localhost and ai.vidyayatan.com)
  console.log(`🔵 AI domain: ${hostname}${pathname}`);
  
  // Block access to Vacademy-specific routes from AI domain
  if (pathname.startsWith('/blog')) {
    console.log(`🚫 Blocking blog access from AI domain`);
    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Only match page routes, exclude all Next.js internals and static assets
     */
    '/((?!_next|api|favicon.ico|public).*)',
  ],
}; 