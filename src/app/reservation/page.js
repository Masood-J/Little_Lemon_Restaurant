import Navbar from "@/components/section/Navbar";
import Footer from "@/components/section/Footer";
import Mybutton from "@/components/ui/Button";
import Main from "@/components/section/Main";
import Specials from "@/components/section/Specials";
import MyForm from "@/components/section/MyForm";

export default function Reservations(){
    return(
    <div className="flex flex-col">
        <header className="h-23 bg-white">
            <Navbar></Navbar>
        </header>
        <section>

            <div className="grid grid-cols-6 grid-rows-[100px_1fr] h-[630px] bg-white">
                <div className="row-start-1 row-end-1 col-span-6 text-center bg-[#495e57] ">
                    <h1 className="mt-9 text-3xl font-sans font-bold">Table reservation</h1>
                </div>
                <MyForm></MyForm>

            </div>
        </section>


        <footer className="h-75 bg-[#495e57]"><Footer></Footer></footer>
    </div>
    )



}