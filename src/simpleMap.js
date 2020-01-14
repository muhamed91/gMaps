import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';


const SimpleMap = (props: any) => {
    const [center, setCenter] = useState({lat: 11.0168, lng: 76.9558 });
    const [zoom, setZoom] = useState(11);
    return (
        <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDJDvVEbIcdmEkDiQ-nhwjfGHRmbl62fLQ' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={11.0168}
            lng={76.9558}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;