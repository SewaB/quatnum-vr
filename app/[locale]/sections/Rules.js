import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useTranslations } from 'next-intl'

export default function Rules() {
  const t = useTranslations('rules')

  return (
    <section id='rules' className='fade-section'>
      <Image
        src='/bg2.png'
        fill
        objectFit='cover'
        objectPosition='bottom'
        style={{
          zIndex: -1,
          opacity: 0.2
          // transform: 'scale(-1,1)'
        }}
        alt=''
      />

      <Container
        maxWidth='lg'
        disableGutters={true}
        sx={{
          py: { xs: 6, md: 21 },
          color: '#fff'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: { xs: '3rem', sm: '4rem' }
          }}
        >
          <Typography
            variant='h6'
            sx={{
              fontSize: { xs: '1.8rem', md: '2.4rem' },
              fontWeight: 'bold',
              color: '#fcd222'
            }}
          >
            {t('title')}
          </Typography>
        </Box>
        <Grid container item xs={12} justifyContent='center' rowSpacing={4}>
          <Grid item xs={12} sm={6} md={2.5}>
            <RuleItem title={t('noAlcohol')} text={t('noAlcoholText')} />
          </Grid>

          <Grid item xs={12} sm={6} md={2.5}>
            <RuleItem title={t('badEyesight')} text={t('badEyesightText')} />
          </Grid>

          <Grid item xs={12} sm={6} md={2.5}>
            <RuleItem
              title={t('accompanyingChildren')}
              text={t('accompanyingChildrenText')}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={2.5}>
            <RuleItem title={t('pregnant')} text={t('pregnantText')} noBorder />
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

const RuleItem = ({ title, text, noBorder }) => (
  <Box
    sx={{
      borderRight: { sm: noBorder ? 'unset' : '1px solid #fff' },
      px: 4,
      height: '100%'
    }}
  >
    <Typography
      gutterBottom
      sx={{ fontWeight: 'bold', color: '#61efff', fontSize: '1.05rem' }}
    >
      {title}
    </Typography>
    <Typography>{text}</Typography>
  </Box>
)
