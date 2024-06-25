import TranslateIcon from '@mui/icons-material/Translate'
import { Box, SpeedDial, SpeedDialAction } from '@mui/material'
import iconBrazil from 'assets/iconBrazil.svg'
import iconUnitedStates from 'assets/iconUnitedStates.svg'
import { useTranslation } from 'react-i18next'

const languages = [
  { icon: iconBrazil, name: 'portuguese', lng: 'pt-BR' },
  { icon: iconUnitedStates, name: 'english', lng: 'en-US' },
]

export const SwitchLanguages = () => {
  const { t, i18n } = useTranslation()

  const handleChange = (lng: string) => i18n.changeLanguage(lng)

  return (
    <Box data-testid="switch-languages" width={40} height={40}>
      <SpeedDial
        icon={<TranslateIcon fontSize="small" />}
        ariaLabel={t('Header.selectLanguage')}
        direction="down"
        transitionDuration={0}
        FabProps={{ size: 'small' }}
        sx={{ width: 40, position: 'absolute' }}
      >
        {languages.map((action, index) => (
          <SpeedDialAction
            data-testid={`switch-languages-item-${index}`}
            key={action.name}
            icon={<img src={action.icon} />}
            tooltipTitle={t(`Header.${action.name}`)}
            onClick={() => handleChange(action.lng)}
            sx={{ maxWidth: 40, maxHeight: 40 }}
          />
        ))}
      </SpeedDial>
    </Box>
  )
}
