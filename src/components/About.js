import UserFun from "./UserFun";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-head">
        <h1>About Us</h1>
      </div>
      <div className="about-body">
        <UserClass name={"Vinay Patel"} location={"Noida"}/>
        <UserFun  name={"Rakhi Patel"} location={"Noida"} />
      </div>
    </div>
  );
};

export default About;
