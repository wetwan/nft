import { useNavigate } from "react-router";
import { assests, pa } from "../assets";

const PopularAuction = () => {
  const naviagte = useNavigate();
  return (
    <section className=" text-center">
      <span className="text-[#7780A1] uppercase text-xs">overline</span>
      <h3 className=" text-white text-3xl font-semibold capitalize leading-loose">
        {" "}
        Most popular live auctions
      </h3>
      <div className=" flex w-full sm:w-2/5 py-4 sm:gap-5 gap-2 px-3 items-center justify-between  sm:mx-auto">
        <p className="rounded-full text-sm sm:text-base transition-all ease-in-out duration-300  capitalize border border-gray-800 hover:border-[#7780A1] sm:px-5 p-3">
          {" "}
          Architecture
        </p>
        <p className="rounded-full text-sm sm:text-base  capitalize border border-gray-800 hover:border-[#7780A1] px-3 p-3 sm:px-5">
          {" "}
          Photography
        </p>
        <p className="rounded-full text-sm sm:text-base transition-all ease-in-out duration-300  capitalize border border-gray-800 hover:border-[#7780A1] sm:px-5 p-3">
          {" "}
          Games
        </p>
        <p className="rounded-full text-sm sm:text-base transition-all ease-in-out duration-300  capitalize border border-gray-700 hover:border-[#7780A1] sm:px-5 p-3">
          {" "}
          Music
        </p>
      </div>

      <div className="flex px-5 py-6 mx-auto flex-wrap items-center gap-5">
        {pa.map((item, i) => (
          <div
            key={i}
            className="mx-auto w-[150px] p-3 shadow-md shadow-gray-600 rounded-lg "
            onClick={() => {naviagte("/ProductPage"); scrollTo(0,0) }}
          >
            <img
              src={item.image}
              className="rounded-lg overflow-hidden "
              alt=""
            />
            <h3 className="text-left text-xl font-semibold ">
              Lorem ipsum dolor sit amet.
            </h3>
            <div className=" flex items-center justify-between my-2">
              <div className="flex items-center gap-2">
                <img src={assests.TimerIcon} alt="w-4" className="4" />
                <p>{item.time}</p>
              </div>
              <p className=" px-2 text-base font-semibold  py-2 shadow rounded-md shadow-[#514CFF26]  bg-[#514CFF26]  text-[#514CFF]">
                {item.price} ETH
              </p>
            </div>
            <hr />

            <div className="flex gap-6 items-center my-2">
              <p className="text-xs ">
                <span className="text-[#514CFF] mr-1 capitalize">
                  {item.bidding}
                </span>{" "}
                people are bidding
              </p>
              <img src={assests.Like} alt="" className="w-4" />
            </div>
          </div>
        ))}
      </div>
      <button className="border mt-10 uppercase px-6 py-4 rounded-md outline-none">
        {" "}
        show me more
      </button>
    </section>
  );
};

export default PopularAuction;
