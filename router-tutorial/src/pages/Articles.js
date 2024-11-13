import { NavLink, Outlet } from "react-router-dom";



const ArticleItem = ({id}) =>{
    const activeStyle = {
        color : 'gold',
        fontSize : 55
    }
    return (
        <li>
            <NavLink to = {`/articles/${id}`}
                style={({isActive}) => (isActive ? activeStyle : undefined)}>
                    게시글 {id}
                </NavLink>
        </li>
    )
}

const Articles = () =>{
    return(
        <div>
            <Outlet />
            <ul>
                <ArticleItem id={1} />
                <ArticleItem id={2} />
                <ArticleItem id={3} />
            </ul>
        </div>
    )
}


/*
const Articles = () =>{
    const activeStyle = {
        color : 'green',
        fontSize : 21
    }
    return (
        <div>
            <Outlet />
        <ul>
            <li>
                <NavLink to="/articles/1" style={({isActive})=>(isActive ? activeStyle : undefined)}>게시글1</NavLink>
            </li>
            <li>
            <NavLink to="/articles/2" style={({isActive})=>(isActive ? activeStyle : undefined)}>게시글2</NavLink>
            </li>
            <li>
            <NavLink to="/articles/3" style={({isActive})=>(isActive ? activeStyle : undefined)}>게시글3</NavLink>
            </li>
     
        </ul>
        </div>
    )
}
*/
export default Articles;