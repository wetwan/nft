import { assests, heroImg } from "../assets";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-contain flex flex-col justify-center items-center bg-center bg-no-repeat h-[80vh] sm:py-20  text-center w-full sm:px-10 "
    >
      <h1 className=" lg:text-7xl text-4xl sm:text-5xl md:text-6xl whitespace-nowrap  font-bold leading-snug capitalize">A new NFT </h1>
      <h1 className=" lg:text-7xl text-4xl sm:text-5xl md:text-6xl whitespace-nowrap  font-bold leading-snug capitalize ml-10"> Experience</h1>
      <span className=" text-[#7780A1] text-sm  whitespace-nowrap py-4"> Discover, collect and sell</span>
      <form className="rounded-xl mt-6 flex text-base placeholder-shown:text-[#7780A1] md:py-10 py-6 border sm:w-4/6 w-5/6 md:mx-auto bg-white">
        <input type="text" className="text-base px-4 w-full outline-none h-full bg-transparent text-[#7780A1] " placeholder="Items, collections and creators" />
        <hr className=" bg-[#7780A1] w-[2px] h-10 my-auto mx-2"/>
        <select className="px-4 w-2/6 text-[#7780A1]  outline-none" id="">
          <option value="category">category</option>
        </select>
        <hr className=" bg-[#7780A1] w-[2px] h-10 my-auto mx-2"/>
        <img src={assests.Search} className="w-4 cursor-pointer u h-4 mx-5 my-auto" alt="" />
      </form>
      <div className=" flex items-center justify-between mx-auto mt-10 sm:w-2/6 p-1 gap-5">
        {
          heroImg.map((item,i)=>(
            <img src={item.image} key={i} className="w-20" alt="" />
          ))
        }
      </div>
    </section>
  );
};

export default Hero;
