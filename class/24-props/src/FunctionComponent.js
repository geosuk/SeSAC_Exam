// 함수형
// 직관적으로 함수 이름을 만들고, 보여줄 html 요소 return문에 작성
// +화살표 함수(함수표현식)로 작성해도 되고, 함수선언문으로 작성해도 된다.

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

export default FunctionComponent;