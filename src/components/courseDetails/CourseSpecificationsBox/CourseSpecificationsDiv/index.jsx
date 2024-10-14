function CourseSpecificationsDiv({ icon, textKey, textValue }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center py-4">
      <div className="flex items-center gap-3">
        <span className="hidden sm:inline-block bg-primary text-white text-2xl rounded-full p-[10px]">
          {icon}
        </span>
        <span>{textKey} :</span>
      </div>
      <div className="flex items-center">{textValue}</div>
    </div>
  );
}

export default CourseSpecificationsDiv;
