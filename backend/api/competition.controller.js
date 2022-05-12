import Competition from "./competition.model.js"

export default class CompetitionController {
    static async apiGetCompetition(req, res)
    {
        console.log("Competition List requested...")
        Competition.find().then(
            competitionList => console.log(res.json(competitionList))
        ).catch(
            err => res.status(400).json("Error: "+ err)
        );
    }

    static async apiAddCompetition(req, res)
    {
        console.log("Competition adding...")
        const competitionName = req.body.CompetitionName;
        const competitionDetail = req.body.CompetitionDescription.CompetitionDetail;
        const newCompetition = new Competition({
            CompetitionName : competitionName,
            CompetitionDescription : {
                CompetitionDetail : competitionDetail
            }
        });
        newCompetition.save()
            .then(() => res.json("Competition added"))
            .catch(err => res.status(400).json("Error: "+ err));
    }

    static async apiGetCompetitionById(req, res)
    {
        Competition.findById(req.params.id)
            .then(competition => res.json(competition))
            .catch(err => res.status(400).json("Error: "+ err));
    }

    static async apiUpdateCompetitionById(req, res)
    {
        Competition.findById(req.params.id)
            .then(competition => {
                competition.CompetitionName = req.body.CompetitionName;
                competition.CompetitionDescription.CompetitionDetail = req.body.CompetitionDescription.CompetitionDetail;

                competition.save()
                    .then(() => res.json("Competition updated"))
                    .catch(err => res.status(400).json("Error: "+ err));
            })
            .catch(err => res.status(400).json("Error: "+ err));
    }

    static async apiDeleteCompetitionById(req, res)
    {
        Competition.findByIdAndDelete(req.params.id)
            .then(() => res.json("Competition deleted"))
            .catch(err => res.status(400).json("Error: "+ err));
    }
}