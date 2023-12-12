import styles from "./style.module.scss";
import { FOOTER_LINKS } from "@/constants";

export default function index() {
  return (
    <div className={styles.footer}>
      {FOOTER_LINKS.map((link, index) => {
        return <a key={index}>{link.links}</a>;
      })}
      {/* <a>Awwwards</a>
      <a>Instagram</a>
      <a>Dribble</a>
      <a>LinkedIn</a> */}
    </div>
  );
}
