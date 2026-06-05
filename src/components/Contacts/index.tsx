import * as S from './Contacts.styles'

export function Contacts() {
  return (
    <S.Form id="contatos">
      <S.Title>Contatos</S.Title>

      <S.ContainerForm>
        <S.HeaderForm>
          <h1>Email</h1>
          <p>
            <strong>borgesg226@gmail.com</strong> ou preencha <br />
            o formulário de mensagens!
          </p>
          <S.ParagraphCity>São Paulo, SP | Brasil.</S.ParagraphCity>
        </S.HeaderForm>

        <S.ContactForm>
          <input id="name"    type="text"  placeholder="Nome*"     />
          <input id="email"   type="email" placeholder="E-mail*"   />
          <textarea id="message"           placeholder="Mensagem"  />
        </S.ContactForm>
      </S.ContainerForm>

      <S.ContactButton>
        <S.SubmitButton type="submit">Enviar mensagem</S.SubmitButton>
      </S.ContactButton>
    </S.Form>
  )
}