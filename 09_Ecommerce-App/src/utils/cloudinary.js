export const uploadToCloudinary = async (file) => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const presetName = import.meta.env.VITE_CLOUDINARY_PRESET_NAME;
  const data = new FormData();

  data.append("file", file);
  data.append("cloud_name", cloudName);
  data.append("upload_preset", presetName);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: data,
    },
  );
  if (!res.ok) throw new Error("Cloudinary upload failed");
  const result = await res.json();

  return {
    url: result.secure_url,
    publicId: result.public_id,
  };
};
