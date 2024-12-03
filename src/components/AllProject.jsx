import { images } from  "../assets";

const AllProject = () => {
  return (
    <section className="px-10 pb-20 py-5">
      <div className="gap-5 max-w-[90%] mx-auto flex overflow-x-scroll">
        {images.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className="w-24 h-24 overflow-hidden rounded-2xl ">
              <img src={item.image} className="w-full  rounded" alt="" />
            </div>

            <p className="text-xs object-contain text-[#7780A1]">
              {item.price} ETH
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProject;
