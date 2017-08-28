import { connect } from 'react-redux';
import PageComponent from '../components/Page';

const mapStateToProps = ( state ) => {
  return {
    data: state.pages.active.data,
    isFetching: state.pages.isFetching
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {}
}

const Page = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageComponent)

export default Page
