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
    httpOnly: true,          // Cannot be accessed via JavaScript
    secure: true,            // Must be sent over HTTPS
    sameSite: 'none',        // Allows cross-origin cookies
    domain: 'cookies-testing-bice.vercel.app', // Backend domain
    maxAge: 3600000          // 1 hour
});

    res.json({ message: 'Cookie set the res json works on console ?' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
