import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import CommonTable from "../../component,table/CommonTable";
import CommonTableColumn from "../../component,table/CommonTableColumn";
import CommonTableRow from "../../component,table/CommonTableRow";
import { postList } from "../../Data";

const PostList = props => {
    const [dataList, setDataList] = useState([]);

    useEffect (()=>{
        setDataList(postList);
    }, [])

    return (
        <>
        <CommonTable headersName={['글번호','제목','등록일','조회수']}>
        {
            dataList ? dataList.map((item, index)=>{
                return (
                    <CommonTableRow key={index}>
                        <CommonTableColumn>{item.no}</CommonTableColumn>
                        <CommonTableColumn>
                            <Link to = {`/postView/${item.no}`}>{item.title}</Link>
                        </CommonTableColumn>
                        <CommonTableColumn>{item.createDate}</CommonTableColumn>
                        <CommonTableColumn>{item.readCount}</CommonTableColumn>
                    </CommonTableRow>
                )
            }) : ''
        }
        </CommonTable>
        </>
    )
}

export default PostList;


// import React from "react";
// import CommonTable from "../../component,table/CommonTable";
// import CommonTableColumn from "../../component,table/CommonTableColumn";
// import CommonTableRow from "../../component,table/CommonTableRow";


// const PostList = props => {
//  return (
//     <>
//     <CommonTable headersName={['글번호','제목','등록일','조회수']}>
//     <CommonTableRow>
//           <CommonTableColumn>1</CommonTableColumn>
//           <CommonTableColumn>첫번째 게시글입니다.</CommonTableColumn>
//           <CommonTableColumn>2020-10-25</CommonTableColumn>
//           <CommonTableColumn>6</CommonTableColumn>
//         </CommonTableRow>
//         <CommonTableRow>
//           <CommonTableColumn>2</CommonTableColumn>
//           <CommonTableColumn>두번째 게시글입니다.</CommonTableColumn>
//           <CommonTableColumn>2020-10-25</CommonTableColumn>
//           <CommonTableColumn>5</CommonTableColumn>
//         </CommonTableRow>
//         <CommonTableRow>
//           <CommonTableColumn>3</CommonTableColumn>
//           <CommonTableColumn>세번째 게시글입니다.</CommonTableColumn>
//           <CommonTableColumn>2020-10-25</CommonTableColumn>
//           <CommonTableColumn>1</CommonTableColumn>
//         </CommonTableRow>
//         <CommonTableRow>
//           <CommonTableColumn>4</CommonTableColumn>
//           <CommonTableColumn>네번째 게시글입니다.</CommonTableColumn>
//           <CommonTableColumn>2020-10-25</CommonTableColumn>
//           <CommonTableColumn>2</CommonTableColumn>
//         </CommonTableRow>
//         <CommonTableRow>
//           <CommonTableColumn>5</CommonTableColumn>
//           <CommonTableColumn>다섯번째 게시글입니다.</CommonTableColumn>
//           <CommonTableColumn>2020-10-25</CommonTableColumn>
//           <CommonTableColumn>4</CommonTableColumn>
//         </CommonTableRow>
//       </CommonTable>
//     </>
//  )
// }

// export default PostList;