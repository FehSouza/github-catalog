import TranslateIcon from '@mui/icons-material/Translate'
import { Box, SpeedDial, SpeedDialAction } from '@mui/material'
import { useTranslation } from 'react-i18next'
import iconBrazil from '../../assets/iconBrazil.svg'
import iconUnitedStates from '../../assets/iconUnitedStates.svg'

export const SwitchLanguages = () => {
  const { t, i18n } = useTranslation()

  const languages = [
    { icon: <img src={iconBrazil} />, name: t('Header.Português'), lng: 'pt-BR' },
    { icon: <img src={iconUnitedStates} />, name: t('Header.Inglês'), lng: 'en-US' },
  ]

  const handleChange = (lng: string) => i18n.changeLanguage(lng)

  return (
    <Box sx={{ position: 'absolute' }}>
      <SpeedDial
        icon={<TranslateIcon />}
        ariaLabel={t('Header.Selecione a linguagem desejada')}
        direction="down"
        transitionDuration={0}
      >
        {languages.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleChange(action.lng)}
          />
        ))}
      </SpeedDial>
    </Box>
  )
}
