import react,{useState, Fragment} from 'react';
const CheckBoXComponent = () =>{

    let [courses,setCourses] = useState([
        { CourseName: 'JavaScript', Fees: 20000, isselected: false },
        { CourseName: 'Angular', Fees: 30000, isselected: false },
        { CourseName: 'React', Fees: 40000, isselected: false },
        { CourseName: 'Node.js', Fees: 60000, isselected: false },
        { CourseName: 'VueJS', Fees: 80000, isselected: false },
      ]        
    );
   let [sum,setSum] = useState(0);

   const onValueChange = (items,evt)=>{
       alert("I ma in"+items+"evt "+evt)
    if (evt.target.checked) {
        console.log("here");
        setSum(sum+items++)
      } else {
          setSum(sum-items--)
      }
   }
   return(
       <Fragment>
           <div className='container'>
           <h1>Check List</h1>
           <table>
               <tbody>
                
                {
                    courses.map((course,idx)=>(
                        <tr key={idx}>
                            <td>{course.CourseName}</td>
                        <td><input type="checkbox" value={course.Fees} onChange={(evt)=>onValueChange(course.Fees,evt)} /></td>
                        
                    </tr>
                        
                    ))
                }
                 
                 </tbody>
                 </table>   
                 <strong>Total Fees: {sum}</strong>  
           </div>
       </Fragment>
   ) 
}
export default CheckBoXComponent;