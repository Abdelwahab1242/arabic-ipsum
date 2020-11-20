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
    { value: 'lorIpAr', label: 'قصيدة لوريم إيبسوم بالعربي'}
];

class GeneratorForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            num: 5,
            type: typeOptions[1].value,
            content: contentOptions[0].value
        };

        this.handleNumChange = this.handleNumChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNumChange(event) {
        this.setState({num: event.target.value});
    }

    handleTypeChange(value) {
         this.setState({type: value});
    }
    
    handleContentChange(value) {
        this.setState({content: value});
    }

    handleSubmit(event) {
        alert(`Num: ${this.state.num}, Type: ${this.state.type}, Content: ${this.state.content}`);
        event.preventDefault();
      }
    
    render(){
        return <>
            <form className="main-form" onSubmit={this.handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="number" className="label-form">عدد</label>
                    <input type="number" name="number" className="no-input-field" onChange={this.handleNumChange}/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="type" className="label-form">النوع</label>
                    <Select options={typeOptions} isRtl={true} placeholder="اختر..." className="select-input" value={this.state.type} onChange={this.handleTypeChange}/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="type" className="label-form">المحتوي</label>
                    <Select options={contentOptions} isRtl={true} placeholder="اختر..." className="select-input" value={this.state.content} onChange={this.handleContentChange}/>
                </div>
                {/* <input type="number" name="type" className="input-field"/> */}
                <Button />
            </form>
        </>
    }
}

export default GeneratorForm;