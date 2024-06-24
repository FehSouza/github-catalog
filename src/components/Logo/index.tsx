import GitHubIcon from '@mui/icons-material/GitHub'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

interface LogoProps {
  hasText?: boolean
}

export const Logo = ({ hasText }: LogoProps) => {
  const { t } = useTranslation()

  return (
    <Box
      data-testid="logo"
      component={Link}
      to="/"
      aria-label={t('Default.Link para a Home')}
      width="max-content"
      display="flex"
      flexDirection="column"
      alignItems="center"
      color="primary.main"
      sx={{
        textDecoration: 'none',
        transition: 'color 0.35s ease-in-out',
        ':hover': { color: 'primary.dark' },
        ':hover svg': { color: 'primary.dark' },
      }}
    >
      <GitHubIcon
        data-testid="logo-icon"
        color="primary"
        sx={{ fontSize: 40, transition: 'color 0.35s ease-in-out' }}
      />

      {!!hasText && (
        <Typography data-testid="logo-text" variant="body2" mt={0.5}>
          GitHub Catalog
        </Typography>
      )}
    </Box>
  )
}
