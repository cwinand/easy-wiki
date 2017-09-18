import { connect } from 'react-redux';
import PageListComponent from '../components/PageList'

const mapStateToProps = ( state ) => {
  return {
    pagesById: state.pages.byId
  }
}

const PageList = connect(
  mapStateToProps,
  null
)( PageListComponent )

export default PageList
