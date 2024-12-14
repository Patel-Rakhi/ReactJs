import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("div",
//     { id: "parent" },
//     [React.createElement('h1', { id: "abc" }, "Hello from nested Elements Rakhi "),
//     React.createElement('h2', { id: "csd" }, "Hello from nested Elements")
//     ]
// )

// Let use Jsx
//React Element
const Title = () => (
  <h2 id="heading" className="Heading">
    Hello World from the Title !!
  </h2>
);
// This also a react element. Babel convert it into createElement then we get an object.

const name = (
   
  <p>
     {Title()}
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining essentially unchanged. It
    was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software
    like Aldus PageMaker including versions of Lorem Ipsum.
  </p>
);

/*** React functional component */
var number={
    one:1,
    two:2
}
const Headingcomponents = () => {
  return (
    <div id="container">
      <div className="tag">
      {Title()}
        <Title />
        {name}
        {number.one}
      </div>
      <div className="HeadTag">
        <h1>
          Hello from react <strong>functional component</strong>
        </h1>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headingcomponents />);
