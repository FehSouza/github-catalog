import TranslateIcon from '@mui/icons-material/Translate'
import { Box, SpeedDial, SpeedDialAction } from '@mui/material'
import iconBrazil from 'assets/iconBrazil.svg'
import iconUnitedStates from 'assets/iconUnitedStates.svg'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

export const SwitchLanguages = () => {
  const { t, i18n } = useTranslation()

  const languages = useMemo(() => {
    return [
      { icon: iconBrazil, name: t('Header.Português'), lng: 'pt-BR' },
      { icon: iconUnitedStates, name: t('Header.Inglês'), lng: 'en-US' },
    ]
  }, [t])

  const handleChange = (lng: string) => i18n.changeLanguage(lng)

  return (
    <Box data-testid="switch-languages" sx={{ position: 'absolute', right: 16 }}>
      <SpeedDial
        icon={<TranslateIcon />}
        ariaLabel={t('Header.Selecione a linguagem desejada')}
        direction="down"
        transitionDuration={0}
      >
        {languages.map((action, index) => (
          <SpeedDialAction
            data-testid={`switch-languages-item-${index}`}
            key={action.name}
            icon={<img src={action.icon} />}
            tooltipTitle={action.name}
            onClick={() => handleChange(action.lng)}
          />
        ))}
      </SpeedDial>
    </Box>
  )
}
