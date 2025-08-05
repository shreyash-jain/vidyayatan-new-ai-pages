import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const { pathname } = request.nextUrl;
  
  // Always log for debugging
  console.log(`🔍 Middleware triggered: ${hostname}${pathname}`);

  // Handle Yoga domain (yoga.vacademy.io) - Check this FIRST
  if (hostname.includes('yoga')) {
    console.log(`🧘 Yoga domain detected: ${hostname}${pathname}`);
    
    // If already on /yoga path, allow it
    if (pathname === '/yoga') {
      console.log(`✅ Allowing yoga route: ${pathname}`);
      return NextResponse.next();
    }
    
    // Redirect any other path to /yoga
    console.log(`🔄 Redirecting ${pathname} to /yoga`);
    return NextResponse.redirect(new URL('/yoga', request.url));
  }

  // Handle Vacademy domain (but NOT yoga.vacademy)
  if (hostname.includes('vacademy') && !hostname.includes('yoga')) {
    console.log(`🟢 Vacademy domain detected: ${hostname}${pathname}`);
    
    // If on Vacademy domain but trying to access AI pages, redirect to blog
    if (pathname === '/' || pathname === '/ai-course-creator' || pathname === '/booking') {
      console.log(`🔄 Redirecting ${pathname} to /blog`);
      return NextResponse.redirect(new URL('/blog', request.url));
    }
    
    // Allow Vacademy specific routes (blog and its sub-routes)
    if (pathname.startsWith('/blog')) {
      console.log(`✅ Allowing blog route: ${pathname}`);
      return NextResponse.next();
    }
    
    // Redirect any other paths to blog
    console.log(`🔄 Redirecting unknown path ${pathname} to /blog`);
    return NextResponse.redirect(new URL('/blog', request.url));
  }

  // Handle AI domain (default for localhost and ai.vidyayatan.com)
  console.log(`🔵 AI domain: ${hostname}${pathname}`);
  
  // Block access to Vacademy-specific routes from AI domain
  if (pathname.startsWith('/blog')) {
    console.log(`🚫 Blocking blog access from AI domain`);
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}; 