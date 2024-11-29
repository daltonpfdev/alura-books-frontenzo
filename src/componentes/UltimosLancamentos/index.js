import { livrosLancamento } from "./dadosUltimosLancamentos"
import { Titulo } from "../Titulo"
import CardRecomenda from "../CardRecomenda"
import styled from "styled-components"
import imagemLivro2 from "./../../imagens/livro2.png"

const UltimosLancamentosContainer = styled.section`
  background-color: #EBECEE;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo 
        cor="#EB9B00" 
        tamanhoFonte="36px" 
        alinhamento="center">
        Últimos Lançamentos
      </Titulo>
      <NovosLivrosContainer>
        { 
          livrosLancamento.map(livro => (
            <img src={livro.src} alt="livros-lancamentos"></img>
          ))
        }
      </NovosLivrosContainer>
      <CardRecomenda 
        titulo="Talvez você se interesse por..."
        subtituto="Angular 11"
        descrisao="Criando um aplicação Front-Enzo"
        imagem={imagemLivro2}
      />
    </UltimosLancamentosContainer>
  )
}

export default UltimosLancamentos