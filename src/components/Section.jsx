export default function Section(props){

    const lines = props.lines.map(line =>
        <p key={line.id}>{line.content}</p>
      );
      
    return (
        <div>
                    <h1>{props.title}</h1>
                    <ul>{lines}</ul>
                
        </div>
    )
    
}

