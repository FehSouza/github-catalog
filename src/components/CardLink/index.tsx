import { Link } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link as LinkRouter } from 'react-router-dom'

interface CardLinkProps {
  link: string
  target?: boolean
  text: string
}

export const CardLink = ({ link, target, text }: CardLinkProps) => {
  const { t } = useTranslation()

  return (
    <Link
      data-testid="card-link"
      component={LinkRouter}
      to={link}
      target={target ? '_blank' : ''}
      underline="always"
      width="fit-content"
      marginLeft="0 !important"
    >
      {t(text)}
    </Link>
  )
}
