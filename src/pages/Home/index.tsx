import GitHubIcon from '@mui/icons-material/GitHub'
import { Box, Button, Divider, InputAdornment, List, ListItem, TextField, Typography } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getUser } from 'services'
import useSWRMutation from 'swr/mutation'

export const Home = () => {
  const { t } = useTranslation()
  const [value, setValue] = useState('')

  const { data, error, trigger } = useSWRMutation(`api/users/${value}`, () => getUser(value), {
    rollbackOnError: false,
  })
  console.log(data, error)

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.trim()
    setValue(value)
  }

  let timerDebounceSearch: undefined | number = undefined

  const handleSearch = () => {
    if (timerDebounceSearch) clearTimeout(timerDebounceSearch)
    timerDebounceSearch = setTimeout(() => trigger(), 750)
  }

  return (
    <Box component="main" width="100%" maxWidth="lg" flex={1} mx="auto" px={2}>
      <Box component="section" display="flex" flexDirection="column" alignItems="center" gap={1} py={4}>
        <Typography align="center">{t('Home.titleInput')}</Typography>

        <Box width="100%" maxWidth={420} display="flex">
          <TextField
            variant="filled"
            fullWidth
            size="medium"
            label={t('Home.labelInput')}
            color="primary"
            error={!!error}
            helperText={!!error && t('Home.errorInput')}
            autoComplete="off"
            onChange={handleChangeSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <GitHubIcon color={!!error ? 'error' : 'disabled'} />
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="contained"
            size="large"
            sx={{
              height: 56,
              ml: -1,
              backgroundColor: !!error ? 'error.main' : '',
              ':hover': { backgroundColor: !!error ? 'error.dark' : '' },
            }}
            onClick={handleSearch}
          >
            {t('Home.textButton')}
          </Button>
        </Box>
      </Box>

      <Divider variant="middle" aria-hidden />

      <Box component="section" display="flex" flexDirection="column" alignItems="center" gap={4} py={4}>
        <Typography align="center" variant="h2">
          {t('Home.messageError')}
        </Typography>
        <Typography align="center">{t('Home.stepsError')}</Typography>

        <List disablePadding dense>
          <ListItem sx={{ justifyContent: 'center', textAlign: 'center' }}>{t('Home.stepError1')}</ListItem>
          <ListItem sx={{ justifyContent: 'center', textAlign: 'center' }}>{t('Home.stepError2')}</ListItem>
          <ListItem sx={{ justifyContent: 'center', textAlign: 'center' }}>{t('Home.stepError3')}</ListItem>
          <ListItem sx={{ justifyContent: 'center', textAlign: 'center' }}>{t('Home.stepError4')}</ListItem>
        </List>
      </Box>
    </Box>
  )
}
