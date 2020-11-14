import React from 'react';

import './mainHeader.css';

class Button extends React.Component {
    render(){
        return <>
            <button  className='generate-btn'>
                إنشاء
            </button>
        </>
    }
}

export default Button;
//type={this.props.type || 'buttton'} value={this.props.value || null}