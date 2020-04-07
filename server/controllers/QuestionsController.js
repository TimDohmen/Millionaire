import BaseController from "../utils/BaseController";
import { questionsService } from "../services/QuestionsService";


export class QuestionsController extends BaseController {

  constructor() {
    super("api/questions");
    this.router
      .get("", this.getAll)
      .post("", this.create);
  }

  async create(req, res, next) {
    try {
      let question = await questionsService.create(req.body)
      res.send({ Message: "Question Created", questionMade: question })
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      let questions = await questionsService.getAll()
      console.log(questions)
      res.send(questions)
    } catch (error) {
      next(error)
    }
  }




}