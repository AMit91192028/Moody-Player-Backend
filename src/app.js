const express  = require('express');
const SongsRoutes = require('./routes/songs.routes');  
const song = require('./model/songs.model');
const cors = require('cors');

const app= express()

app.use(express.json());
const allowedOrigins = ['https://moody-player-fronted.vercel.app', 'http://localhost:3000'];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error('The CORS policy for this site does not allow access from the specified Origin.'), false);
    }
    return callback(null, true);
  },
}));
app.use('/api',SongsRoutes);


module.exports = app;