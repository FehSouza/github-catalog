import { Container } from 'components'
import { Details, Followers, Home, Repositories } from 'pages'
import { Route, Routes } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route index element={<Home />} />

        <Route path="/repositorios">
          <Route index element={<Details title="Default.repositories" />} />
          <Route path=":userLogin" element={<Repositories />} />
        </Route>

        <Route path="/seguidores">
          <Route index element={<Details title="Default.followers" />} />
          <Route path=":userLogin" element={<Followers />} />
        </Route>
      </Route>
    </Routes>
  )
}
