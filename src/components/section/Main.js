
import Mybutton from "@/components/ui/Button";
export default function Main(){



    return(

    <div className="grid grid-rows-1 grid-cols-4 gap-4">
        <div className="col-start-2 col-end-3 mt-9">
            <h1 className="text-[#f4ce14] font-sans text-4xl  ">Little Lemon</h1>
            <p className="text-white font-sans text-3xl font-medium mb-4">Chicago</p>
            <p className="text-[#f6f7f7] fotn-serif mb-7">We are a family owned Mediterranean restraurant, focues on traditional recipes served with a modern twist.</p>
            <Mybutton text="Reserve a Table" h="h-10" w="w-34" to="/reservation"></Mybutton>
        </div>
        <div className="col-start-3">
            <img className="h-75 w-95 object-cover rounded-md relative top-3" src="/reserve.jpg" alt=""/>
        </div>

    </div>


    )

}