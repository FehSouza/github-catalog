import { Box, Divider, Typography } from '@mui/material'
import { Search } from 'components'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useMatch, useNavigate } from 'react-router-dom'

export const useSearchContainer = () => {
  const [value, setValue] = useState('')
  const navigate = useNavigate()

  const isHome = useMatch('/')
  const isUser = useMatch('/user/*')
  const isRepository = useMatch('/repositorios/*')
  const isFollowers = useMatch('/seguidores/*')

  const title = useMemo(() => {
    if (isHome || isUser) return 'Home.title'
    if (isRepository) return 'Default.repositories'
    if (isFollowers) return 'Default.followers'
    return ''
  }, [isHome, isUser, isRepository, isFollowers])

  const handleSearch = () => {
    if (isHome || isUser) return navigate(`/user/${value}`)
    if (isRepository) return navigate(`/repositorios/${value}`)
    if (isFollowers) return navigate(`/seguidores/${value}`)
    navigate(`./${value}`)
  }

  return { title, setValue, handleSearch }
}

export const SearchContainer = () => {
  const { t } = useTranslation()
  const { title, setValue, handleSearch } = useSearchContainer()

  return (
    <Box data-testid="search-container" component="section" width="100%" maxWidth="lg" mx="auto" px={2}>
      {!!title && (
        <Typography
          data-testid="search-container-title"
          variant="h1"
          fontWeight="700"
          color="primary.main"
          align="center"
          mt={4}
        >
          {t(title)}
        </Typography>
      )}

      <Search setValue={setValue} handleSearch={handleSearch} />
      <Divider variant="middle" aria-hidden />
    </Box>
  )
}
