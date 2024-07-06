import GitHubIcon from '@mui/icons-material/GitHub'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export const Logotype = () => {
  const { t } = useTranslation()

  return (
    <Box
      data-testid="logotype"
      component={Link}
      to="/"
      aria-label={t('Default.linkHomePage')}
      display="flex"
      flexDirection="column"
      alignItems="center"
      color="primary.main"
      sx={{
        textDecoration: 'none',
        transition: '0.35s ease-in-out',
        ':hover': { color: 'primary.dark' },
        ':hover svg': { color: 'primary.dark' },
      }}
    >
      <GitHubIcon color="primary" sx={{ fontSize: 40, transition: '0.35s ease-in-out' }} />

      <Typography variant="body2" mt={0.5}>
        GitHub Catalog
      </Typography>
    </Box>
  )
}
