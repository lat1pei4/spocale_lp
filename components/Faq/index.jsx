import { useState } from "react";
import { FAQ } from "../../constants";
import Title from "../Commons/Title";
import "./faq.scss";

const AccordionItem = ({ id, title, content, open, onClick }) => (
  <div className="accordionItem">
    <div className={`title q${id}`} onClick={onClick}>
      <span className="title-text">{title}</span>
    </div>
    <div className={open ? "content content-open" : "content"}>
      <div className={open ? "content-text content-text-open" : "content-text"}>
        {content}
      </div>
    </div>
  </div>
);

const Accordion = ({ data }) => {
  const [accordionItems, setAccordionItems] = useState(
    data.map((i) => ({
      id: i.id,
      title: i.title,
      content: i.content,
      open: false,
    }))
  );

  const handleClick = (index) => {
    const newAccordion = [...accordionItems];
    newAccordion[index].open = !newAccordion[index].open;
    setAccordionItems(newAccordion);
  };

  const sections = accordionItems.map((item, index) => (
    <AccordionItem
      key={index}
      id={item.id}
      title={item.title}
      content={item.content}
      open={item.open}
      onClick={() => handleClick(index)}
    />
  ));

  return <div className="accordion">{sections}</div>;
};

const Faq = () => {
  return (
    <div className="faq">
      <Title sectionName={faqs}>よくある質問</Title>
      <Accordion data={FAQ} />
    </div>
  );
};

export default Faq;