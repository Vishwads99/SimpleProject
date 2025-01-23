import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we are serious about is food.</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
            quam sed. Tenetur laudantium quam deserunt numquam cum sit
            laboriosam consequuntur. Adipisci minus iste velit perspiciatis
            illum, id reprehenderit eum dolores aspernatur delectus cum,
            incidunt laudantium dicta sunt cumque cupiditate, ipsum a. Quo
            deserunt nobis ducimus! Quo nesciunt assumenda corrupti saepe?
          </p>
          <Link to={"/"}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight></HiOutlineArrowNarrowRight>
            </span>
          </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about"/>
        </div>
      </div>
    </section>
  );
};

export default About;
