const express = require('express');
const router = express.Router();    
const multer = require('multer');
const uploadFile = require('../services/storage.service'); // Import the uploadFile function
const upload = multer({storage: multer.memoryStorage()}); // this is used for file handling
const songModel = require("../model/songs.model");

router.post('/songs',upload.single("audio"),async(req,res)=>{
    console.log(req.body)
    console.log(req.file);

const fileData = await uploadFile(req.file)

const song  = await songModel.create({
    title:req.body.title,
    artist:req.body.artist,
    audio:fileData.url,
    mood:req.body.mood
})
console.log(fileData);
res.status(201).json({
        message: "Song uploaded successfully",
        song
    });
})

router.get('/songs',async (req,res)=>{
    const {mood} = req.query;
    const songs = await songModel.find({
        mood:mood
    }) 
    res.status(200).json({
        message:"songs fetched successfully",
        songs
    })
})
module.exports = router;