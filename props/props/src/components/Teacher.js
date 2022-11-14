const Teacher = (props) => {
    return (
        <div className="teacher">
            <h2>teacher</h2>
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

export default Teacher;