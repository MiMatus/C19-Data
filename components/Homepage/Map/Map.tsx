import React from "react"
import { Wrapper, StyledCounter, StyledControl } from "./Map.style"
import GoogleMapReact from "google-map-react"
import MapStyles from "./styles"
import { Circle } from "./Circle"
import { CountyStatsDataResponse } from "../../../utils/getCountyStatsData"

interface MapProps {
  currentlyInfected: number
  totalDeaths: number
  countyData: CountyStatsDataResponse
}

export const Map: React.FC<MapProps> = ({
  countyData,
  currentlyInfected,
  totalDeaths,
}) => {
  const sortedDesc = countyData.data.sort((a, b) =>
    a.infectedCount < b.infectedCount
      ? 1
      : b.infectedCount < a.infectedCount
      ? -1
      : 0
  )

  const Circles = sortedDesc.map((data, index) => {
    return (
      <Circle
        key={data.nutsCode}
        size={
          index !== 0 ? data.infectedCount / sortedDesc[1].infectedCount : 1.3
        }
        title={data.title}
        lat={data.lat}
        lng={data.lng}
        deaths={data.deathCount}
        infected={data.infectedCount}
      />
    )
  })

  return (
    <Wrapper>
      <StyledCounter
        currentlyInfected={currentlyInfected}
        totalDeaths={totalDeaths}
      />
      <StyledControl />
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCKqCCVyj36sKauneMgOLTK83UhwYDLS_0" }}
        defaultCenter={{
          lat: 49.8580783,
          lng: 15.6787117,
        }}
        defaultZoom={7}
        yesIWantToUseGoogleMapApiInternals
        options={{
          styles: MapStyles,
          disableDefaultUI: true,
          draggable: false,
          gestureHandling: "none",
          zoomControl: false,
        }}
      >
        {Circles}
      </GoogleMapReact>
    </Wrapper>
  )
}
