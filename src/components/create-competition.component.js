import React, { Component } from 'react';
import axios from 'axios'

export default class CreateCompetition extends Component {
    constructor(props) {
        super(props);
        this.onChangeCompetitionName = this.onChangeCompetitionName.bind(this);
        this.onChangeCompetitionDetail = this.onChangeCompetitionDetail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = { 
            competitionName: '',
            competitionDetail: ''
        }
    }

    onChangeCompetitionName(e) {
        this.setState({competitionName : e.target.value})
    }

    onChangeCompetitionDetail(e) {
        this.setState({competitionDetail : e.target.value})
    }

    onSubmit(e)
    {
        e.preventDefault();
        console.log("I am in on submit")
        const competitionRecord = 
        {
            CompetitionName: this.state.competitionName,
            CompetitionDescription: {
                CompetitionDetail: this.state.competitionDetail
            }

        };

        axios.post("http://localhost:5000/api/competition/add", competitionRecord)
            .then(res => console.log(res.data));

        this.setState({
            competitionName: '',
            competitionDetail: ''
        })
    }

    render() {
        return(
            <div>
                <h3>Create New Competition</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Competition Name: </label>
                        <input type='text'
                            required
                            className='form-control'
                            value={this.state.competitionName}
                            onChange={this.onChangeCompetitionName}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Competition Detail: </label>
                        <input type='text'
                            required
                            className='form-control'
                            value={this.state.competitionDetail}
                            onChange={this.onChangeCompetitionDetail}
                        />
                    </div>
                    <div className='form-group'>
                        <input type="submit" value="Create Competition" className="btn btn-primary"/>
                    </div>

                </form>

            </div>
        )
    }
}