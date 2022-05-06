import { createClient } from '@supabase/supabase-js';

export default defineNuxtPlugin(() => {
    return {
        provide: {
            supabase: createClient(
                'https://zccjzcqgcbxscjucdyoh.supabase.co',
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjY2p6Y3FnY2J4c2NqdWNkeW9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTE3MzcwNjcsImV4cCI6MTk2NzMxMzA2N30.KI6tEUFhQPCG9R5ZMeh4ugNFAabFZWY6B5lB1hzuuNI'),
        },
    };
});
