const express = require("express");
var bodyParser = require('body-parser')
const multer = require('multer');
const router = express.Router();
const Item = require("../model/Item.js");
const path = require('path');



const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        console.log('file inside destination ', file)
        callback(null, './ItemImgCollection');
    },
    filename: function (req, file, callback) {
        callback(null, file.name + '-' + Date.now());
    }
});

const upload = multer({ storage : storage }).array('ItemImgCollection',6);


// Route to insert new articles into database
router.post("/form-post", async (req, res) => {

     let ItemPhoto = req.files.ItemPhoto;
     let sliderPhotos = req.files.ItemImgCollection;
   
    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < sliderPhotos.length; i++) {
        reqFiles.push(url + '/public/' + sliderPhotos[i].name)
    }
    
    Item.findOne({ 'ItemCode': req.body.ItemCode }, async (err, docs) => {
        if (docs) {
            return res.send(`This article already exists !`);
        } else {
            // upload image into project dir
            const uploadFiles = await saveFiles(ItemPhoto,sliderPhotos,req.body);
            // form data submit
            postData(uploadFiles, req.body)
                .then(() => {
                    // If we were able to successfully create a article, 
                    return res.send('sent');
                })
                .catch((error) => {
                    // If an error occurred, send it to the client
                    return res.send(`Error is ${error}`);
                });
        }
    })
});

// upload files into project directory
const saveFiles = (photo,sliderPhotos, formFields) => {

    const photoExt = path.extname(photo.name);
    return new Promise((resolve, reject) => {
        try {
            let data = {}
            let slider_photos=[];
            slider_photos_extention=[];
            let folder_path = 'uploadedData/Items/' + formFields.ItemCode + '/';
            photo.mv(folder_path+formFields.ItemCode+photoExt);

            for(let i=0;i<sliderPhotos.length;i++){
                let sphoto = sliderPhotos[i];
                sphotoExt = path.extname(sphoto.name);
                sphoto.mv(folder_path+sphoto.name);
                slider_photos.push(sphoto.name);
                slider_photos_extention.push(sphotoExt);
            }
            data['ItemPhoto'] = formFields.ItemCode + photoExt
            data['photoExt'] = photoExt;
            data['ItemImgCollection'] = slider_photos;
            data['ItemImgCollectionExt'] = slider_photos_extention;
            resolve({
                status: 200,
                data: data
            });
        } catch (e) {
            reject({
                status: 400,
                data: e
            });
        }
    });
}

// save form data into database
const postData = (filesUploaded, req) => {

    const payload = {
        ...req,
        ItemPhoto: filesUploaded.status === 200 ? filesUploaded.data.ItemPhoto : '',
        photoExt: filesUploaded.data.photoExt
    }
    return Item.create(payload);
}

module.exports = router;