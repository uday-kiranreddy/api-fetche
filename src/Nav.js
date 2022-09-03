import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    
  return (
    <nav>
        <h3 className='middle'>News From Api </h3>
        <ul>
            <Link  to='/Details'>
            <li className='middle'>Click to Show News </li>
            </Link>
        </ul>
        <br/>
    </nav>
  )
}

export default Nav