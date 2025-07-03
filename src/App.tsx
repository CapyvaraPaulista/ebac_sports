import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { RootState, AppDispatch } from './store/index'
import { adicionar } from './store/reducers/carrinho'
import { toggleFavorito } from './store/reducers/favoritos'
import { setProdutos } from './store/reducers/produtos'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const produtos = useSelector((state: RootState) => state.produtos.itens)
  const carrinho = useSelector((state: RootState) => state.carrinho.itens)
  const favoritos = useSelector((state: RootState) => state.favoritos.items)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => {
        dispatch(setProdutos(res))
      })
  }, [dispatch])

  function handleAdicionarAoCarrinho(produto: Produto) {
    dispatch(adicionar(produto))
  }

  function handleFavoritar(produto: Produto) {
    dispatch(toggleFavorito(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={handleFavoritar}
          adicionarAoCarrinho={handleAdicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
