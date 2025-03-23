export const Input = ({
    type,
    placeholder,
    onClick

}) => {
    return <span onClick={onClick}
     className={`rounded-2xl
      text-3xl p-2 text-white 
    bg-blue-400`}>
        <input type = {type} placeholder={placeholder}
        className="bg-blue-400"></input>
    </span>
}