import { connect } from 'react-redux'
import { MainTab } from '../components/MainTab/MainTab'
import * as mainTabActions from '../actions/main'

const mapStateToProps = (state, props) => ({
  main: state.main
})

const mapActions = ({
  addItem: mainTabActions.addItem
})

export default connect(mapStateToProps, mapActions)(MainTab)
