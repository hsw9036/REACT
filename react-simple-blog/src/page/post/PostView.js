import React, {useEffect,useState} from "react";
import { getPostByNo } from "../../Data";
import './Post.css';
import { useNavigate, useParams } from "react-router";

const PostView = ({history,location,match}) =>{
    const [data, setData] = useState({});
    const {no} = useParams();
    const navigate = useNavigate();
    const enlfhrkrl = () =>{
        navigate(-1);
    }


    useEffect(()=>{
        setData(getPostByNo(no));
    },[]);

    return (
        <>
        <h2 align="center">게시글 상세정보</h2>
        <div classname="post-view-wrapper">
            {
                data ? (
                    <>
                    <div className="post-view-row">
                        <label>게시글 번호</label>
                        <label>{data.no}</label>
                    </div>
                    
                    <div className="post-view-row">
                        <label>제목</label>
                        <label>{data.title}</label>
                    </div>
                    
                    <div className="post-view-row">
                        <label>작성일</label>
                        <label>{data.createDate}</label>
                    </div>
                    
                    <div className="post-view-row">
                        <label>조회수</label>
                        <label>{data.readCount}</label>
                    </div>
                    <div className="post-view-row">
                    <label>내용</label>
                    <div>{
                    data.content
                    }
                    </div>
                </div>
                </>
                ) : '해당 게시글을 찾을 수 없습니다.'
            }
            <button className="post-view-go-list-btn" onClick={enlfhrkrl}>목록으로 돌아가기

            </button>
        </div>
        </>
    )
}

 export default PostView;

// import React from "react";



// const PostView = props =>{
//     return (
//         <>
        
//         </>
//     )
// }

// export default PostView;