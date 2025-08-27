import { cookies } from 'next/headers'
import { createServerSupabaseClient, createAdminSupabaseClient } from './supabase-utils'

export async function createClient() {
  const cookieStore = await cookies()
  return createServerSupabaseClient(cookieStore)
}

// For admin operations that don't need cookies (bypasses RLS)
export function createAdminClient() {
  return createAdminSupabaseClient()
}