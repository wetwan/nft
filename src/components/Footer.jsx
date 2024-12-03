import { assests } from  "../assets";
// import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="px-20 py-10">
      <div className=" flex flex-col sm:flex-row items-start justify-between">
        <div className="w-full md:w-1/3">
          <div className=" flex items-center gap-4 mb-10">
            <img src={assests.Logo} alt="logo" className="w-10" />
            <h1 className="text-2xl font-semibold "> NFT Market</h1>
          </div>
          <ul className="capitalize flex flex-col  gap-4 cursor-pointer font-medium ">
            <li> support</li>
            <li> term of service</li>
            <li> lincese</li>
          </ul>
        </div>
        <div className=" w-full md:w-1/3 flex flex-col items-start gap-5 ">
          <ul className=" capitalize flex flex-col gap-2 cursor-pointer">
            <li> auction</li>
            <li> roadmap</li>
            <li> discovery</li>
            <li> community</li>
          </ul>
          <button className="button  px-7 rounded-md capitalize  py-6">
            {" "}
            my account
          </button>
          <ul className=" flex items-center gap-5 py-3">
            <li className="w-16 h-16 border p-3 rounded-md">
              <img src={assests.Facebook} alt="socials" className="w-full " />
            </li>
            <li className="w-16 h-16 border p-3 rounded-md">
              <img src={assests.Twiter} alt="socials" className="w-full " />
            </li>
            <li className="w-16 h-16 border p-3 rounded-md">
              <img src={assests.Whataspp} alt="socials" className="w-full " />
            </li>
          </ul>
        </div>
        <div className=" w-full md:w-1/3 flex flex-col gap-10">
          <p className=" text-sm text-[#7780A1] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic
            eaque est earum in alias voluptas laudantium, ad beatae aut
            excepturi, saepe commodi esse pariatur aperiam voluptatem architecto
            tempora unde.
          </p>

          <form className=" flex px-4 py-2 bg-white">
            <input
              className="w-full bg-transparent p-4 px-2 placeholder-shown:capitalize capitalize outline-none h-full text-[#7780A1] placeholder-shown:text-[#7780A1]"
              type="email"
              placeholder="enter your email"
            />
            <button className=" capitalize px-3 text-[#7780A1] cursor-pointer">
              {" "}
              subscribe
            </button>
          </form>
          <ul>
            <li>{/* <FaSquareFacebook /> */}</li>
          </ul>
        </div>
      </div>
      <hr className="my-10" />
      <p className="text-base text-center capitalize leading-loose ">
        {" "}
        copyright NFT &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
