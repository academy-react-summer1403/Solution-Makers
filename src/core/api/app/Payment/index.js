import instance from "../../../services/middleware";

export const studentAddPeyment = (formData) =>
  instance.post("/CoursePayment/StudentAddPeyment", formData);

export const studentAddPeymentImage = (formData) =>
  instance.post("/CoursePayment/StudentAddPeymentImage", formData);
