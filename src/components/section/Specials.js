import Mybutton from "@/components/ui/Button";
import Card from "@/components/ui/Card";
export default function Specials(){


return(

    <div className="grid grid-cols-6 grid-rows-[80px_1fr]">
        <div className="row-start-1 row-end-1 col-start-2 col-end-6 flex flex-row justify-between mt-10">
            <h2 className="text-[#495e57] text-2xl font-semibold">This Week Specials!</h2>
            <Mybutton text="Online Menu" h="h-8" w="w-27"></Mybutton>
        </div>
        <div className="row-start-2 col-start-2 col-end-6 justify-between flex flex-row gap-4">
            <Card dish="Greek Salad" price="12.99" ImgSrc="/menu-3.jpg" desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons"></Card>
            <Card dish="Fruit Cake" price="5.99" ImgSrc="/menu-2.jpg" desc="This isn't your grandma's fruit cake. Our version is a light, moist sponge cake layered with fresh seasonal berries and a delicate lemon cream. A refreshing treat."></Card>
            <Card dish="Pasta" price="5.0" ImgSrc="/menu-1.jpg" desc="A classic revisited. Perfectly al dente spaghetti tossed in a rich, slow-simmered marinara sauce made from vine-ripened tomatoes, topped with fresh basil and parmesan"></Card>
        </div>
    </div>


)
}