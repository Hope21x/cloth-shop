import React from 'react';
import CollectionsOverview from '../../collections-overview/collections-overview';
import {Route} from 'react-router-dom';
import Collection from '../collection/collection';




const ShopPage = ({match}) => {
    
    return (

    <div className= 'shop-page'>
        <Route exact path={`${match.path}`} component= {CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component= {Collection}/>
    </div>
    )
          
};
        
    




export default ShopPage;