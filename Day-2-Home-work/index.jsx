const MainContainer = () =>{
  return (
    <div id="box">
      <h1>Topics Covered</h1>


      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laborum, fugiat impedit repellendus distinctio ratione asperiores veniam. Nulla, nesciunt voluptatibus!</p>

      <h3 className="heading">getting started with the web</h3>

      <p>provides Lorem ipsum dolor sit amet consectetur.</p>


      <h3 className="heading">Html -- structuring the web</h3>

      <p>Html Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam minima possimus nemo reprehenderit maiores totam voluptas nulla dolorum soluta.</p>


      <h3 className="heading">css -- styling the web</h3>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia obcaecati quis ducimus fuga quos. Consectetur voluptas natus rerum ipsam tempora porro praesentium, quidem inventore molestias?</p>
    </div>
  )
}






ReactDOM.render(<MainContainer/>, document.querySelector("#root"))

ReactDOM.render(<MyList/>, document.querySelector("#root"))