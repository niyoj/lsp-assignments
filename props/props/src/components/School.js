import Student from "./Student";
import Teacher from "./Teacher";

const School = (props) => {
    return (
        <div className="school">
            <h1>School</h1>
            
            <div className="description">
                <Teacher list={props.teacher} />
                <Student list={props.student} />
            </div>
        </div>
    );
}

export default School;