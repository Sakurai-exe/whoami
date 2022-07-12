import GreetingS from "./Greetings.module.css";
import { useSpring, animated } from "react-spring";

function Greetings() {
  const fadeIn = useSpring({
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: 1,
    height: 80,
    from: { opacity: 0, height: 0 },
  });

  return (
    <div className={GreetingS.AboutMe}>
      <div className={GreetingS.Wrapper}>
        <animated.div style={fadeIn}>
          <div className={GreetingS.Hey}>Hi there, I'm</div>
        </animated.div>
        <div className={GreetingS.MyName}>Denis Kan</div>
        <div className={GreetingS.Profession}>
          Web <br />
          developer
        </div>
        <div className={GreetingS.NearFuture}>in the near future...</div>
        <div className={`${GreetingS.Quote} ${GreetingS.Animation}`}>
          Maybe not today, not tomorrow. <br />
          But someday I'll become a cool Senior developer.
        </div>
      </div>
    </div>
  );
}

export default Greetings;
