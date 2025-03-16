import { Box, Link, Typography } from '@mui/material'
import { Footer, Header } from 'components'
import { useTranslation } from 'react-i18next'
import { Link as LinkRouter } from 'react-router-dom'

export const NotFound = () => {
  const { t } = useTranslation()

  return (
    <>
      <Header />
      <Box data-testid="not-found-page" height="100vh" display="flex" flexDirection="column" pt={8}>
        <Box
          component="section"
          maxWidth="lg"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={4}
          flex={1}
          mx="auto"
          px={2}
          py={4}
        >
          <Typography variant="h2" align="center" data-testid="not-found-page-title">
            {t('NotFound.messageNotFound')}
          </Typography>

          <Link component={LinkRouter} to="/" underline="always" data-testid="not-found-page-link">
            {t('NotFound.linkHome')}
          </Link>
        </Box>
        <Footer />
      </Box>
    </>
  )
}
