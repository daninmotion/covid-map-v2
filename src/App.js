/** @jsx jsx */
import { useState } from 'react';
import { jsx, ThemeProvider, Box, Heading, Select, Flex, Text, Card } from 'theme-ui';
import { useSpring, animated } from 'react-spring';

//Relative path imports
import theme from './theme';
import './base.css';
import SVGIcon from './components/Icons/index';

function App() {

  //Animation
  const AnimatedCard = animated(Card);
  const AnimatedSVGIcon = animated(SVGIcon);

  const [toggle, setToggle] = useState(!true);

  const { x, color, fill, backgroundColor } = useSpring({ 
    from: { x: 1 }, x: toggle ? 1.2 : 1,
    color: toggle ? '#FF8B1A' : '#ADADAD',
    backgroundColor: toggle ? '#FAF2EA' : '#2C2C31',
    fill: toggle ? '#FF8B1A' : '#ADADAD',
  });

  const onClickAnimateCard1 = () => {
    setToggle(!toggle);
    console.log(toggle);
  }

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
            <Select variant='forms.select.ghost' defaultValue='WorldWide'>
              <option>WorldWide</option>
              <option>USA</option>
              <option>Ukraine</option>
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
                <Text sx={{ alignSelf: 'center', marginLeft: '8px' }} variant='text.caption-1'>Total Cases</Text>
              </Box>
              <Heading sx={{ marginTop: '8px' }} variant='text.heading.heading-4'>+3.2m</Heading>
            </Box>
          </AnimatedCard>
          
          <AnimatedCard sx={{ marginLeft: 4}} variant='cards.primary'>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box sx={{ display: 'flex' }}>
                <SVGIcon 
                  width='18px'
                  height='18px'
                  name='icon-heart'
                  fill='#ADADAD'
                />
                <Text sx={{ alignSelf: 'center', marginLeft: '8px' }} variant='text.caption-1'>Recovered</Text>
              </Box>
              <Heading sx={{ marginTop: '8px' }} variant='text.heading.heading-4'>+12.5k</Heading>
            </Box>
          </AnimatedCard>
          
          <AnimatedCard sx={{ marginLeft: 4}} variant='cards.primary'>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box sx={{ display: 'flex' }}>
                <SVGIcon 
                  width='18px'
                  height='18px'
                  name='icon-x'
                  fill='#ADADAD'
                />
                <Text sx={{ alignSelf: 'center', marginLeft: '8px' }} variant='text.caption-1'>Deaths</Text>
              </Box>
              <Heading sx={{ marginTop: '8px' }} variant='text.heading.heading-4'>+2.3k</Heading>
            </Box>
          </AnimatedCard>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
