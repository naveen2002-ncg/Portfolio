function Student(props){
    return(<div>
    <h3>Name:{props.name}</h3>
    <h3>Age:{props.age}</h3>
    <h3>isStudent:{props.isStudent?"Yes":"No"}</h3>
    
    </div>
         
    );
}
export default Student;