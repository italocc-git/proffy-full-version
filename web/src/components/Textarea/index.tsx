import React, { TextareaHTMLAttributes } from 'react'
import './styles.css'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;


}


const Textarea: React.FunctionComponent<TextareaProps> = (props) => {
    return (
        <div className="textarea-block">
            <label htmlFor={props.name}>
                {props.label}
            </label>
            <textarea {...props} id={props.name} />
        </div>
    )

}

export default Textarea