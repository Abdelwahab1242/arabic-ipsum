import React from 'react';
import Button from './Button';
import Select from 'react-select';

import './mainHeader.css';

const typeOptions = [
    { value: 'parts', label: 'قطع'},
    { value: 'sentences', label: 'سطور'},
    { value: 'words', label: 'كلمات'}
];

const contentOptions = [
    { value: 'Umm', label: 'إنت عمري'},
    { value: 'sentences', label: 'قصيدة لوريم إيبسوم بالعربي'}
];

class GeneratorForm extends React.Component {
    render(){
        return <>
            <form className="main-form">
                <div className="input-wrapper">
                    <label htmlFor="number" className="label-form">عدد</label>
                    <input type="number" name="number" className="no-input-field"/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="type" className="label-form">النوع</label>
                    <Select options={typeOptions} isRtl={true} placeholder="اختر..." className="select-input"/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="type" className="label-form">المحتوي</label>
                    <Select options={contentOptions} isRtl={true} placeholder="اختر..." className="select-input"/>
                </div>
                {/* <input type="number" name="type" className="input-field"/> */}
                <Button />
            </form>
        </>
    }
}

export default GeneratorForm;