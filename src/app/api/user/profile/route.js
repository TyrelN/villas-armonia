import { createClient } from '@/lib/supabase-server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const userProfile = await prisma.user.findUnique({
      where: { supabaseId: user.id },
    });

    if (!userProfile) {
      return new Response("User not found", { status: 404 });
    }

    return new Response(JSON.stringify(userProfile), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

