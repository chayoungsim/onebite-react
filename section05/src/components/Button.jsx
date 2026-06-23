
const Button = ({text, color="black"}) => {

    const onClickButton = (e) => {
        console.log(e)
    }

    return(
        <button 
        onClick = {onClickButton}
        style={{color:color}}>{text}- {color.toUpperCase()}
        </button>
    )
}

export default Button;