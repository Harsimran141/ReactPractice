const ChildCom = ({person}) => {
   
    
    return(
        <div>
        <h2>Child Component Name:-{person[0]}</h2>
          <p>Second Component Name:- {person[1]}</p>
        </div>
    );
}
export default ChildCom;