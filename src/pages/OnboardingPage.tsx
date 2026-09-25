import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { styleOptions } from '../data/mockData'
import { pinterestService } from '../services/pinterestService'
import { useApp } from '../store/AppContext'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Chip } from '../components/ui/Chip'

const steps = ['Bienvenue', 'Styles', 'Colorimétrie', 'Pinterest', 'Avatar 3D', 'Finaliser']
const colors = ['Crème', 'Noir', 'Beige', 'Blush', 'Terracotta', 'Rose poudré']

export const OnboardingPage = () => {
  const { onboarding, setOnboarding } = useApp()
  const [step, setStep] = useState(0)
  const [feedback, setFeedback] = useState('')
  const navigate = useNavigate()

  const toggleStyle = (value: (typeof styleOptions)[number]) => {
    const has = onboarding.styles.includes(value)
    setOnboarding({ ...onboarding, styles: has ? onboarding.styles.filter((s) => s !== value) : [...onboarding.styles, value] })
  }
  const toggleColor = (value: string) => {
    const has = onboarding.colors.includes(value)
    setOnboarding({ ...onboarding, colors: has ? onboarding.colors.filter((s) => s !== value) : [...onboarding.colors, value] })
  }

  const finish = () => {
    setOnboarding({ ...onboarding, completed: true })
    navigate('/')
  }

  return (
    <section>
      <Card>
        <p>Étape {step + 1}/6</p>
        <progress max={steps.length} value={step + 1} />
        <h2>{steps[step]}</h2>
        {step === 0 && <p>Construisons votre dressing intelligent premium.</p>}
        {step === 1 && <div className="row-wrap">{styleOptions.map((style) => <Chip key={style} active={onboarding.styles.includes(style)} onClick={() => toggleStyle(style)}>{style}</Chip>)}</div>}
        {step === 2 && <div className="row-wrap">{colors.map((color) => <Chip key={color} active={onboarding.colors.includes(color)} onClick={() => toggleColor(color)}>{color}</Chip>)}</div>}
        {step === 3 && <Button onClick={async () => setFeedback(await pinterestService.simulateSync(onboarding.styles[0] ?? 'Chic'))}>Simuler Pinterest</Button>}
        {step === 4 && <p>Scan 3D présenté honnêtement : démonstration visuelle, sans caméra réelle.</p>}
        {step === 5 && <Button onClick={finish}>Terminer l'onboarding</Button>}
        <div className="row-wrap">
          <Button variant="secondary" disabled={step === 0} onClick={() => setStep((s) => Math.max(0, s - 1))}>Précédent</Button>
          <Button disabled={step === steps.length - 1} onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}>Suivant</Button>
        </div>
        {feedback && <p className="feedback-success">{feedback}</p>}
      </Card>
    </section>
  )
}
