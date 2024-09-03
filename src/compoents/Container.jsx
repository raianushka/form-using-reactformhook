
function Container(props) {
  const classes ='container ' + props.className;
  return ( 
  <div className="w-[50%] mx-auto flex flex-col justify-center items-center bg-black bg-opacity-20 rounded-2xl p-6 mt-9">
     <div className= {classes}>{props.children}</div>
  </div>
 
  )
}

export default Container
