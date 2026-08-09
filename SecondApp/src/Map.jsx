function Map(){
    const fruits =['Apple','Banana','Cherry','Pineapple','Watermelon'];
    return(
    <div className="flex justify-center ">
        <h1 className="text-4xl font-bold text-green-800 ">Map function In React</h1>
        <ul className="mt-10 text-xl text-white bg-green-600">
            {fruits.map((fruit,index) => (
                <li key={index}>{fruit}</li>
            ))
            }
        </ul>
    </div>
    )
}
export default Map;