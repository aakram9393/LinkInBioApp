import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wboawlqlyrvuuigpmvfa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indib2F3bHFseXJ2dXVpZ3BtdmZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkyNTA5NzQsImV4cCI6MjA0NDgyNjk3NH0.17XzNO5ytdJwvR7qbSRZt7kVxnajzZNiDUedsokOAIg';

export const supabase = createClient(supabaseUrl, supabaseKey);