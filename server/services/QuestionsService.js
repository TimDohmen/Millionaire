import { dbContext } from "../db/DbContext"

class QuestionsService {
  async create(body) {
    let question = await dbContext.Questions.create(body)
    return question
  }
  async getAll() {
    let questions = await dbContext.Questions.find()
    console.log("from service", questions)
    return questions
  }

}

export const questionsService = new QuestionsService()