import { NextResponse } from 'next/server';
import { db } from '@/db';
import { eventLogs } from '@/db/schema';

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const payload = JSON.parse(rawBody);
    const eventType = req.headers.get('x-event-type') || 'unknown';

    // 1. Log event asynchronously to prevent route timeouts
    await db.insert(eventLogs).values({
      id: crypto.randomUUID(),
      eventType,
      payload,
    });

    // 2. Immediately return 200 OK
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Webhook Handler Failed' }, { status: 500 });
  }
}