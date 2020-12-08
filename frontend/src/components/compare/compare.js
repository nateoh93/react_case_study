import React from 'react';
import { Row, Col, Button } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import './compare.css';

class Compare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ['Google', 'Dropbox', 'Salesforce'],
            score: [6, 4.5, 6.2],
            productDescription: ['Google does this', 'Dropbox does this', 'Salesforce does this'],
            fundingHistory: [{founded: '2000', keyInvestors: 'john', founders: 'amy'},
                {founded: '2001', keyInvestors: 'jake', founders: 'jen'},
                {founded: '2002', keyInvestors: 'brian', founders: 'lina'}
            ],
            companyInfo: ['google.com', 'dropbox.com', 'salesforce.com'],
            caseStudies: [2, 3, 4]
        };
        this.handleCriteria = this.handleCriteria.bind(this);
    }

    handleCriteria(e) {
        e.preventDefault();
    }

    render() {
        return (
            <>
                <div className='table'>
                    <Button type='text' onClick={this.handleCriteria}>Add Criteria <CaretDownOutlined /></Button>
                    <div>
                        <Row gutter={[8,{ xs: 8, sm: 16, md: 24, lg: 32 }]}>
                            <Col className="gutter-row" span={8}>
                                <div>Google</div>
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <div>Dropbox</div>
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <div>Salesforce</div>
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <div >Box</div>
                            </Col>
                            {/* <Col className="gutter-row" span={6}>
                                <div>1</div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div>2</div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div>3</div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div >4</div>
                            </Col> */}
                        </Row>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        </Row>
                    </div>
                </div>
            </>
        )
    }
};

export default Compare;