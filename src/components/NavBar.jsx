import { useNavigate } from "react-router";
import { assests, nav } from "../assets";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <header
      onClick={() => navigate("/")}
      className="hidden sm:flex  justify-between items-center mx-auto mb-20 text-[#7780A1]"
    >
      <img src={assests.Logo} className="w-10 h-10 cursor-pointer" alt="" />
      <ul className=" px-4 py-5  flex items-center justify-between gap-6 capitalize mx-auto">
        {nav.map((nav, i) => (
          <li
            key={i}
            className="hover:text-white transition-all duration-150 ease-in "
          >
            <a href={nav.link}>{nav.label}</a>
          </li>
        ))}
      </ul>
      <div className="">
        <button className=" border px-7 py-3 mx-4 rounded-lg capitalize">
          contact
        </button>
        <button className=" px-7 py-3 mx-4 rounded-lg capitalize button text-white">
          my account
        </button>
      </div>
    </header>
  );
};

export default NavBar;
