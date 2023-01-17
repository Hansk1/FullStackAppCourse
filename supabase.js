import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vhqrtzvqsvahfufhhain.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZocXJ0enZxc3ZhaGZ1ZmhoYWluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM0NzUxODYsImV4cCI6MTk4OTA1MTE4Nn0.iArqPvBddaXTW23TREZWDA5Hua0uoE002-jpr83CqpA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
