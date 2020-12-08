import React from "react"
import { Wrapper, StyledCounter, StyledControl } from "./Map.style"
import GoogleMapReact from "google-map-react"
import MapStyles from "./styles"
import { Circle } from "./Circle"

export const Map: React.FC = ({}) => {
  return (
    <Wrapper>
      <StyledCounter />
      <StyledControl />
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCKqCCVyj36sKauneMgOLTK83UhwYDLS_0" }}
        defaultCenter={{
          lat: 49.8580783,
          lng: 15.6787117,
        }}
        defaultZoom={8}
        yesIWantToUseGoogleMapApiInternals
        options={{
          styles: MapStyles,
          disableDefaultUI: true,
          draggable: false,
          gestureHandling: "none",
          zoomControl: false,
        }}
      >
        <Circle
          size={1}
          lat={49.8580783}
          lng={15.6787117}
          deaths={10}
          infected={100}
        />
      </GoogleMapReact>
    </Wrapper>
  )
}
