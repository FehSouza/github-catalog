import { Pagination as PaginationUi } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useParams, useSearchParams } from 'react-router-dom'
import { getUser, ITEMS_PER_PAGE } from 'services'

export const Pagination = () => {
  const { userLogin } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const { data } = useQuery({
    queryKey: ['api/users', userLogin],
    queryFn: ({ queryKey: [_, user] }) => (user ? getUser(user) : null),
    retry: false,
  })

  const page = Number(searchParams.get('page') ?? 1)

  const totalItems = data?.public_repos ?? 0
  const totalPage = Math.ceil(totalItems / ITEMS_PER_PAGE)

  const handlePagination = (_e: React.ChangeEvent<unknown>, value: number) => setSearchParams(`page=${value}`)

  // TODO: limitar a paginação na última página existente
  // TODO: voltar para o topo da página ao paginar

  return (
    <PaginationUi
      page={page}
      count={totalPage}
      onChange={handlePagination}
      color="primary"
      variant="outlined"
      shape="rounded"
      siblingCount={1}
    />
  )
}
