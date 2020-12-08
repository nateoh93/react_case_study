import React from 'react';
import './compare.css';

class VendorNames extends React.Component {
    

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