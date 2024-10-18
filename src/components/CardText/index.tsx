import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

interface CardTextProps {
  title: string
  text: string
}

export const CardText = ({ title, text }: CardTextProps) => {
  const { t } = useTranslation()

  if (!title || !text) return null

  return (
    <Box data-testid="card-text" display="flex" flexDirection="row" gap={0.5}>
      <Typography fontWeight="700">{t(title)}</Typography>
      <Typography>{text}</Typography>
    </Box>
  )
}
