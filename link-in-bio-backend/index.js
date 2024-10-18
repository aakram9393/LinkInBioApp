const express = require('express')
const cors = require('cors')
const { createClient } = require('@supabase/supabase-js')

const app = express()
app.use(cors())
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000", // Replace with your frontend's URL
    credentials: true, // If you need to send cookies or authentication headers
  }));

const supabaseUrl = 'https://wboawlqlyrvuuigpmvfa.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indib2F3bHFseXJ2dXVpZ3BtdmZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkyNTA5NzQsImV4cCI6MjA0NDgyNjk3NH0.17XzNO5ytdJwvR7qbSRZt7kVxnajzZNiDUedsokOAIg'
const supabase = createClient(supabaseUrl, supabaseKey)


app.get('/', (req,res) => {
    res.send('Link in Bio API is running')
});

app.listen(5000, ()=>{
    console.log('Server running in port 5000')
})

app.post('/login', async (req,res) =>{
    const { email, password } = req.body
    const { user,error } = await supabase.auth.signIn({ email, password });
    if(error) return res.status(400).json({ error: error.message });
    res.status(200).json({ user });
});

app.post('/profiles', async (req,res)=>{
    const { username, bio, avatar_url } = req.body
    const { data,error } = await supabase
    .from('profiles')
    Insert([{ username, bio, avatar_url }])
    if(error) return res.status(400).json({ error: error.message });
    res.status(201).json(data);
});

app.post('/links', async(req,res)=>{
    const {profile_id,url,title} = req.body
    const {data,error} = await supabase
     .from('links')
     .insert([{ profile_id, url, title }])

    if (error) return res.status(400).json({ error: error.message })
    res.status(201).json(data)     
});

// Registration Endpoint
app.post("/api/register", async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }
  
    try {
      // Register the user with Supabase
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });
  
      if (error) {
        return res.status(400).json({ message: error.message });
      }
  
      // Success response
      return res.status(200).json({ message: "Registration successful! Please check your email for confirmation." });
    } catch (err) {
      console.error("Registration error:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

// Login Endpoint
app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }
  
    try {
      // Authenticate the user with Supabase
      const { error, user } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
  
      if (error) {
        return res.status(401).json({ message: error.message });
      }
  
      // Return success response
      return res.status(200).json({ message: "Login successful", user });
    } catch (err) {
      console.error("Unexpected error during login:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
  });