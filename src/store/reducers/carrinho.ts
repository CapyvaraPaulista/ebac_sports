import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type ProdutoState = {
  itens: Produto[]
}

const initialState: ProdutoState = {
  itens: []
}

const CarrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Item ja adicionado')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionar } = CarrinhoSlice.actions
export default CarrinhoSlice.reducer
