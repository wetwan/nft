import { useNavigate } from "react-router";
import { assests, discovery, latest } from "../assets";

const Discovery = () => {
  const naviagte = useNavigate();
  return (
    <section
      id="discovery"
      className="md:min-h-[400px] mt-20 flex flex-col md:flex-row items-center justify-between gap-10"
    >
      {" "}
      {/* left side card   */}
      <div className="w-full  px-10 md:px-0 py-10 md:py-0 md:w-1/3 rounded-lg relative shadow-md p-3 shadow-[rgba(250,250,250,0.2)]">
        <h2 className="text-3xl sm:text-4xl w-3/4 leading-normal p-2 capitalize  font-serif">
          {" "}
          Check out the hottest Sale offers
        </h2>
        <div className=" flex items-center gap-3 overflow-x-scroll p-2">
          {/* displaying  the ntf for aucttions   */}

          {discovery.map((item, i) => (
            <div
              key={i}
              className=" p-2 shadow-md shadow-[#262840]  rounded-2xl border-[#262840] min-w-[300px]  cursor-pointer"
              onClick={() => {
                naviagte("/ProductPage");
                scrollTo(0, 0);
              }}
            >
              <img
                src={item.image}
                alt=""
                className="my-4 bg-[rgba(0,0,0,0.3)] w-[380px] object-cover h-[300px] rounded-2xl overflow-hidden"
              />
              <div className="px-3 py-2 flex flex-col items-start justify-between gap-10 ">
                <div className=" flex justify-between items-center  ">
                  <h5 className="w-3/6 text-base font-semibold text-white ">
                    {item.title}
                  </h5>
                  <p className=" px-5 text-base font-semibold  py-4 shadow rounded-md shadow-[#514CFF26]  bg-[#514CFF26]  text-[#514CFF]">
                    {item.price} ETH
                  </p>
                </div>
                <div className="flex items-center gap-3 my-3">
                  <img src={assests.TimerIcon} alt="" />
                  <span className="">
                    {" "}
                    <span className=" text-[#514CFF] mx-0.5">
                      {" "}
                      {item.time}
                    </span>{" "}
                    min left
                  </span>
                </div>
              </div>
              <hr className="bg-[#262840] h-[2px] w-11/12 mx-auto" />
              <div className="flex items-center gap-5 mt-4 justify-between ">
                <div className=" flex items-center justify-between">
                  <img
                    src={assests.Avatars}
                    alt=""
                    className="w-20 h-10 mx-3"
                  />
                  <span className="text-base text-[#262840]">
                    {item.bidding} people are bidding
                  </span>
                </div>
                <div className="gap-4 flex items-center justify-around">
                  <img src={item.Like} alt="w-10" className="w-10" />
                  <span className=" text-[#262840] mr-4">{item.people}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-[14%] right-0 h-[500px] w-[125px]  bg-[rgba(0,0,0,0.4)]">
          <img
            src={assests.Arrowright}
            alt=""
            className="w-24 absolute top-52 right-4 cursor-pointer"
          />
        </div>
        <button className="mt-5 mb-10 cursor-pointer active:border-none transition-all ease-in duration-300 active:bg-[#262840] px-2 py-3 rounded-lg w-5/6 mx-auto capitalize block border ">
          show me more
        </button>
      </div>
      {/* center side card   */}
      <div className=" bg-transparent min-h-[400px] w-full   px-10 py-10 md:py-0 md:w-1/3  rounded-lg relative shadow-md p-3 shadow-[rgba(25,250,250,0.7)]">
        <img src={assests.Discovery3} alt="" className="w-[308px]" />
        <h3 className="leading-tight text-white text-5xl  ">
          Get started creating & selling your NFTs
        </h3>
        <p className="leading-snug w-3/4 text-base font-medium text-[#262840]">
          {" "}
          Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat. Mi
          est sit.
        </p>
        <button className="mb-10 mt-5 cursor-pointer border-none transition-all ease-in duration-300 bg-[#262840] px-2 py-3 rounded-lg w-5/6 mx-auto capitalize block  ">
          show me more
        </button>
      </div>
      {/* lright side card  */}
      <div className=" bg-transparent min-h-[400px] w-full   px-10 md:px-0 py-10 md:py-0 md:w-1/3  rounded-lg relative shadow-md p-3 shadow-[rgba(250,20,250,0.7)]">
        <h2 className=" sm:text-4xl w-3/4 leading-normal p-2 capitalize text-3xl font-serif">
          Top NFT at a lower price
        </h2>
        <div className="flex flex-col gap-2 items-start max-h-[520px] px-2 overflow-y-scroll">
          {latest.map((item, i) => (
            <div
              key={i}
              className=" w-full m-1 shadow-sm rounded-xl cursor-pointer  flex items-center gap-2  px-2 py-3"
              onClick={() => {
                naviagte("/ProductPage");
                scrollTo(0, 0);
              }}
            >
              <img src={item.image} alt="" className="w-20 h-32" />
              <div className="flex flex-col items-start gap-1">
                <p className=" text-base font-medium leading-tight text-white ">
                  {item.title}
                </p>
                <div className="flex items-center justify-between gap-7">
                  {" "}
                  <div className="flex items-center">
                    <img src={assests.TimerIcon} alt="" />
                    <p>
                      {" "}
                      <span className="text-[#514CFF]"> {item.time}</span> ETH
                    </p>
                  </div>
                  <p className=" px-2 text-base font-semibold  py-2 shadow rounded-md shadow-[#514CFF26]  bg-[#514CFF26]  text-[#514CFF]">
                    {item.price} ETH
                  </p>
                </div>

                <div className="flex gap-6 items-center my-2">
                  <p className="">
                    <span className="text-[#514CFF] ">{item.people} </span>{" "}
                    people are bidding
                  </p>
                  <img src={item.Like} alt="" className="w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="mb-10 mt-5 cursor-pointer active:border-none transition-all ease-in duration-300 active:bg-[#262840] px-2 py-3 rounded-lg w-5/6 mx-auto capitalize block border ">
          show me more
        </button>
      </div>
    </section>
  );
};

export default Discovery;
