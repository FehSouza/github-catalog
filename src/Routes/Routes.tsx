import { Container } from 'layout'
import { Followers, NotFound, Repositories, User } from 'pages'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

export const AppRoutes = () => {
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

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
