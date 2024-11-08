import { Outlet } from "react-router-dom";
import UserPanelSidebar from "../../components/userPanel/Sidebar";
import UserPanelNavbar from "../../components/userPanel/Navbar";
import { useContext, useEffect } from "react";
import instance from "../../core/services/middleware";
import { setItem } from "../../core/services/common/storage";
import { AppContext } from "../../context/Provider";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";

function UserPanelLayout() {
  const {
    showUserPanelSidebar,
    setShowUserPanelSidebar,
    setUserInfos,
    reFetch,
    setReFetch,
  } = useContext(AppContext);

  window.onresize = () => {
    if (window.innerWidth >= 1200) {
      setShowUserPanelSidebar(false);
    }
  };

  const { data, isLoading, error, refetch, status } = useQuery({
    queryKey: ["profileInfo"],
    queryFn: () => instance.get("/SharePanel/GetProfileInfo"),
  });

  useEffect(() => {
    if (data) {
      setUserInfos(data.data);
      setItem("userInfos", data.data);
    }
  }, [data]);

  useEffect(() => {
    reFetch && refetch();
    setReFetch(false);
  }, [reFetch]);

  if (isLoading) {
    return (
      <BeatLoader
        color="#2196F3"
        className="bg-white dark:bg-black text-center mt-10"
        size={20}
      />
    );
  }

  return (
    <div className="flex bg-white dark:bg-black">
      <Toaster position="top-center" />
      <UserPanelSidebar />
      <div
        className={`h-screen w-full lg:w-[80%] flex flex-col overflow-y-auto ${
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
