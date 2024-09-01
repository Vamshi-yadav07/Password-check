import styled from 'styled-components'

export const Container = styled.div`
  height:100vh;
  width:100vw;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color: #2d2d44;
`

export const PassWordCard = styled.div`
  background-color: #383850;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 400px;
  height:300px;
`
export const PasswordTitle = styled.h1`
  font-size: 2em;
  color: #fff;
  margin-bottom: 10px;
  font-family:"Roboto"
`
export const PasswordValidatorSubtitle = styled.p`
  color: #cccccc;
  font-size: 1em;
  margin-bottom: 20px;
`

export const PasswordValidatorInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 1em;
  margin-bottom: 10px;    

`

export const InvalidPass = styled.p`
  color: #e74c3c;
  font-size: 0.9em;
`
