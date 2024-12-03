import { useNavigate } from "react-router";
import { assests, pa } from "../assets";

const ProductPage = () => {
  const naviagte = useNavigate();
  return (
    <section className="sm:px-20 px-5 sm:py-10">
      <div className="rounded-lg relative gap-1 sm:w-4/5 w-full mx-auto shadow-md border-[0.1px] shadow-[#06087a] flex flex-col sm:flex-row items-center md:px-5 py-7">
        <div className="sm:h-[75vh] sm:w-1/2 p-4  rounded-md overflow-hidden ">
          <img
            src={assests.Details}
            alt=""
            className=" h-full w-full object-cover"
          />
        </div>
        {/* profile deatils of nft  */}
        <div className=" sm:w-5/6 px-10 flex flex-col gap-3">
          <h2 className="text-4xl capitalize leading-snug  ">
            {" "}
            Reprehenderit distinctio architecto assumenda .
          </h2>
          <p className=" text-[#7780A1] leading-tight text-sm w-4/5 ">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            voluptatem exercitationem qui sit corporis impedit temporibus ipsa
            et non provident?
          </p>
          <div className=" flex items-center gap-6  mt-3">
            <div className=" flex items-start gap-2 ">
              <div className="h-16 w-16 rounded-full overflow-hidden border">
                <img
                  src={assests.Profile}
                  alt="image"
                  className="object-cover w-full h-full "
                />
              </div>
              <div className=" leading-tight">
                <span className=" text-[#7780A1] text-xs"> creator</span>
                <p className=" text-sm font-medium">@wetwan</p>
              </div>
            </div>
            <div className=" flex items-start gap-2">
              <div className="h-16 w-16 overflow-hidden rounded-full border ">
                <img
                  src={assests.Pa4}
                  alt="image"
                  className="object-cover w-full h-full "
                />
              </div>
              <div className="leading-tight">
                <span className=" text-[#7780A1] text-xs "> collection</span>
                <p className=" text-sm font-medium"> Afterlife</p>
              </div>
            </div>
          </div>
          <div className="flex shadow-md mb-3 shadow-slate-700 sm:w-4/5 mx-auto flex-col  gap-3  items-center  px-2 py-3">
            <div className=" flex items-center justify-between gap-20">
              <div className="flex flex-col items-start ">
                <span className="text-left  text-sm text-[#7780A1] capitalize ">
                  {" "}
                  current price
                </span>
                <p className="text-4xl leading-tight">
                  {" "}
                  5.25 <span className="text-xl ">ETH</span>
                </p>
              </div>
              <div className="flex flex-col items-start mx-4">
                <span className="text-left  text-sm text-[#7780A1] capitalize ">
                  {" "}
                  time left
                </span>
                <p className="text-base font-bold">22:59 min</p>
                <span className="text-xs text-[#7780A1]">
                  {" "}
                  23-113-24 09:34:23{" "}
                </span>
              </div>
            </div>

            <button className="button w-5/6  block py-5 px-3  capitalize rounded-md">
              {" "}
              add to collection
            </button>
          </div>
          <img src={assests.Graphy} alt="" />
        </div>
        <div
          className="flex sm:relative sm:-top-32 sm:-right-[49px] z-30 sm:flex-col mt-10 gap-5
        "
        >
          <div className="w-20 h-20 p-5 border rounded-full bg-[#060714]">
            <img src={assests.Like} alt="imgae" />
          </div>
          <div className="w-20 h-20 p-5 border rounded-full bg-[#060714]">
            <img src={assests.Copy} alt="image" />
          </div>
          <div className="w-20 h-20 p-5 border rounded-full bg-[#060714]">
            <img src={assests.Share} alt="image" />
          </div>
        </div>
      </div>

      {/* morre from the aurthor  */}
      <div className=" text-center mt-20 ">
        <span className="text-[#7780A1] uppercase text-xs">overline</span>
        <h3 className=" text-white text-3xl font-semibold capitalize leading-loose">
          {" "}
          more from this author
        </h3>

        <div className="flex px-5 py-6 mx-auto flex-wrap items-center gap-5">
          {pa.map((item, i) => (
            <div
              key={i}
              className="mx-auto cursor-pointer w-[150px] p-3 shadow-md shadow-gray-600 rounded-lg "
              onClick={() => {
                naviagte("/ProductPage");
                scrollTo(0, 0);
              }}
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
      </div>
    </section>
  );
};

export default ProductPage;
