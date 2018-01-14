import { connect } from 'react-redux'
import ProductList from '../components/ProductList'

const mapStateToProps = state => ({
  products: state.products,
  permissions: state.permissions
})

export default connect(mapStateToProps)(ProductList)
