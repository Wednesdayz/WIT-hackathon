import React from 'react';
import SearchBox from './searchbox'

import './styles/navbar.css'

class Navbar extends React.Component{
    render() {
        return (
			<div>
              <ul id="nav">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/FAQ">FAQ</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
			</div>
			
        );
    }
}


export default Navbar