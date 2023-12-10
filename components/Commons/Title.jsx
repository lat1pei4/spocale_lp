import "./title.scss";

const Title = ({ children, backgroundImage, blue }) => {
  return (
    <div className="sectionTitle">
      <div
        className={`background-image title-background ${backgroundImage} bg-center bg-no-repeat bg-contain`}
      ></div>
      <div
        className={`background-image deco-line-background ${
          blue && "deco-line-background-blue"
        }`}
      ></div>
      <h2>{children}</h2>
    </div>
  );
};

export default Title;
