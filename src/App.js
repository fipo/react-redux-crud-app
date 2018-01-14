import React from 'react'
import './styles/global.css'
import { Provider } from 'react-redux'
import store from './store'
import Main from './layouts/Main'
import ProductListContainer from './containers/ProductListContainer'
import CreateProductContainer from './containers/CreateProductContainer'
import PermissionServiceContainer from './containers/PermissionServiceContainer'

import { getProducts } from './actions/productActions'
import { getPermissions } from './actions/permissionActions'
store.dispatch(getPermissions())
store.dispatch(getProducts())

const App = () => (
  <Provider store={store}>
    <Main>
      <CreateProductContainer />
      <ProductListContainer />
      <PermissionServiceContainer />
    </Main>
  </Provider>
)

export default App
