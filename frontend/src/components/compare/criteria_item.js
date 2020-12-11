import React from 'react';
import './compare.css';

class CriteriaItem extends React.Component {
    constructor(props) {
        super(props);
        this.displaySubCriteria = this.displaySubCriteria.bind(this);
    }

    displaySubCriteria() {
        return this.props.subCriteria.map( (subCriteria, idx) => {
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

export default CriteriaItem;