import express from "express"
import CompetitionController from "./competition.controller.js"

const router = express.Router()

router.route("/").get(CompetitionController.apiGetCompetition)
router.route("/add").post(CompetitionController.apiAddCompetition)
router.route("/:id").get(CompetitionController.apiGetCompetitionById)
router.route("/update/:id").post(CompetitionController.apiUpdateCompetitionById)
router.route("/delete/:id").delete(CompetitionController.apiDeleteCompetitionById)

export default router