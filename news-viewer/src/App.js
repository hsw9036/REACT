// import { useState } from "react";
// import axios from "../node_modules/axios/index";
// const App = () =>{ 
//   const [data, setData] = useState(null);
//   const onClick = async () =>{
//     try {
//       const response = await axios.get (
//         'https://newsapi.org/v2/everything?q=tesla&from=2024-09-22&sortBy=publishedAt&apiKey=ab7aa4ecc8c048c9accdec263e2c011f',
//       );
//     setData(response.data);
//     } catch(e){
//       console.log(e);
//     }
//   };
//   return(
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && <textarea rows={7} value = {JSON.stringify(data,null,2)} readOnly={true}/>}
//     </div>
//   )
// }

// export default App;

import { useState,useCallback } from "react";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

const App = () =>{
  const [category,setCategory] = useState ('all');
  const onSelect = useCallback(category => setCategory(category),[]);
  return (
    <>
    <Categories category={category} onSelect={onSelect}/>
    <NewsList category = {category} />
    </>
  )
}


// const App = () => {
//   return (
//     <>
//     <Categories />
//     <NewsList />
//     </>
//   )
// }

export default App;

// const App = () =>{
//   return <NewsList />
// }

// export default App;