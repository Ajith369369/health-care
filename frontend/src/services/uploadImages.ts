import { CLOUDINARY_UPLOAD_API, CLOUDINARY_UPLOAD_PRESET } from "../Config";
import showToast from "../utils/toast";

export const uploadImagesToCloudinary = async (imageFile: File | null) => {
  try {
    if (!imageFile) {
      throw new Error("Image file not provided");
    }

    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    const response = await fetch(CLOUDINARY_UPLOAD_API, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload image to Cloudinary");
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    showToast("Error uploading image to Cloudinary: " + error, "error");
    return null;
  }
};

export const uploadCertificateToCloudinary = async (
  certificateFile: File | null
) => {
  try {
    if (!certificateFile) {
      throw new Error("Certificate file not provided");
    }

    const formData = new FormData();
    formData.append("file", certificateFile);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    const response = await fetch(CLOUDINARY_UPLOAD_API, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload certificate to Cloudinary");
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    showToast("Error uploading certificate to Cloudinary: " + error, "error");
    return null;
  }
};

export const uploadDocumentToCloudinary = async (documentFile: File | null) => {
  try {
    if (!documentFile) {
      throw new Error("Document file not provided");
    }

    const formData = new FormData();
    formData.append("file", documentFile);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    const response = await fetch(CLOUDINARY_UPLOAD_API, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload document to Cloudinary");
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    showToast("Error uploading document to Cloudinary: " + error, "error");
    return null;
  }
};
