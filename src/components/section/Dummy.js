import Navbar from "@/components/section/Navbar";
import Main from "@/components/section/Main";
import Specials from "@/components/section/Specials";
import Footer from "@/components/section/Footer";


export default function Dummy(){



    return(
        <div className="flex flex-col h-screen w-full">
            <header className="h-23 bg-white">
                <Navbar></Navbar>
            </header>
            <main className="flex-1 bg-[#495e57]">
                <div className="flex flex-col items-center">
                    <h2 className="mt-40">This Page is Currently In Development</h2>
                    <p>We Are Sorry For the Inconvenience</p>
                </div>
            </main>
            <footer className="h-75 bg-[#495e57]"><Footer></Footer></footer>
        </div>




    )


}