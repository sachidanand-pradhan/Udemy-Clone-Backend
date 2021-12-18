const { Schema, model } = require('mongoose');

const checkoutSchema = new Schema({
    name:{type: String,required: true},
    card:{type: Number,required: true},
    month:{type: Number,required: true},
    year:{type: Number,required: true},
    security:{type: Number,required: true},
    country:{type: String,required: true},
    state:{type: String,required: true},
},
{
    versionKey: false,
    timestamps: true,
}
);

module.exports = model("checkout",checkoutSchema);
