const mongoose = require("mongoose");


const courseSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      title: { type: String, required: true },
      course_type:{ type:String, require: true },
      price:{ type:Number, require: true },
      image:{ type: String, required: true},
      description: { type: String, required: true},
      content: [{ type: String, required: true }],
      learn: [{ type: String, required: true }],
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("course", courseSchema);