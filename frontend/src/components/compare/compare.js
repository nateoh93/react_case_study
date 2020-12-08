import React from 'react';
import { Row, Col, Button, Menu, Dropdown } from 'antd';
import { CloseOutlined, PlusOutlined, DownOutlined } from '@ant-design/icons';
import './compare.css';
import TableNames from './table_name';
import VendorNames from './vendor_name';

class CompareProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            globalState: {
                vendor: {
                    1: {id: 1, vendorName: 'Google Drive', score: 6.0, productDescription:'Google does this', fundingHistory: 1, companyInfo: 'google.com', caseStudies: 2},
                    2: {id: 2, vendorName: 'Dropbox', score: 4.5, productDescription:'Dropbox does this', fundingHistory: 2, companyInfo: 'dropbox.com', caseStudies: 3},
                    3: {id: 3, vendorName: 'Salesforce', score: 6.2, productDescription:'Salesforce does this', fundingHistory: 3, companyInfo: 'salesforce.com', caseStudies: 4},
                    4: {id: 4, vendorName: 'Box', score: 6.1, productDescription:'Box does this', fundingHistory: 4, companyInfo: 'box.com', caseStudies: 6},
                    5: {id: 5, vendorName: 'LinkedIn', score: 7.0, productDescription:'LinkedIn does this', fundingHistory: 5, companyInfo: 'linkedin.com', caseStudies: 2},
                    6: {id: 6, vendorName: 'Twitter', score: 5.0, productDescription:'Twitter does this', fundingHistory: 6, companyInfo: 'twitter.com', caseStudies: 1}
                },
                fundingHistory: {
                    1: {id: 1, founded: '2000', keyInvestors: 'john', founders: 'amy' },
                    2: {id: 2, founded: '2001', keyInvestors: 'jake', founders: 'jen' },
                    3: {id: 3, founded: '2002', keyInvestors: 'brian', founders: 'lina' },
                    4: {id: 4, founded: '2003', keyInvestors: 'derek', founders: 'nicole' },
                    5: {id: 5, founded: '2004', keyInvestors: 'aaron', founders: 'alex' },
                    6: {id: 6, founded: '2005', keyInvestors: 'ted', founders: 'kendall' },
                },
                criteria: {
                    score: 'Score',
                    productDescription: 'Product Description',
                    fundingHistory: 'Funding History',
                    companyInfo: 'Company Info',
                    caseStudies: 'Case Studies',
                    founded: 'Founded',
                    keyInvestors: 'Key Investors',
                    founders: 'Founders'
                }
            },
            currentVendor: [1, 2, 3, 4],
            currentCriteria: ['Score', 'Product Description', 'Company Info'],
            numCompaniesDisplayed: 4,
        };
        this.addCriteria = this.addCriteria.bind(this);
        this.removeCriteria = this.removeCriteria.bind(this);
        this.removeVendor = this.removeVendor.bind(this);
        this.addVendor = this.addVendor.bind(this);
        this.displayButton = this.displayButton.bind(this);
        this.criteriaMenu = this.criteriaMenu.bind(this);
        this.vendorMenu = this.vendorMenu.bind(this);
        this.displayCriteria = this.displayCriteria.bind(this);
        this.displayVendor = this.displayVendor.bind(this);
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
            // <Dropdown overlay={this.vendorMenu} trigger={['click']}>
            //     <a href="#" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            //         <PlusOutlined /> Add New Vendor
            //     </a>
            // </Dropdown>
    }

    vendorMenu() {
        return <Menu className='vendor-dropdown'>
            <Menu.Item key="1">3st menu item</Menu.Item>
            <Menu.Item key="2">4nd memu item</Menu.Item>
            <Menu.Item key="3">5rd menu item</Menu.Item>
        </Menu>
    }

    criteriaMenu() {
        return <Menu className='criteria-dropdown'>
            <Menu.Item key="1">1st menu item</Menu.Item>
            <Menu.Item key="2">2nd memu item</Menu.Item>
            <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
    }

    displayCriteria() {
        return this.state.currentCriteria.map ( (criteria, idx) => {
            return <TableNames key={criteria+idx} criteria={criteria} />
        })
    }
    
    displayVendor() {

        return this.state.currentVendor.map ( vendorId => {
            return <VendorNames key={vendorId} vendor={this.state.globalState.vendor[vendorId]} />
        })
    }

    render() {
        return (
            <>
                <div className='table'>
                    
                    <Button type='text' onClick={this.addCriteria}>Add Criteria <DownOutlined /></Button>
                    {/* <Dropdown overlay={this.criteriaMenu} trigger={['click']}>
                        <a href="#" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Add Criteria <DownOutlined />
                        </a>
                    </Dropdown> */}
                    
                    <ul>
                        {this.displayButton()}
                        {this.displayCriteria()}
                    </ul>

                    <ul>
                        {this.displayVendor()}
                    </ul>

                    <div>
                        {/* this is a test button. will need to change this for a X for every company */}
                        <Button type='text' onClick={this.removeVendor}><CloseOutlined /></Button>
                    </div>
                </div>
            </>
        )
    }
};

export default CompareProducts;