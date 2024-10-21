import { useContext, useEffect } from "react";
import { AppContext } from "../../../context/Provider";

function UserIndex() {
    
    const {userInfos, setUserNavTitle} = useContext(AppContext);

    useEffect(() => {
        setUserNavTitle("پیشخوان")
    },[])
    

    return (
        <div className="inline-flex flex-wrap text-md md:text-lg gap-16 p-10 border-2 border-primary rounded-xl mx-10 mt-8">
            <p>نام و نام خانوادگی : {userInfos.fName} {userInfos.lName}</p>
            <p>تاریخ تولد : {userInfos.birthDay}</p>
            <p>شماره همراه : {userInfos.phoneNumber}</p>
            <p>آدرس : {userInfos.homeAdderess}</p>
            <p>شماره ملی : {userInfos.nationalCode}</p>
            <p>ایمیل کاربر : {userInfos.email}</p>
        </div>
    );
}

export default UserIndex;