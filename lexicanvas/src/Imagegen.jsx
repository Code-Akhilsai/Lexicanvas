import { useState } from "react";
import { generateImage } from "./generateImage";
import useImageStore from "./store";

const Imagegen = () => {
  const [prompt, setPrompt] = useState("");
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [loading, setLoading] = useState(false);
  const addImage = useImageStore((state) => state.addImage);

  const generate = async () => {
    setLoading(true);
    try {
      const imageUrl = await generateImage(prompt, aspectRatio);
      addImage(imageUrl);
    } catch (error) {
      console.error("Generation failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-[95%] h-[500px] rounded-3xl my-18 ml-auto mr-auto sm:w-[89vw]">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('./assets/img.png')] bg-cover bg-no-repeat bg-center rounded-3xl opacity-75"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <p className="text-3xl font-bold text-white text-center mb-3 lg:text-5xl">
          Unleash your imagination with AI-Powered Art
        </p>
        <p className="text-sm text-white text-center lg:text-base mb-4">
          Transform your thoughts into stunning visuals with our text-to-image
          AI generator.
        </p>

        <div className="relative w-[85%] my-7.5">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Create an image..."
            className="bg-[#162238] w-[105%] h-13 rounded-2xl text-white px-4 lg:w-[65%] lg:ml-[19%]"
            disabled={loading}
          />
          <button
            onClick={generate}
            disabled={loading || prompt.trim() === ""}
            className={`absolute right-[-3%] top-1/2 -translate-y-1/2 h-10 w-[75px] rounded-[11px] text-white sm:right-[-20px] md:right-[-4%] lg:right-[16.5%] ${
              loading ? "bg-gray-500 cursor-not-allowed" : "bg-[#359EFF]"
            }`}
          >
            {loading ? (
              <p className="text-[12px]">Generating...</p>
            ) : (
              "Generate"
            )}
          </button>
        </div>

        {/* Aspect Ratio Dropdown */}
        <select
          value={aspectRatio}
          onChange={(e) => setAspectRatio(e.target.value)}
          className="bg-[#162238] text-white text-sm px-4 py-2 rounded-xl w-[60%] sm:w-[40%] lg:w-[25%]"
          disabled={loading}
        >
          <option value="1:1">1 : 1</option>
          <option value="16:9">16 : 9</option>
          <option value="9:16">9 : 16</option>
          <option value="4:3">4 : 3</option>
          <option value="3:4">3 : 4</option>
        </select>
      </div>
    </div>
  );
};

export default Imagegen;
