const { Schema, model } = require('mongoose');

const paymentSchema = new Schema({
    name:{type: String,required: true},
    price:{type: Number,required: true},
},
{
    versionKey: false,
    timestamps: true,
}
);

module.exports = model("payment",paymentSchema);
