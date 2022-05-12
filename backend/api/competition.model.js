import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CompetitionSchema = new Schema({
    CompetitionName: { type: String, required: true },
    CompetitionDescription: { 
        CompetitionDetail: String,
    }}, 
    {
        timestamps: true
});

const Competition = mongoose.model("Competition", CompetitionSchema);
export default Competition;
