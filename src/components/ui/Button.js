"use client";
import {useRouter} from "next/navigation";


export default function Mybutton(props){
    const router=useRouter();
    const handleClick = (e) => {
        // Only navigate if `to` prop exists
        if (props.to) {
            router.push(props.to);
        }}
return(
    <button className={`bg-[#f4ce14] text-green-600 rounded-3xl ${props.h} ${props.w} transform hover:scale-110 transition-transform [2000ms] ease-in ease-out active:opacity-90`} type={props.type}
    onClick={handleClick} >
        <h4 className={`text-[#4a5e57]`}>{props.text}</h4>
    </button>
)
}