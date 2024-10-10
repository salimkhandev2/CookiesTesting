const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;
// use cors
const cors = require('cors');
app.use(cors({
    origin: 'https://cookies-testing.vercel.app',
    credentials: true
}));



app.use(express.json());
app.use(cookieParser());


app.post('/set-cookie', (req, res) => {
 
   let value="Salim Khan" // Get the value from the request body
    res.cookie('myCookie', value, {
        httpOnly: true, // Cookie cannot be accessed via JavaScript
        secure: true, // Use secure cookies in production
        sameSite: 'Lax', // CSRF protection
        maxAge: 3600000 // 1 hour
    });
    res.json({ message: 'Cookie set successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
