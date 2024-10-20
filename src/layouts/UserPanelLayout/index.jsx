import { Outlet } from "react-router-dom";
import UserPanelSidebar from "../../components/userPanel/Sidebar";
import UserPanelNavbar from "../../components/userPanel/Navbar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import instance from "../../core/services/middleware";
import { setItem } from "../../core/services/common/storage";
import { AppContext } from "../../context/Provider";
import { Toaster } from "react-hot-toast";

function UserPanelLayout() {
  const { showUserPanelSidebar, setShowUserPanelSidebar } =
    useContext(AppContext);
  window.onresize = () => {
    if (window.innerWidth >= 1200) {
      setShowUserPanelSidebar(false);
    }
  };

  useEffect(() => {
    axios
      .post(`/Sign/Login`, {
        phoneOrGmail: "masg1377@gmail.com",
        password: "123456",
        rememberMe: true,
      })
      .then((res) => {
        setItem("token", res.data.token);
        setItem("userId", res.data.id);
        console.log(res.data);
      });
    instance.get("/SharePanel/GetProfileInfo").then((res) => console.log(res));
    instance
      .get(
        "/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate"
      )
      .then((res) => console.log(res.data));
  }, []);

  return (
    <div className="flex h-screen">
      <Toaster position="top-center" />
      <UserPanelSidebar />
      <div
        className={`h-screen w-full lg:w-[80%] flex flex-col py-3 px-8 ${
          showUserPanelSidebar ? "opacity-50 blur-[1px]" : ""
        }`}
      >
        <UserPanelNavbar />
        <Outlet />
      </div>
    </div>
  );
}

export default UserPanelLayout;
