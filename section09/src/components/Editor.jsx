import { useState } from 'react'



const Editor = ({onCreate}) => {

    const [content, setContent] = useState('')

    const onChange = (e) => {
        setContent(e.target.value)
    }

    const onSubmit = () => {  
        if(content.trim() === '') return;
        onCreate(content)
        setContent('')  
    }

    return(
        <div className="editor">
            <input placeholder="새로운 Todo ..." onChange={onChange} value={content} />
            <button onClick={onSubmit}>추가</button>
        </div>
    )
}

export default Editor;  