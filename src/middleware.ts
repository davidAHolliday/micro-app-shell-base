import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add ngrok header to bypass the warning screen
  response.headers.set('ngrok-skip-browser-warning', 'true');

  return response;
}

// Apply middleware to all app routes
export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};