import ComponentD from "./ComponentD.jsx";
function ComponentC({ user }) {
    return (
        <div className="box">
            <h1>Component C</h1>
            <ComponentD user={user} />
        </div>
    );
}

export default ComponentC;