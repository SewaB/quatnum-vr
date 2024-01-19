import { useLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import '../globals.css'
import Script from 'next/script'

const ltMetadata = {
  title: 'WOW VR | Virtuali realybė Vilniuje',
  description:
    'Pirmasis VR klubas Lietuvoje su naujausiomis virtualios realybės ausinėmis Oculus Quest 3. Didžiulė žaidimų biblioteka kiekvienam žaidėjų skoniui ir amžiui. Vienetiniai ir komandiniai žaidimai. Žaidimai virtualioje, mišrioje ir papildytoje realybėje.',
  keywords: ['WOW VR', 'Virtuali realybė', 'VR Klubas'],
  themeColor: '#321856',
  metadataBase: new URL('https://wow-vr.lt'),
  openGraph: {
    title: 'WOW VR | Virtuali realybė Vilniuje',
    description:
      'Pirmasis VR klubas Lietuvoje su naujausiomis virtualios realybės ausinėmis Oculus Quest 3. Didžiulė žaidimų biblioteka kiekvienam žaidėjų skoniui ir amžiui. Vienetiniai ir komandiniai žaidimai. Žaidimai virtualioje, mišrioje ir papildytoje realybėje.',
    url: 'https://wow-wr.lt',
    siteName: 'WOW VR | Virtuali realybė Vilniuje',
    images: [
      {
        url: '/poster.png',
        width: 400,
        height: 400
      }
    ],
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    nocache: true
  }
}

const enMetadata = {
  title: 'WOW VR | Virtual Reality in Vilnius',
  description:
    'The first VR club in Lithuania with the latest virtual reality headsets Oculus Quest 3. A vast library of games for every taste and age of players. Single and team games. Games in virtual, mixed, and augmented reality.',
  keywords: ['WOW VR', 'Virtual Reality', 'VR Club'],
  themeColor: '#321856',
  metadataBase: new URL('https://wow-vr.lt'),
  openGraph: {
    title: 'WOW VR | Virtual Reality in Vilnius',
    description:
      'The first VR club in Lithuania with the latest virtual reality headsets Oculus Quest 3. A vast library of games for every taste and age of players. Single and team games. Games in virtual, mixed, and augmented reality.',
    url: 'https://wow-wr.lt',
    siteName: 'WOW VR | Virtual Reality in Vilnius',
    images: [
      {
        url: '/poster.png',
        width: 400,
        height: 400
      }
    ],
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    nocache: true
  }
}

export async function generateMetadata({ params }) {
  return params.locale === 'lt' ? ltMetadata : enMetadata
}

export default function RootLayout({ children, params }) {
  const locale = useLocale()

  if (params.locale !== locale) {
    notFound()
  }

  return (
    <html lang={locale}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=AW-11392804385'
        />
        <Script
          id='ga-tracking'
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'AW-11392804385');
            `
          }}
        />
      </head>
      <body>
        {children}
        <Script
          async
          defer
          strategy='lazyOnload'
          type='text/javascript'
          id='calendar-widget'
          dangerouslySetInnerHTML={{
            __html: `
              window.bookingCompanyIds = ["-NgykBXNz84_cQxU9zjS"];
              window.bookingWidgetLang = 'lt';
              window.bookingWidgetTheme = 'transparent';
              window.bookingWidgetStyles = {
                container: {
                  minHeight:'unset'
                },
                booking: {
                  border: 'unset'
                },
                calendar_week: {
                  color:'#75fcce'
                },
                widget_calendar_day: {
                  '& span': {
                    color:'#75fcce!important'
                  }
                },
                calendar_header_title: {
                  color:'#75fcce'
                },
                calendar_header_button: {
                  color:'#75fcce',
                  fill: '#75fcce'
                },
                widget_calendar_day_span: {
                  wordBreak: 'break-all'
                },
                modal_minus: {
                  '&:before': {
                    backgroundColor:"#b40c9b"
                  },
                },
                modal_plus: {
                  '&:before': {
                    backgroundColor:"#b40c9b"
                  },
                  '&:after': {
                    backgroundColor:"#b40c9b"
                  }
                },
                modal_button: {
                  backgroundColor:'#b40c9b',
                  borderColor:'#b40c9b',
                  '&:hover':{
                    backgroundColor:'#7f0b6e',
                    borderColor:'#7f0b6e',
                    color:'#fff'
                  }
                },
                modal_recall: {
                  '& .widget_recall-checkbox>input:checked+span:before':{
                    backgroundColor:'#b40c9b!important',
                    borderColor:'#b40c9b!important',
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
              }, 2000);`
          }}
        />
      </body>
    </html>
  )
}
