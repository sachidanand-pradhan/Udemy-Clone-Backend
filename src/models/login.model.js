const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
        username: { type: 'string', min: 3, max: 20 },
        password: { type: 'string', min: 8 }
},
      
    {
      versionKey: false,
      timestamps: true,
    }
  );
  