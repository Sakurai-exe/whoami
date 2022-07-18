import HelloS from "./HelloS.module.css";
import { useSpring, animated } from "react-spring";

function Hello() {
  const fadeIn = useSpring({
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: 1,
    height: 80,
    from: { opacity: 0, height: 0 },
  });

  return (
    <div className={HelloS.Hello}>

      <div className={HelloS.Wrapper}>
        <animated.div style={fadeIn}>
          <div className={HelloS.Hey}>Hi there, I'm</div>
        </animated.div>
        <div className={HelloS.MyName}>Denis Kan</div>
        <div className={HelloS.Profession}>
          Web <br />
          developer
        </div>
        <div className={HelloS.NearFuture}>in the near future...</div>
        <div className={`${HelloS.Quote} ${HelloS.Animation}`}>
          Maybe not today, not tomorrow. <br />
          But someday I'll become a cool Senior developer.
        </div>
      </div>
    </div>
  );
}

export default Hello;
