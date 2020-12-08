import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import './compare.css';

class TableNames extends React.Component {
    

    render() {
        return (
            <>
                <ul>
                    <li>{this.props.criteria} <CloseOutlined /></li>
                </ul>
            </>
        )
    }
};

export default TableNames;