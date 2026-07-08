import React from 'react'

const footerText=[
  {
    url:"https://www.youtube.com/",
    sns:"YOUTUBE",
  },
  {
    url:"https://github.com/",
    sns:"GITHUB",
  },
  {
    url:"https://www.tistory.com/",
    sns:"TISTORY",
  },
  {
    url:"https://gsap.com/",
    sns:"GSAP",
  },
  {
    url:"https://ko.vite.dev/guide/",
    sns:"VITE",
  },
  {
    url:"https://www.youtube.com/",
    sns:"REACT",
  },
  {
    url:"https://ko.vuejs.org/",
    sns:"VUE",
  },
  {
    url:"https://nextjs.org/",
    sns:"NEXT",
  },
]

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="footer_inner">
        <div className="footer_title">GJ <em>GJ</em></div>
        <div className="footer_sign">
          <div className="signUp">sign up
            <a href="/" className='more'>→</a>
          </div>
          <div className="sign_text">
            회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.
          </div>
        </div>
        <div className='footer_sns'>
          <div className="social">social</div>
          {footerText.map((foot,key)=>(
          <div className="sns" key={key}>
            <a href={foot.url}>
              {foot.sns}
            </a>
          </div>
          ))}
        </div>
        <div className="footer_copy">
          <span>ⓒ2024 GJ <em>비상업용이며 포트폴리오로 제작하였습니다.</em></span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
