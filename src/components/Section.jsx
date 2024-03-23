import { useState } from 'react'

export default function Section(props){
    const [lines, setLines] = useState(props.lines)

    function updateLinesWithValue (){
        setLines()//update the one line that gets changed
    }

    const displayedLines = props.lines.map(line =>
        props.editMode ?
        <p key = {line.id}>{line.label}<input onChange = {(e)=>{ updateLinesWithValue } } type = "text" value = {line.content}></input></p> :
        <p key={line.id} >{line.label}{line.content}</p>
      );
      
    return (
        <div>
                    <h1>{props.title}</h1>
                    <ul>{displayedLines}</ul>
                
        </div>
    )
    
}

