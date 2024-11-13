
import {Component} from "react";
import Comment from "./Comment";
import App from '../App';

class MyComponent extends Component {
    render(){
        const {name, children} = this.props;
        return (
            <div>
                안녕하세요 . 제 이름은 '{name}' 입니다, <br />
                children 값은 {children} 입니다 <br />
             </div>
        )
    }
}

MyComponent.defaultProps = {
    name : '깁온이름'
}

/*
const MyComponent = props =>
{
   const {name, children} = props;

   return(
    <div>
    안녕하세요, 제 이름은 {name}입니다. <br/>
    childern 값은 {children} 입니다.
    </div>
    );
}

MyComponent.defaultProps= {
    name : '기본이름'
}
*/
export default MyComponent;
