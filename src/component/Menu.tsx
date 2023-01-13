import * as React from 'react';
import { Link } from 'react-router-dom';


interface NavbarProps {
    links: {
        text: string,
        url: string
    }[]
}

export const Menu: React.FC<NavbarProps> = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {props.links.map((link, index) => (
                        <li className="nav-item" key={index}>
                            <a className="nav-link" href={link.url}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}