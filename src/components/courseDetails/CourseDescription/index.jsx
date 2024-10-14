function CourseDescription({ googleSchema, describe }) {
  return (
    <div className="flex flex-col gap-3">
      <p>{googleSchema}</p>
      <p>{describe}</p>
    </div>
  );
}

export default CourseDescription;
