import useImageStore from "./store";
import { Download } from "lucide-react"; // Optional: install lucide-react for icons

const Generations = () => {
  const images = useImageStore((state) => state.images);
  const removeImage = useImageStore((state) => state.removeImage);

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
                className="max-w-[90%] rounded-xl border-2 border-[#359EFF]"
              />
              {/* Download button overlay */}
              <button
                onClick={() => handleDownload(image.src, index)}
                className="absolute top-2 right-9 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-1 rounded-full"
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
              {console.log(image)}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white">No images generated yet</p>
      )}
    </center>
  );
};

export default Generations;
