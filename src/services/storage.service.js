
var ImageKit = require("imagekit");
var mongoose = require('mongoose');
var imagekit = new ImageKit({
    publicKey : process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey : process.env.IMAGE_KIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGE_KIT_URL_ENDPOINT    
});

function uploadFile(file){
    return new Promise((resolve,reject)=>{
        imagekit.upload({
            file: file.buffer, // the file buffer
            fileName: new mongoose.Types.ObjectId().toString(), // file name you want to save as
            folder:"project1"
        }, (error, result) => {
            if (error) {
                return reject(error);
            }
            resolve(result);
        })
    })
}


module.exports = uploadFile;