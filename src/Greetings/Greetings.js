import GreetingS from "./Greetings.module.css";

function Greetings() {
  return (
    <div className={GreetingS.AboutMe}>
      <div className={GreetingS.Wrapper}>
        <div className={GreetingS.Hey}>Hi there, I'm</div>
        <div className={GreetingS.MyName}>Denis Kan</div>
        <div className={GreetingS.Profession}>
          Junior <br /> frontend dev
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
