import PersonIcon from '@mui/icons-material/Person'
import { Box, Link } from '@mui/material'
import { User } from '@types'
import { UserCardText } from 'components/UserCardText'
import { useTranslation } from 'react-i18next'
import { theme } from 'styles/theme'

interface UserCardProps {
  data: User
}

export const UserCard = ({ data }: UserCardProps) => {
  const { t } = useTranslation()

  const name = data.name
  const username = data.login
  const image = data.avatar_url
  const altImage = t('Home.altImage', { nameProfile: name ?? username })
  const bio = data.bio
  const followers = data.followers
  const followersText =
    followers === 1 ? t('Home.followers_one', { followers }) : t('Home.followers_other', { followers })
  const company = data.company
  const profile = data.html_url

  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={4}
      my={4}
      sx={{ [theme.breakpoints.up('sm')]: { flexDirection: 'row' } }}
    >
      <Box
        width={200}
        height={200}
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        border={1}
        borderColor={!image ? 'secondary.main' : 'secondary.contrastText'}
        borderRadius="50%"
        sx={{
          ':hover img': { transform: 'scale(1.08)' },
          ':hover svg': { transform: 'scale(1.08)' },
        }}
      >
        {!image && (
          <PersonIcon
            color="secondary"
            aria-label={t('Home.altWithoutImage')}
            sx={{ fontSize: 64, transition: '0.35s ease-in-out' }}
          />
        )}

        {!!image && (
          <img
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

      <Box display="flex" flexDirection="column" gap={1}>
        {!!name && <UserCardText title="Home.name" text={name} />}
        <UserCardText title="Home.username" text={username} />
        {!!bio && <UserCardText title="Home.bio" text={bio} />}
        <UserCardText title="Home.followers" text={followersText} />
        {!!company && <UserCardText title="Home.company" text={company} />}

        <Link href={profile} underline="always" target="_blank" color="secondary.main" width="fit-content">
          {t('Home.linkProfile')}
        </Link>
      </Box>
    </Box>
  )
}
