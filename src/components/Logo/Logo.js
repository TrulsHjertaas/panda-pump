import {motion} from 'framer-motion';
import styles from './Logo.module.css';

const Logo = () => {
  return(
    <motion.div animate={{scale: 2}} transition={{duration: 1.5}}>
      <h3 className={styles.logo}>Panda Pump.</h3>
    </motion.div>
  );
}

export default Logo;