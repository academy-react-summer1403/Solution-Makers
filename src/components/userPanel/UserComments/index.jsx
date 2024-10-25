import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/Provider";
import ArticleComments from "./ArticleComments";
import CourseComments from "./CourseComments";
import {
  Tabs,
  Tab,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import CommentBox from "./CommentBox";
import toast from "react-hot-toast";
import instance from "../../../core/services/middleware";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

function UserComments() {
  const { setUserNavTitle } = useContext(AppContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selected, setSelected] = useState("courses");
  const [comment, setComment] = useState({});
  const [replyOfComment, setReplyOfComment] = useState({});
  const [replies, setReplies] = useState(undefined);
  const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);

  const getCourseCommentReplies = () => {
    toast
      .promise(
        instance.get(
          `/Course/GetCourseReplyCommnets/${comment.courseId}/${comment.commentId}`
        ),
        {
          loading: "در حال دریافت اطلاعات",
          error: "خطایی رخ داد",
        }
      )
      .then((res) => {
        setReplies(res.data);
        toast.remove();
        res.data.length == 0
          ? toast.success("پاسخی یافت نشد")
          : toast.success("اطلاعات دریافت شد");
      });
  };

  const getArticleCommentReplies = () => {
    toast
      .promise(
        instance.get(`/News/GetRepliesComments?Id=${comment.commentId}`),
        {
          loading: "در حال دریافت اطلاعات",
          error: "خطایی رخ داد",
        }
      )
      .then((res) => {
        setReplies(res.data);
        toast.remove();
        res.data.length == 0
          ? toast.success("پاسخی یافت نشد")
          : toast.success("اطلاعات دریافت شد");
      });
  };

  const replyToCourseCommentReplies = (title, body) => {
    const formData = new FormData();
    formData.append("CommentId", replyOfComment.id);
    formData.append("CourseId", replyOfComment.courseId);
    formData.append("Title", title);
    formData.append("Describe", body);
    return toast.promise(
      instance.post("/Course/AddReplyCourseComment", formData),
      {
        loading: "در حال ارسال",
        success: "پاسخ ارسال شد",
        error: "خطایی رخ داد",
      }
    );
  };

  const replyToArticleCommentReplies = (title, describe) => {
    return toast.promise(
      instance.post("/News/CreateNewsReplyComment", {
        newsId: replyOfComment.newsId,
        parentId: replyOfComment.id,
        userId: replyOfComment.userId,
        title,
        describe,
      }),
      {
        loading: "در حال ارسال",
        success: "پاسخ ارسال شد",
        error: "خطایی رخ داد",
      }
    );
  };

  const schema = Yup.object({
    replyTitle: Yup.string()
      .min(5, "حداقل 5 کاراکتر")
      .required("این فیلد الزامیست"),
    replyBody: Yup.string()
      .min(5, "حداقل 5 کاراکتر")
      .required("این فیلد الزامیست"),
  });

  useEffect(() => {
    setUserNavTitle("نظرات من");
  });

  useEffect(() => {
    console.log(replyOfComment);
  }, [replyOfComment]);

  return (
    <div className="flex flex-col gap-10 mt-10">
      <div className="flex w-full flex-col sm:px-28">
        <Tabs
          aria-label="Options"
          selectedKey={selected}
          onSelectionChange={setSelected}
          variant="bordered"
          classNames={{
            base: "mx-20 sm:mx-0",
            tabList:
              "w-full gap-2 lg:gap-5 p-2 bg-white flex-col sm:flex-row dark:bg-dark-100",
            tab: "py-5",
            cursor: "bg-primary rounded-xl dark:bg-dark-200 dark:border-2",
          }}
        >
          <Tab key="courses" title="دوره ها"></Tab>
          <Tab key="articles" title="مقاله ها"></Tab>
        </Tabs>
      </div>
      {selected == "courses" ? (
        <CourseComments setComment={setComment} onOpen={onOpen} />
      ) : (
        <ArticleComments setComment={setComment} onOpen={onOpen} />
      )}

      <Modal
        isOpen={isOpen}
        onOpenChange={() => {
          setReplies(undefined);
          onOpenChange();
        }}
        scrollBehavior="inside"
        size="5xl"
        className="dark:border-2 dark:border-primary"
        classNames={{ body: "p-10" }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <span className="text-2xl">کامنت شما</span>
              </ModalHeader>
              <ModalBody className="gap-5">
                <CommentBox
                  courseTitle={comment.courseTitle}
                  courseId={comment.courseId}
                  commentId={comment.commentId}
                  title={comment.title}
                  describe={comment.describe}
                  insertDate={comment.insertDate}
                />
                <span>
                  <Button
                    className="bg-primary text-white"
                    onClick={() => {
                      if (selected == "courses") {
                        getCourseCommentReplies();
                      } else {
                        getArticleCommentReplies();
                      }
                    }}
                  >
                    مشاهده پاسخ ها
                  </Button>
                </span>
                {replies == undefined ? (
                  ""
                ) : (
                  <>
                    {replies.length == 0 ? (
                      <span>برای این کامنت پاسخی وجود ندارد</span>
                    ) : (
                      <div className="flex flex-col gap-8">
                        {replies.map((reply, index) => (
                          <div
                            className="me-20 shadow-xl rounded-2xl dark:shadow-none"
                            key={index}
                            onClick={() => console.log(reply)}
                          >
                            <CommentBox
                              {...reply}
                              commentId={comment.commentId}
                              setIsReplyModalOpen={setIsReplyModalOpen}
                              replyOfComment={replyOfComment}
                              setReplyOfComment={setReplyOfComment}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  بستن
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isReplyModalOpen}
        onOpenChange={() => setIsReplyModalOpen(false)}
      >
        <ModalContent>
          {(onClose) => (
            <Formik
              initialValues={{ replyTitle: "", replyBody: "" }}
              validationSchema={schema}
              onSubmit={(values, { resetForm }) => {
                if (selected == "courses") {
                  replyToCourseCommentReplies(
                    values.replyTitle,
                    values.replyBody
                  ).then(() => resetForm());
                } else {
                  replyToArticleCommentReplies(
                    values.replyTitle,
                    values.replyBody
                  ).then(() => resetForm());
                }
              }}
            >
              <Form>
                <ModalHeader className="flex flex-col gap-1">
                  ثبت پاسخ
                </ModalHeader>
                <ModalBody>
                  <div className="flex flex-col">
                    <label htmlFor="replyTitle">عنوان</label>
                    <Field
                      name="replyTitle"
                      className="border-primary border-2 outline-none my-1 p-2 rounded-lg dark:bg-dark-200"
                    />
                    <ErrorMessage
                      name="replyTitle"
                      component="span"
                      className="text-red-500"
                    />
                    <label htmlFor="replyBody">متن پاسخ</label>
                    <Field
                      as="textarea"
                      name="replyBody"
                      className="border-primary border-2 outline-none my-1 p-2 rounded-lg dark:bg-dark-200"
                    />
                    <ErrorMessage
                      name="replyBody"
                      component="span"
                      className="text-red-500"
                    />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="danger"
                    variant="light"
                    onPress={() => onClose()}
                  >
                    بستن
                  </Button>
                  <Button type="submit" color="primary">
                    ارسال
                  </Button>
                </ModalFooter>
              </Form>
            </Formik>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default UserComments;
