import { IoMdSearch } from "react-icons/io";

const Imagegen = () => {
  return (
    <>
      <div className="relative w-[300px] h-[500px] rounded-3xl my-15 ml-auto mr-auto sm:w-[89vw] ">
        <div className="absolute inset-0 bg-[url('./assets/img.png')] bg-cover bg-no-repeat bg-center rounded-3xl opacity-75"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <p className="text-3xl font-bold font-sans text-white text-center mb-3 sm:mb-4 text-4xl">
            Unlesh your imagination with AI-Powered Art
          </p>
          <p className="text-[13px] font-sans text-white text-center sm:text-[14px] ">
            Transform your thoughts into stunning visuals with our advanced
            text-to-image AI generator.
          </p>

          <div className="relative w-[85%] my-7.5">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <IoMdSearch size={20} />
            </span>
            <input
              type="text"
              placeholder="Describe your vision"
              className="bg-[#162238] w-full h-13 rounded-2xl text-white px-10 pr-24 md:w-[60%]"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#359EFF] h-10 w-[90px] rounded-[11px] text-white font-sans hidden sm:block ">
              Generate
            </button>
          </div>
          <button className="bg-[#359EFF] h-10 w-[90px] rounded-[11px] text-white font-sans sm:hidden">
            Generate
          </button>
        </div>
      </div>
    </>
  );
};
export default Imagegen;
