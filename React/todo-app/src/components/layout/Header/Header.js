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
                <Link className="nav-link" to ="/create">
                  CREATE
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to ="/done">
                  DONE
                </Link>
              </li>
          </ul>
            </nav>
        </header>
    )
}

export default Header
