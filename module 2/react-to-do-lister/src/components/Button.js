

const Button= ({color, text, onClick})=>{

    return (
        <button onClick={onClick}
        style={{backgroundColor: color}}
        className='btn'>    
    {text}
        </button>


    )
}
//adding stuff gafds

export default Button