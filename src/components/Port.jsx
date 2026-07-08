import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 이미지정의
import portImg1 from "../assets/img/port_1.png"
import portImg2 from "../assets/img/port_2.png"
import portImg3 from "../assets/img/port_3.png"
import portImg4 from "../assets/img/port_4.png"
import portImg5 from "../assets/img/port_5.png"
import portImg6 from "../assets/img/port_6.png"
import portImg7 from "../assets/img/port_7.png"
import portImg8 from "../assets/img/port_8.png"
import portImg9 from "../assets/img/port_9.png"
import portImg10 from "../assets/img/port_10.png"
import portImg11 from "../assets/img/port_11.png"
import portImg12 from "../assets/img/port_12.png"

//데이터정리
const portText=[

  {
    code:"/",
    img:portImg1,
    alt:"1팀 프로젝트",
    title:"제목 : 1팀 프로젝트",
    desc:"1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum temporibus laudantium recusandae aliquid quisquam ipsam ut nemo veniam magnam? Eveniet atque quam expedita sequi? Blanditiis quam distinctio obcaecati eaque nobis?",
    url: "/",
  },
  {
    code:"/",
    img:portImg2,
    alt:"2팀 프로젝트",
    title:"제목 : 2팀 프로젝트",
    desc:"2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum temporibus laudantium recusandae aliquid quisquam ipsam ut nemo veniam magnam? Eveniet atque quam expedita sequi? Blanditiis quam distinctio obcaecati eaque nobis?",
    url: "/",
  },
  {
    code:"/",
    img:portImg3,
    alt:"3팀 프로젝트",
    title:"제목 : 3팀 프로젝트",
    desc:"3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum temporibus laudantium recusandae aliquid quisquam ipsam ut nemo veniam magnam? Eveniet atque quam expedita sequi? Blanditiis quam distinctio obcaecati eaque nobis?",
    url: "/",
  },
  {
    code:"/",
    img:portImg4,
    alt:"4팀 프로젝트",
    title:"제목 : 4팀 프로젝트",
    desc:"4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum temporibus laudantium recusandae aliquid quisquam ipsam ut nemo veniam magnam? Eveniet atque quam expedita sequi? Blanditiis quam distinctio obcaecati eaque nobis?",
    url: "/",
  },
  {
    code:"/",
    img:portImg5,
    alt:"5팀 프로젝트",
    title:"제목 : 5팀 프로젝트",
    desc:"1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum temporibus laudantium recusandae aliquid quisquam ipsam ut nemo veniam magnam? Eveniet atque quam expedita sequi? Blanditiis quam distinctio obcaecati eaque nobis?",
    url: "/",
  },
  {
    code:"/",
    img:portImg6,
    alt:"6팀 프로젝트",
    title:"제목 : 6팀 프로젝트",
    desc:"6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum temporibus laudantium recusandae aliquid quisquam ipsam ut nemo veniam magnam? Eveniet atque quam expedita sequi? Blanditiis quam distinctio obcaecati eaque nobis?",
    url: "/",
  },
  {
    code:"/",
    img:portImg7,
    alt:"7팀 프로젝트",
    title:"제목 : 7팀 프로젝트",
    desc:"7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum temporibus laudantium recusandae aliquid quisquam ipsam ut nemo veniam magnam? Eveniet atque quam expedita sequi? Blanditiis quam distinctio obcaecati eaque nobis?",
    url: "/",
  },
  {
    code:"/",
    img:portImg8,
    alt:"8팀 프로젝트",
    title:"제목 : 8팀 프로젝트",
    desc:"8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum temporibus laudantium recusandae aliquid quisquam ipsam ut nemo veniam magnam? Eveniet atque quam expedita sequi? Blanditiis quam distinctio obcaecati eaque nobis?",
    url: "/",
  },
  {
    code:"/",
    img:portImg9,
    alt:"9팀 프로젝트",
    title:"제목 : 9팀 프로젝트",
    desc:"9 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum temporibus laudantium recusandae aliquid quisquam ipsam ut nemo veniam magnam? Eveniet atque quam expedita sequi? Blanditiis quam distinctio obcaecati eaque nobis?",
    url: "/",
  },
  {
    code:"/",
    img:portImg10,
    alt:"10팀 프로젝트",
    title:"제목 : 10팀 프로젝트",
    desc:"10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum temporibus laudantium recusandae aliquid quisquam ipsam ut nemo veniam magnam? Eveniet atque quam expedita sequi? Blanditiis quam distinctio obcaecati eaque nobis?",
    url: "/",
  },
  {
    code:"/",
    img:portImg11,
    alt:"11팀 프로젝트",
    title:"제목 : 11팀 프로젝트",
    desc:"11 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum temporibus laudantium recusandae aliquid quisquam ipsam ut nemo veniam magnam? Eveniet atque quam expedita sequi? Blanditiis quam distinctio obcaecati eaque nobis?",
    url: "/",
  },
  {
    code:"/",
    img:portImg12,
    alt:"12팀 프로젝트",
    title:"제목 : 12팀 프로젝트",
    desc:"12 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum temporibus laudantium recusandae aliquid quisquam ipsam ut nemo veniam magnam? Eveniet atque quam expedita sequi? Blanditiis quam distinctio obcaecati eaque nobis?",
    url: "/",
  },
  
]

