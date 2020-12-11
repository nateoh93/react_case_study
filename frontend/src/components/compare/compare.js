import React from 'react';
import { Row, Col, Button, Menu, Dropdown } from 'antd';
import { CloseOutlined, PlusOutlined, DownOutlined, CloseCircleOutlined } from '@ant-design/icons';
import './compare.css';

class CompareProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            globalState: {
                vendor: {
                    1: {id: 1, vendorName: 'Google Drive', score: 6.0, productDescription:'Google does this', fundingHistory: 1, companyInfo: 'google.com',caseStudies: 2},
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
                    'Score': 'score',
                    'Product Description': 'productDescription',
                    'Funding History': 'fundingHistory',
                    'Company Info': 'companyInfo',
                    'Case Studies': 'caseStudies',
                    'Founded': 'founded',
                    'Key Investors': 'keyInvestors',
                    'Founders': 'founders'
                }
            },
            currentVendor: [1, 2, 3, 4],
            currentCriteria: ['Score', 'Product Description', 'Company Info'],
        };
        this.addCriteria = this.addCriteria.bind(this);
        this.removeCriteria = this.removeCriteria.bind(this);
        this.removeVendor = this.removeVendor.bind(this);
        this.addVendor = this.addVendor.bind(this);
        this.displayVendorButton = this.displayVendorButton.bind(this);
        this.criteriaMenu = this.criteriaMenu.bind(this);
        this.vendorMenu = this.vendorMenu.bind(this);
        this.displayCriteria = this.displayCriteria.bind(this);
        this.displayVendor = this.displayVendor.bind(this);
    }

    criteriaMenu() {
        let criteriaNotListed = Object.keys(this.state.globalState.criteria).filter( criteria => {
            return !this.state.currentCriteria.includes(criteria)
        });

        return (<ul className='criteria-dropdown' >
            {criteriaNotListed.map ( (criteria, idx) => {
                return <li key={idx} onClick={this.addCriteria}>{criteria}</li>
            })}
        </ul>)
    }

    addCriteria(e) {
        e.preventDefault();
        const addedCrit = e.currentTarget.innerText;
        const newCriteriaList = this.state.currentCriteria.concat(addedCrit);
        this.setState({currentCriteria: newCriteriaList});
    }
    
    removeCriteria(e) {
        e.preventDefault();
        const removedCrit = e.currentTarget.innerText;
        const updatedCriteria = this.state.currentCriteria.filter( criteria => criteria !== removedCrit);
        this.setState({currentCriteria: updatedCriteria});
    }

    displayCriteria() {
        return this.state.currentCriteria.map ( (criteria, idx) => {
            return (<li key={idx} onClick={this.removeCriteria}>
                    {criteria}<Button type='text'><CloseCircleOutlined /></Button>
                </li>
            )
        })
    }

    displayVendorButton() {
        return this.state.currentVendor.length === 4 ? 
            <p>Note: To add more vendors to compare you need to first remove one
                or more vendors. At a time maximum 4 vendors are allowed to compare.
            </p> :
            <div>
                <button className="dropdown-link" onClick={this.vendorMenu}>
                    <PlusOutlined /> Add New Vendor
                </button>
                {this.vendorMenu()}
            </div>
    }

    vendorMenu() {
        let vendorNotListed = Object.values(this.state.globalState.vendor).filter( vendor => {
            return !this.state.currentVendor.includes(vendor['id'])
        });

        return (<ul className='vendor-dropdown' >
            {vendorNotListed.map ( vendor => {
                return <li key={vendor.id} data-id={vendor.id} onClick={this.addVendor}>{vendor.vendorName}</li>
            })}
        </ul>)
    }

    addVendor(e) {
        e.preventDefault();
        const addedId = parseInt(e.currentTarget.dataset.id)
        const newVendorList = this.state.currentVendor.concat(addedId);
        this.setState({currentVendor: newVendorList});
    }
    
    removeVendor(e) {
        e.preventDefault();
        const removedId = parseInt(e.currentTarget.dataset.id);
        const updatedCurrentVendor = this.state.currentVendor.filter( vendorId => vendorId !== removedId);
        this.setState({currentVendor: updatedCurrentVendor});
    }

    displayVendor() {
        return this.state.currentVendor.map ( vendorId => {
            return (
                <ul className='vendor-criteria' key={vendorId}>
                    <li data-id={vendorId} onClick={this.removeVendor}>{this.state.globalState.vendor[vendorId].vendorName}
                        <Button type='text'><CloseOutlined /></Button>
                    </li>
                    {this.state.currentCriteria.map ( (criteria, idx) => {
                        let crit = this.state.globalState.criteria[criteria];
                        return <li key={criteria+idx}>{this.state.globalState.vendor[vendorId][crit]}</li>
                    })}
                </ul>
            )
        })
    }

    render() {
        return (
            <>
                <div className='table'>
                    <Button type='text' className='criteria-dropdown-link' onClick={this.criteriaMenu}>Add Criteria <DownOutlined /></Button>
                    {this.criteriaMenu()}
                    
                    <div className='table-info'>
                        <div className='left-side'>
                                {this.displayVendorButton()}
                            <ul className='table-category'>
                                {this.displayCriteria()}
                            </ul>
                        </div>

                        <div className='right-side'>
                            <ul className='vendor-info'>
                                {this.displayVendor()}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
};

export default CompareProducts;