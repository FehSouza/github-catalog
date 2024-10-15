import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

export const Followers = () => {
  const { userLogin } = useParams()

  return (
    <Box component="section" width="100%" maxWidth="lg" flex={1} mx="auto" px={2}>
      <Typography>{userLogin}</Typography>
    </Box>
  )
}
