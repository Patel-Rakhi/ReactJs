const heading = React.createElement("div",
    { id: "parent" },
    [React.createElement('h1', { id: "abc" }, "Hello from nested Elements"),
    React.createElement('h2', { id: "csd" }, "Hello from nested Elements")
    ]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);