import axios from "axios";
import instance from "../../../services/middleware";

export const getLandingReport = () => axios.get("/Home/LandingReport");

export const getCourseTop = () => instance.get("/Home/GetCoursesTop?Count=4");

export const getAllTeachers = () => axios.get("/Home/GetTeachers");

export const getCategories = () => axios.get("/Home/GetTechnologies");
