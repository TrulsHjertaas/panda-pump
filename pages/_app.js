import Head from 'next/head'
import {motion, AnimatePresence} from 'framer-motion'
import "../src/styles/global.css";
import {Menu} from '../src/components'

function App({ Component, pageProps, router }) {
  return(
  <>
  <Head>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"/>
  </Head>
  <AnimatePresence>
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
      pageInitial: {
        opacity: 0,
      },
      pageAnimate: {
        opacity: 1,
      },
      pageExit: {
        opacity: 0,
      },
    }}
    transition={{ duration: 1 }}
    >
      <Menu />
      <Component {...pageProps} />
    </motion.div>
  </AnimatePresence>
  </>
  );
}

export default App;
