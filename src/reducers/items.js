import { 
  SUCCEEDED, 
  REQUESTED,
  GET_ITEMS,
  FAILED
 } from '../constants';

const items = (state = {list: [], isLoading: false}, action) => {
    switch (action.type) {

      case GET_ITEMS + REQUESTED:
        return Object.assign({}, state, { isLoading: true });

      case GET_ITEMS + FAILED:
        return Object.assign({}, state, { isLoading: false });

      case GET_ITEMS + SUCCEEDED:
          return Object.assign({}, state, { isLoading: false, list: action.items });
  
      default:
        return state;
    }
  }
  
export default items;