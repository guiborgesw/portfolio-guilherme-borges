import styled from 'styled-components'

export const ContactButton = styled.div`
  display: flex;
`

export const SubmitButton = styled.button`
  display: flex;
  margin-left: auto;
  margin-right: 22.188rem;
  width: 9.375rem;
  padding: 0.813rem;
  background-color: ${({ theme }) => theme.colors.blue300};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.829);
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.75rem;
  transition: transform 100ms linear;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue900};
    transform: scale(1.02);
  }
`

export const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.gray500};
  padding: 3.125rem 2.5rem;
`

export const Title = styled.legend`
  font-family: 'Press Start 2P', sans-serif;
  color: ${({ theme }) => theme.colors.white};
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
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.5;
  font-size: 1.125rem;

  h1 {
    font-family: 'Press Start 2P', sans-serif;
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }

  strong {
    font-family: ${({ theme }) => theme.fonts.primary};
  }
`

export const ParagraphCity = styled.p`
  display: flex;
  flex-direction: column;
  margin-top: 9.375rem;
  padding-left: 0.625rem;
`

export const ContactForm = styled.div`
  display: flex;
`