import {createSelector} from 'reselect';


const selectState = state => state.directory;

export const selectSections = createSelector(
    [selectState],
    directory => directory.sections
);