import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import { getVenues } from '../../foursquare';

//import './styles.css'

export class VenuesCard extends Component {
  state = {
    searchTerm: '',
    venues: []
  };
  componentDidMount() {

  }

  startSearch = (event) => {
    const params = {
      query: this.state.searchTerm,
      "categoryId": "56aa371be4b08b9a8d5734c5,4bf58dd8d48988d171941735" // wedding halls
    };
    getVenues(params).then((venues) => {
      this.setState({ venues })
    });
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    var venues = this.state.venues;
    return (<WeddingCard {...this.props}>
      {!venues && "loading..." || venues.map(item => { return <div key={item.id}>{item.name}</div> })}
      <input placeholder='category search' value={this.state.searchTerm} onChange={this.handleChange}></input>
      <button onClick={this.startSearch}>search</button>
    </WeddingCard>);
  }
}

class WeddingCard extends Component {
  state = {};

  render() {
    var { header, title, children } = this.props;
    return (<Card className="full-width" border="primary">
      <Card.Header>{header || "(no title)"}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {children}
      </Card.Body>
    </Card>
    );

  }
}

export default WeddingCard;