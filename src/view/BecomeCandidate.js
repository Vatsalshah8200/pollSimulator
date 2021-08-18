import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCandidate } from '../app/action/CandidateAction';
import { NavLink } from 'react-router-dom';
import './css/custom.css';

const BecomeCandidate = () => {
    const dispatch = useDispatch();
    const [candidateName, setCandidateName] = useState('');
    const [candidateId, setCandidateId] = useState('');
    return (
        <div>
            {/* <div className="header">
                <div className="headerPollSimulator">
                    <NavLink className="textLink" to="/" >Poll Simulator</NavLink>
                </div>
                <div className="headerSub">   
                    <NavLink className="textLink" to="/become-candidate" activeClassName="textLinkActive">Become Candidate</NavLink>
                    <NavLink className="textLink" to="/cast-vote">Cast Vote</NavLink>
                    <NavLink className="textLink" to="election-result">Election Result</NavLink>
                </div>
            </div> */}
            <div className="header">
                <NavLink className="textLink" to="/" activeClassName="textLinkActive">Poll Simulator</NavLink>


                <div class="header-right">
                    <NavLink className="textLink" to="/become-candidate">Become Candidate</NavLink>
                    <NavLink className="textLink" to="/cast-vote">Cast Vote</NavLink>
                    <NavLink className="textLink" to="election-result">Election Result</NavLink>
                </div>
            </div>

            <div className="candidateInputContainer">
                <h1>Candidate Details</h1>
                <div className="inputBoxContainer">
                    <div className="inputFieldContainer">
                        <input type="text" value={candidateName} onChange={(e) => setCandidateName(e.target.value)} />
                    </div>
                    <div className="inputLabelContainer">
                        Candidate Name
                    </div>
                </div>
                <div className="inputBoxContainer">
                    <div className="inputFieldContainer">
                        <input type="text" value={candidateId} onChange={(e) => setCandidateId(e.target.value)} />
                    </div>
                    <div className="inputLabelContainer">
                        Candidate Id
                    </div>
                </div>
                <div>
                    <button className="submitBtn" onClick={() => { if (candidateName !== '' && candidateId !== '') { dispatch(addCandidate(candidateName, candidateId)); setCandidateName(''); setCandidateId(''); } else { alert('Please fill in the details before proceeding'); } }}>Submit</button>
                </div>
            </div>
        </div>
    )
};

export default BecomeCandidate;