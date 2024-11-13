import { Outlet } from "react-router-dom";


function About() {
  return (
    <div>
      <h1>오류가 나요 안나게 해주세요</h1>
      <h3>About 페이지</h3>
      
      <Outlet></Outlet>
    </div>
    
  );
  
}



export default About;