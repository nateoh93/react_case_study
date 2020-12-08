import React from 'react';
import { Row, Col, Button, Menu, Dropdown } from 'antd';
import { CloseOutlined, PlusOutlined, DownOutlined } from '@ant-design/icons';
import CriteriaItem from './criteria_item'
import './compare.css';

class TableNames extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numCompaniesDisplayed: this.props.numCompaniesDisplayed,
        };
        this.displayButton = this.displayButton.bind(this);
        // this.removeVendor = this.removeVendor.bind(this);
        this.addVendor = this.addVendor.bind(this);
        this.vendorMenu = this.vendorMenu.bind(this);
        this.displayCriteria = this.displayCriteria.bind(this);
    }

    addVendor(e) {
        e.preventDefault();

        //updates how many companies are displayed and whether to display add vendor button
        let currentCompaniesDisplayed = this.state.numCompaniesDisplayed;
        currentCompaniesDisplayed++;
        this.setState({numCompaniesDisplayed: currentCompaniesDisplayed});
    }

    displayButton() {
        return this.props.numCompaniesDisplayed === 4 ? 
            <p>Note: To add more vendors to compare you need to first remove one
                or more vendors. At a time maximum 4 vendors are allowed to compare.
            </p> :
            // <Button type='text' onClick={this.addVendor}><PlusOutlined /> Add New Vendor</Button>
            <Dropdown overlay={this.vendorMenu} trigger={['click']}>
                <a href="#" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <PlusOutlined /> Add New Vendor
                </a>
            </Dropdown>
    }

    vendorMenu() {
        return <Menu className='vendor-dropdown'>
            <Menu.Item key="1">3st menu item</Menu.Item>
            <Menu.Item key="2">4nd memu item</Menu.Item>
            <Menu.Item key="3">5rd menu item</Menu.Item>
        </Menu>
    }

    displayCriteria() {
        return this.props.currentCriteria.map ( (criteria, idx) => {
            return <CriteriaItem key={criteria+idx} criteria={criteria} />
        })
    }

    render() {
        return (
            <>
                {this.displayButton()}
                <ul>
                    {this.displayCriteria()}
                </ul>
            </>
        )
    }
};

export default TableNames;