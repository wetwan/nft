import { useNavigate } from "react-router";
import { assests, latest } from "../assets";

const Auctions = () => {
 const naviagte = useNavigate()
  return (
    <section className="text-white py-4 px-10" id="auctions">
      <h2 className="text-center text-2xl capitalize font-semibold ">
        {" "}
        least live auctions
      </h2>
      <div className="my-10  flex items-center gap-10  overflow-x-scroll p-2">
        {/* displaying  the ntf for aucttions   */}

        {latest.map((item, i) => (
          <div
            key={i}
            className=" p-2 shadow-md shadow-[#262840]  rounded-2xl border-[#262840] min-w-[320px] "
            onClick={() => {naviagte("/ProductPage"); scrollTo(0,0) }}
          >
            <img
              src={item.image}
              alt=""
              className="my-4 bg-[rgba(0,0,0,0.3)] w-[380px] object-cover h-[400px] rounded-2xl overflow-hidden"
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
                <img src={assests.Avatars} alt="" className="w-20 h-10 mx-3" />
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
    </section>
  );
};

export default Auctions;
