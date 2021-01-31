import Link from 'next/link';
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import Logo from '../Logo/Logo';
import {MenuToggle} from './MenuToggle/MenuToggle';
import styles from './Menu.module.css';

const Menu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  return(
    <section className={styles.container}>
      <Logo />
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
      >
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </section>
  );
}

export default Menu;