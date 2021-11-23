var mongoose = require("mongoose");

// Get the Schema constructor
var Schema = mongoose.Schema;

// Using Schema constructor, create a ItemSchema
var ItemSchema = new Schema({
    ItemName: {
        type: String,
        required: true
    },
    ItemCode: {
        type: String,
        required: true
    },
    ItemPrice: {
        type: Number,
        required: true
    },
    ItemCategory: {
        type: String,
        required: true
    },
    ItemSize: {
        type: Array
    },
    ItemDescription: {
        type: String
    },
    ItemComposition: {
        type: String
    },
    ItemPhoto: {
        type: String,
        required: true
    },
    photoExt: {
        type: String
    },
    ItemImgCollection: {
        type: Array
    },
    ItemImgCollectionExt: {
        type: Array
    }
});

// Create model from the schema
var Item = mongoose.model("Item", ItemSchema);

// Export model
module.exports = Item;