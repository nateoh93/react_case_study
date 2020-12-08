import React from 'react';
import { Row, Col, Button, Menu, Dropdown } from 'antd';
import { CaretDownOutlined, CloseOutlined, PlusOutlined, DownOutlined } from '@ant-design/icons';
import './compare.css';
import TableNames from './table_name';

class Compare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ['Google Drive', 'Dropbox', 'SalesForce', 'Box'],
            score: [6, 4.5, 6.2, 6.1],
            productDescription: ['Google does this', 'Dropbox does this', 'Salesforce does this'],
            fundingHistory: [{founded: '2000', keyInvestors: 'john', founders: 'amy'},
                {founded: '2001', keyInvestors: 'jake', founders: 'jen'},
                {founded: '2002', keyInvestors: 'brian', founders: 'lina'}
            ],
            companyInfo: ['google.com', 'dropbox.com', 'salesforce.com'],
            caseStudies: [2, 3, 4],
            numCompaniesDisplayed: 4,
        };
        this.addCriteria = this.addCriteria.bind(this);
        this.removeCriteria = this.removeCriteria.bind(this);
        this.removeVendor = this.removeVendor.bind(this);
        this.addVendor = this.addVendor.bind(this);
        this.displayButton = this.displayButton.bind(this);
        this.menu = this.menu.bind(this);
    }

    addCriteria(e) {
        e.preventDefault();
        
    }
    
    removeCriteria(e) {
        e.preventDefault();
        
    }

    addVendor(e) {
        e.preventDefault();

        //updates how many companies are displayed and whether to display add vendor button
        let currentCompaniesDisplayed = this.state.numCompaniesDisplayed;
        currentCompaniesDisplayed++;
        this.setState({numCompaniesDisplayed: currentCompaniesDisplayed});
    }
    
    removeVendor(e) {
        e.preventDefault();

        //updates how many companies are displayed and whether to display add vendor button
        let currentCompaniesDisplayed = this.state.numCompaniesDisplayed;
        currentCompaniesDisplayed--;
        this.setState({numCompaniesDisplayed: currentCompaniesDisplayed});
    }

    displayButton() {
        return this.state.numCompaniesDisplayed === 4 ? 
            <p>Note: To add more vendors to compare you need to first remove one
                or more vendors. At a time maximum 4 vendors are allowed to compare.
            </p> :
            <Button type='text' onClick={this.addVendor}><PlusOutlined /> Add New Vendor</Button>
    }

    menu() {
        return <Menu>
            <Menu.Item key="1">1st menu item</Menu.Item>
            <Menu.Item key="2">2nd memu item</Menu.Item>
            <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
    }

    render() {
        return (
            <>
                <div className='table'>
                    {/* <Button type='text' onClick={this.addCriteria}>Add Criteria <CaretDownOutlined /></Button> */}
                    
                    <Dropdown overlay={this.menu} trigger={['click']}>
                        <a href="#" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Add Criteria <DownOutlined />
                        </a>
                    </Dropdown>
                    
                    {this.displayButton()}
                    <TableNames numCompaniesDisplayed={this.state.numCompaniesDisplayed}/>
                    <div>
                        {/* this is a test button. will need to change this for a X for every company */}
                        <Button type='text' onClick={this.removeVendor}><CloseOutlined /></Button>
                    </div>
                </div>
            </>
        )
    }
};

export default Compare;