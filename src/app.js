const express  = require('express');
const SongsRoutes = require('./routes/songs.routes');  
const song = require('./model/songs.model');
const cros = require('cors');

const app= express()

app.use(express.json());
app.use(cros());
app.use('/api',SongsRoutes);


module.exports = app;