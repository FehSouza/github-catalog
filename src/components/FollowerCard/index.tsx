import PersonIcon from '@mui/icons-material/Person'
import { Box, Card, CardActions, CardContent } from '@mui/material'
import { Follower } from '@types'
import { CardLink, CardText } from 'components'
import { useTranslation } from 'react-i18next'
import { theme } from 'styles/theme'

interface FollowerCardProps {
  follower: Follower
}

const tablet = theme.breakpoints.up('md')
const desktop = theme.breakpoints.up('lg')

export const FollowerCard = ({ follower }: FollowerCardProps) => {
  const { t } = useTranslation()

  const name = follower.login
  const image = follower.avatar_url
  const altImage = t('Default.altImage', { nameProfile: name })
  const url = follower.html_url

  return (
    <Card
      data-testid="follower-card"
      sx={{
        width: '100%',
        height: 'fit-content',
        [tablet]: { maxWidth: 'calc((100% - 16px) / 2)' },
        [desktop]: { maxWidth: 'calc((100% - 32px) / 3)' },
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        padding: 2,
      }}
    >
      <Box
        width={88}
        minWidth={88}
        height={88}
        display="flex"
        alignItems="center"
        justifyContent="center"
        border={1}
        borderColor={!image ? 'secondary.main' : 'secondary.contrastText'}
        borderRadius="50%"
        overflow="hidden"
        sx={{ ':hover img': { transform: 'scale(1.08)' }, ':hover svg': { transform: 'scale(1.08)' } }}
      >
        {!image && (
          <PersonIcon
            data-testid="follower-card-without-image"
            color="secondary"
            aria-label={t('Default.altWithoutImage')}
            sx={{ fontSize: 32, transition: '0.35s ease-in-out' }}
          />
        )}

        {!!image && (
          <img
            data-testid="follower-card-image"
            srcSet={`${image}?w=88&h=88&fit=crop&auto=format&dpr=2 2x`}
            src={`${image}?w=88&h=88&fit=crop&auto=format`}
            alt={altImage}
            width={88}
            height={88}
            loading="eager"
            style={{ transition: '0.35s ease-in-out' }}
          />
        )}
      </Box>

      <Box display="flex" flexDirection="column" gap={2}>
        <CardContent sx={{ padding: 0 }}>
          <CardText title="Default.name" text={name} />
        </CardContent>

        <CardActions sx={{ padding: 0 }}>
          <CardLink link={url} text="Default.linkProfile" target />
        </CardActions>
      </Box>
    </Card>
  )
}
