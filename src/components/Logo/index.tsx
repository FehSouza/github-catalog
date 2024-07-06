import GitHubIcon from '@mui/icons-material/GitHub'
import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export const Logo = () => {
  const { t } = useTranslation()

  return (
    <Box data-testid="logo" component={Link} to="/" aria-label={t('Default.linkHomePage')} display="flex">
      <GitHubIcon
        color="primary"
        sx={{ fontSize: 40, transition: '0.35s ease-in-out', ':hover': { color: 'primary.dark' } }}
      />
    </Box>
  )
}
