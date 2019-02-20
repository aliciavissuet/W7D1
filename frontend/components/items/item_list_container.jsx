import {connect} from 'react-redux';
import {itemList} from './item_list';
import {allItems} from '../../reducers/selectors';

const mapStateToProps = (todos) => ({
  items: allItems(todos)
});

const mapDispatchToProps = (dispatch) => ({
  addStoreItem: item => dispatch(addSingleItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(itemList);