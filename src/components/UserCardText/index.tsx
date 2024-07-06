import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { theme } from 'styles/theme'

interface UserCardTextProps {
  title: string
  text: string
}

export const UserCardText = ({ title, text }: UserCardTextProps) => {
  const { t } = useTranslation()

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={0.5}
      sx={{ [theme.breakpoints.up('sm')]: { flexDirection: 'row' } }}
    >
      <Typography fontWeight="700">{t(title)}</Typography>
      <Typography>{text}</Typography>
    </Box>
  )
}
