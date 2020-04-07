import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Question = new Schema(
  {
    Description: { type: String, required: true },
    Points: { type: Number },
    Time: { type: Number }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Question