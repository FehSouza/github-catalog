import { Container } from 'components'
import { Followers, Home, Repositories } from 'pages'
import { Route, Routes } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route index element={<Home />} />

        <Route path="/repositorios" element={<Repositories />} />

        <Route path="/seguidores" element={<Followers />} />
      </Route>
    </Routes>
  )
}
