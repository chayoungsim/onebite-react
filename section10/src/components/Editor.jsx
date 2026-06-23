import { useState } from 'react'



const Editor = ({onCreate}) => {

    const [content, setContent] = useState('')

    const onChange = (e) => {
        setContent(e.target.value)
    }

    const onKeydown = (e) => {
        if(e.key === 'Enter') {
            onSubmit()
        }
    }

    const onSubmit = () => {  
        if(content.trim() === '') return;
        onCreate(content)
        setContent('')  
    }

    return(
        <div className="editor">
            <input placeholder="새로운 Todo ..." onChange={onChange} value={content} onKeyDown={onKeydown}/>
            <button onClick={onSubmit}>추가</button>
        </div>
    )
}

export default Editor;  