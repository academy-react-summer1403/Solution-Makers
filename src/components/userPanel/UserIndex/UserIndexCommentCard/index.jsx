function UserIndexCommentCard({ title, describe, date, replyCount }) {
  return (
    <div className="flex flex-col w-full py-2 px-4 gap-2">
      <span className="text-start">عنوان : {title}</span>
      <span className="text-start">متن کامنت : {describe}</span>
      <div className="flex flex-col items-start lg:flex-row lg:justify-between gap-1">
        <span>تاریخ ثبت : {date}</span>
        <span>تعداد پاسخ : {replyCount == 0 ? "بدون پاسخ" : replyCount}</span>
      </div>
    </div>
  );
}

export default UserIndexCommentCard;
