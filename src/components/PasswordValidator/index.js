import {useState} from 'react'
import {
  InvalidPass,
  Container,
  PasswordValidatorInput,
  PasswordValidatorSubtitle,
  PasswordTitle,
  PassWordCard,
} from './styledComponents'

const PasswordValidator = () => {
  const [isValid, setterValid] = useState(false)
  const [passkey, settpass] = useState('')

  const checkPassword = event => {
    const password1 = event.target.value
    console.log(typeof password1)
    settpass(password1)
    if (password1.length >= 8) {
      setterValid(true)
    } else {
      setterValid(false)
    }
  }
  return (
    <Container>
      <PassWordCard>
        <PasswordTitle>Password Validator</PasswordTitle>
        <PasswordValidatorSubtitle>
          Check how strong and secure is your password
        </PasswordValidatorSubtitle>
        <PasswordValidatorInput
          type="password"
          onChange={checkPassword}
          value={passkey}
        />
        {isValid ? (
          ''
        ) : (
          <InvalidPass>Your password must be at least 8 characters</InvalidPass>
        )}
      </PassWordCard>
    </Container>
  )
}

export default PasswordValidator
