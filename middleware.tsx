import { NextRequest, NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

export async function middleware(req: NextRequest) {
  const redis = Redis.fromEnv();
  const maintenance_mode = await redis.get('maintenance_mode');
  if (Boolean(maintenance_mode)) {
    const url = req.nextUrl;
    url.pathname = `/maintenance`;
    return NextResponse.rewrite(url);
  }

  if (req.nextUrl.pathname === '/maintenance' && !Boolean(maintenance_mode)) {
    const url = req.nextUrl;
    url.pathname = `/`;
    return NextResponse.redirect(url);
  }
}
