import React from 'react';
import './App.css';
import GoogleMapReact from 'google-map-react';
import fetchFlat from './containers/fetchFlat';
import Flat from './components/Flat';
import Marker from './components/Marker';


class App extends React.Component{

  state = {
    flats: [],
    allFlats: [],
    selectedFlat: null,
    search: ''
  }



  async componentDidMount() {
    
    let flats = await fetchFlat();
    this.setState({
      flats: flats, //Filter
      allFlats: flats //All Flats
    })
  }


 selectFlat = (flat) => {
   console.log(flat);
    this.setState({
      selectedFlat : flat
    })
  }



  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
      flats: this.state.allFlats.filter((flat) => new RegExp(event.target.value, "i").exec(flat.name) )
      
    });
  }


  


  render() {


     let center = {
      lat: 48.864716,
      lng: 2.349014 }

      if(this.state.selectedFlat) {
        center = {
          lat: this.state.selectedFlat.lat,
          lng: this.state.selectedFlat.lng
        }
      }
    return (
      <div className="app">
      <div className="main">
        <div className="search">
          <input 
            type="text"
            placeholder="Search..."
            value={this.state.search}
            onChange={this.handleSearch}

          />
        </div>

        <div className="flats">

        {
          this.state.flats.map((flat) => {
            return <Flat key={flat.id} flat={flat} selectFlat={this.selectFlat}  />
          })
        }

        </div>
      </div>

      <div className="map">
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDJDvVEbIcdmEkDiQ-nhwjfGHRmbl62fLQ' }}
          center={center}
          zoom={11}
        >

        {
          this.state.flats.map((flat) => {
            return <Marker 
            lat={flat.lat} 
            lng={flat.lng} 
            text={flat.price} 
            key={flat.id}
            selected={flat === this.state.selectedFlat} />
          })
        }

        </GoogleMapReact>
      </div>
      </div>
       
      </div>
    );
  }
}

export default App;
