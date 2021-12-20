import React from 'react'
import '../styles/components.css'
import { Input } from 'antd';
import AddTextArea from './AddTextArea'
import { useState } from 'react';

const Textarea = () => {
    const [text,setText] = useState('')
    const { TextArea } = Input;

    const onChange = e => {
        setText(e.target.value);
    };
    return (
        <div className="textBorder">
            <TextArea value={text} className='textarea-border' showCount maxLength={400} style={{ height: 250 }} onChange={onChange} />
          <AddTextArea text={text}/>
        </div>
    )
}

export default Textarea
