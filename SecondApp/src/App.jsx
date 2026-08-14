function App() {
  return (
    <div>
    <NetflixSeries/>
    <NetflixSeries/>
    <NetflixSeries/>
    <NetflixSeries/>
    <NetflixSeries/>
    <NetflixSeries/>
    <NetflixSeries/>
    <NetflixSeries/>
    <NetflixSeries/>
    <NetflixSeries/>
  </div>
  )
}

export default App;
const NetflixSeries = ()=>{
    const name = "Waris singh"
    return (
<div>
    <div>
        <h2>{name}</h2>
      <h1 className="font-bold text-blue-900">
        Hello Tailwind CSS
      </h1>
    
      <img
        src="/image/one.jpg"
        alt="One"
        className="w-[100px] mt-5"
      />
      <h1>Butterfly</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         In dolorum asperiores nisi nostrum maxime, reiciendis cumque
          consectetur delectus accusantium reprehenderit magni 
          aspernatur vel iusto, odit ipsum fugiat quaerat repellendus deleniti.</p>
    </div>
    <h2>Name{name}</h2>
    <h3>Rating: {name}</h3>
</div>
    )
}
