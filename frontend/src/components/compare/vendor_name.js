import React from 'react';
import './compare.css';

class VendorNames extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <ul>
                    <li>{this.props.vendor.vendorName}</li>
                </ul>
            </>
        )
    }
};

export default VendorNames;