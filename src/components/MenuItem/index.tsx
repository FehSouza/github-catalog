import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

interface MenuItemProps {
  name: string
  link: string
  ariaLabel: string
}

export const MenuItem = ({ name, link, ariaLabel }: MenuItemProps) => {
  const { t } = useTranslation()

  return (
    <Box component="li" height={32} display="flex">
      <Box
        component={NavLink}
        to={link}
        aria-label={t(`Default.${ariaLabel}`)}
        display="flex"
        alignItems="center"
        px={0.75}
        borderBottom={2}
        borderColor="primary.main"
        color="primary.main"
        fontWeight={500}
        sx={{
          textDecoration: 'none',
          transition: '0.35s ease-in-out',
          ':hover': { color: 'primary.dark', borderColor: 'primary.dark' },
        }}
        style={({ isActive }) => {
          return { borderColor: isActive ? '' : 'transparent' }
        }}
      >
        {t(`Default.${name}`)}
      </Box>
    </Box>
  )
}
