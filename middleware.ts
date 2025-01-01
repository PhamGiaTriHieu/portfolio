import {NextRequest, NextResponse} from 'next/server';

export function middleware(request: NextRequest): NextResponse | void {
  const host = request.headers.get('host');

  if (host === 'myportfolio296.netlify.app') {
    const url = new URL(request.url);
    url.hostname = 'phamgiatrihieu.io.vn';
    return NextResponse.redirect(url.toString(), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*', // Apply middleware to all paths
};
