import { pgTable, text, timestamp, jsonb, boolean } from 'drizzle-orm/pg-core';

// Tenants / Stores / Organizations
export const tenants = pgTable('tenants', {
  id: text('id').primaryKey(), // e.g., myshop.myshopify.com or User ID
  platform: text('platform').notNull(), // 'shopify', 'chrome', 'stripe'
  accessToken: text('access_token'),
  status: text('status').default('active'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Subscriptions & Billing State
export const subscriptions = pgTable('subscriptions', {
  id: text('id').primaryKey(),
  tenantId: text('tenant_id').references(() => tenants.id),
  planId: text('plan_id').notNull(),
  status: text('status').notNull(), // 'ACTIVE', 'CANCELLED', 'TRIAL'
  currentPeriodEnd: timestamp('current_period_end'),
});

// Incoming Webhook Log Buffer (Async Debugging)
export const eventLogs = pgTable('event_logs', {
  id: text('id').primaryKey(),
  tenantId: text('tenant_id'),
  eventType: text('event_type').notNull(),
  payload: jsonb('payload'),
  createdAt: timestamp('created_at').defaultNow(),
});