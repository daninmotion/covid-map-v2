/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import { Circle, Popup } from "react-leaflet";
import numeral from 'numeral';

const casesTypeColors = {
  cases: {
    hex: "#FF8B1A",
    multiplier: 800,
  },
  recovered: {
    hex: "#01CB30",
    multiplier: 1200,
  },
  deaths: {
    hex: "#FF1A1A",
    multiplier: 2000,
  },
};

export const showDataOnMap = (data, casesType = "cases") => {
  return data.map((country, index) => {
    return (
      <Circle
        center={[country.countryInfo.lat, country.countryInfo.long]}
        fillOpacity={0.1}
        color={casesTypeColors[casesType].hex}
        fillColor={casesTypeColors[casesType].hex}
        weight={1}
        radius={
          Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
        }
        key={index}
      >
        <Popup className="custom-popup">
          <div
            sx={{
              display: "flex",
              marginBottom: "8px",
            }}
          >
            <div>
              <img
                sx={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "100%",
                  objectFit: "cover",
                  maxWidth: "none",
                }}
                src={`${country.countryInfo.flag}`}
                alt="Flag"
              />
            </div>
            <Heading
              as="h2"
              variant="text.caption-1"
              sx={{
                color: "white.0",
                alignSelf: "center",
                marginLeft: "8px",
              }}
            >
              {country.country}
            </Heading>
          </div>
          <div>
            <span
              sx={{
                color: "orange.0",
                fontWeight: "semiBold",
                fontSize: 3,
              }}
            >
              {numeral(country.cases).format("0,0")}
            </span>
            <Heading
              as="span"
              variant="text.caption-2"
              sx={{ color: "white.0", marginLeft: "8px" }}
            >
              Cases
            </Heading>
          </div>

          <div sx={{ marginTop: "8px" }}>
            <span
              sx={{
                color: "green.0",
                fontWeight: "semiBold",
                fontSize: 3,
              }}
            >
              {numeral(country.recovered).format("0,0")}
            </span>
            <Heading
              as="span"
              variant="text.caption-2"
              sx={{ color: "white.0", marginLeft: "8px" }}
            >
              Recovered
            </Heading>
          </div>

          <div sx={{ marginTop: "8px" }}>
            <span
              sx={{
                color: "red.0",
                fontWeight: "semiBold",
                fontSize: 3,
              }}
            >
              {numeral(country.deaths).format("0,0")}
            </span>
            <Heading
              as="span"
              variant="text.caption-2"
              sx={{ color: "white.0", marginLeft: "8px" }}
            >
              Deaths
            </Heading>
          </div>
        </Popup>
      </Circle>
    );
  });
};

export const prettyPrintStat = (stat) => {
  return (
    stat ? `+${numeral(stat).format('0,0a')}` : '+0'
  );
}
