import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getItems } from '../../actions/items';
import Loader from '../../components/Loader';
import ItemsList from '../../components/ItemsList';
import ItemDetails from '../../components/ItemDetails';


const Items = () => {

    const{ id } = useParams();
    const dispatch = useDispatch();
    const items = useSelector(state => state.items.list);
    const isLoading = useSelector(state => state.items.isLoading);

    useEffect(() => {dispatch(getItems())}, [dispatch]);

    let activeItemId = id;
    let activeItem = {};
    if (items.length) {
        let activeIndex = items.findIndex(item => item.id === activeItemId);
        activeItem = activeIndex === -1? items[0] : items[activeIndex];
        activeItemId = activeItem.id;
    }

    return (
        <Fragment>
            {isLoading && <Loader/>}
            {items.length > 0 && <div className="items-container">
                <ItemsList items={items} active={activeItemId}/>
                <div className="items-conteiner__details"><ItemDetails {...activeItem} /></div>
            </div>}
        </Fragment>
    );
};
  
export default Items;