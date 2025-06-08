import { IoMdSearch } from "react-icons/io";

const Imagegen = () => {
  return (
    <>
      <div className="relative w-[95%] h-[500px] rounded-3xl my-18 ml-auto mr-auto sm:w-[89vw] ">
        <div className="absolute inset-0 bg-[url('./assets/img.png')] bg-cover bg-no-repeat bg-center rounded-3xl opacity-75"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <p className="text-3xl font-bold font-sans text-white text-center mb-3 sm:mb-4 lg:text-5xl ">
            Unlesh your imagination with AI-Powered Art
          </p>
          <p className="text-[13px] font-sans text-white text-center sm:text-[14px] lg:text-[16px]">
            Transform your thoughts into stunning visuals with our advanced
            text-to-image AI generator.
          </p>

          <div className="relative w-[85%] my-7.5">
            <input
              type="text"
              placeholder="Create an image..."
              className="bg-[#162238] w-[105%] h-13 rounded-2xl text-white px-4  ml-auto mr-auto  lg:w-[65%] lg:ml-[19%] "
            />
            <button className="absolute right-[-3%] top-1/2 -translate-y-1/2 bg-[#359EFF] h-10 w-[75px] rounded-[11px]  text-white font-sans sm:w-[78px] sm:right-[-20px]  md:w-[85px] md:right-[-4%] lg:right-[16.5%]">
              Generate
            </button>
          </div>

          <div className="flex flex-col justify-center items-center gap-3.5 w-[100%] sm:flex-row sm:w-[95%]  md:w-[87%] lg:w-[80%] xl:w-[56%] ">
            <input
              type="text"
              list="list-options"
              placeholder="Select an AI model"
              className="bg-[#162238] w-[50%] h-9 rounded-[12px] text-[13px] text-white px-4  sm:ml-1  md:w-[53%] lg:w-[45%] xl:w-[27%]"
            />
            <datalist id="list-options">
              <option value="Dall-E" />
              <option value="Stable Diffusion" />
              <option value="Midjourney" />
              <option value="DeepAI" />
              <option value="Craiyon" />
              <option value="Artbreeder" />
              <option value="Runway ML" />
            </datalist>

            <input
              type="text"
              list="list-options2"
              placeholder="Aspect ratio"
              className="bg-[#162238] w-[50%] h-9 rounded-[12px] text-[13px] text-white px-4 sm:ml-1 md:w-[53%] lg:w-[45%] xl:w-[27%]"
            />
            <datalist id="list-options2">
              <option value="11 : 9" />
              <option value="16 : 9" />
              <option value="9 : 16" />
              <option value="1 : 1" />
              <option value="4 : 3" />
              <option value="3 : 4" />
            </datalist>

            <input
              type="text"
              list="list-options3"
              placeholder="Number of Images"
              className="bg-[#162238] w-[50%] h-9 rounded-[12px] text-[13px] text-white px-4  sm:mr-1 md:w-[53%] lg:w-[45%] xl:w-[27%]"
            />

            <datalist id="list-options3">
              <option value="1" />
              <option value="2" />
              <option value="3" />
              <option value="4" />
            </datalist>
          </div>
        </div>
      </div>
    </>
  );
};
export default Imagegen;
