import UserAvatar from "../../../components/userPanel/UserEditProfile/UserAvatar";
import UserForm from "../../../components/userPanel/UserEditProfile/UserForm";

function UserPanelEditProfile() {
  return (
    <div className="flex flex-col gap-10 px-10 pb-10">
      <UserAvatar />
      <UserForm />
    </div>
  );
}

export default UserPanelEditProfile;
