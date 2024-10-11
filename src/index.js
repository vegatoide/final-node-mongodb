const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/user');


//password for admin: admin (rw)
//pasword for user: user (r)
const AuthUser = "admin";
const AuthPassword= "admin";


const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', userRoutes);


//routes
app.get('/', (req, res) => {
    res.send("Welcome to my API");
});

//mongodb linking
mongoose
    .connect(`mongodb+srv://${AuthUser}:${AuthPassword}@tpfinal.iy6it.mongodb.net/?retryWrites=true&w=majority&appName=TPFinal`)
    .then(() => console.log('Connected to mongodb'))
    .catch((error) => console.error('error connecting to mongodb'))

app.listen(9000, () => console.log('server listening in port', port));