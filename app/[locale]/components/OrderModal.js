'use client'
import { useLocale } from 'next-intl'

import { useState } from 'react'

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import moment from 'moment/locale/lt'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'

import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

export default function OrderModal({ open, onClose, content }) {
  const locale = useLocale()
  const [form, setForm] = useState({
    name: '',
    phone: null,
    address: 1,
    date: null,
    club: '',
    comment: ''
  })

  const addreses = [
    {
      value: 1,
      label: 'WOW VR (Šopeno g.5)'
    },
    {
      value: 2,
      label: 'Max Fun VR (Naugarduko g.41)'
    }
  ]

  const handleInputChange = e => {
    const { name, value } = e.target
    setForm(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setForm({})
    onClose()
  }

  return (
    <Dialog
      maxWidth='xs'
      fullWidth
      open={open}
      onClose={() => {
        onClose()
        setForm({})
      }}
      sx={{
        '& .MuiPaper-root': {
          borderRadius: '1.2rem'
        }
      }}
    >
      <DialogTitle
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '1.8rem',
          color: '#793FDF'
        }}
      >
        {content.title}
      </DialogTitle>
      <IconButton
        aria-label='close'
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <Box
          component='form'
          autoComplete='on'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            name='name'
            label={content.name}
            variant='outlined'
            onChange={e => handleInputChange(e)}
            value={form.name}
            required
            type='text'
          />
          <TextField
            name='phone'
            label={content.phone}
            variant='outlined'
            placeholder='+370 00 00 0000'
            onChange={e => handleInputChange(e)}
            value={form.number}
            required
            type='text'
          />
          <LocalizationProvider
            dateAdapter={AdapterMoment}
            adapterLocale={locale}
          >
            <MobileDatePicker
              label={content.date}
              format='DD MMMM'
              name='date'
            />
          </LocalizationProvider>
          <TextField
            name='address'
            label={content.address}
            value={form.address}
            onChange={e => handleInputChange(e)}
            select
          >
            {addreses.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            name='comment'
            label={content.comment}
            placeholder={content.commentPlacholder}
            value={form.comment}
            onChange={e => handleInputChange(e)}
            multiline
            rows={4}
          />
          <Button
            type='submit'
            sx={{
              width: '10rem',
              mx: 'auto',
              px: 2,
              py: 1,
              backgroundColor: '#793FDF',
              // border: '2px solid #1e1f43',
              borderRadius: '1.6rem',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#40439a'
              }
            }}
          >
            {content.button}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  )
}
