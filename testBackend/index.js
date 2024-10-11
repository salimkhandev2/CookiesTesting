const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;
// use cors
const cors = require('cors');
app.use(cors({
    origin: 'https://cookies-testing-frontend.vercel.app',
    credentials: true
}));



app.use(express.json());
app.use(cookieParser());


app.post('/set-cookie', (req, res) => {
 
   let token="SalimKhan"; // Get the value from the request body
res.cookie('adminToken', token, {
    httpOnly: true,          // Prevent access via JavaScript
    secure: true,            // Must be true for HTTPS
    sameSite: 'none',        // Allows cross-origin requests
    domain: 'cookies-testing-bice.vercel.app', // Backend domain
    maxAge: 3600000,         // Expiry time (1 hour) – to make it persistent
    path: '/'                // Ensure it's available for the entire domain
});


    res.json({ message: 'Cookie set the res json works on console ? hmm' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
