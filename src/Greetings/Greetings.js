import GreetingS from "./Greetings.module.css";
// import Meme from "./Pics/ModernProblems.jpg"

function Greetings() {
  return (
    <div className={GreetingS.AboutMe}>
      <div className={GreetingS.Hey}>Hi there, I'm</div>
      <div className={GreetingS.MyName}>Denis Kan</div>
      <div className={GreetingS.Profession}>
        Junior <br /> frontend dev
      </div>
      <div className={GreetingS.NearFuture}>in the near future...</div>
      {/* <div className={`${GreetingS.Meme} ${GreetingS.Animation}`}>
        <img src={Meme} alt="Meme modern problems" />
      </div> */}
      <div className={`${GreetingS.Quote} ${GreetingS.Animation}`}>
        Maybe not today, not tomorrow. <br />
        But someday they will put on me the belt of a Senior.
      </div>
    </div>
  );
}

export default Greetings;
