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
            // numCompaniesDisplayed: 4,
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

    addVendor(key) {
        // e.preventDefault();
        
        //updates how many companies are displayed and whether to display add vendor button
        // let currentCompaniesDisplayed = this.state.numCompaniesDisplayed + 1;
        let updatedVendors = this.state.currentVendor.push(key);
        // this.setState({numCompaniesDisplayed: currentCompaniesDisplayed,
        //     currentVendor: updatedVendors
        // });
        
    }
    
    removeVendor(e) {
        e.preventDefault();
        
        const removedId = parseInt(e.currentTarget.dataset.id);
        const updatedCurrentVendor = this.state.currentVendor.filter( vendorId => vendorId !== removedId);

        this.setState({currentVendor: updatedCurrentVendor});
    }

    displayButton() {
        return this.state.currentVendor.length === 4 ? 
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
        const vendorNotListed = Object.values(this.state.globalState.vendor).filter( vendor => !this.state.currentVendor.includes(vendor['id']));
        return <Menu className='vendor-dropdown' onClick={this.addVendor}>
            {vendorNotListed.map ( vendor => {
                return (
                    <Menu.Item key={vendor.id}>{vendor.vendorName}</Menu.Item>
                    // <li key={vendor.id}>{vendor.vendorName}
                        
                    // </li>
                )
            })}
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
            // return <VendorNames key={vendorId} vendor={this.state.globalState.vendor[vendorId]} />
            return (
                <li key={vendorId} data-id={vendorId} onClick={this.removeVendor}>{this.state.globalState.vendor[vendorId].vendorName}
                    <Button type='text'><CloseOutlined /></Button>
                    {/* <Button type='text' data-id={vendorId} onClick={this.removeVendor}><CloseOutlined /></Button> */}
                </li>
            )
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
                    
                    <div className='table-info'>
                            {this.displayButton()}
                        <ul className='table-category'>
                            {this.displayCriteria()}
                        </ul>
                        <ul className='vendor-info'>
                            {this.displayVendor()}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
};

export default CompareProducts;