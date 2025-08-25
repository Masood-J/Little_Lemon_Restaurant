
import { TbMotorbike } from "react-icons/tb";

export default function Card(props){




    return(
        <div className="flex flex-col text-[#687973] bg-[#edefee] rounded-lg w-75 h-95 transform hover:scale-110 transition-transform [2000ms] ease-in ease-out">
            <img className="w-full h-35 rounded-md object-cover " src={props.ImgSrc} alt=""/>
            <div className="flex flex-row justify-between m-2">
                <h3 className="font-bold">{props.dish}</h3>
                <h4 className="text-[#ee9a73]">${props.price}</h4>
            </div>
            <p className="w-65 ml-2">{props.desc}</p>
<h3 className="m-3">Order a delivery
    <TbMotorbike className="inline-block ml-2"></TbMotorbike>
</h3>

        </div>



    )





}