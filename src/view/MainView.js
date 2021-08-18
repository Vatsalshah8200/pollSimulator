import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/custom.css';


const MainView = () => {
    return (
        <div className="headerScreenContainer">

            <div className="header">
                <NavLink className="textLink" to="/" activeClassName="textLinkActive">Poll Simulator</NavLink>


                <div class="header-right">
                    <NavLink className="textLink" to="/become-candidate">Become Candidate</NavLink>
                    <NavLink className="textLink" to="/cast-vote">Cast Vote</NavLink>
                    <NavLink className="textLink" to="election-result">Election Result</NavLink>
                </div>
            </div>
            <div className="headerScreenTitle">
                <h1>Poll Simulator Rules</h1>
            </div>
            <div>
                <h3>Become A candidate :-</h3>
                <p>To Add new candidate go on the page and add name and id than submit </p>
                <h3>Cast A vote :-</h3>
                <p>To give vote select candidate and enter your id the submit  </p>
                <h3>Eelction result :-</h3>
                <p>To check the result of election go to page and find the reult </p>
            </div>
        </div>
    )
};

export default MainView;