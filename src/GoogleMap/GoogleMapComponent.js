import React, {useState} from 'react';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';
import PlacesAutocomplete, {geocodeByAddress, getLatLng,} from 'react-places-autocomplete';
import {mapStyle} from './MapStyle'
// import {api} from "./GoogleMapsApiKey";

export function MapContainer(props) {
    const [address, setAddress] = useState('');
    const [mapCenter, setMapCenter] = useState({
        lat: 45.657974,
        lng: 25.601198,
    });

    const mapContainerStyle = mapStyle;

    const handleChange = (addressInput) => {
        setAddress(addressInput);
    };


    const handleSelect = (addressInput) => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                console.log('Success', latLng);
                setAddress(addressInput)
                setMapCenter(latLng);
            })
            .catch(error => console.error('Error', error));
    };


    let image = 'https://i.im.ge/2021/11/08/oxrUM8.png';
    return (
        <div>
            <PlacesAutocomplete
                value={address}
                onChange={handleChange}
                onSelect={handleSelect}
            >
                {({getInputProps, suggestions, getSuggestionItemProps}) => (
                    <div>
                        <input
                            class={"input4 inputBox"} type={"text"} id={"search"}
                            {...getInputProps({
                                placeholder: 'Search Address',
                            })
                            }
                        />
                        <div class={"autocomplete textStyle"}>
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';

                                const style = suggestion.active
                                    ? {backgroundColor: 'yellow', cursor: 'pointer'}
                                    : {backgroundColor: 'white', cursor: 'pointer'};
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>

            <Map google={props.google}
                 initialCenter={
                     {lat: mapCenter.lat, lng: mapCenter.lng}
                 }
                 center={
                     {lat: mapCenter.lat, lng: mapCenter.lng}
                 }
                 containerStyle={
                     mapContainerStyle
                 }
                 zoom={12}
            >
                <Marker position={{lat: mapCenter.lat, lng: mapCenter.lng}}
                        icon={{url: image}}
                >
                </Marker>
            </Map>
        </div>
    )

}

export default GoogleApiWrapper({
    //apiKey: api
})(MapContainer);
