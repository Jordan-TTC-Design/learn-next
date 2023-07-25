import { NextResponse } from 'next/server';

const allowedOrigins =
  process.env.NODE_ENV === 'production'
    ? ['https://example.com']
    : ['http://localhost:3000'];

export function middleware(request: Request) {
  const origin: any = request.headers.get('origin');
  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: 'Bad Request',
      headers: {
        'Access-Control-Allow-Origin': origin || '*',
        'Content-Type': 'text/plain',
      },
    });
  }

  const regex = new RegExp('/api/*');
  if (regex.test(request.url)) {
    console.log('api');
    return NextResponse.next();
  }
  console.log('middle');
  console.log(request.method);
  console.log(request.url);

  console.log(origin);
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
