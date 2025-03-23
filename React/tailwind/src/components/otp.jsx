import { useRef, useState } from "react"

export function Otp(){
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();

    return <div className=" flex justify-center">
        <SubotpBox refernce={ref1} onDone = {()=>
            {
                ref2.current.focus();
            }
        }/>
        <SubotpBox refernce={ref2} onDone = {()=>
            {
                ref3.current.focus();
            }}/>
        <SubotpBox refernce={ref3} onDone = {()=>
            {
                ref4.current.focus();
            }}/>
        <SubotpBox refernce = {ref4} onDone = {()=>
            {
                ref5.current.focus();
            }}/>
        <SubotpBox refernce = {ref5} onDone = {()=>
            {
                ref6.current.focus();
            }}/>
        <SubotpBox refernce = {ref6} onDone = {()=>
            {
                ref6.current.focus();
            }}/>
        
    </div>

}
function SubotpBox({
    refernce,onDone
})
{
    const [inputBoxVal,setInputBoxVal] = useState("");
    return <div>
        <input value = {inputBoxVal} ref= {refernce} onChange={(e) => {
            const val = e.target.value;
             
            onDone()
        }} type="text" className=" p-4 m-1 w-[40px] h-[50px] text-white rounded-2xl bg-blue-400 " />
    </div>
}