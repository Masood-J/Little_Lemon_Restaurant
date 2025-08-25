"use client";
import Link from "next/link";
import {usePathname} from "next/navigation"
export default function Navbar(){

    const pathname = usePathname();

    let links = [
        { label: "HOME", href: "" },
        { label: "ABOUT", href: "default" },
        { label: "MENU", href: "default/menu" },
        { label: "RESERVATIONS", href: "reservation" },
        { label: "ORDER ONLINE", href: "default/order" },
        { label: "LOGIN", href: "default/login" },
    ];

    return(
        <div className="grid grid-cols-6 grid-rows-1 gap-10 items-center" >
            <img className="col-start-2 mt-2" src="/logo.jpg" alt=""/>
            <div className="col-start-3 col-end-6 flex flex-row gap-5">
                {links.map((link,index)=>{return <Link className={`text-green-950 p-6 hover:bg-[#f4ce14] ${pathname===`/${link.href}`? "bg-[#f4ce14]" : ""} `} key={index} href={`/${link.href}`}>{link.label}</Link>})}
            </div>
        </div>


    )



}