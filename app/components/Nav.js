var React = require('react');
// if you just wnat to do is to render anchor tag <a> then use Link.
// var Link = require('react-router-dom').Link;
// if you only want to change the style of the nave link and have more property then just NavLink
var NavLink = require('react-router-dom').NavLink;

function Nav() {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/' >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/battle'>
          Battle
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/popular'>
          Popular
        </NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;
