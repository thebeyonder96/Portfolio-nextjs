// app/api/log-visit/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { UAParser } from 'ua-parser-js';

export async function GET(req: NextRequest) {
  const userAgent = req.headers.get('user-agent') || '';
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'Unknown';

  const parser = new UAParser(userAgent);
  const os = parser.getOS().name || 'Unknown';

  try {
    await prisma.visit.create({
      data: {
        ip,
        os,
        userAgent,
      },
    });
    return NextResponse.json({ message: 'Visit logged' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Logging failed' }, { status: 500 });
  }
}
