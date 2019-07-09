// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import './Map.css';


// var foursquare = require('react-foursquare')({
//   clientID: 'FZBQBUWMSKAWDAMPRQZFJMJBTP0U2OZH1YTF1R4VXZ0S22CD',
//   clientSecret: '1JB0DZSHW2E5Q4R5PBHQTLIEA1V5TGT5J2TA2H4AAEF32XTK'  
// });

// var params = {
//   "ll": "37.7749,-122.4194",
//   "query": 'Blue Bottle'
// };

// export default class FoursquareDemo extends Component {

//   constructor(props) {
//      super(props);
//      this.state = {
//        items: []
//      };
//    }

//   componentDidMount() {    
//     foursquare.venues.getVenues(params)
//       .then(res=> {
//         this.setState({ items: res.response.venues });
//       });
//   }

//   render() {
//     return (
//     <div>
//         <div>Items:</div>
//         { this.state.items.map(item=> { return <div key={item.id}>{item.name}</div>}) }
//     </div>
//   )
//   }
// }

// ReactDOM.render(
//   <FoursquareDemo />,
//   document.getElementById('root')
// );

