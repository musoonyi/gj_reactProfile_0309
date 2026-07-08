import React from 'react'

const footerText=[
  {
    url:"/",
    desc:"유튜브에 오시면 더 많은 강의를 볼 수 있습니다.",
    title:"1차 개인 포트폴리오",
  },
  {
    url:"/",
    desc:"우리팀이 얼마나 열심히 했는지 볼 수 있어요.",
    title:"2차 팀프로젝트",
  },
  {
    url:"/",
    desc:"나의 발전된 작품을 감상 할 수 있습니다.",
    title:"2차 개인 포트폴리오",
  },
  {
    url:"/",
    desc:"새로운 팀과의 상호간의 작품을 감상하세요.",
    title:"2차 팀프로젝트",
  },
  {
    url:"/",
    desc:"AI의 능력을 한껏 발휘해보았습니다.",
    title:"2차 팀프로젝트",
  },
  {
    url:"/",
    desc:"리액트를 이용한 웹페이지를 볼 수 있습니다.",
    title:"2차 팀프로젝트",
  },

]


const Foot = () => {
  return (
    <footer id='footer' role='contentinfo'>
        <div className="footer_inner">
            <h2 className='footer_text'>
                <div>GJ</div>
                <div>010-9308-9293</div>
            </h2>
            <article className='footer_info'>
                <article className='left'>
                    <div className='title'>
                        <a href="/">sign up</a>
                    </div>
                    <p className='desc'>
                        회원가입을 하시면 모든 동영상을 무료로 사용하실 수 있습니다.
                    </p>
                </article>
                <article className='right'>
                    <h3>social</h3>
                    <ul>
                        {footerText.map((foot,key)=>(
                            <li key={key}>
                                <a href={foot.url}>
                                    {foot.title}
                                </a>
                                <em>{foot.desc}</em>
                            </li>                        
                        ))}
                    </ul>
                </article>
            </article>
            <article className='footer_bottom'>
                &copy; 2026 GJ <br/>
                이 사이트는 샘플 웹사이트 입니다.
            </article>
        </div>
    </footer>
  )
}

export default Foot
