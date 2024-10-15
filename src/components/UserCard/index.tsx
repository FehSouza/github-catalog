import PersonIcon from '@mui/icons-material/Person'
import { Box } from '@mui/material'
import { User } from '@types'
import { UserCardLink, UserCardText } from 'components'
import { useTranslation } from 'react-i18next'
import { theme } from 'styles/theme'

interface UserCardProps {
  user: User
}

const desktop = theme.breakpoints.up('sm')

export const UserCard = ({ user }: UserCardProps) => {
  const { t } = useTranslation()

  const name = user.name
  const username = user.login
  const image = user.avatar_url
  const altImage = t('Home.altImage', { nameProfile: name ?? username })
  const bio = user.bio
  const followers = user.followers
  const followersText =
    followers === 1 ? t('Home.followers_one', { followers }) : t('Home.followers_other', { followers })
  const company = user.company
  const profile = user.html_url

  return (
    <Box
      data-testid="user-card"
      component="section"
      width="100%"
      maxWidth="lg"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={4}
      flex={1}
      mx="auto"
      px={2}
      py={4}
      sx={{ [desktop]: { flexDirection: 'row' } }}
    >
      <Box
        width={200}
        minWidth={200}
        height={200}
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
            data-testid="user-card-without-image"
            color="secondary"
            aria-label={t('Home.altWithoutImage')}
            sx={{ fontSize: 64, transition: '0.35s ease-in-out' }}
          />
        )}

        {!!image && (
          <img
            data-testid="user-card-image"
            srcSet={`${image}?w=200&h=200&fit=crop&auto=format&dpr=2 2x`}
            src={`${image}?w=200&h=200&fit=crop&auto=format`}
            alt={altImage}
            width={200}
            height={200}
            loading="eager"
            style={{ transition: '0.35s ease-in-out' }}
          />
        )}
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
        sx={{ [desktop]: { alignItems: 'flex-start', gap: 1 } }}
      >
        {!!name && <UserCardText title="Home.name" text={name} />}
        <UserCardText title="Home.username" text={username} />
        {!!bio && <UserCardText title="Home.bio" text={bio} />}
        <UserCardText title="Home.followers" text={followersText} />
        {!!company && <UserCardText title="Home.company" text={company} />}
        <UserCardLink link={profile} text="Home.linkProfile" target />
        <UserCardLink link={`/repositorios/${username}`} text="Home.linkRepositories" />
        <UserCardLink link={`/seguidores/${username}`} text="Home.linkFollowers" />
      </Box>
    </Box>
  )
}
