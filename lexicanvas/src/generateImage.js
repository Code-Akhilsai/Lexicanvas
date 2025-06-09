export const generateImage = async (prompt, aspectRatio = "1:1") => {
  const HUGGING_FACE_TOKEN = "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";
  const modelUrl =
    "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev";

  // Aspect ratio to width x height mapping
  const aspectRatioMap = {
    "1:1": { width: 512, height: 512 },
    "16:9": { width: 768, height: 432 },
    "9:16": { width: 432, height: 768 },
    "4:3": { width: 640, height: 480 },
    "3:4": { width: 480, height: 640 },
  };

  const { width, height } =
    aspectRatioMap[aspectRatio] || aspectRatioMap["1:1"];

  const body = {
    inputs: prompt,
    parameters: {
      width,
      height,
    },
  };

  const response = await fetch(modelUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${HUGGING_FACE_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("Error from HuggingFace:", error);
    throw new Error("Failed to generate image");
  }

  const blob = await response.blob();
  return URL.createObjectURL(blob);
};
