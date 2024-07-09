import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { theme } from 'styles/theme'

interface UserCardTextProps {
  title: string
  text: string
}

const desktop = theme.breakpoints.up('sm')
const mobile = theme.breakpoints.down('sm')

export const UserCardText = ({ title, text }: UserCardTextProps) => {
  const { t } = useTranslation()

  if (!title || !text) return null

  return (
    <Box
      data-testid="user-card-text"
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ [desktop]: { flexDirection: 'row', alignItems: 'flex-start', gap: 0.5 } }}
    >
      <Typography fontWeight="700">{t(title)}</Typography>
      <Typography sx={{ [mobile]: { textAlign: 'center' } }}>{text}</Typography>
    </Box>
  )
}
