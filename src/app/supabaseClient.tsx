import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://ituxidmdihfogetbxjad.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0dXhpZG1kaWhmb2dldGJ4amFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MjIwNTIsImV4cCI6MjA3NTA5ODA1Mn0.SaT9WCPufitGx7-ZdJSBzU_r9vN_K8qmocqb9cUvnAc"
);

export default supabase;
