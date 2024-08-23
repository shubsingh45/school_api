import mongoose from "mongoose";

const SchoolSchema = new mongoose.Schema({
   name:{
    type: String,
    required: true
   },
   address: {
    type: String,
    required: true
   },
   latitude: {
    type: Number,
    required: true
   },
   longitude:{
      type: Number,
      required: true
   }
})

const School = mongoose.model('School', SchoolSchema)
export default School