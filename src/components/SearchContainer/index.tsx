import { Box, Divider, Typography } from '@mui/material'
import { Search } from 'components'
import { useSearchContainer } from 'hooks'
import { useTranslation } from 'react-i18next'

export const SearchContainer = () => {
  const { t } = useTranslation()
  const { title, setValue, handleSearch } = useSearchContainer()

  return (
    <Box data-testid="search-container" component="section" width="100%" maxWidth="lg" mx="auto" px={2}>
      {!!title && (
        <Typography
          data-testid="search-container-title"
          variant="h1"
          fontWeight="700"
          color="primary.main"
          align="center"
          mt={4}
        >
          {t(title)}
        </Typography>
      )}

      <Search setValue={setValue} handleSearch={handleSearch} />
      <Divider variant="middle" aria-hidden />
    </Box>
  )
}
