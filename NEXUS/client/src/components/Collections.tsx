import type { TextCard } from "../Interface/TextCard.tsx"


const ServiceCard = (props: TextCard) => {
    const { avatar="", name="",  link = "", title = "" , subtitle = "" } = props;
    
    return (
        <div className = "white-glassmorphism m-2 cursor-pointer hover:shadow-xl rounded-[10px] p-[25px] relative hover:bg-[#99E54D] group">
            <div className="flex items-center mb-[15px]">
                <div className="bg-[#414B61] rounded-[50%] mr-[15px] overflow-hidden">
                    <img className="w-[35px] h-[auto]" object-cover src={avatar}/>
                </div>
                <div className="text-[#CDD2DC] font-genos text-[14px] font-[500] group-hover:text-black">{name}</div>
            </div>
            <div className="bg-[#414B61] mb-[25px] overflow-hidden">
                <img className="w-[240px] h-[240px]" object-cover src={link}/>
            </div>
            <div className="">
                <div className="text-white font-genos text-[22px] mb-[5px] font-[700]">{title}</div>
                <div className="text-[#9BABCD] text-[18px] font-[500] group-hover:text-black">
                    {subtitle}<span className="text-[#53C343] group-hover:text-black">2.45 ETH</span>
                </div>
            </div>
            <div className="h-[1px] w-full bg-gray-600 my-4"></div>
            <div className="flex items-center justify-center">
                <button className="text-white text-center text-[16px] font-genos font-bold px-[25px] py-[10px] bg-[#99E54D] rounded-[10px] group-hover:bg-white group-hover:text-black">
                    PLACE BID
                </button>
            </div>
        </div>
    );
}

function Colelctions () {
    return (
        <div className="flex w-full justify-center items-center gradient-bg-services">
            <div className="flex mf:flex-rol flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items-start" data-aos="fade-up" data-aos-duration = "1200">
                    <h1 className="text-white text-[70px] font-bold sm:text-5xl py-2 text-gradien font-genos">
                        Most Popular Collections
                    </h1>
                </div>
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-[20px] my-[60px]" data-aos="fade-up" data-aos-duration = "1600">
                    <ServiceCard avatar="https://static.live.templately.com/agency/2022/10/9b0a2dda-user-2.png" name="jimena_stark" 
                            link = "https://static.live.templately.com/agency/2022/10/32646d4f-img-2.jpg" title = "Stained Glass Hearts" subtitle="Price: "/>
                    <ServiceCard avatar="https://static.live.templately.com/agency/2022/10/9b0a2dda-user-2.png" name="jimena_stark"
                            link = "https://static.live.templately.com/agency/2022/10/3493e241-img-3.png" title = "Carbon Blast In 3D" subtitle="Price: "/>
                    <ServiceCard avatar="https://static.live.templately.com/agency/2022/10/9b0a2dda-user-2.png" name="jimena_stark"
                            link = "https://static.live.templately.com/agency/2022/10/685d7e05-img-4.jpg" title = "Crystalline Shards" subtitle="Price: "/>
                    <ServiceCard avatar="https://static.live.templately.com/agency/2022/10/9b0a2dda-user-2.png" name="jimena_stark"
                            link = "https://static.live.templately.com/agency/2022/10/0bb74508-img-5.jpg" title = "Pixelated Tranquility" subtitle="Price: "/>
                    <ServiceCard avatar="https://static.live.templately.com/agency/2022/10/9b0a2dda-user-2.png" name="jimena_stark"
                            link = "https://static.live.templately.com/agency/2022/10/11ab750a-img1.png" title = "Pixelated Mysteries" subtitle="Price: "/>
                    <ServiceCard avatar="https://static.live.templately.com/agency/2022/10/9b0a2dda-user-2.png" name="jimena_stark"
                            link = "https://static.live.templately.com/agency/2022/10/60f2d5fe-img2.png" title = "Ink Stained Hands" subtitle="Price: "/>
                    <ServiceCard avatar="https://static.live.templately.com/agency/2022/10/9b0a2dda-user-2.png" name="jimena_stark"
                            link = "https://static.live.templately.com/agency/2022/10/446b4806-img3.png" title = "Sketched In Grey" subtitle="Price: "/>
                    <ServiceCard avatar="https://static.live.templately.com/agency/2022/10/9b0a2dda-user-2.png" name="jimena_stark"
                            link = "https://static.live.templately.com/agency/2022/10/b072ac06-img4.png" title = "Acrylic Coin Art" subtitle="Price: "/>
                    <ServiceCard avatar="https://static.live.templately.com/agency/2022/10/9b0a2dda-user-2.png" name="jimena_stark"
                            link = "https://static.live.templately.com/agency/2022/10/769c6576-img5.png" title = "Acrylic Coin Art" subtitle="Price: "/>
                    <ServiceCard avatar="https://static.live.templately.com/agency/2022/10/9b0a2dda-user-2.png" name="jimena_stark"
                            link = "https://static.live.templately.com/agency/2022/10/21dc73b3-img6.png" title = "Kettle Bell Lamps" subtitle="Price: "/>
                    <ServiceCard avatar="https://static.live.templately.com/agency/2022/10/9b0a2dda-user-2.png" name="jimena_stark"
                            link = "https://static.live.templately.com/agency/2022/10/d8be6a6d-img7.png" title = "Ripped And Barred" subtitle="Price: "/>
                    <ServiceCard avatar="https://static.live.templately.com/agency/2022/10/9b0a2dda-user-2.png" name="jimena_stark"
                            link = "https://static.live.templately.com/agency/2022/10/07fb8b4d-img8.png" title = "Colorful Collage" subtitle="Price: "/>
                </div>
                <div className="flex items-center justify-center bg-[#000] rounded-[10px] group hover:bg-[#53C343] transition-all duration-300 ease-[cubic-bezier(0.2, 1, 0.3, 1)]">
                    <div className="px-[36px] py-[20px] text-[24px] text-[#53C343] font-genos font-bold group-hover:text-white transition-all duration-300 ease-[cubic-bezier(0.2, 1, 0.3, 1)]">
                        VIEW ALL ITEMS
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Colelctions;