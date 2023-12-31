import React from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to={'/'} className={'navbar-brand'}>
                        Главная
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item float-right">
                                <Link className={'nav-link'} to={'/settings'}>
                                    Данные для трансляции
                                </Link>
                            </li>  
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}