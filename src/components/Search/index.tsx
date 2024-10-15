import GitHubIcon from '@mui/icons-material/GitHub'
import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

interface SearchProps {
  setValue: Dispatch<SetStateAction<string>>
  handleSearch: () => void
}

export const Search = ({ setValue, handleSearch }: SearchProps) => {
  const { t } = useTranslation()
  const timerDebounceSearch = useRef<NodeJS.Timeout>()

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.trim()
    setValue(value)
  }

  const handleSearchFn = () => {
    if (timerDebounceSearch.current) clearTimeout(timerDebounceSearch.current)
    timerDebounceSearch.current = setTimeout(() => handleSearch(), 750)
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
          onKeyUp={(e) => e.key === 'Enter' && handleSearchFn()}
          fullWidth
          size="medium"
          color="primary"
          inputProps={{ role: 'searchbox' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <GitHubIcon color="disabled" />
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="contained"
          onClick={handleSearchFn}
          size="large"
          role="search"
          sx={{ minWidth: 96, height: 56, ml: -1 }}
        >
          {t('Home.textButton')}
        </Button>
      </Box>
    </Box>
  )
}
