export default function Section(props){

    const lines = props.lines.map(line =>
        props.editMode ?
        <p key={line.id}>{line.label}<input type = "text" value = {line.content}></input></p>:
        <p key={line.id}>{line.label}{line.content}</p>
      );
      
    return (
        <div>
                    <h1>{props.title}</h1>
                    <ul>{lines}</ul>
                
        </div>
    )
    
}

