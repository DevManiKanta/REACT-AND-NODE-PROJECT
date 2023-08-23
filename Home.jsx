import React,{useState,useEffect}from 'react';
import "./Home.css"
import Button from 'react-bootstrap/esm/Button';
import axios from'axios';



const Home = () => {
    const [todo,setTodo]=useState([])
    const [enter,setEnter]=useState();

    useEffect(() => {
        axios.get('http://localhost:3000/todos').then((response) => {
          setTodo(response.data);
        });
      }, []);

    const submitTodo=(e)=>{
        e.preventDefault();
        setEnter(e.target.value)
      }

      const todos=async()=>{
        let newdata = {
          id:todo.id,
          title:enter,
          
        }
        let result=await axios.post("http://localhost:3001/todos",newdata)
        console.log(result.data)
        setTodo([...todo,newdata])

    }
    const DeleteTodo=(index)=>{
        var temp = [...todo];
        temp.splice(index,1)
        setTodo([...temp])}

        const DoneTodo=(index)=>{
            var temp=[...todo];
            temp[index].completed= false
             setTodo([...temp])
            
            }
            const undoTodo=(index)=>{
              var temp=[...todo];
            temp[index].completed=true
             setTodo([...temp])
            
            }
  return (
    <center>
        <h1>Task Management App</h1><br/>
    <div>
        <table style ={{width:1000}}>
               <tr>
                <td>UserId</td>
                <td>Title </td>
                <td>update</td>
                <td>Delete</td>
                <td>Completed/Not</td>
               </tr>
               <tbody>
                
                   {
                    todo.map((item,i)=>{
                return<tr key={i}className={item.completed===true?"text-decoration-line-through":""}>
                    <td>{item.sno}</td>
                    <td>{item.title}</td>
                    <td><Button>Update</Button></td>
                    <td><Button variant="danger" onClick={()=>{DeleteTodo(i)}} >Delete</Button></td>
                    <td>{item.completed===true?(<Button onClick={()=>{DoneTodo(i)}}>Done</Button>):(<Button onClick={()=>{undoTodo(i)}}>Undo</Button>)}</td>
                        </tr>
                    })
                   }
               </tbody>
        </table>
    </div><br/><br/>
    <div>
    <input type="text" placeholder="Add newTodo" value={todo}onChange={submitTodo}/><br/><br/>
     <Button variant="info"  onClick={todos}>Add NewTodo</Button>
    </div>
    </center>
  )
}

export default Home;