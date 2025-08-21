// app/api/auth/sync/route.ts
import { createClient } from '@/lib/supabase-server';
import { prisma } from '@/lib/prisma';

export async function POST() {
  const supabase = createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    return new Response("Unauthorized", { status: 401 });
  }

  // Check if user exists in Prisma
  const existing = await prisma.user.findUnique({
    where: { supabaseId: user.id },
  });

  if (!existing) {
    await prisma.user.create({
      data: {
        supabaseId: user.id,
        fullName: user.user_metadata?.full_name || user.email,
        email: user.email,
      },
    });
  }

  return new Response("Synced", { status: 200 });
}