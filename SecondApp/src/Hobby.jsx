const Hobby = ({name,age,city,hobbies}) => {
    return(
<div>
    <h1>Name:-{name}</h1>
    <h2>Age:-{age}</h2>
    <h3>City:-{city}</h3>
    <h4>hobbies:</h4>
   {hobbies.map((hobby,index)=>(
    <p key={index}>{hobby}</p>
   ))}
</div>
    )
}
export default Hobby;