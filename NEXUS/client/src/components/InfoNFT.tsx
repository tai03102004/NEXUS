import { TextCard } from "../Interface/TextCard";

const InfoItemNFT = (props: TextCard) => {

    const {link = "", title = "", subtitle = ""} = props;

    return (
        <>
            <div className= "my-[80px] rounded-[15px]">
                <img 
                        decoding="async" 
                        width="50" 
                        height="auto" 
                        src = {link}  
                        alt={"HEHE"}
                />
                <div className = "text-white mt-[15px] text-[22px] font-bold font-genos"> {title} </div>
                <div className="text-[#6F7DB6] text-[16px] mt-[25px] font-genos">
                    {subtitle}
                </div>
            </div>
        </>
    )
} 

function InfoNFT() {
    return (
        <>  
            <div className = "gradient-bg-info">
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-[100px] mx-[120px]">
                    <div data-aos="fade-up" data-aos-duration = "1100">
                        <InfoItemNFT link="https://static.live.templately.com/agency/2022/10/c6e72015-icon1.png" title="Discover Top Artists"
                            subtitle= {"Explore beautiful digital art by "  + "talented artists from around the " 
                                + "world. tempor incididunt ut " + "labore et dolore magna aliqua. " + "Ut enim ad minim veniam,"}
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-duration = "1300">
                        <InfoItemNFT link="https://static.live.templately.com/agency/2022/10/76c9da8a-icon-2.png" title="Buy And Sell NFTs"
                            subtitle= {"Explore beautiful digital art by "  + "talented artists from around the " 
                                + "world. tempor incididunt ut " + "labore et dolore magna aliqua. " + "Ut enim ad minim veniam,"}
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-duration = "1500">
                        <InfoItemNFT link="https://static.live.templately.com/agency/2022/10/d0306da2-icon-3.png" title="Grow Digital Collection"
                            subtitle= {"Explore beautiful digital art by "  + "talented artists from around the " 
                                + "world. tempor incididunt ut " + "labore et dolore magna aliqua. " + "Ut enim ad minim veniam,"}
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-duration = "1700">
                        <InfoItemNFT link="https://static.live.templately.com/agency/2022/10/5a4060ca-icon-4.png" title="Secured Trading"
                            subtitle= {"Explore beautiful digital art by "  + "talented artists from around the " 
                                + "world. tempor incididunt ut " + "labore et dolore magna aliqua. " + "Ut enim ad minim veniam,"}
                    />
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoNFT;