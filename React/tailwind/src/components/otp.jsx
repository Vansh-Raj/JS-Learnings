import { useRef } from "react";

export function Otp(){
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();

    return <div className="flex justify-center">
        <SubOtpBox reference= {ref1} onDone = {() => {
            ref2.current.focus();
        }} />
        <SubOtpBox reference= {ref2} onDone = {() => {
            ref3.current.focus();
        }}/>
        <SubOtpBox reference= {ref3} onDone = {() => {
            ref4.current.focus();
        }}/>
        <SubOtpBox reference= {ref4} onDone = {() => {
            ref5.current.focus();
        }}/>
        <SubOtpBox reference= {ref5} onDone = {() => {
            ref6.current.focus();
        }} />
        <SubOtpBox reference = {ref6}  onDone = {() => {
            ref6.current.focus();
        }}/>


    </div>
    
    
}
function SubOtpBox({
    reference,onDone
}){
    return <div>
    <input onChange={(e) => {
        onDone()
    }} ref = {reference}
     type="text" className="m-1 w-[40px] h-[50px] rounded-2xl
    bg-blue-500 px-4 text-white" />
    </div>
}