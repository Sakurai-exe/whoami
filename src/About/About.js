import AboutS from "./About.module.css";
import Particles from "react-particles-js";
import Spaceman from "../Images/spaceman.png";

function About() {
  return (
    <div className={AboutS.About}>
      <Particles
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <div className={AboutS.NamePage}>ABOUT</div>
      <div className={AboutS.Content}>
        I'm sure that I'll give all my life to web development. I Never
        looked for hidden reasons for this decision. I've enough desire and
        inspiration, and of course, perseverance.
        <br />
        If you've these three things, you will definitely reach a high level
        in any profession.
        <br />
        <br /> I think that I'll be able to find like-minded people.
        <br />
        <br />
        Hobby - Work <br />
        Work - Hobby
      </div>
      <div className={`${AboutS.SpaceMan} ${AboutS.bounce}`}>
        <img src={Spaceman} alt="spaceman" width="80%"/>
      </div>
    </div>
  );
}

export default About;
