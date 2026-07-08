
const link = () => {
    document.querySelectorAll('a[href^="#"]').forEach((el)=>{
        el.addEventListener("click",function(e){
            e.preventDefault();
            //id 로 찾아가느 값을 막아주는 명령어

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if(targetElement){
                targetElement.scrollIntoView({behavior:"smooth"})
                
            }
            console.log(targetId)
        })
        
    })
    //targetElement: null 값일때만 거짓
    //targetElement.scrollIntoView() : 특정요소(targetElement)가 화면에 보이도록 브라우저를 스크롤로 이동해주는 메서드
}

export default link

// a[href^="#] : #으로 시작되는 값을 찾기
// a[href^="#intro] : #intro 값을 찾기 
// img[src$=".png"] : .png로 끝나는 값찾기 
// a[href*="mbc"] : mbc를 포함한 값 찾기 
