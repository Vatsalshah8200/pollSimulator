import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Candidate from '../model/Candidate';
import './css/custom.css';

const ElectionResult = () => {
    const electionResults = useSelector((state) => state.castVote.results);
    const candidates = useSelector((state) => state.candidate.candidates);
    const tempVotes = [];
    for (const key in candidates) {
        if (electionResults[key]) {
            tempVotes.push(new Candidate(candidates[key].name, key, electionResults[key].votes));
        }
        else {
            tempVotes.push(new Candidate(candidates[key].name, key, candidates[key].votes));
        }
    }
    tempVotes.sort((a, b) => { return b.votes - a.votes });
    return (
        <div>

            <div className="header">
                <NavLink className="textLink" to="/" activeClassName="textLinkActive">Poll Simulator</NavLink>


                <div class="header-right">
                    <NavLink className="textLink" to="/become-candidate">Become Candidate</NavLink>
                    <NavLink className="textLink" to="/cast-vote">Cast Vote</NavLink>
                    <NavLink className="textLink" to="election-result">Election Result</NavLink>
                </div>
            </div>
            <div className="candidateInputContainer">
                <h1>Election Results</h1>
                {
                    tempVotes.map((cand) => <div className="resultNameContainer" key={cand.id}> {cand.name} - {cand.votes} </div>)
                }
            </div>

        </div>
    )
};

export default ElectionResult;