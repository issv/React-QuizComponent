import React from 'react';
import DataService from './DataService';

const AddNew = (props) => {
    console.log(props, DataService.getData());
    return (
        <div>
            Add NEW
        </div>
    );
};

export default AddNew;
