import React from 'react';
import TrailList from './TrailList';
import FiltersList from './FiltersList';

const TrailsDashboardPage = () => (
    <div>
        <FiltersList />   
        <TrailList />
    </div>
);

export default TrailsDashboardPage;