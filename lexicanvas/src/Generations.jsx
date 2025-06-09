import useImageStore from "./store";

const Generations = () => {
  const images = useImageStore((state) => state.images);
  const removeImage = useImageStore((state) => state.removeImage);

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
            <div key={index} className="flex flex-col items-center">
              <img
                src={image}
                alt={`Generated ${index + 1}`}
                className="max-w-[90%] rounded-xl border-2 border-[#359EFF]"
              />
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
        <p className="text-white">No images generated yet</p>
      )}
    </center>
  );
};

export default Generations;
