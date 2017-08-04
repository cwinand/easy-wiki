import { connect } from 'react-redux';
import CategoryListComponent from '../components/CategoryList';

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = () => {
  return {}
}

const CategoryList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryListComponent);

export default CategoryList;
