import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const About = () =>{
    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');
    const onToggleDetail = () =>{
        setSearchParams({mode,detail : detail === 'true'? false : true});
    }
    const onIncreaseMode = () =>{
        const nextMode = mode === null ? 1 : parseInt(mode) +1;
        setSearchParams({mode : nextMode, detail});
    }

    return(
        <div>
            <h1>소개</h1>
            <p>detail : {detail}</p>
            <p>mode : {mode}</p>
            <button onClick={onToggleDetail}>Toggle detail </button>
            <button onClick={onIncreaseMode}>mode + 1 </button>
            <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>

           
            <Link to = "/">홈</Link>
        </div>
    );
};

export default About;

/* 

const About = () => {
    }

*/