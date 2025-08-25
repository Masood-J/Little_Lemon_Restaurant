import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export default function Footer(){


   return(
       <div className="grid grid-cols-6 grid-rows-1 justify-center mt-10 ">
           <img className="row-start-1 row-end-2 col-start-2" src="/logo-2.png" alt=""/>
           <div className="col-start-3 flex flex-col">
               <h2 className="mb-3 font-medium">SITEMAP</h2>
               <p>Home</p>
               <p>About</p>
               <p>Menu</p>
               <p>Reservations</p>
               <p>Order Online</p>
               <p>Login</p>
           </div>
           <div className="flex flex-col col-start-4">
               <h2 className="mb-3 font-medium">CONTACT US</h2>
               <p><IoLocationOutline className="inline-block mr-2"></IoLocationOutline>
                   678 Pisa Ave,<i>Chicago</i>,IL 60611</p>
               <p><FaPhone className="inline-block mr-2"></FaPhone>
                   (312) 593-2744</p>
               <p><MdOutlineMail className="inline-block mr-2"></MdOutlineMail>
                   customer@littlelemon.com</p>
           </div>
           <div className="flex flex-col col-start-5">
               <div className="ml-3 ">
<h2 className="mb-3 font-medium">CONNECT WITH US</h2>
               <div className="flex flex-row gap-2">
<FaFacebook></FaFacebook>
                   <FaTwitter></FaTwitter>
<FaInstagram></FaInstagram>
                   <FaYoutube></FaYoutube>

               </div>
               </div>
</div>
       </div>
   )

}