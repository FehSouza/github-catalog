import { Container } from 'components'
import { Home } from 'pages'
import { Route, Routes } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}
