function Span({ children, value }) {
  return (
    <span className="text-center xl:text-start text-ellipsis whitespace-nowrap overflow-hidden">
      {children} : {value}
    </span>
  );
}

export default Span;
