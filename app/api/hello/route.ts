import { limiter } from '../config/limiter';
import { NextResponse } from 'next/server';
interface ApiResponse {
  message: string;
}

export async function GET(request: Request) {
  const response: ApiResponse = { message: 'hello world' };
  const remaining = await limiter.removeTokens(1);
  const origin = request.headers.get('origin');

  if (remaining < 0) {
    return NextResponse.json(null, {
      status: 429,
      statusText: 'rate limit exceeded',
      headers: {
        'Access-Control-Allow-Origin': origin || '*',
        'Content-Type': 'text/plain',
      },
    });
  }
  console.log('remaining', remaining);
  return NextResponse.json(response);
}
