import { connect } from 'react-redux'
import { ItemsTab } from '../components/ItemsTab/ItemsTab'

const mapStateToProps = (state, props) => ({
  items: state.items
})

export default connect(mapStateToProps)(ItemsTab)
