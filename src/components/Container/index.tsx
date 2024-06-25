import { Box } from '@mui/material'
import { Footer, Header } from 'components'
import { Outlet } from 'react-router-dom'

export const Container = () => {
  return (
    <>
      <Header />
      <Box height="100vh" display="flex" flexDirection="column" pt={8}>
        <Outlet />
        <Footer />
      </Box>
    </>
  )
}
