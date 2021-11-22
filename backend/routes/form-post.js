const express = require("express");
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

    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/public/' + req.files[i].filename)
    }


    console.log(req.body);
    console.log('files ', reqFiles)
    console.log(req.files);

    return;
    

    Item.findOne({ 'ItemCode': req.body.ItemCode }, async (err, docs) => {
        if (docs) {
            return res.send(`This article already exists !`);
        } else {
            // upload image into project dir
            const uploadFiles = await saveFiles(req.files.ItemPhoto, req.body);
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
const saveFiles = (photo, formFields) => {

    const photoExt = path.extname(photo.name)
    return new Promise((resolve, reject) => {
        try {
            let data = {}
            photo.mv('uploadedData/Items/' + formFields.ItemCode + photoExt);
            data['ItemPhoto'] = formFields.ItemCode + photoExt
            data['photoExt'] = photoExt;
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