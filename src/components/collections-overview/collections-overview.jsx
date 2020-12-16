import React from 'react';
import './collection-overview.scss';
import {connect} from 'react-redux'; 
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';
import CollectionPreview from '../../components/preview/collection-preview';


const CollectionsOverview = ({collections}) => (
    <div className='collectons-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        } 
    </div>
);
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);