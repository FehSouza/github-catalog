import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import StarIcon from '@mui/icons-material/Star'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  IconButton,
  IconButtonProps,
  styled,
  Typography,
} from '@mui/material'
import { Repository } from '@types'
import { CardLink, CardText } from 'components'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { theme } from 'styles/theme'
import { formatDate } from 'utils'

interface RepositoryCardProps {
  repository: Repository
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme }) => ({
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    { props: ({ expand }) => !expand, style: { transform: 'rotate(0deg)' } },
    { props: ({ expand }) => !!expand, style: { transform: 'rotate(180deg)' } },
  ],
}))

const tablet = theme.breakpoints.up('md')
const desktop = theme.breakpoints.up('lg')

export const RepositoryCard = ({ repository }: RepositoryCardProps) => {
  const { t } = useTranslation()
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => setExpanded(!expanded)

  const name = repository.name
  const createdAt = formatDate(repository.created_at)
  const updatedAt = formatDate(repository.updated_at)
  const language = repository.language ?? '-'
  const star = repository.stargazers_count
  const url = repository.html_url
  const homepage = repository.homepage
  const description = repository.description

  return (
    <Card
      data-testid="repository-card"
      sx={{
        width: '100%',
        height: 'fit-content',
        [tablet]: { maxWidth: 'calc((100% - 16px) / 2)' },
        [desktop]: { maxWidth: 'calc((100% - 32px) / 3)' },
      }}
    >
      <CardContent sx={{ position: 'relative', paddingRight: 10 }}>
        <CardText title="Default.name" text={name} />
        {!!createdAt && <CardText title="Repositories.createdAt" text={createdAt} />}
        {!!updatedAt && <CardText title="Repositories.updatedAt" text={updatedAt} />}
        <CardText title="Repositories.language" text={language} />

        {!!star && (
          <Box
            data-testid="repository-card-star"
            position="absolute"
            top={16}
            right={16}
            display="flex"
            alignItems="center"
            gap={0.25}
          >
            <Typography fontSize={14}>{star}</Typography>
            <StarIcon fontSize="small" />
          </Box>
        )}
      </CardContent>

      <CardActions
        sx={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: 0.5,
          padding: 2,
          paddingTop: 0,
          position: 'relative',
          [tablet]: { minHeight: 68 },
        }}
      >
        <CardLink link={url} text="Repositories.link" target />
        {!!homepage && <CardLink link={homepage} text="Repositories.homepage" target />}

        {!!description && (
          <ExpandMore
            data-testid="repository-card-button"
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label={t('Repositories.showMore')}
            sx={{ position: 'absolute', bottom: 22, right: 16 }}
          >
            <ExpandMoreIcon />
          </ExpandMore>
        )}
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent data-testid="repository-card-description" sx={{ paddingTop: 0 }}>
          <Typography fontSize={14}>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
