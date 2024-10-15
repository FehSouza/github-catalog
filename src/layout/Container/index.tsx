import { Box } from '@mui/material'
import { Footer, Header, SearchContainer } from 'components'
import { Outlet } from 'react-router-dom'

export const Container = () => {
  return (
    <>
      <Header />
      <Box data-testid="container-layout" height="100vh" display="flex" flexDirection="column" pt={8}>
        <SearchContainer />
        <Outlet />
        <Footer />
      </Box>
    </>
  )
}
