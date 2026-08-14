const Practice=()=>{
const students =[5,6];
return(
    <>
<h1>Display</h1>
{/* <p>{students.length  && "No students found"}</p> */}
{/* <p>{students.length == 0  && "No students found"}</p> */}
<p>{!students.length && "No students found"}</p>
<p>Number of student {students.length}</p>
    </>
    )
}
export default Practice;