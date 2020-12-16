import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';


const selectState = state => state.shop;

export const selectCollections = createSelector(
    [selectState],
    shop => shop.shop_data
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);


export const selectCollection = memoize((collectionUrlParam) => 
createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]


));


