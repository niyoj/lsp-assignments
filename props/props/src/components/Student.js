const Student = (props) => {
    return (
        <div className="student">
            <h2>student</h2>
            <ul>
                {
                    props.list.map((name) => {
                        return <li>{name}</li>;
                    })
                }
            </ul>
        </div>
    );
}

export default Student;