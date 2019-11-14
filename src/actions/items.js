import { 
    REQUESTED,
    GET_ITEMS
} from '../constants';

export const getItems = () => ({
    type: GET_ITEMS + REQUESTED
});
