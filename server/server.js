const express = require('express');
const exampleRouter = require('./routes/example.router');
const app = express();
const PORT = 5009;

// Vite will put all static files into a 
// build folder when deployed to Heroku.
app.use(express.static('dist'));
// Required for req.body
app.use(express.json());

// Routes will go here
// Routes must be prefixed in Vite
app.use('/api/example', exampleRouter);

// Start the server
app.listen(PORT, () => {
    console.log('Listening on port:', PORT);
});