// 함수형
// 직관적으로 함수 이름을 만들고, 보여줄 html 요소 return문에 작성
// +화살표 함수(함수표현식)로 작성해도 되고, 함수선언문으로 작성해도 된다.
import PropTypes from 'prop-types';

const FunctionComponent = (props)=>{
    console.log("Function props >>", props);
    const { name } = props;
    const teacher = "Damon";

    return (
        <>
            <h1>Hi~ {teacher}!</h1>
            <p>여기는 Funtional Component!</p>
            {/* props 사용할 때 */}
            <p>
                새로운 컴포넌트의 이름은 <b>{props.name}</b>
            </p>
            <p>새로운 컴포넌트의 이름은 <b>{name}</b></p>
        </>
    )
}

// defaultProps: 부모 컴포넌트에서 props를 미전달시 기본 값을 보여줄 props를 설정 하는 것
// FunctionComponent.defaultProps = {
//     name : "야호"
// }
// 미래에 없어질 함수라서 위험하다는 오류메시지가 뜸

// propTypes: 컴포넌트의 필수 props를 지정 or props 타입을 지정 할 때
// TypeScript가 아닌 Javascript의 "유연한 특성" 때문에 문제가 생기 ㄹ수 있다
// -> 이를 해결하기 위해 권장. 

FunctionComponent.propTypes = {
    // 프로퍼티의 자료형을 객체 형태로 지정하여 FunctionComponent.propTypes에 저장
    // name: PropTypes.string.isRequired
    name: PropTypes.string
    // "string" 타입이자 "필수값"으로 지정.
    // props가 반드시 제공되어야 함을 의미.
}

export default FunctionComponent;