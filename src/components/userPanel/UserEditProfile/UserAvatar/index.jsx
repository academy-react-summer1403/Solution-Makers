import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/Provider";
import instance from "../../../../core/services/middleware";
import toast from "react-hot-toast";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./index.css";
import "swiper/css";
import "swiper/css/navigation";

function UserAvatar() {
  const { userInfos, setReFetch, setUserNavTitle } = useContext(AppContext);
  const [profileImage, setProfileImage] = useState({});
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const uploadProfileImage = () => {
    const formData = new FormData();
    formData.append("formFile", profileImage);
    toast
      .promise(instance.post("/SharePanel/AddProfileImage", formData), {
        loading: "در حال آپلود عکس",
        success: "عکس با موفقیت آپلود شد",
        error: "خطایی رخ داد",
      })
      .then(() => setReFetch(true));
  };

  const selectProfileImage = (imageId) => {
    const formData = new FormData();
    formData.append("ImageId", imageId);
    toast
      .promise(instance.post("/SharePanel/SelectProfileImage", formData), {
        loading: "در حال پردازش",
        success: "عکس با موفقیت انتخاب شد",
        error: "خطایی رخ داد",
      })
      .then(() => setReFetch(true));
  };

  const deleteProfileImage = (imageId) => {
    const formData = new FormData();
    formData.append("DeleteEntityId", imageId);
    toast
      .promise(instance.delete("/SharePanel/DeleteProfileImage"), {
        loading: "در حال پردازش",
        success: "عکس با موفقیت حذف شد",
        error: "خطایی رخ داد",
      })
      .then(() => setReFetch(true));
  };

  useEffect(() => {
    setUserNavTitle("ویرایش پروفایل");
  }, []);

  return (
    <div className="flex justify-center mt-8">
      <Card
        className="p-6 gap-5"
        classNames={{
          base: "dark:bg-dark-200 dark:border-2 dark:border-primary",
        }}
      >
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
          <Avatar
            src={
              userInfos.currentPictureAddress == "Not-set"
                ? "/src/assets/images/notFound/images.png"
                : userInfos.currentPictureAddress
            }
            className="w-44 h-44 text-large"
          />
        </CardHeader>
        <CardBody className="overflow-visible py-2 flex-row gap-3 justify-center">
          <Button
            className="bg-primary text-white dark:bg-dark-100 rounded-2xl text-lg"
            onPress={onOpen}
          >
            ویرایش تصویر
          </Button>
        </CardBody>
      </Card>

      <Modal isOpen={isOpen} placement="top" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {userInfos.userImage.length > 0
                  ? "لطفا یک تصویر را انتخاب کنید"
                  : "لطفا یک تصویر را آپلود کنید"}
              </ModalHeader>
              <ModalBody className="min-h-[200px]" style={{ direction: "ltr" }}>
                {userInfos.userImage && (
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    {userInfos.userImage
                      .sort((a, b) => {
                        return (
                          new Date(a.inserDate).getTime() -
                          new Date(b.inserDate).getTime()
                        );
                      })
                      .reverse()
                      .map((image, index) => (
                        <SwiperSlide
                          key={index}
                          className="flex justify-center dark:bg-[#18181B]"
                        >
                          <div className="group">
                            <Avatar
                              src={image.puctureAddress}
                              className="w-44 h-44 text-large group-hover:opacity-40"
                            />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:flex group-hover:gap-2">
                              <Button
                                className="bg-primary text-white data-[hover]:opacity-100 data-[hover]:scale-105"
                                onPress={() => deleteProfileImage(image.id)}
                              >
                                حذف
                              </Button>
                              <Button
                                className="bg-primary text-white data-[hover]:opacity-100 data-[hover]:scale-105"
                                onPress={() => selectProfileImage(image.id)}
                              >
                                انتخاب
                              </Button>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                )}
              </ModalBody>
              <ModalFooter>
                <Input
                  type="file"
                  id="profileImage"
                  className="hidden"
                  onChange={(e) => {
                    setProfileImage(e.target.files[0]);
                  }}
                />
                <label
                  htmlFor="profileImage"
                  className="bg-primary dark:bg-dark-100 text-white px-3 font-[400] text-lg whitespace-nowrap flex items-center text-center rounded-2xl cursor-pointer"
                >
                  انتخاب فایل
                </label>
                <Button
                  className="bg-primary text-white dark:bg-dark-100 rounded-2xl text-lg"
                  onClick={uploadProfileImage}
                >
                  آپلود تصویر
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default UserAvatar;
