import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // This is just a warning in development, but you should handle this better in production
  console.warn(
    "Supabase env vars missing. Supabase functionality will be disabled.",
  );
}

export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder",
);

export const checkSupabaseHealth = async () => {
  if (!supabaseUrl || !supabaseAnonKey) return false;
  try {
    // Just checking if we can get a response, even an error
    const { error } = await supabase.from("test").select("*").limit(1);
    // If the error is not about connection, we are mostly good.
    // Or if we check auth.getSession
    const { data } = await supabase.auth.getSession();
    return !!data;
  } catch (e) {
    return false;
  }
};