const Port = () => {
  //useRef(): react에서 변화되는 값을 저장하라는 명령어

  const horizontalRef = useRef(null);
  //horizontalRef 변수를 만들고 useRef 훅을 이용해서 초기화하라는 명령어 null : 없음

  const sectionsRef = useRef([]);
  // sectionsRef 변수를 만들고 useRef 훅을 이용해서 배열값으로 초기화하라는 명령어
  // useRef(0): 숫자0으로 초기화 훅명령어
  // useRef(""): 문자 초기화 훅명령어
  // useRef({}):객체로 초기화 하는 훅명령어

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    //gsap에서 ScrollTrigger 플러그인을 사용하겠다라고 정의
    const horizontal = horizontalRef.current;
    //<section id='port'> 를 가지고 있는 변수 지정인데 얘를 말하는거임
    //.current; : useRef 객체의 속성, 실제로 참조하고 있는 값

    const sections = sectionsRef.current;
    //port_item1~6 개를 넣을 수 있는 변수 

    let scrollTween = gsap.to(sections,{
      //왼쪽으로 움직이는 객체 : sections(p1~p6)
      xPercent : -120 * (sections.length-1), 
      //왼쪽으로 이동하는 이동 위치값 계산
      ease: "none",
      //none : 속도를 일정하게 하기 위해 사용

      scrollTrigger: {
        trigger: horizontal,
        //어느 요소를 기준으로 스크롤을 감지할지를 지정
        start: "top 56px",
        //스크롤 시작되는 위치, 브라우저 위쪽에 56px부터 애니메이션 시작
        end : "+=6000",
        //시작위치에서 3000px 더 스크롤하면 종료
        pin:true,
        //스크롤되는 동안 고정시켜주는 명령어
        scrub: 1,
        //숫자가 클수록 더 부드럽게 움직임.
      }
    });
    return()=>{
      scrollTween.kill();
      //돌아오면 scrollTween을 멈추라는 명령어

      //useEffect가 종료될때 실행, 다른페이지로 이동하거나 컴포넌트가 사라질때 gsap 애니메이션도 제거하라는 명령어
    }

  },[])
  // useEffect: react에 효과를 주고 싶을때 사용하는 훅 명령어
  // useEffect(()=>{},[]) :  처음 한번만 실행하고 끝내라는 훅 명령어



  //ref: HTML나 react 컴퍼넌트를 직접 참조하기 위한 기능.이름표
  return (
    <section id='port' ref={horizontalRef}>
      <div className="port_inner">
        <h2 className='port_title'>
          portfolio <em>포폴작업물</em>
        </h2>
        <section className='port_wrap'>
          {portText.map((port,key)=>(
            <article 
              className={`port_item p${key+1}`} 
              key={key}
              ref={(el)=>(sectionsRef.current[key]=el)}
            >
              <article className='num'>0{key+1}.</article>
              <a href={port.code} className='img' target='_blink'>
                <img src={port.img} alt={port.alt} />
              </a>
              <h3 className='title'>{port.title}</h3>
              <p className='desc'>{port.desc}</p>
              <a href={port.url} className='site' target='_blink' rel='noreferrer noopener'>사이트보기

              {/* rel=noreferrer: 보안용 -> window.opener 차단,해킹,피싱 방지용 
              noopener: 정보보안용 -> 사용자가 링크를 클릭하면 기본적으로 어디서 왔는지 정보가 전달이 되는데 방문 경로를 숨겨줌. 개인정보&내부 url보호
              */}
              
              </a>
            </article>
          ))}
          
        </section>
      </div>
    </section>
  )
}

export default Port


//ref={(el)=>(sectionsRef.current[key]=el)}: 
//sectionsRef.current[0] <-첫번째 p1삽입
//sectionsRef.current[1] <-첫번째 p2삽입
//sectionsRef.current[2] <-첫번째 p3삽입
//sectionsRef.current[3] <-첫번째 p4삽입
//sectionsRef.current[4] <-첫번째 p5삽입
//sectionsRef.current[5] <-첫번째 p6삽입 해주는 명령어
