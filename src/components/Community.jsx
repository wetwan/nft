import { assests } from  "../assets";

const Community = () => {
  return (
    <section id="community" className="my-20 px-10 py-20">
      <div className="flex pb-10 w-full sm:w-3/5 mx-auto items-center justify-evenly px-5 ">
        <div className="gap-3 flex flex-col items-center text-center">
          <img src={assests.User} className="w-5 " alt="" />
          <p className="text-2xl text-white font-semibold  "> 300k</p>
          <span className="capitalize text-[#7780A1] text-sm">
            {" "}
            active user
          </span>
        </div>
        <div className="gap-3 flex flex-col items-center text-center">
          <img src={assests.Artwork} className="w-5 " alt="" />
          <p className="text-2xl text-white font-semibold  "> 52,5k</p>
          <span className="capitalize text-[#7780A1] text-sm"> artwork</span>
        </div>
        <div className="gap-3 flex flex-col items-center text-center">
          <img src={assests.Artist} className="w-5 " alt="" />
          <p className="text-2xl text-white font-semibold  "> 17,5k</p>
          <span className="capitalize text-[#7780A1] text-sm"> artist </span>
        </div>
        <div className="gap-3 flex flex-col items-center text-center">
          <img src={assests.Wallet} className="w-5 " alt="" />
          <p className="text-2xl text-white font-semibold  "> 35.58</p>
          <span className="text-[#7780A1] text-sm"> ETH spenth </span>
        </div>
      </div>
      <div className="my-10">
        {" "}
        <img src={assests.Pleat} className="-mb-1 z-40" alt="" />
        <div className="  w-full card flex items-center justify-between px-6 py-3">
          <div className="sm:ml-10 text-left flex flex-col items-start">
            <span className="text-[#7780A1] uppercase text-xs py-3 font-semibold ">
              overline
            </span>
            <h3 className=" capitalize md:text-5xl text-2xl w-4/5 leading-relaxed pb-4 ">
              consectetur adipisicing elit. join now.
            </h3>
            <p className="w-4/5 text-[#7780A1] text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              debitis at maxime, eligendi itaque consequuntur dolorum quae
              nesciunt soluta natus maiores.
            </p>
            <div className="mt-3">
              <button className="my-4  text-white button capitalize px-6 mx-3 rounded-lg  py-4">
                {" "}
                get started
              </button>
              <button className="text-[#7780A1] border px-6 mx-3 rounded-lg  py-4 capitalize">
                {" "}
                learn more
              </button>
            </div>
          </div>
          <img
            src={assests.Users}
            className="w-1/2
        "
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Community;
