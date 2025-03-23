export const Button = ({
    disabled,
    children,
    onClick

}) => {
    return <span onClick={onClick} className={`rounded-2xl text-3xl py-2 px-10 text-white cursor-pointer ${disabled ? "bg-blue-200" : "bg-green-200"}`}>
        {children}
    </span>
}