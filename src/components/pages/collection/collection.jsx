import React from 'react';
import {connect} from 'react-redux';
import CollectionItem from '../../collection-item/collection-item';
import {selectCollection} from '../../../redux/shop/shop.selector';
import './collection.scss';

const Collection = ({collection}) => {
    console.log(collection)
    const {title, items} = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item}/>)
                }
            </div>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});
//the match.params focuses on the Route of the current page and then renders this 'Collection' component based on the current routing of the page and conditions set in the shop.selector
export default connect(mapStateToProps)(Collection);