import { useLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import '../globals.css'
// import Script from 'next/script'

const uaMetadata = {
  title: 'QuantumVR | Віртуальна реальність в Києві',
  description:
    'Зануртеся в світ нескінченних вражень в QuantumVR, де Віртуальна Реальність зустрічає душу Києва. Випустіть ексцитацію за допомогою захоплюючих симуляцій, мультиплеєрних ігор та футуристичних пригод.',
  keywords: ['QuantumVR', 'Віртуальна реальність', 'VR клуб'],
  themeColor: '#321856',
  // metadataBase: new URL('https://wow-vr.lt'),
  openGraph: {
    title: 'QuantumVR | Віртуальна реальність в Києві',
    description:
      'Зануртеся в світ нескінченних вражень в QuantumVR, де Віртуальна Реальність зустрічає душу Києва. Випустіть ексцитацію за допомогою захоплюючих симуляцій, мультиплеєрних ігор та футуристичних пригод.',
    // url: 'https://wow-wr.lt',
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
  // metadataBase: new URL('https://wow-vr.lt'),
  openGraph: {
    title: 'QuantumVR | Virtual Reality in Kiev',
    description:
      'Dive into a realm of limitless experiences at QuantumVR, where Virtual Reality meets the soul of Kiev. Unleash excitement with captivating simulations, multiplayer games, and futuristic adventures. ',
    // url: 'https://wow-wr.lt',
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
  // metadataBase: new URL('https://wow-vr.lt'),
  openGraph: {
    title: 'QuantumVR | Виртуальная реальность в Киеве',
    description:
      'Окунитесь в мир безграничных впечатлений в QuantumVR, где Виртуальная Реальность встречает душу Киева. Разгорите волнение с захватывающими симуляциями, многопользовательскими играми и футуристическими приключениями.',
    // url: 'https://wow-wr.lt',
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
        {/* <Script
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
        /> */}
      </body>
    </html>
  )
}
