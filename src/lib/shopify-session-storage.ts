import { Session } from '@shopify/shopify-api';
import { db } from '@/db';
import { shopifySessions } from '@/db/schema';
import { eq } from 'drizzle-orm';

export const supabaseSessionStorage = {
  async storeSession(session: Session): Promise<boolean> {
    await db.insert(shopifySessions).values({
      id: session.id,
      shop: session.shop,
      state: session.state,
      isOnline: session.isOnline,
      scope: session.scope,
      accessToken: session.accessToken!,
      expires: session.expires,
    }).onConflictDoUpdate({
      target: shopifySessions.id,
      set: {
        accessToken: session.accessToken!,
        scope: session.scope,
        expires: session.expires,
      },
    });
    return true;
  },

  async loadSession(id: string): Promise<Session | undefined> {
    const rows = await db.select().from(shopifySessions).where(eq(shopifySessions.id, id));
    if (!rows.length) return undefined;
    
    const row = rows[0];
    return new Session({
      id: row.id,
      shop: row.shop,
      state: row.state,
      isOnline: row.isOnline ?? false,
      scope: row.scope ?? undefined,
      accessToken: row.accessToken,
      expires: row.expires ?? undefined,
    });
  },

  async deleteSession(id: string): Promise<boolean> {
    await db.delete(shopifySessions).where(eq(shopifySessions.id, id));
    return true;
  },
};