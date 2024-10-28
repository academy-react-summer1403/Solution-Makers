import instance from "../../../services/middleware";
import toast from "react-hot-toast";

export const uploadProfileImage = (profileImage) => {
  const formData = new FormData();
  formData.append("formFile", profileImage);
  return toast.promise(instance.post("/SharePanel/AddProfileImage", formData), {
    loading: "در حال آپلود عکس",
    success: "عکس با موفقیت آپلود شد",
    error: "خطایی رخ داد",
  });
};

export const selectProfileImage = (imageId) => {
  const formData = new FormData();
  formData.append("ImageId", imageId);
  return toast.promise(
    instance.post("/SharePanel/SelectProfileImage", formData),
    {
      loading: "در حال پردازش",
      success: "عکس با موفقیت انتخاب شد",
      error: "خطایی رخ داد",
    }
  );
};

export const deleteProfileImage = (imageId) => {
  const formData = new FormData();
  formData.append("DeleteEntityId", imageId);
  return toast.promise(
    instance.delete("/SharePanel/DeleteProfileImage", { data: formData }),
    {
      loading: "در حال پردازش",
      success: "عکس با موفقیت حذف شد",
      error: "خطایی رخ داد",
    }
  );
};

export const updateUserInfos = (
  FName,
  LName,
  BirthDay,
  PhoneNumber,
  NationalCode,
  HomeAdderess,
  UserAbout,
  TelegramLink,
  LinkdinProfile
) => {
  const formData = new FormData();
  formData.append("FName", FName);
  formData.append("LName", LName);
  formData.append("BirthDay", BirthDay);
  formData.append("PhoneNumber", PhoneNumber);
  formData.append("NationalCode", NationalCode);
  formData.append("HomeAdderess", HomeAdderess);
  formData.append("UserAbout", UserAbout);
  TelegramLink && formData.append("TelegramLink", TelegramLink);
  LinkdinProfile && formData.append("LinkdinProfile", LinkdinProfile);
  return toast.promise(
    instance.put("/SharePanel/UpdateProfileInfo", formData),
    {
      loading: "در حال پردازش اطلاعات",
      success: "اطلاعات با موفقیت ثبت شد",
      error: "خطایی رخ داد",
    }
  );
};
