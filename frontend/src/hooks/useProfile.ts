import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { NAME_REGEX, PHONE_REGEX, USER_API } from "../Config";
import { uploadImagesToCloudinary } from "./uploadImages";
import { UserInterface } from "../types/userInterface";
import axiosJWT from "../utils/axiosService";
import showToast from "../utils/toast";

axios.defaults.withCredentials = true;

export const useProfile = () => {
  const [profile, setProfile] = useState<UserInterface | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<{
    name: string;
    gender: string;
    age: number | null;
    phoneNumber: string;
    imageFile: File | null;
  }>({
    name: "",
    gender: "",
    age: null,
    phoneNumber: "",
    imageFile: null,
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(USER_API + "/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then(({ data }) => {
        const { user } = data;
        setProfile(user);
        setFormData((prev) => ({
          ...prev,
          name: user?.name || "",
          gender: user?.gender || "",
          age: user?.age || null,
          phoneNumber: user?.phoneNumber || "",
        }));
      })
      .catch(() => showToast("Oops! Something went wrong", "error"));
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    let errorMessage = "";

    if (name === "imageFile") {
      // Handle image file separately
      const fileInput = e.target as HTMLInputElement;
      const file = fileInput.files && fileInput.files[0]; // Type assertion here
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
        setFormData((prev) => ({
          ...prev,
          imageFile: file,
        }));
      }
    } else {
      if (name === "name") {
        if (!value.trim()) {
          errorMessage = "Name is required";
        } else if (!NAME_REGEX.test(value)) {
          errorMessage =
            "First letter must be capital and no leading or trailing space";
        }
      } else if (name === "age") {
        const ageValue = parseInt(value, 10);
        if (isNaN(ageValue) || ageValue < 0) {
          errorMessage = "Age must be a positive number";
        }
      } else if (name === "phoneNumber") {
        if (!value.trim()) {
          errorMessage = "Phone number is required";
        } else if (!PHONE_REGEX.test(value)) {
          errorMessage = "Phone number must have 10 numbers";
        }
      }

      setFormData((prev) => ({
        ...prev,
        [name]: name === "age" ? parseInt(value, 10) : value,
      }));
    }

    setError(errorMessage);
  };

  const handleSubmit = async () => {
    if (!error) {
      setIsSubmitting(true);
      const url = await uploadImagesToCloudinary(formData.imageFile);

      axiosJWT
        .patch(
          USER_API + "/profile/edit",
          {
            name: formData.name,
            gender: formData.gender,
            age: formData.age,
            phoneNumber: formData.phoneNumber,
            profilePicture: url || profile?.profilePicture,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        )
        .then(({ data }) => {
          showToast(data.message);
          setIsSubmitting(false);
        })
        .catch(() => {
          setIsSubmitting(false);
          showToast(
            "Oops! Something went wrong while updating profile",
            "error"
          );
        });
    }
  };

  return {
    profile,
    formData,
    imagePreview,
    error,
    isSubmitting,
    handleInputChange,
    handleSubmit,
  };
};
