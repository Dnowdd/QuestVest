import { createClient } from "@supabase/supabase-js";

// Substitua com a URL e a chave pública da sua API
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL or Anon Key is missing.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
