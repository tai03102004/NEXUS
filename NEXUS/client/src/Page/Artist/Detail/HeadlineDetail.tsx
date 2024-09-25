import { useParams } from 'react-router-dom';
import artistRanking from '../../../data/artistRanking';

const HealineDetail = () => {

    const { id } = useParams();
    const artist = artistRanking[parseInt(id!)];

    return (
        <>
            <div>
                <div> 
                    <img loading="lazy" src="/images/Profile.png" alt="profile" className="w-[100%]"/>
                </div>
                <div className="mt-[-35px] relative md:ml-[115px] ml-[70px]"> 
                    <img loading="lazy" src={artist.avatar} alt="profile" className="w-[120px]"/>
                </div>
            </div>
            <div className="md:ml-[115px] ml-[70px]">
                <div className="flex mt-[40px]">
                    <div className="text-white w-[60%] font-bold text-[40px]">{artist.name}</div>
                    <div className="flex items-center">
                        <div className="flex mr-[20px] border-none bg-[#A259FF] p-[20px] rounded-[20px]">
                            <img loading="lazy" src="/images/copy.png" className="w-[20px] h-[20px] mr-[12px]"/>
                            <p className="text-white">0xc0E3...B79C</p>
                        </div>
                        <div className="flex border border-[#A259FF] p-[20px] rounded-[20px]">
                            <img loading="lazy" src="/images/plus.png" className="w-[20px] h-[20px] mr-[12px]"/>
                            <p className="text-white">Follow</p>
                        </div>
                    </div>
                </div>  
                <div className="grid grid-cols-6 gap-[30px] mt-[30px]">
                    <div className="text-white">
                        <div className="font-bold text-[20px] mb-[-15px]">250k+</div>
                        <br/>
                        <div className="text-[18px]">Volume</div>
                    </div>
                    <div className="text-white">
                        <div className="font-bold text-[20px] mb-[-15px]">50+</div>
                        <br/>
                        <div className="text-[18px]">NFTs Sold</div>
                    </div>
                    <div className="text-white">
                        <div className="font-bold text-[20px] mb-[-15px]">3000+</div>
                        <br/>
                        <div className="text-[18px]">Followers</div>
                    </div>
                </div>
                <div className="mt-[30px]">
                    <div className="text-[#858584] font-[900]">Bio</div>
                    <div className="text-white">The internet's friendliest designer kid.</div>
                </div>
                <div className="mt-[30px] py-[50px]">
                    <div className="text-[#858584] font-[900]">Links</div>
                    <div className="flex">
                        <img loading="lazy" src="/images/links/Globe.png" className="mr-[10px]"/>
                        <img loading="lazy" src="/images/links/DiscordLogo.png" className="mr-[10px]"/>
                        <img loading="lazy" src="/images/links/YoutubeLogo.png" className="mr-[10px]"/>
                        <img loading="lazy" src="/images/links/TwitterLogo.png" className="mr-[10px]"/>
                        <img loading="lazy" src="/images/links/InstagramLogo.png" className="mr-[10px]"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HealineDetail;