import { GithubLogoIcon } from '@phosphor-icons/react'
import { 
  Form, 
  Title, 
  ContainerForm, 
  Header, 
  AlignmentSocialMedia, 
  ButtonSocialMedia, 
  ContactForm, 
  SubmitButton, 
  ContainerButton
} from './Contacts.styles'

export function Contacts() {
  return (
    <Form id="contatos">
      <Title>Contatos</Title>

      <ContainerForm>
        <Header>
          <div>
            <h2>EMAIL</h2>
            <p> 
              <strong>borgesg226@gmail.com</strong>
            </p>

            <h2>LOCALIZAÇÃO</h2>
            <p>São Paulo, SP — Brasil</p>

            <h2>REDES</h2>
            <AlignmentSocialMedia>
              <ButtonSocialMedia 
                href="https://www.linkedin.com/in/guiborgesw/" 
                target="_blank" 
                $variant="github"
              >
                in LinkedIn
              </ButtonSocialMedia>

              <ButtonSocialMedia 
                href="https://github.com/guiborgesw" 
                target="_blank" 
                $variant="github"
              >
                <GithubLogoIcon size={17} />
                GitHub
              </ButtonSocialMedia>
            </AlignmentSocialMedia>
          </div>
        </Header>

        <ContactForm>
          <input id="name" type="text" placeholder="Nome*" />
          <input id="email" type="email" placeholder="E-mail*" />
          <textarea id="message" placeholder="Mensagem" />
        </ContactForm>
      </ContainerForm>

      <ContainerButton>
        <SubmitButton type="submit">Enviar mensagem</SubmitButton>
      </ContainerButton>
    </Form>
  )
}