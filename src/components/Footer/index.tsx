import { Box, Typography } from '@mui/material'
import { Logo } from 'components'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const { t } = useTranslation()

  const date = new Date()
  const year = date.getFullYear()

  return (
    <Box data-testid="footer" component="footer" borderTop={1} borderColor="secondary.contrastText">
      <Box
        component="section"
        maxWidth="md"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={3}
        mx="auto"
        p={2}
      >
        <Logo hasText />

        <Typography variant="body2" textAlign="center">
          {t('Footer.description')}
        </Typography>
      </Box>

      <Box component="section" p={2} sx={{ backgroundColor: 'secondary.contrastText' }}>
        <Typography variant="body2" textAlign="center" data-testid="footer-copyright">
          {`© ${year} Copyright: GitHub Catalog`}
        </Typography>
      </Box>
    </Box>
  )
}
