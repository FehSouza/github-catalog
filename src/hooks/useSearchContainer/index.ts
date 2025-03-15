import { useMemo, useState } from 'react'
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
  }

  return { title, setValue, handleSearch }
}
