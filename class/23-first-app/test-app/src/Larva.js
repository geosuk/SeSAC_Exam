// 컴포넌트 작성법
// #1. Funtion 만들기
// #2. return ()안에 html 작성
// #3. <함수명></함수명> or <함수명 />
import './Larva.css'
// Q)언제 사용하면 좋은가?
// A) 반복적인 html 축약 버전으로 사용
// A) 큰 페이지
// A) 자주 변경되는 UI.
// + 장점) html 더러운걸 깔끔하게 정리 할 수 있다. (div)
// 다른사람이 봐도, 나중에 미래의 내가 봐도 
// 한눈에 이 컴포넌트가 무슨 용도의 html 인지 쉽게 알 수 있음

// 지역 변수 개념


function Larva(){
    return(
        <>
            <div className="container">
                <div className="worm worm1">
                    <div className="eye">
                        <div className="eyeball"></div>
                    </div>
                </div>
                <div className="worm worm2"></div>
                <div className="worm worm3"></div>
                <div className="worm worm4"></div>
                <div className="worm worm5"></div>
                <div className="grass"></div>
            </div>
        </>
    )
}

export default Larva;