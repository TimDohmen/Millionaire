import ValueSchema from "../models/Value";
import QuestionSchema from "../models/Question"
import mongoose from "mongoose";

class DbContext {
  constructor() {
    this.Values = mongoose.model("Value", ValueSchema)
    this.Questions = mongoose.model("Question", QuestionSchema);

  }
}

export const dbContext = new DbContext();
