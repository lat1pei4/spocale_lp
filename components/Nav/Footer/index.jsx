import styles from "./style.module.scss";
import { FOOTER_LINKS } from "@/constants";

export default function index() {
  return (
    <div className={styles.footer}>
      {FOOTER_LINKS.map((item) =>
        item.links.map((link, index) => (
          <a key={index} href={item.hrefs[index]}>
            {link}
          </a>
        ))
      )}
    </div>
  );
}
