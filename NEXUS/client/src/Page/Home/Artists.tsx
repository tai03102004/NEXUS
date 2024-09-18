import type { TextCard } from "../../Interface/TextCard.tsx"


const ServiceCard = (props: TextCard) => {
    const {  link = "", title = "" , subtitle = "" } = props;
    
    return (
        <div className = "flex items-center white-glassmorphism m-2 cursor-pointer hover:shadow-xl rounded-[120px] p-[25px] relative hover:bg-[#99E54D] group">
            <div className="bg-[#414B61] rounded-[50%] w-[95px] mr-[25px] overflow-hidden">
                <img className="w-[95px]" object-cover src={link}/>
            </div>
            <div className="">
                <div className="text-white font-genos text-[22px] font-[600]">{title}</div>
                <div className="text-[#9BABCD] text-[19px] font-[500] group-hover:text-black ">{subtitle}</div>
            </div>
        </div>
    );
}

function Artists () {
    return (
        <div className="flex w-full justify-center items-center gradient-bg-services">
            <div className="flex mf:flex-rol flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items-start" data-aos="fade-up" data-aos-duration = "1200">
                    <h1 className="text-white text-[70px] font-bold sm:text-5xl py-2 text-gradien font-genos">
                        Most Popular Artists
                    </h1>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-[20px] my-[60px]" data-aos="fade-up" data-aos-duration = "1600">
                    <ServiceCard link = "https://static.live.templately.com/agency/2022/10/60cf70c3-team-11.png" title = "Adem Parker" subtitle="2.905 Eth"/>
                    <ServiceCard link = "https://static.live.templately.com/agency/2022/10/2cb1323c-team-77.png" title = "Adem Parker" subtitle="2.905 Eth"/>
                    <ServiceCard link = "https://static.live.templately.com/agency/2022/10/49e19a6c-team-88.png" title = "Adem Parker" subtitle="2.905 Eth"/>
                    <ServiceCard link = "https://static.live.templately.com/agency/2022/10/f7b801ea-team-44.png" title = "Adem Parker" subtitle="2.905 Eth"/>
                    <ServiceCard link = "https://static.live.templately.com/agency/2022/10/cee455e7-team-66.png" title = "Adem Parker" subtitle="2.905 Eth"/>
                    <ServiceCard link = "https://static.live.templately.com/agency/2022/10/9f5e8509-team-22.png" title = "Adem Parker" subtitle="2.905 Eth"/>
                    <ServiceCard link = "https://static.live.templately.com/agency/2022/10/7ffb14ba-team-5.png" title = "Adem Parker" subtitle="2.905 Eth"/>
                    <ServiceCard link = "https://static.live.templately.com/agency/2022/10/ddaa11f6-team99.png" title = "Adem Parker" subtitle="2.905 Eth"/>
                </div>
            </div>
        </div>
    )
}

export default Artists;