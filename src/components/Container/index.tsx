import { Container as ContainerMui } from '@mui/material'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { Outlet } from 'react-router-dom'

export const Container = () => {
  return (
    <>
      <Header />
      <ContainerMui maxWidth={false} disableGutters sx={{ pt: 11 }}>
        <Outlet />
        <Footer />
      </ContainerMui>
    </>
  )
}
