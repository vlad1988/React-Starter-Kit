import React from 'react'
import {BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

// const Home = (props) => {
//   console.log(props);
//   return <h4>Dispatcher...</h4>;
// }

const isAboutFunc = (match, location) => {
  console.log(match, location);
  return match
}

const Links = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/">Home</NavLink>
    <NavLink isActive={isAboutFunc} activeClassName="active" to="/about">About</NavLink>
  </nav>
)

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" render={() => <h4>Home</h4> } />
      <Route path="/about" render={() => <h4>About</h4> } />
    </div>
  </Router>
);

export default App
