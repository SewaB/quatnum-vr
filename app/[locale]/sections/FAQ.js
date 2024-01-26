import { useTranslations } from 'next-intl'

import Image from 'next/image'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import RevealOnAppear from '../components/RevealOnAppear'

import Accordion from '@mui/material/Accordion'
import AccordionActions from '@mui/material/AccordionActions'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Button from '@mui/material/Button'

export default function FAQ() {
  const t = useTranslations('faq')

  return (
    <Box component='section' id='faq'>
      <Container
        maxWidth='md'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 6, md: 12 },
          pb: { xs: 6, md: 18 }
        }}
      >
        <Typography
          variant='h6'
          gutterBottom
          sx={{
            fontSize: { xs: '1.8rem', tb: '2.4rem' },
            fontWeight: 'bold',
            mb: '2rem',
            textAlign: 'center',
            lineHeight: 'normal'
          }}
        >
          {t('title')}
        </Typography>
        <Item title={t('time')} text={t('timeText')} />
        <Item title={t('reserve')} text={t('reserveText')} />
        <Item title={t('multiplayer')} text={t('multiplayerText')} />
        <Item title={t('sales')} text={t('salesText')} />
        <Item title={t('safety')} text={t('safetyText')} />
        <Item title={t('birthday')} text={t('birthdayText')} />
      </Container>
    </Box>
  )
}

const Item = ({ title, text }) => (
  <Accordion
    sx={{
      boxShadow: 0,
      borderRadius: 0,
      backgroundColor: 'unset',
      width: '100%',
      margin: '0!important',
      '.MuiAccordionSummary-content': {
        margin: '0!important'
      },
      '.MuiAccordionSummary-root': {
        minHeight: '48px!important',
        padding: '16px 0'
      },
      '.MuiAccordionDetails-root': {
        padding: '0 0 24px 0'
      },
      '&:not(:last-of-type)': {
        borderBottom: '1px solid #fff'
      }
    }}
  >
    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fcd222' }} />}>
      <Typography
        sx={{
          color: '#fff',
          fontSize: '1.2rem'
        }}
      >
        {title}
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography sx={{ color: '#ec318a' }}>{text}</Typography>
    </AccordionDetails>
  </Accordion>
)
