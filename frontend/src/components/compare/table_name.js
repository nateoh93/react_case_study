import React from 'react';
import { Row, Col, Button } from 'antd';
import './compare.css';

class TableNames extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                
        };
        // this.displayVendorButton = this.displayVendorButton.bind(this);
    }

    // displayVendorButton() {
    //     return this.props.numCompaniesDisplayed === 4 ? 
    //         <p>Note: To add more vendors to compare you need to first remove one
    //             or more vendors. At a time maximum 4 vendors are allowed to compare.
    //         </p> :
    //         <Button type='text' onClick={this.handleCriteria}>Add New Vendor</Button>
    // }

    render() {
        return (
            <>
                {/* {this.displayVendorButton()} */}
                <ul>
                    <li>
                        Overall Score
                    </li>
                    <li>
                        Product Descriptions
                    </li>
                    <li>
                        Funding History
                    </li>
                </ul>
            </>
        )
    }
};

export default TableNames;