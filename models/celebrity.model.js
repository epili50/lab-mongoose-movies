const { Schema, model } = require("mongoose");

const celebritySchema = new Schema({
    name:{
        type: String, 
        required: true,
        maxLenght: 50
    },
    occupation:{
        type:String,
        default:"unknown"
    },
    catchPhrase:{
        type: String,
        required: true,
    }
});

const Celebrity = model ("Celebrity", celebritySchema);

module.exports = Celebrity;