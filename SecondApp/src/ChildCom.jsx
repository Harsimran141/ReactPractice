const ChildCom = ({name,age}) => {
    console.log(name);
    
    return(
        <div>
        <h2>Child Component name:-{name}</h2>
          <p>Child age : {age}</p>
        </div>
    );
}
export default ChildCom;