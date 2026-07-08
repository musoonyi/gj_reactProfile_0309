import React from 'react'

const contactText=[
  {
    url:"/",
    title: "KAKAO: olsthe@gamil.com",
  },
  {
    url:"olsthe@gamil.com",
    title: "mail: olsthe@gamil.com",
  },
]

const Contact = () => {
  return (
    <section id='contact'>
      <div className="contact_inner">
        <h2 className='contact_title'>
          contact
        </h2>
        <div className="contact_lines" aria-hidden="true">
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
        <article className='contact_text'>
          <div className="text">
            {contactText.map((contact,key)=>(
              <div key={key}>
                <a href={contact.url} rel='noopener noreferrer' target='_blink'>
                  {contact.title}
                </a>
              </div>
            ))}
          </div>
        </article>
        <div className="contact_lines bottom" aria-hidden="true">
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
      </div>
    </section>
  )
}

export default Contact
