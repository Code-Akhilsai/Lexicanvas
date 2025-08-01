import { useState, useEffect } from "react";
import useImageStore from "./store";
import { Download, X } from "lucide-react";

const Generations = () => {
  const images = useImageStore((state) => state.images);
  const removeImage = useImageStore((state) => state.removeImage);

  const [zoomedImage, setZoomedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setZoomedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleDownload = (url, index) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `generated_image_${index + 1}.png`;
    link.click();
  };

  return (
    <center>
      <p className="text-white text-2xl my-[-30px] font-bold md:text-3xl">
        Generations
      </p>
      <br />
      <br />

      {images.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <img
                src={image.src}
                alt={`Generated ${index + 1}`}
                className="max-w-[90%] rounded-xl border-2 border-[#359EFF] cursor-pointer"
                onClick={() => setZoomedImage(image.src)} // 👈 zoom trigger
              />

              <button
                onClick={() => handleDownload(image.src, index)}
                className="absolute top-2 right-7 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-1 rounded-full"
                title="Download"
              >
                <Download size={18} />
              </button>

              <button
                onClick={() => removeImage(index)}
                className="mt-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <p className="text-white ">No images generated yet</p>
        </div>
      )}

      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={zoomedImage}
              alt="Zoomed"
              className="max-h-[90vh] max-w-[90vw] rounded-xl"
            />
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-2 right-2 text-white bg-black bg-opacity-70 rounded-full p-1 hover:bg-opacity-90"
              title="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </center>
  );
};

export default Generations;
