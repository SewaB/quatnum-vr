import { useLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import '../globals.css'
import Script from 'next/script'

const uaMetadata = {
  title: 'QuantumVR | Віртуальна реальність в Києві',
  description:
    'Зануртеся в світ нескінченних вражень в QuantumVR, де Віртуальна Реальність зустрічає душу Києва. Випустіть ексцитацію за допомогою захоплюючих симуляцій, мультиплеєрних ігор та футуристичних пригод.',
  keywords: ['QuantumVR', 'Віртуальна реальність', 'VR клуб'],
  themeColor: '#321856',
  metadataBase: new URL('https://www.quantumvr.club'),
  openGraph: {
    title: 'QuantumVR | Віртуальна реальність в Києві',
    description:
      'Зануртеся в світ нескінченних вражень в QuantumVR, де Віртуальна Реальність зустрічає душу Києва. Випустіть ексцитацію за допомогою захоплюючих симуляцій, мультиплеєрних ігор та футуристичних пригод.',
    url: 'https://www.quantumvr.club',
    siteName: 'QuantumVR | Віртуальна реальність в Києві',
    images: [
      {
        url: '/poster.jpg',
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
  title: 'QuantumVR | Virtual Reality in Kiev',
  description:
    'Dive into a realm of limitless experiences at QuantumVR, where Virtual Reality meets the soul of Kiev. Unleash excitement with captivating simulations, multiplayer games, and futuristic adventures. ',
  keywords: ['QuantumVR', 'Virtual Reality', 'VR Club'],
  themeColor: '#321856',
  metadataBase: new URL('https://www.quantumvr.club/en'),
  openGraph: {
    title: 'QuantumVR | Virtual Reality in Kiev',
    description:
      'Dive into a realm of limitless experiences at QuantumVR, where Virtual Reality meets the soul of Kiev. Unleash excitement with captivating simulations, multiplayer games, and futuristic adventures. ',
    url: 'https://www.quantumvr.club',
    siteName: 'QuantumVR | Virtual Reality in Kiev',
    images: [
      {
        url: '/poster.jpg',
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

const ruMetadata = {
  title: 'QuantumVR | Виртуальная реальность в Киеве',
  description:
    'Окунитесь в мир безграничных впечатлений в QuantumVR, где Виртуальная Реальность встречает душу Киева. Разгорите волнение с захватывающими симуляциями, многопользовательскими играми и футуристическими приключениями.',
  keywords: ['QuantumVR', 'Виртуальная реальность', 'VR клуб'],
  themeColor: '#321856',
  metadataBase: new URL('https://www.quantumvr.club/ru'),
  openGraph: {
    title: 'QuantumVR | Виртуальная реальность в Киеве',
    description:
      'Окунитесь в мир безграничных впечатлений в QuantumVR, где Виртуальная Реальность встречает душу Киева. Разгорите волнение с захватывающими симуляциями, многопользовательскими играми и футуристическими приключениями.',
    url: 'https://www.quantumvr.club',
    siteName: 'QuantumVR | Виртуальная реальность в Киеве',
    images: [
      {
        url: '/poster.jpg',
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
  return params.locale === 'ua'
    ? uaMetadata
    : params.locale === 'en'
    ? enMetadata
    : ruMetadata
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
        {/* <Script
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
        /> */}

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Silkscreen&display=swap'
          rel='stylesheet'
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
            window.bookingCompanyIds = ["-NpDsJV2ErBgnP7o2fWm"];
              window.bookingWidgetLang = 'ua';
              window.bookingWidgetTheme = 'transparent';
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
              }, 2000);`
          }}
        />
      </body>
    </html>
  )
}
