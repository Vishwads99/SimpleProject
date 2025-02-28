import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


const NotFound = () => {
  return (
    <section className="notFound">
      <div className="container">
        <img src="/notFound.svg" alt="notFound"></img>
        <h1>LOOKS LIKE YOU ARE LOST!!!</h1>
        <p>We cannot find you the page you are looking for</p>
        <Link to={"/"}>
        Back to Home {" "}
        <span>
          <HiOutlineArrowNarrowRight></HiOutlineArrowNarrowRight>
        </span>
        </Link>
      </div>

    </section>
  )
}

export default NotFound
