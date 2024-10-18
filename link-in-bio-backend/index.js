const express = require('express')
const cors = require('cors')
const { createClient } = require('@supabase/supabase-js')

const app = express()
app.use(cors())
app.use(express.json())

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

app.get('/profiles/:username', async (req,res) =>{
    const {username} = req.params
    const {data,error} = await supabase
     .from('profiles')
     .select('*, links(*)')
     .eq('username', username)

    if (error) return res.status(400).json({ error: error.message })
    res.status(200).json(data)     
});