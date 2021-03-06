import React from 'react';
import CriteriaItem from './criteria_item'
import VendorSubCriteriaItem from './vendor_item'
import { CloseOutlined, PlusOutlined, DownOutlined, CloseCircleOutlined, 
    CaretRightOutlined, CaretDownOutlined } from '@ant-design/icons';
import './compare.css';

class CompareProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            globalState: {
                vendor: {
                    1: {id: 1, vendorName: 'Google Drive', vendorCriteria: 1},
                    2: {id: 2, vendorName: 'Dropbox', vendorCriteria: 2},
                    3: {id: 3, vendorName: 'Salesforce', vendorCriteria: 3},
                    4: {id: 4, vendorName: 'Box', vendorCriteria: 4},
                    5: {id: 5, vendorName: 'LinkedIn', vendorCriteria: 5},
                    6: {id: 6, vendorName: 'Twitter', vendorCriteria: 6}
                },
                'Funding History': {
                    1: {'Founded': '2000', 'Key Investors': 'John', 'Founders': 'Amy' },
                    2: {'Founded': '2001', 'Key Investors': 'Jake', 'Founders': 'Jen' },
                    3: {'Founded': '2002', 'Key Investors': 'Brian', 'Founders': 'Lina' },
                    4: {'Founded': '2003', 'Key Investors': 'Derek', 'Founders': 'Nicole' },
                    5: {'Founded': '2004', 'Key Investors': 'Aaron', 'Founders': 'Alex' },
                    6: {'Founded': '2005', 'Key Investors': 'Ted', 'Founders': 'Kendall' },
                },
                vendorCriteria: {
                    1: {'Overall Score': 6.0, 'Product Description':'Google does this', 'Funding History': '$170M', 'Company Info': 'google.com','Case Studies': 2},
                    2: {'Overall Score': 4.5, 'Product Description':'Dropbox does this', 'Funding History': '$100M', 'Company Info': 'dropbox.com', 'Case Studies': 3},
                    3: {'Overall Score': 6.2, 'Product Description':'Salesforce does this', 'Funding History': '$70M', 'Company Info': 'salesforce.com', 'Case Studies': 4},
                    4: {'Overall Score': 6.1, 'Product Description':'Box does this', 'Funding History': '$90M', 'Company Info': 'box.com', 'Case Studies': 6},
                    5: {'Overall Score': 7.0, 'Product Description':'LinkedIn does this', 'Funding History': '$200M', 'Company Info': 'linkedin.com', 'Case Studies': 2},
                    6: {'Overall Score': 5.0, 'Product Description':'Twitter does this', 'Funding History': '$150M', 'Company Info': 'twitter.com', 'Case Studies': 1},
                },
                criteria: {
                    'Overall Score': null, 
                    'Product Description': null, 
                    'Funding History': ['Founded', 'Key Investors', 'Founders'], 
                    'Company Info': null, 
                    'Case Studies': null
                }
            },
            currentVendor: [1, 2, 3, 4],
            currentCriteria: ['Overall Score', 'Product Description', 'Company Info', 'Funding History'],
            displaySubCriteria: 'no-display',
        };
        this.addCriteria = this.addCriteria.bind(this);
        this.removeCriteria = this.removeCriteria.bind(this);
        this.removeVendor = this.removeVendor.bind(this);
        this.addVendor = this.addVendor.bind(this);
        this.displayVendorButton = this.displayVendorButton.bind(this);
        this.criteriaMenu = this.criteriaMenu.bind(this);
        this.vendorMenu = this.vendorMenu.bind(this);
        this.displayCriteria = this.displayCriteria.bind(this);
        this.displaySubCriteria = this.displaySubCriteria.bind(this);
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
        const removedCrit = e.currentTarget.dataset.name
        const updatedCriteria = this.state.currentCriteria.filter( criteria => criteria !== removedCrit);
        this.setState({currentCriteria: updatedCriteria});
    }

    displayCriteria() {
        return this.state.currentCriteria.map ( (criteria, idx) => {
            if (this.state.globalState.criteria[criteria]) {
                return (<ul key={idx}>
                        <li>
                            <button className='subcriteria' onClick={this.displaySubCriteria}>
                                {this.state.displaySubCriteria === 'display' ? <CaretDownOutlined /> : <CaretRightOutlined />}
                            </button>
                            {criteria}
                            <button className='remove-crit' data-name={criteria} onClick={this.removeCriteria}><CloseCircleOutlined /></button>
                        </li>
                        <CriteriaItem display={this.state.displaySubCriteria} subCriteria={this.state.globalState.criteria[criteria]}/>
                </ul>)
            } else {
                return (<li key={idx}>
                        {criteria}
                        <button className='remove-crit' data-name={criteria} onClick={this.removeCriteria}><CloseCircleOutlined /></button>
                    </li>)
            }
        })
    }

    displaySubCriteria(e) {
        e.preventDefault();
        let status = this.state.displaySubCriteria === 'display' ? 'no-display' : 'display';
        this.setState({displaySubCriteria: status});
    }

    displayVendorButton() {
        return this.state.currentVendor.length === 4 ? 
            <p>Note: To add more vendors to compare you need to first remove one
                or more vendors. At a time maximum 4 vendors are allowed to compare.
            </p> :
            <p>
                <button className="dropdown-link" onClick={this.vendorMenu}><PlusOutlined /> Add New Vendor</button>
                {this.vendorMenu()}
            </p>
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
                <div className='vendor-criteria' key={vendorId}>
                    <div className='vendor-name'>
                        <div>{this.state.globalState.vendor[vendorId].vendorName}</div>
                        <button className='remove-vendor' data-id={vendorId} onClick={this.removeVendor}><CloseOutlined /></button>
                    </div>

                    {this.state.currentCriteria.map ( (criteria, idx) => {
                        if (this.state.globalState[criteria]) {    
                            return (<ul key={criteria+idx}>
                                <li>{this.state.globalState.vendorCriteria[vendorId][criteria]}</li>
                                <VendorSubCriteriaItem display={this.state.displaySubCriteria} vendorSubCriteria={this.state.globalState[criteria][vendorId]} />
                            </ul>)
                        } else {
                            return <li key={criteria+idx}>{this.state.globalState.vendorCriteria[vendorId][criteria]}</li>
                        }
                    })}
                </div>
            )
        })
    }

    render() {
        return (
            <>
                <div className='table'>
                    <div className='criteria'>
                        <button type='text' className='criteria-dropdown-link' onClick={this.criteriaMenu}>Add Criteria <DownOutlined /></button>
                        {this.criteriaMenu()}
                    </div>
                    
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