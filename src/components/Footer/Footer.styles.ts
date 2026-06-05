import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black};
  padding-top: 1.25rem;
  padding-bottom: 0.938rem;
`

export const FooterLink = styled.a`
  margin-right: 1.25rem;
  margin-left: 1.25rem;
`

export const FooterIcon = styled.img`
  width: 2.813rem;
  height: 2.938rem;
`