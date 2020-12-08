import React from 'react';

class CriteriaItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>{this.props.criteria}</li>
        )
    }
}

export default CriteriaItem;