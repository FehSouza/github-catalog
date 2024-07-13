import GitHubIcon from '@mui/icons-material/GitHub'
import { Box, Button, CircularProgress, InputAdornment, TextField, Typography } from '@mui/material'
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

interface SearchProps {
  value?: string
  setValue: Dispatch<SetStateAction<string>>
  error: any
  trigger: () => void
  isMutating: boolean
}

export const Search = ({ value, setValue, error, trigger, isMutating }: SearchProps) => {
  const { t } = useTranslation()
  const timerDebounceSearch = useRef<NodeJS.Timeout>()

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.trim()
    setValue(value)
  }

  const handleSearch = () => {
    if (timerDebounceSearch.current) clearTimeout(timerDebounceSearch.current)
    timerDebounceSearch.current = setTimeout(() => trigger(), 750)
  }

  useEffect(() => () => clearTimeout(timerDebounceSearch.current), [])

  return (
    <Box
      data-testid="search"
      component="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={1}
      my={4}
    >
      <Typography align="center">{t('Home.titleInput')}</Typography>

      <Box width="100%" maxWidth={420} display="flex">
        <TextField
          variant="filled"
          label={t('Home.labelInput')}
          autoComplete="off"
          onChange={handleChangeSearch}
          onKeyUp={(e) => e.key === 'Enter' && handleSearch()}
          error={!!error}
          helperText={!!error && t('Home.errorInput')}
          fullWidth
          size="medium"
          color="primary"
          inputProps={{ role: 'searchbox', defaultValue: value }}
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
          onClick={handleSearch}
          size="large"
          role="search"
          sx={{
            minWidth: 96,
            height: 56,
            ml: -1,
            backgroundColor: !!error ? 'error.main' : '',
            ':hover': { backgroundColor: !!error ? 'error.dark' : '' },
          }}
        >
          {!isMutating && t('Home.textButton')}
          {!!isMutating && <CircularProgress data-testid="search-loading" size={20} color="inherit" />}
        </Button>
      </Box>
    </Box>
  )
}
