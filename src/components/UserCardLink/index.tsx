import { Link } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link as LinkRouter } from 'react-router-dom'

interface UserCardLinkProps {
  link: string
  target?: boolean
  text: string
}

export const UserCardLink = ({ link, target, text }: UserCardLinkProps) => {
  const { t } = useTranslation()

  return (
    <Link
      data-testid="user-card-link"
      component={LinkRouter}
      to={link}
      target={target ? '_blank' : ''}
      underline="always"
      width="fit-content"
    >
      {t(text)}
    </Link>
  )
}
