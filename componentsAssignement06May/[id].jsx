import EditComponent from "./edit"
function updateDepartment({dept}){
    console.log(`d is ${JSON.stringify(dept)}`);

    return(
       
        <EditComponent deptUpdatedData = {dept.data}/>
    )
}
export async function getServerSideProps({params}){
    console.log(params.deptno);
    const res = await fetch(`http://localhost:7011/api/departments/${params.id}`);
     const dept = await res.json();
     console.log(`data is ${JSON.stringify(dept)}`);
   return{
       props:{dept},
   };
}
export default updateDepartment;