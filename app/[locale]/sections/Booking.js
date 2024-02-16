'use client'

import React, { useState, useEffect } from 'react'

import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Script from 'next/script'

export default function Booking({ title, isBooking }) {
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    const checkScriptLoaded = () => {
      if (window.bookingWidgetLoaded) {
        setScriptLoaded(true)
      }
    }

    const scriptLoadedTimer = setInterval(checkScriptLoaded, 800)

    return () => {
      clearInterval(scriptLoadedTimer)
    }
  }, [])

  return (
    <>
      {isBooking && !scriptLoaded && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            width: '100%',
            height: '100%',
            bgcolor: '#14161a',
            zIndex: 10000
          }}
        >
          <span className='loader' />
        </Box>
      )}
      <Box component='section' id='booking' className='fade-section'>
        <Image
          src='/images/bg1.png'
          fill
          style={{
            objectFit: 'cover',
            zIndex: -1,
            opacity: 0.1
          }}
          alt=''
        />

        <Container
          maxWidth='lg'
          disableGutters={true}
          sx={{
            py: { xs: 6, md: 12 },
            pt: isBooking ? { xs: 15, md: 18 } : null,
            color: '#fff',
            position: 'relative',
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: isBooking ? null : { xs: '1rem', sm: '2rem' }
            }}
          >
            <Typography
              variant='h6'
              sx={{
                fontSize: { xs: '1.8rem', md: ' 2rem' },
                fontWeight: 'bold',
                textAlign: 'center',
                lineHeight: isBooking ? '1.4' : null
              }}
            >
              {title}
            </Typography>
          </Box>
          <div id='calendar_container'></div>
        </Container>
      </Box>

      <Script
        defer
        strategy='beforeInteractive'
        type='text/javascript'
        id='calendar-widget'
        dangerouslySetInnerHTML={{
          __html: `
            window.bookingCompanyIds = ["-NpDsJV2ErBgnP7o2fWm"];
              window.bookingWidgetLang = 'ua';
              window.bookingWidgetTheme = 'transparent';

              window.bookingWidgetLoaded = false; // Global variable to track script loaded status
            
              window.onload = function() {
                window.bookingWidgetLoaded = true; // Set the variable to true when everything has loaded
              };

              window.bookingWidgetStyles = {
                container: {
                  minHeight:'unset'
                },
                booking: {
                  border: 'unset'
                },
                calendar_week: {
                  color:'#61efff'
                },
                widget_calendar_day: {
                  backdropFilter:'blur(10px)',
                  '& span': {
                    color:'#61efff!important'
                  }
                },
                calendar_header_title: {
                  color:'#61efff'
                },
                calendar_header_button: {
                  color:'#61efff',
                  fill: '#61efff'
                },
                widget_calendar_day_span: {
                  wordBreak: 'break-all'
                },
                modal_minus: {
                  '&:before': {
                    backgroundColor:"#ec318a"
                  },
                },
                modal_plus: {
                  '&:before': {
                    backgroundColor:"#ec318a"
                  },
                  '&:after': {
                    backgroundColor:"#ec318a"
                  }
                },
                modal_button: {
                  clipPath:
                  'polygon(0 0, 92% 0, 100% 30%, 100% 100%, 80% 100%, 80% 90%, 70% 90%, 70% 100%, 8% 100%, 0 70%)',
                  textTransform: 'capitalize',
                  backgroundColor: '#fcd222',
                  borderRadius: 0,
                  border:0,
                  fontWeight: 'bold',
                  minWidth: '140px',
                  color: '#000',
                  '&:hover': {
                    color: '#fff',
                    backgroundColor: '#ec318a',
                  }
                },
                modal_recall: {
                  '& .widget_recall-checkbox>input:checked+span:before':{
                    backgroundColor:'#ec318a!important',
                    borderColor:'#ec318a!important',
                  }
                }
              
              }
              setTimeout(function() {
                var head = document.getElementsByTagName("head")[0];
                var cssLink = document.createElement('link');
                cssLink.type = 'text/css';
                cssLink.rel = 'stylesheet';
                cssLink.href = 'https://storage.googleapis.com/booking-widget/static/css/main.css';
                head.appendChild(cssLink);
            
                var jsScript = document.createElement('script');
                jsScript.type = 'text/javascript';
                jsScript.src = 'https://storage.googleapis.com/booking-widget/static/js/main.js';
            
                head.appendChild(jsScript);
              }, 400);`
        }}
      />
    </>
  )
}
