import React from 'react';
import './compare.css';

class TableNames extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <ul>
                    <li>{this.props.criteria}</li>
                </ul>
            </>
        )
    }
};

export default TableNames;