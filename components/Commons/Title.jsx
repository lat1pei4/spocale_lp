import "./title.scss";

const Title = ({ children, sectionName }) => {
  return (
    <div className="sectionTitle">
      <div className={`background-image title-background`}></div>
      <div className={`background-image deco-line-background`}></div>
      <h2>{children}</h2>
    </div>
  );
};

export default Title;
