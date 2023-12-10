import { useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
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
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
  return (
    <section ref={container} id="faq">
      <Title backgroundImage="bg-bg-faqs">よくある質問</Title>
      <Accordion data={FAQ} />
      <motion.div style={{ height }} className="circleContainer">
        <div className="circle"></div>
      </motion.div>
    </section>
  );
};

export default Faq;
