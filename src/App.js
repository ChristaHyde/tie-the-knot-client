import React from "react";
///New - import for Maps.
import ReactDOM from 'react-dom';
// import './App.css';
/////Import for NavBar
import NavBar from "./components/NavBar";
// New - import the React Router components, and the Profile page component
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
// Import the React Router components, and the Places page component
import Venues from "./components/lib/api/Venues";
// NEW - import the PrivateRoute component
import PrivateRoute from "./components/PrivateRoute";
////////////////////////////////////////////////////////////////////////////
function App() {
  return (
    <div className="App">
      {/* New - use BrowserRouter to provide access to /profile */}
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          {/* Maps route */}
          <Route path="/venues" component={Venues} />
          {/* NEW - Modify the /profile route to use PrivateRoute instead of Route */}
         <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
 export default App;

/////////////////Adding Maps/location code and api///////////

var foursquare = require('react-foursquare')({
  clientID: 'FZBQBUWMSKAWDAMPRQZFJMJBTP0U2OZH1YTF1R4VXZ0S22CD',
  clientSecret: '1JB0DZSHW2E5Q4R5PBHQTLIEA1V5TGT5J2TA2H4AAEF32XTK'  
});

var params = {
  "ll": "37.7749,-122.4194",
  "query": 'Blue Bottle'
};

export  class FoursquareDemo extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       items: []
     };
   }

  componentDidMount() {    
    foursquare.venues.getVenues(params)
      .then(res=> {
        this.setState({ items: res.response.venues });
      });
  }

  render() {
    return (
    <div>
        <div>Items:</div>
        { this.state.items.map(item=> { return <div key={item.id}>{item.name}</div>}) }
    </div>
  )
  }
}

ReactDOM.render(
  <FoursquareDemo />,
  document.getElementById('root')
);



/////////////////////////////////////////////////////////////
// // import React from 'react';
// // import { Switch, Route } from 'react-router-dom';
// // import RecipeDetail from './Components/RecipeDetail/RecipeDetail';
// // import Profile from './Components/Profile/Profile';
// // import MainPage from './Components/MainPage/MainPage';
// // import Home from './Components/Home/Home';
// // export default (
// //     <div>
// //         <Switch>
// //             <Route exact path='/' component={Home}/>
// //             <Route path='/search' component={MainPage} />
// //             <Route path='/recipe/detail/:id' component={RecipeDetail} />
// //             <Route path='/profile' component={Profile} />
// //         </Switch>
// //     </div>
// )
