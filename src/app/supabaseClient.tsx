import { createClient } from "@supabase/supabase-js";
require("dotenv").config();

let url: string = process.env.URL ?? "default string";
let anon_key: string = process.env.ANON_KEY! ?? "default string";
const supabase = createClient(url, anon_key);

export default supabase;
