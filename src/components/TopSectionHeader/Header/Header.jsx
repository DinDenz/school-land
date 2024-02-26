import React from 'react';
import './header.css';
import links from './dataForList';

export default function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-row">
                    <div className="header-left">
                        <a href="#" className='logo'>
                            картинка-ссылка
                        </a>
                    </div>
                    <div className="header-right">
                        <nav className="links-row">
                            <ul className='links-list'>
                                {links.map((link) => (
                                    <li key={link.id}>
                                        <a href={link.url}>{link.linkName}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
