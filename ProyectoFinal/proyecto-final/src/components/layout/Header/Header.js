import React from 'react'
import {Link} from  'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to ="/">
                  INICIO
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to ="/laliga">
                  La Liga
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to ="/premier">
                  Premier League
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to ="/bundesliga">
                  Bundesliga
                </Link>
              </li>
          </ul>
            </nav>
        </header>
    )
}

export default Header