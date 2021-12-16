const mongoose = require("mongoose");


const courseSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      title: { type: String, required: true },
      image:{ type: String, required: true},
      rating:{ type: String, required: true},
      price:{ type:Number, require: true },
      oldprice:{ type:Number, require: true },
      shortDecp:{ type: String, required: true},
      author: { type: String, required: true},
      learn: [{ type: String, required: true }],
      content: [{ type: String, required: true }],
      description: { type: String, required: true},
      requirement: [{ type: String, required: true }],
      include: [{ type: String, required: true }],
      tags:[{type:String, required: true}],
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("course", courseSchema);