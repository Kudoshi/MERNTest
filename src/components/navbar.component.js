import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <Link to="/" className="navbar-brand ps-4">Home</Link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item"><Link to="/create" className="nav-link">Create Competition</Link></li>
                    </ul>
                </div>

            </nav>

        )
    }

}