import React from 'react';
import './compare.css';

class VendorSubCriteriaItem extends React.Component {
    constructor(props) {
        super(props);
        this.displaySubCriteria = this.displaySubCriteria.bind(this);
    }

    displaySubCriteria() {
        return Object.values(this.props.vendorSubCriteria).map( (subCriteria, idx) => {
            return <li key={idx}>{subCriteria}</li>
        })
    }

    render() {
        return (
            <>
                {this.displaySubCriteria()}
            </>
        )
    }
};

export default VendorSubCriteriaItem;