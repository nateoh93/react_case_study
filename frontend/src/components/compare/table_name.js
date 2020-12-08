import React from 'react';
import { CloseOutlined, PlusOutlined, DownOutlined } from '@ant-design/icons';
import './compare.css';

class TableNames extends React.Component {
    constructor(props) {
        super(props);
    }

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