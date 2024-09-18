import { TextCard } from "../../Interface/TextCard";


const InfoCart = (props: TextCard) => {

    const {link = "", title = "", subtitle = ""} = props;

    return (
        <>
            <div className="md:w-[80%] bg-[#24266B] p-[50px] my-[100px] rounded-[15px]">
                <img 
                        decoding="async" 
                        width="100" 
                        height="100" 
                        src = {link}  
                        alt={"HEHE"}
                />
                <div className = "text-white mt-[15px] text-[24px] font-bold"> {title} </div>
                <div className = "text-[#6F7DB6] mt-[25px]">
                    {subtitle}
                </div>
            </div>
        </>
    )
} 

function Info() {
    return (
        <>
            <div className = "md:flex md:justify-center gradient-bg-info md:flex-row">
                <div className = "md:flex md:justify-center md:p-20 py-8 px-4 mx-[auto] md:flex-row">
                    <div className = "flex flex-col flex-1 items-end mr-[50px]" data-aos="fade-left" data-aos-duration = "1400">
                        <div className = "">
                            <div className = "text-[#FE7ECE] text-[18px] font-[500]">We Do It Best</div>
                            <div className = "text-white text-[55px] font-bold">See How It Works</div>
                            <div className = "text-[#6F7DB6] text-[18px] font-[400] mt-[25px]">Find out how you can invest and win with cryptocurrency</div>
                        </div>
                        <InfoCart link="https://live.templately.com/wp-content/uploads/2020/05/8b39af30-step-1.png" title="Sign Up" subtitle={"A cryptocurrency is a digital asset designed to work as a medium of exchange that " +
                        "uses strong cryptography to secure financial transactions. Join " +                    
                        "the industry leaders to discuss where the markets are heading. We accept token payments."}/>  
                    </div>
                    <div className = "md:w-[50%] ml-[50px]" data-aos="fade-right" data-aos-duration = "1400">
                        <InfoCart link="https://live.templately.com/wp-content/uploads/2020/05/62d6e036-step-2.png" title="Search Products" subtitle={"A cryptocurrency is a digital asset designed to work as a medium of exchange that uses strong " +
                        "cryptography to secure financial transactions. Join the industry leaders to discuss where the " +                    
                        "markets are heading. We accept token payments."}/>  
                        <InfoCart link="https://live.templately.com/wp-content/uploads/2020/05/50cc67f2-step-3.png" title="Trade Tokens" subtitle={"A cryptocurrency is a digital asset designed to work as a medium of exchange that " +
                        "uses strong cryptography to secure financial transactions. Join " +                    
                        "the industry leaders to discuss where the markets are heading. We accept token payments."}/>  
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info;