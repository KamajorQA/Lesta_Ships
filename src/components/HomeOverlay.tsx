import { Button } from 'antd';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function HomeOverlay() {
  const navigate = useNavigate();
  const goToShipsList = () => navigate('/shipslist');

  const allyText = 'Is it your ally?..';
  const enemyText = '...or your enemy?';

  const allyLetters = allyText.split('');
  const enemyLetters = enemyText.split('');

  const leftContainerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
        delayChildren: 4.04 * i,
        delay: 4,
      },
    }),
  };

  const rightContainerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
        delayChildren: 7.04 * i,
        delay: 7,
      },
    }),
  };

  const lettersVarTransitions = {
    type: 'spring',
    damping: 12,
    stiffness: 100,
  };

  const leftLettersVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      x: -20,
      transition: lettersVarTransitions,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: lettersVarTransitions,
    },
  };

  const rightLettersVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      x: -20,
      transition: lettersVarTransitions,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: lettersVarTransitions,
    },
  };

  const buttonRightVariants = {
    hidden: {
      x: 200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="filter">
      <motion.div
        className="paragraph"
        variants={leftContainerVariants}
        initial={'hidden'}
        animate={'visible'}
        style={{
          overflow: 'hidden',
        }}
      >
        {allyLetters.map((letter, i) => {
          return (
            <motion.span key={i} variants={leftLettersVariants}>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          );
        })}
      </motion.div>

      <motion.div
        className="paragraph contentRight"
        variants={rightContainerVariants}
        initial={'hidden'}
        animate={'visible'}
        style={{
          overflow: 'hidden',
        }}
      >
        {enemyLetters.map((letter, i) => {
          return (
            <motion.span key={i} variants={rightLettersVariants}>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          );
        })}
      </motion.div>

      <motion.p
        className="paragraph contentRight actionCall"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 10,
        }}
      >
        Find it out!
      </motion.p>
      <motion.div
        className=" contentRight buttonCall"
        initial={'hidden'}
        animate={'visible'}
        transition={{
          duration: 1,
          delay: 11,
          type: 'spring',
          ease: 'easeInOut',
        }}
        variants={buttonRightVariants}
      >
        <Button onClick={goToShipsList}>Discover all ships!</Button>
      </motion.div>
    </div>
  );
}

export { HomeOverlay };
