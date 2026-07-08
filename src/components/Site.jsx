import React from 'react'

const siteText=[
  {text:["Make","Site compliant with","mbc akademy"],
    title: "2차 개인 포트폴리오",
    code: "https://www.naver.com/",
    view: "https://www.daum.net/",
    info: ["site coding","제작기간 : 3일","사용 프로그램 :  html, CSS3, javascriot, react 등.."],
  },
  {text:["Make2","Site compliant with2","mbc akademy2"],
    title: "2차 팀 프로젝트",
    code: "/",
    view: "/",
    info: ["site coding","제작기간 : 5일","사용 프로그램 :  html, CSS3, javascriot, react 등.."],
  },
  {text:["Make3","Site compliant with3","mbc akademy3"],
    title: "1차 팀 프로젝트",
    code: "/",
    view: "/",
    info: ["site coding","제작기간 : 5일","사용 프로그램 :  html, CSS3, javascriot, react 등.."],
  },
  {text:["Make4","Site compliant with4","mbc akademy4"],
    title: "1차 개인 포트폴리오",
    code: "https://musoonyi.github.io/port_1st/",
    view: "/",
    info: ["site coding","제작기간 : 5일","사용 프로그램 :  html, CSS3, javascriot, react 등.."],
  },
  
]


const Site = () => {
  return (
    <section id='site'>
      <div className="site_inner">
        <h2 className='site_title'>
          Site conding <em>나의 작품들</em>
        </h2>
        <section className="site_wrap">
          {siteText.map((site,key)=>(
            <article className={`site_item s${key+1}`} key={key}>
            <span className='num'>{key+1}.</span>
            <article className='text'>
              <div>{site.text[0]}</div>
              <div>{site.text[1]}</div>
              <div>{site.text[2]}</div>
            </article>
            <h3 className='title'>{site.title}</h3>
            <article className='btn'>
              <a href={site.code} target='blink'>code</a>
              <a href={site.view} target='blink'>view</a>
            </article>
            <article className='info'>
              <span>{site.info[0]}</span>
              <span>{site.info[1]}</span>
              <span>{site.info[2]}</span>
            </article>
          </article>
          ))}
        </section>
      </div>
    </section>
  )
}

export default Site
