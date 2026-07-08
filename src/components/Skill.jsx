import React from 'react'



const skillText = [
  {
    num: "1.",
    title: "꿈을 설계하고 디자인하다.",
    desc: "나는 1차 팀플을 마치고 휴식중이다. 비록 바로 2차 개인 포폴준비가 바로 시작되지만, 무언가를 마치고 시작하는 것은 매우 설레는 일이다.",
  },
  {
    num: "2.",
    title: "열심히 할수록 기회는 따른다.",
    desc: "나는 1차 팀플을 마치고 휴식중이다. 비록 바로 2차 개인 포폴준비가 바로 시작되지만, 무언가를 마치고 시작하는 것은 매우 설레는 일이다.",
  },
  {
    num: "3.",
    title: "나에게 정직하다.",
    desc: "나는 1차 팀플을 마치고 휴식중이다. 비록 바로 2차 개인 포폴준비가 바로 시작되지만, 무언가를 마치고 시작하는 것은 매우 설레는 일이다.",
  },
]


const Skill = () => {
  return (
    <section id='skill'>
      <div className="skill_inner">
        <h2 className='skill_title'>
          Challeng <em>나의 도전</em>
        </h2>
        <article className='skill_desc'>
          {
            skillText.map((skill,key)=>(
              <div key={key}>
                <span>{key+1}.</span>
                <h3>{skill.title}</h3>
                <p>{skill.desc}</p>
              </div>
            ))
          }
        </article>
      </div>
    </section>
  )
}

export default Skill
