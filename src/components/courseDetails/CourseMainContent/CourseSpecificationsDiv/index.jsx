function CourseSpecificationsDiv({ icon, textKey, textValue }) {
  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex items-center gap-3">
        <span className="bg-primary text-white text-2xl rounded-full p-[10px]">{icon}</span>
        <span>{textKey}</span>
      </div>
      <div className="flex items-center">{textValue}</div>
    </div>
  );
}

export default CourseSpecificationsDiv;
