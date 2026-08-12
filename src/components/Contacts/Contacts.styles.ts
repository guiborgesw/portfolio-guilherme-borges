import styled from 'styled-components'
import { Button } from '../Projects/Projects.styles'

export const Form = styled.form`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 5rem 5.625rem;
`

export const Title = styled.h2`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: ${props => props.theme['white']};
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 4rem;

  &::before,
  &::after {
    content: '';
    display: block;
    height: 2px;
    width: 48px;
    flex-shrink: 0;
  }

  &::before {
    background: linear-gradient(to right, transparent, ${props => props.theme['blue-300']});
  }

  &::after {
    background: linear-gradient(to left, transparent, ${props => props.theme['blue-300']});
  }
`

export const ContainerForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  width: 100%;
  max-width: 900px;
  align-items: start;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme['blue-300']};
  font-size: 0.6rem;
  letter-spacing: 0.10em;

  p {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 500;
    color: ${props => props.theme['white']};
    padding-bottom: 1rem;

    strong {
      display: block;
      font-weight: 700;
      color: ${props => props.theme['blue-200']};
    }
  }
`

export const AlignmentSocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
  padding-top: 1rem;
`

export const ButtonSocialMedia = styled(Button)`
  width: 10rem;
  justify-content: center;
  align-items: center;
`

export const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: rgba(10, 15, 28, 0.6);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(37, 99, 235, 0.3);
  border-radius: 1rem;
  padding: 2rem;

  input,
  textarea {
    width: 100%;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(91, 140, 255, 0.2);
    border-radius: 8px;
    padding: 12px 16px;
    font-family: 'Fira Code', monospace;
    font-size: 0.9rem;
    color: ${props => props.theme['white']};
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &::placeholder {
      color: #4b5563;
    }

    &:focus {
      border-color: rgba(91, 140, 255, 0.6);
      box-shadow: 0 0 0 3px rgba(91, 140, 255, 0.1);
    }
  }

  textarea {
    height: 140px;
    resize: vertical;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 14px;
  width: 100%;
  max-width: 900px;
  padding-top: 1.5rem;
`

export const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: ${props => props.theme['blue-600']};
  color: ${props => props.theme['white']};
  border: 1px solid ${props => props.theme['blue-600']};
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: #3b82f6;
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
  }
`
