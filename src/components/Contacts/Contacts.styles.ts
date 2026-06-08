import styled from 'styled-components'

export const Form = styled.form`
  background-color: ${props => props.theme['gray-500']};
  padding: 3.125rem 2.5rem;
`

export const Title = styled.h2`
  font-family: 'Press Start 2P', sans-serif;
  color: ${props => props.theme['white']};
  text-align: center;
  display: block;
  margin: 3.125rem;
`

export const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
`

export const HeaderForm = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme['white']};
  line-height: 1.5;
  font-size: 1.125rem;

  h1 {
    font-family: 'Press Start 2P', sans-serif;
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }
`

export const ParagraphCity = styled.p`
  margin-top: 9.375rem;
  padding-left: 0.625rem;
`

export const ContactForm = styled.div`
  display: flex;
  flex-direction: column;

  input {
    border: 4px solid ${props => props.theme['black']};
    font-size: 1.563rem;
    width: 31.25rem;
    padding: 0.375rem;
    margin: 2% 0 5% 25%;
  }

  textarea {
    border: 4px solid ${props => props.theme['black']};
    font-size: 1.563rem;
    width: 31.25rem;
    height: 13.75rem;
    padding: 0.375rem;
    margin: 2% 0 5% 25%;
    resize: none;
  }
`

export const ContactButton = styled.div`
  display: flex;
`

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: 22.188rem;
  width: 9.375rem;
  padding: 0.813rem;
  background-color: ${props => props.theme['blue-300']};
  color: ${props => props.theme['white']};;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.829);
  border: none;
  cursor: pointer;
  font-size: 0.75rem;
  transition: transform 100ms linear;

  &:hover {
    background-color: ${props => props.theme['blue-900']};
    transform: scale(1.02);
  }
`