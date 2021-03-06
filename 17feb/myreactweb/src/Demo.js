import { useState , useEffect} from "react"
export default function Demo(props)
{
    var [name,setName] = useState('John')
    var [student,setStudent] = useState({roll:101,name:'Kalpana',marks:345.44})
   
    useEffect(()=>{
        console.log("Use Effect Run .... ")
    })

   return <div>
        <h1>Demo Component</h1>
        <b>{name}</b> &nbsp;
        <button onClick={()=>setName('Vikas')}>Change</button>
        <br/>
        {student.roll} , {student.name} , {student.marks}
        <br/>
        {props.records.map((rec,index)=>{
            return <p key={index}>
                {rec.name}
            </p>
        })}
    </div>
}

/*
    Stateless component : function component

    React 16 : Hooks
*/