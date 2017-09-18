import { connect } from 'react-redux';
import PageComponent from '../components/Page';

const mapStateToProps = ( state ) => {
  return {
    page: state.pages.byId[ state.pages.active ],
    sectionsById: state.sections.byId,
    isFetching: state.pages.isFetching
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {}
}

const Page = connect(
  mapStateToProps,
  mapDispatchToProps
)( PageComponent )

export default Page
