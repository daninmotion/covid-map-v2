/** @jsx jsx */
import { useState, useEffect } from 'react';
import { jsx, ThemeProvider, Box, Heading, Select, Flex, Text, Card } from 'theme-ui';
import { useSpring, animated } from 'react-spring';

//Relative path imports
import theme from './theme';
import './base.css';
import SVGIcon from './components/Icons/index';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('Worldwide');

  //Animation
  const AnimatedCard = animated(Card);
  const AnimatedText = animated(Text);
  const AnimatedHeading = animated(Heading);
  const AnimatedSVGIcon = animated(SVGIcon);

  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  const [casesType, setCasesType] = useState('total');

  const { x, color, fill, backgroundColor } = useSpring({ 
    from: { x: 1 }, x: toggle && casesType === 'total' ? 1.2 : 1,
    color: toggle && casesType === 'total' ? '#FF8B1A' : '#ADADAD',
    backgroundColor: toggle && casesType === 'total' ? '#FAF2EA' : '#2C2C31',
    fill: toggle && casesType === 'total' ? '#FF8B1A' : '#ADADAD',
  });

  const { x2, color2, fill2, backgroundColor2 } = useSpring({ 
    from: { x2: 1 }, x2: toggle2 && casesType === 'recovered' ? 1.2 : 1,
    color2: toggle2 && casesType === 'recovered' ? '#01CB30' : '#ADADAD',
    backgroundColor2: toggle2 && casesType === 'recovered' ? '#E9FCED' : '#2C2C31',
    fill2: toggle2 && casesType === 'recovered' ? '#01CB30' : '#ADADAD'
  });

  const { x3, color3, fill3, backgroundColor3 } = useSpring({ 
    from: { x3: 1 }, x3: toggle3 && casesType === 'deaths' ? 1.2 : 1,
    color3: toggle3 && casesType === 'deaths' ? '#FF1A1A' : '#ADADAD',
    backgroundColor3: toggle3 && casesType === 'deaths' ? '#ECD9D9' : '#2C2C31',
    fill3: toggle3 && casesType === 'deaths' ? '#FF1A1A' : '#ADADAD'
  });

  //General
  const onClickAnimateCard1 = () => {
    setToggle(!toggle);
    setToggle2(false);
    setToggle3(false);

    setCasesType('total');
  }

  const onClickAnimateCard2 = () => {
    setToggle2(!toggle2);
    setToggle(false);
    setToggle3(false);

    setCasesType('recovered');
    // console.log(casesType);
  }

  const onClickAnimateCard3 = () => {
    setToggle3(!toggle3);
    setToggle(false);
    setToggle2(false);

    setCasesType('deaths');
  }

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch ("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => {
          return (
            {
              name: country.country,
              value: country.countryInfo.iso2
            }
          )
        })
        setCountries(countries);
      })
    }
    getCountriesData();
  }, []);

  // const onClickSetCasesTypeTotal = () => {
  //   setCasesType('total');
  //   console.log(casesType);
  // }

  // const onClickSetCasesTypeRecovered = () => {
  //   setCasesType('recovered');
  //   console.log(casesType);
  // }

  // const onClickSetCasesTypeDeaths = () => {
  //   setCasesType('deaths');
  //   console.log(casesType);
  // }

  // console.log('card 1: ' + toggle)
  // console.log('card 2: ' + toggle2)
  // console.log('card 3: ' + toggle3)
  // console.log('casesType: ' + casesType)

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        maxWidth: '1200px',
        margin: '0 auto',
        marginTop: 3
      }}>
        <Flex>
          <Heading sx={{ alignSelf: 'center', marginRight: 2 }} variant='text.heading.heading-5'>COVID-19 Tracker</Heading>
          <Box sx={{ 
            flex: 1, 
            maxWidth: '20%',
            'svg': {
              display: 'none'
            }
          }}>
            <Select variant='forms.select.ghost' defaultValue={country}>
              <option>{country}</option>
              {countries.map((country) => {
                return (
                  <option>{country.name}</option>
                );
              })}
            </Select>
          </Box>
          <SVGIcon 
            width='24px'
            height='24px'
            name='icon-caret-down'
            sx={{
              marginLeft: '-37px',
              alignSelf: 'center',
              flex: 'none'
            }}
          />
        </Flex>
        <Box
          sx={{
            marginTop: 4,
            display: 'flex'
          }}
        >
          <AnimatedCard 
            onClick={()=> onClickAnimateCard1() }
            variant='cards.primary'
            style={{
              transform: x.interpolate(x => `scale(${x})`),
              color: color,
              backgroundColor: backgroundColor
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box sx={{ display: 'flex' }}>
                <AnimatedSVGIcon 
                  width='18px'
                  height='18px'
                  name='icon-virus'
                  fill={fill}
                />
                <AnimatedText sx={{ alignSelf: 'center', marginLeft: '8px' }} variant='text.caption-1'>Total Cases</AnimatedText>
              </Box>
              <AnimatedHeading sx={{ marginTop: '8px' }} variant='text.heading.heading-4'>+3.2m</AnimatedHeading>
            </Box>
          </AnimatedCard>
          
          <AnimatedCard
            onClick={ ()=> onClickAnimateCard2() }
            sx={{ marginLeft: 4}} 
            variant='cards.primary'
            style={{
              transform: x2.interpolate(x2 => `scale(${x2})`),
              color: color2,
              backgroundColor: backgroundColor2
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box sx={{ display: 'flex' }}>
                <AnimatedSVGIcon 
                  width='18px'
                  height='18px'
                  name='icon-heart'
                  fill={fill2}
                />
                <AnimatedText sx={{ alignSelf: 'center', marginLeft: '8px' }} variant='text.caption-1'>Recovered</AnimatedText>
              </Box>
              <AnimatedHeading sx={{ marginTop: '8px' }} variant='text.heading.heading-4'>+12.5k</AnimatedHeading>
            </Box>
          </AnimatedCard>
          
          <AnimatedCard
            onClick={ ()=> onClickAnimateCard3() }
            sx={{ marginLeft: 4}} 
            variant='cards.primary'
            style={{
              transform: x3.interpolate(x3 => `scale(${x3})`),
              color: color3,
              backgroundColor: backgroundColor3
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box sx={{ display: 'flex' }}>
                <AnimatedSVGIcon 
                  width='18px'
                  height='18px'
                  name='icon-x'
                  fill={fill3}
                />
                <AnimatedText sx={{ alignSelf: 'center', marginLeft: '8px' }} variant='text.caption-1'>Deaths</AnimatedText>
              </Box>
              <AnimatedHeading sx={{ marginTop: '8px' }} variant='text.heading.heading-4'>+2.3k</AnimatedHeading>
            </Box>
          </AnimatedCard>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
