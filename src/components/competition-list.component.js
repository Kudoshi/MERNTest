import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

const CompetitionRecord = props => (
    <tr>
        <td>{props.competition.CompetitionName}</td>
        <td>{props.competition.CompetitionDescription.CompetitionDetail}</td>
        <td>
            
        </td>
    </tr>
)

export default class CompetitionList extends Component {
    constructor(props)
    {
        super(props);

        // this.deleteCompetition = this.deleteCompetition.bind(this);

        this.state = {
            competitions: []
        }
    }

    componentDidMount()
    {
        axios.get("http://localhost:5000/api/competition")
            .then(res => {
                this.setState({ competitions: res.data });
            })
            .catch(err => {
                console.log(err);
            })
    }

    renderCompetitionList() {
        return this.state.competitions.map(currentCompetition => {
            console.log("in List()")
            return <CompetitionRecord competition={currentCompetition} key={currentCompetition._id} />;

            //TODO Add and delete feature
        })
    }


    render() {

        return(
            <div>

                <h3>Competition List</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Competition Name</th>
                            <th>Competition Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderCompetitionList() }
                    </tbody>
                </table>
            </div>

        )
    }
}