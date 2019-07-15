import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import { getVenues } from '../../foursquare';

import './styles.css'

export function VenuItem({
  id, name, location, overVenueId, handleOverVenue
}) {
  return <div
    className={`venue-item ${overVenueId === id ? 'over' : ''}`}
    onPointerEnter={() => handleOverVenue(id)}
    onPointerLeave={() => handleOverVenue(null)}
    onClick={() => {
      if (window.confirm("Would you like to add this venue to your list?")) {
        alert('yes, do it')
      } else {
        alert('nope')
      }
    }}
  >{name} - {location.address}</div>
}

export class VenuesCard extends Component {
  state = {
    searchTerm: '',
    venues: [],
    overItemId: null
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

  handleOverVenue = (id) => {
    this.setState({ overVenuId: id })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.startSearch()
  }

  render() {
    var venues = this.state.venues;
    return (<WeddingCard {...this.props}>
      {
        !venues && "loading..." || venues.map(item => (
          <VenuItem
            key={item.id}
            {...item}
            overVenueId={this.state.overVenueId}
            handleOverVenue={this.handleOverVenue}
          />
        ))}
      <form onSubmit={this.handleSubmit}>
        <input placeholder='category search' value={this.state.searchTerm} onChange={this.handleChange}></input>
        <button onClick={this.startSearch}>search</button>
      </form>
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