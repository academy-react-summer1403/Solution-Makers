import { HiOutlineUsers } from "react-icons/hi2";
import CourseSpecificationsDiv from "./CourseSpecificationsDiv";
import { BsCameraVideo } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import { LuCalendarCheck2 } from "react-icons/lu";
import {
  Avatar,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import { RiGraduationCapLine } from "react-icons/ri";
import { SiLevelsdotfyi } from "react-icons/si";
import { MdReduceCapacity } from "react-icons/md";
import { addCourseReserve } from "../../../core/api/app/CourseDetails";
import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import {
  studentAddPeyment,
  studentAddPeymentImage,
} from "../../../core/api/app/Payment";
import { MdPayment } from "react-icons/md";
import toast from "react-hot-toast";

const schema = yup.object({
  PaymentInvoiceNumber: yup
    .string()
    .required("لطفا عبارت روبرو را وارد کنید")
    .length(10, "تعداد ارقام معتبر نیست"),
});

function CourseSpecificationsBox({
  currentRegistrants,
  courseStatusName,
  courseLevelName,
  capacity,
  startTime,
  endTime,
  cost,
  teacherName,
  uniqeUrlString,
  courseId,
  isCourseUser,
  isCourseReseve,
  refetch,
}) {
  const randomNum = Math.floor(Math.random() * 10000000000);
  const d = new Date();

  const [step, setStep] = useState(1);
  const [paymentFirstModal, setPaymentFirstModal] = useState(false);
  const [paymentId, setPaymentId] = useState("");

  const { mutateAsync } = useMutation({
    mutationFn: studentAddPeyment,
    onSuccess: (res) => {
      toast.success(res.data.message);
      setStep(2);
      setPaymentId(res.data.id);
    },
    onError: (err) => toast.error(err.response.data.ErrorMessage[0]),
  });

  const { mutateAsync: addPeymentImage } = useMutation({
    mutationFn: studentAddPeymentImage,
    onSuccess: (res) => {
      toast.success(res.data.message);
      setStep(1);
      setPaymentFirstModal(false);
      setPaymentId("");
    },
    onError: (err) => toast.error(err.response.data.ErrorMessage[0]),
  });

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="bg-white dark:bg-dark-200 px-8 py-5 flex flex-col items-center sm:items-stretch divide-y-1 divide-gray rounded-3xl shadow-lg">
          <h3 className="text-center text-2xl pb-5">مشخصات دوره</h3>
          <CourseSpecificationsDiv
            icon={<HiOutlineUsers />}
            textKey="تعداد دانشجو"
            textValue={currentRegistrants}
          />
          <CourseSpecificationsDiv
            icon={<BsCameraVideo />}
            textKey="وضعیت دوره"
            textValue={courseStatusName}
          />
          <CourseSpecificationsDiv
            icon={<SiLevelsdotfyi />}
            textKey="سطح دوره"
            textValue={courseLevelName}
          />
          <CourseSpecificationsDiv
            icon={<MdReduceCapacity />}
            textKey="ظرفیت"
            textValue={capacity}
          />
          <CourseSpecificationsDiv
            icon={<IoCalendarOutline />}
            textKey="تاریخ شروع"
            textValue={startTime.slice(0, 10)}
          />
          <CourseSpecificationsDiv
            icon={<LuCalendarCheck2 />}
            textKey="تاریخ پایان"
            textValue={endTime.slice(0, 10)}
          />
          <div className="py-5 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Button
              color="primary"
              size="lg"
              className="rounded-full"
              onClick={() => addCourseReserve(courseId).then(() => refetch())}
              disabled={isCourseReseve == "1" ? true : false}
            >
              شرکت در دوره
            </Button>

            <span className="flex items-center gap-2">
              <b className="text-primary text-xl">{cost.toLocaleString()}</b>
              تومان
            </span>
          </div>
          {isCourseReseve == "1" ? (
            <Button
              className="bg-green-500 text-white w-full md:w-[60%] py-6 md:py-8 mx-auto lg:w-full text-xl lg:py-6"
              onClick={() => setPaymentFirstModal(true)}
            >
              پرداخت
            </Button>
          ) : null}
        </div>
        <div className="bg-white dark:bg-dark-200 flex flex-col sm:flex-row items-center p-6 gap-5 rounded-3xl shadow-lg">
          <div>
            <Avatar
              size="lg"
              radius="md"
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            />
          </div>
          <div className="flex flex-col">
            <span className="flex items-center gap-2">
              <RiGraduationCapLine size={20} />
              {teacherName}
            </span>
            <div>{uniqeUrlString}</div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={paymentFirstModal}
        onOpenChange={() => setPaymentFirstModal(false)}
        classNames={{ base: "dark:bg-dark-200 dark:border py-4" }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex gap-2">
                عملیات پرداخت
                <MdPayment size={25} />
              </ModalHeader>
              <ModalBody>
                {step == 1 ? (
                  <Formik
                    initialValues={{ PaymentInvoiceNumber: "" }}
                    validationSchema={schema}
                    onSubmit={(values, { resetForm }) => {
                      const formData = new FormData();
                      formData.append("CourseId", courseId),
                        formData.append("Paid", cost),
                        formData.append(
                          "PaymentInvoiceNumber",
                          values.PaymentInvoiceNumber
                        );
                      formData.append(
                        "PeymentDate",
                        d.toISOString().slice(0, 10)
                      );
                      mutateAsync(formData).then(() => resetForm());
                    }}
                  >
                    <Form>
                      <div className="flex flex-col gap-5">
                        <p>مبلغ قابل پرداخت : {cost.toLocaleString()} تومان</p>
                        <div className="flex flex-col">
                          <div className="flex justify-between items-center">
                            <Field
                              name="PaymentInvoiceNumber"
                              placeholder="عبارت روبرو را وارد کنید"
                              className="border-primary w-[60%] border-2 outline-none p-2 rounded-lg dark:bg-dark-200"
                            />
                            <div className="bg-red-100 dark:bg-dark-200 dark:border-2 dark:border-primary py-2 px-4 rounded-lg">
                              <p
                                style={{ letterSpacing: "1px" }}
                                className="text-pink-700 dark:text-white text-lg"
                              >
                                {randomNum}
                              </p>
                            </div>
                          </div>
                          <ErrorMessage
                            name="PaymentInvoiceNumber"
                            component="span"
                            className="text-red-500"
                          />
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button color="danger" onPress={onClose}>
                            انصراف
                          </Button>
                          <Button color="primary" type="submit">
                            ادامه
                          </Button>
                        </div>
                      </div>
                    </Form>
                  </Formik>
                ) : (
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      const formData = new FormData();
                      formData.append("PaymentId", paymentId);
                      formData.append("Image", event.target.bill.files[0]);
                      addPeymentImage(formData);
                    }}
                    className="flex gap-2 justify-end"
                  >
                    <label
                      className="bg-primary text-white dark:bg-dark-100 dark:border-2 py-2 px-4 rounded-xl cursor-pointer"
                      htmlFor="bill"
                    >
                      آپلود فیش واریزی
                    </label>
                    <input className="hidden" type="file" id="bill" />
                    <Button
                      type="submit"
                      className="text-white font-bold text-medium"
                      color="success"
                    >
                      تایید نهایی
                    </Button>
                  </form>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default CourseSpecificationsBox;
