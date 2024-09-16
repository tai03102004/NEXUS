import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";


import type { ServiceCard } from "../Interface/ServiceCard.tsx"


const ServiceCard = (props: ServiceCard) => {
    const { color = "", title = "", icon = <BsShieldFillCheck /> , subtitle = "" } = props;
    
    return (
        <div className = "flex flex-col md:flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
            <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
                {icon}
            </div>
            <div className="ml-5 flex flex-col flex-1">
                <h3 className="mt-2 text-[#9999f5] text-lg font-bold">{title}</h3>
                <p className="mt-1 text-[#ddddff] text-sm md:w-9/12">
                    {subtitle}
                </p>
            </div>
        </div>
    );
}

function Services () {
    return (
        <div className="flex w-full justify-center items-center gradient-bg-services">
            <div className="flex mf:flex-rol flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items-start" data-aos="fade-up" data-aos-duration = "1200">
                    <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
                        Services that we
                        <br/>
                        Cotinue to improce
                    </h1>
                </div>
                <div className="flex-1 flex flex-col justify-start items-center mt-[15px]" data-aos="fade-up" data-aos-duration = "1600">
                    <ServiceCard
                        color="bg-[#2952E3]"
                        title="Security gurantee"
                        icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
                        subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
                    />
                    <ServiceCard
                        color="bg-[#8945F8]"
                        title="Best exchange rates"
                        icon={<BiSearchAlt fontSize={21} className="text-white" />}
                        subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
                    />
                    <ServiceCard
                        color="bg-[#F84550]"
                        title="Fastest transactions"
                        icon={<RiHeart2Fill fontSize={21} className="text-white" />}
                        subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
                    />
                </div>
            </div>
        </div>
    )
}

export default Services;