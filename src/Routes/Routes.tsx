import { Container } from 'layout'
import { Followers, Repositories, User } from 'pages'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

export const AppRoutes = () => {
  // TODO: fazer página não existente *

  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route path="/user">
          <Route index element={<Navigate to="/" replace />} />
          <Route path=":userLogin" element={<User />} />
        </Route>

        <Route path="/repositorios">
          <Route index element={<Outlet />} />
          <Route path=":userLogin" element={<Repositories />} />
        </Route>

        <Route path="/seguidores">
          <Route index element={<Outlet />} />
          <Route path=":userLogin" element={<Followers />} />
        </Route>
      </Route>
    </Routes>
  )
}
