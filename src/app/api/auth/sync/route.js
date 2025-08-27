// app/api/auth/sync/route.js
import { createClient } from '@/lib/supabase-server';
import { prisma } from '@/lib/prisma';

export async function POST() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    // Check if user exists in Prisma
    const existing = await prisma.user.findUnique({
      where: { supabaseId: user.id },
    });

    if (!existing) {
      // Create a minimal user record with only required fields
      await prisma.user.create({
        data: {
          supabaseId: user.id,
          fullName: user.user_metadata?.full_name || user.email,
          email: user.email,
        },
      });
    }

    return new Response("Synced", { status: 200 });
  } catch (error) {
    console.error('Error syncing user:', error);
    return new Response("Internal Server Error", { status: 500 });
  }
}