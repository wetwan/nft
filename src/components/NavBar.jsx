import { Link, useNavigate } from "react-router";
import { assests, nav } from "../assets";
import { useState } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <>
      <header
        onClick={() => navigate("/")}
        className="flex px-10 py-5 justify-between items-center mx-auto mb-20 text-[#7780A1]"
      >
        <img src={assests.Logo} className="w-10 h-10 cursor-pointer" alt="" />
        <ul className="hidden px-4 py-5  sm:flex items-center justify-between gap-6 capitalize mx-auto">
          {nav.map((nav, i) => (
            <li
              key={i}
              className="hover:text-white transition-all duration-150 ease-in "
            >
              <a href={nav.link}>{nav.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden sm:block">
          <button className=" border px-7 py-3 mx-4 rounded-lg capitalize">
            contact
          </button>
          <button className=" px-7 py-3 mx-4 rounded-lg capitalize button text-white">
            my account
          </button>
        </div>
        <img
          src={assests.Bars}
          className="w-10 sm:hidden"
          onClick={() => setOpen(true)}
          alt=""
        />
        {/* <div
          className={` md:hidden  p-4 ${
            open ? "w-full z-50 absolute top-0 bottom-0 left-0  bg-black border h-full " : "hidden"
          }`}
        >
          <img src={assests.Close} onClick={()=>setOpen(false)} className="w-10 mt-5 ml-10" alt="" />
        </div> */}
      </header>
      <div
        className={` md:hidden absolute ${
          open ? "w-[100vw] top-0 bottom-0  bg-black border h-vh " : "hidden"
        }`}
      >
        <img
          src={assests.Close}
          onClick={() => setOpen(false)}
          className="w-10 ml-auto mr-10 mt-10"
          alt=""
        />
        <ul className=" py-4 px-3  flex flex-col  ">
          <li className="px-10   text-center border-b h-full">
            <Link to="/" onClick={()=>onclick(setOpen(false))} className=" block capitalize py-5">
              home
            </Link>
          </li>{" "}
          {nav.map((index, i) => (
            <li className="px-10 block capitalize py-5 text-center border-b h-full" onClick={() => setOpen(!open)} key={i}>
              <a  href={index.link}>{index.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
