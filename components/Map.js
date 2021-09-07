import { useState } from 'react';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

function Map({ searchResults }) {

    const [selectedLocation, setSelectedLocation] = useState({});
    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat,
    }));


    // The latitude and longitude of the center of locations coordinates
    const center = getCenter(coordinates);


    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });

    return (
        <ReactMapGl mapStyle='mapbox://styles/shiv-2311/ckt7k16f041pr17o527hhqm5b'
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p
                            role='img'
                            className='cursor-pointer text-2xl animate-bounce'
                            onClick={() => setSelectedLocation(result)}
                            aria-label='push-pin'
                        >
                            📌
                        </p>
                    </Marker>

                    {/* The popup that should show if we click on Marker */}
                    {selectedLocation.long === result.long ? (
                        <Popup
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}

                        >
                            {result.title}
                        </Popup>
                    ) : (
                        false
                    )}
                </div>
            ))}

        </ReactMapGl>
    )
}

export default Map
