import { cookies } from 'next/headers'
import { createServerSupabaseClient } from './supabase-utils'

export function createClient() {
  const cookieStore = cookies()
  return createServerSupabaseClient(cookieStore)
}
