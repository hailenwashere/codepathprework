import { createClient } from '@supabase/supabase-js';

const URL = 'https://zpfhgihzktqyvwmgblma.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwZmhnaWh6a3RxeXZ3bWdibG1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM3MTUwMTIsImV4cCI6MjAzOTI5MTAxMn0.AW-zlTg5Rbu6ZlFy-45FdigqrlohZ4l6L3mzEgDv-TM';
const supabase = createClient(URL, API_KEY);
export default supabase
