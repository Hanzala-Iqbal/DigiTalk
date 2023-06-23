import mongoose from "mongoose";

const UniversitySchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
  },
  extension: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  }
});


const University = mongoose.model('University', UniversitySchema, 'universities');

export default University;
