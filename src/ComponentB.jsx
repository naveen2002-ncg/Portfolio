import ComponentC from "./ComponentC.jsx";
function ComponentB({ user }) {
    return (
        <div className="box">
            <h1>Component B</h1>
            <ComponentC user={user} />
        </div>
    );
}

export default ComponentB;