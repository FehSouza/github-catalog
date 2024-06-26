import { Box } from '@mui/material'
import { MenuItem } from 'components'
import { theme } from 'styles/theme'

const items: { name: string; link: string; ariaLabel: string }[] = [
  { name: 'repositories', link: '/repositorios', ariaLabel: 'linkRepositoriesPage' },
  { name: 'followers', link: '/seguidores', ariaLabel: 'linkFollowersPage' },
]

export const Menu = () => {
  return (
    <Box data-testid="menu" component="nav">
      <Box
        data-testid="menu-list"
        component="ul"
        display="flex"
        gap={1}
        p={0}
        m={0}
        sx={{ [theme.breakpoints.up('sm')]: { gap: 4 } }}
      >
        {items.map((item, index) => {
          const name = item.name
          const link = item.link
          const ariaLabel = item.ariaLabel

          return <MenuItem key={`menu-item-${index}`} name={name} link={link} ariaLabel={ariaLabel} index={index} />
        })}
      </Box>
    </Box>
  )
}
