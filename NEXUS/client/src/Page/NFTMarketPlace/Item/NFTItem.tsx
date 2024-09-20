import Answer from "./Answer";
import Headline from "./Headline";

const NFTItem = () => {
  return (
    <>
      <div className="gradient-bg-welcome">
        <div className="py-[50px] md:py-[100px] px-[20px]">
          <Headline />
          <div className="md:mx-[115px] mx-[20px] flex flex-col md:flex-row">
            <div className="md:w-[50%] w-full md:mr-[50px] mb-[30px] md:mb-0">
              <div className="bg-[#1F2228] rounded-[10px]">
                <img
                  src="/images/bear.png"
                  className="w-full h-auto md:h-[500px] object-cover p-[10px] md:p-[20px]"
                  alt="Pink Universe"
                />
              </div>
            </div>
            <div className="md:w-[50%] w-full">
              <h2 className="text-white text-[24px] md:text-[30px] font-genos font-semibold mb-[20px] md:mb-[30px]">
                Pink Universe
              </h2>
              <div className="flex mb-[20px] md:mb-[30px] flex-wrap">
                <div className="text-white text-[14px] font-bold mr-[10px] mb-[10px] md:mb-0 bg-[#53C343] px-[15px] py-[8px] rounded-[10px]">
                  1.46 ETH
                </div>
                <div className="text-white text-[14px] font-bold bg-[#EF8E01] px-[15px] py-[8px] rounded-[10px]">
                  $ 3,456
                </div>
              </div>
              <div className="text-white font-genos font-medium mb-[20px] md:mb-[25px]">
                A masterpiece built with vibrant colors that represents the freedom of womanhood.
                This art also represents intersectional self as well. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do.
              </div>
              <div className="flex mb-[30px]">
                <div className="mr-[10px]">
                  <img
                    src="/images/Artists/Artist_1.png"
                    className="w-[40px] md:w-[45px] object-cover aspect-square"
                  />
                </div>
                <div>
                  <div className="text-white font-genos font-semibold">Adem Smith</div>
                  <div className="text-[#9BABCD] font-genos font-light">by Owner</div>
                </div>
              </div>
              <div className="p-[15px] md:p-[20px] bg-[#1F2228] rounded-[10px] mb-[40px]">
                <div className="flex items-center justify-between">
                  <div className="flex">
                    <img
                      src="/images/Artists/Artist_2.png"
                      className="w-[40px] md:w-[45px] object-cover aspect-square"
                    />
                    <div className="ml-[10px] md:ml-[15px]">
                      <div className="text-[#9BABCD]">
                        By
                        <span className="text-white ml-[5px] font-genos font-semibold">
                          Adem Smith
                        </span>
                      </div>
                      <div className="text-[#9BABCD] text-[12px] md:text-[14px]">
                        Place a bid:
                        <span className="text-[#53C343] font-genos font-light"> 1.46 ETH</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-white text-[12px] md:text-[14px]">Jun 14 - 4:12 PM</div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <button className="text-white bg-[#99E54D] text-[16px] md:text-[18px] rounded-[10px] mb-[10px] md:mb-0 mr-0 md:mr-[20px] font-genos font-semibold px-[20px] py-[15px] md:px-[25px] md:py-[20px] hover:bg-[#82c342]">
                  PLACE BID
                </button>
                <button className="text-[#53C343] text-[16px] md:text-[18px] border border-[#53C343] rounded-[10px] font-genos font-semibold px-[20px] py-[15px] md:px-[25px] md:py-[20px] hover:bg-[#82c342] hover:text-white">
                  PURCHASE NOW
                </button>
              </div>
            </div>
          </div>
          <Answer />
        </div>
      </div>
    </>
  );
};

export default NFTItem;
