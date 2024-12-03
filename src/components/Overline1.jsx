import { assests } from "../assets";

const Overline1 = () => {
  return (
    <section className=" py-4 gap-40 mt-20 flex-col-reverse sm:flex-row-reverse  px-5 flex items-center justify-between ">
      {/* left side of overline1  */}

      <div className="p-2 text-left ml-10 sm:ml-0">
        <span className="text-[#7780A1] uppercase text-sm font-light">
          overline
        </span>
        <h2 className="text-3xl text-white leading-snug w-3/5  capitalize">
          Sapien ipsum scelerisque convallis fusce
        </h2>
        <p className="text-[#7780A1] leading-tight text-sm">
          Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
          pulvinar ultricies dolor feugiat aliquam commodo.
        </p>
        <div className="flex items-center gap-20 mt-4">
          <div className="flex flex-col items-start gap-1">
            <img src={assests.Icon1} className="w-5" alt="" />
            <h5 className="text-white text-base font-semibold">Cursus fermentum</h5>
            <p
              className=" text-[#7780A1] text-sm;
"
            >
              Cursus fermentum
            </p>
          </div>
          <div className="flex flex-col items-start gap-1">
            <img src={assests.Icon2} className="w-5" alt="" />
            <h5 className="text-white text-base font-semibold">Cursus fermentum</h5>
            <p
              className=" text-[#7780A1] text-sm;
"
            >
              Cursus fermentum
            </p>
          </div>
        </div>
        <div className=" space-x-4 mt-5 ">
          <button className="capitalize px-6 py-3 rounded-md shadow-md button cursor-pointer text-white">
            get started
          </button>
          <button className="capitalize px-6 py-3 rounded-md shadow  shadow-[#7780A1] cursor-pointer text-[#7780A1]">
            learn more
          </button>
        </div>
      </div>
      {/* right side of overline1  */}
      <div className="">
        <img
          src={assests.Overline2}
          className="md:w-[500px] w-[350px] object-cover "
          alt=""
        />
      </div>
    </section>
  );
};

export default Overline1;
