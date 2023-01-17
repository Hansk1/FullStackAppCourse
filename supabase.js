import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "!!!supabase-url-here!!!";
const supabaseKey =
  "!!!supabase-key-here!!!";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
