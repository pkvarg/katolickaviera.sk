import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black'>
      <section className='mx-4 pt-8 pb-4'>
        <ul className='text-title text-[25px] flex flex-col lg:flex-row justify-center items-center gap-4'>
          <li>
            <a href='/omsa'>Omša</a>
          </li>
          <li>
            <a href='/spoved'>Spoveď</a>
          </li>
          <li>
            <a href='/manzelstvo'>Manželstvo</a>
          </li>
          <li>
            <a href='/papezsky-urad'>Pápežský úrad</a>
          </li>
          <li>
            <a href='/knazsky-urad'>Kňazský úrad</a>
          </li>
          <li>
            <a href='/klastorny-zivot'>Kláštorný život</a>
          </li>
          <li>
            <a href='/maria'>Mária</a>
          </li>
          <li>
            <a href='/hriech'>Hriech</a>
          </li>
          <li>
            <a href='/spasenie'>Spasenie</a>
          </li>
          <li>
            <a href='/biblia'>Biblia</a>
          </li>
        </ul>
      </section>
      <section className='mx-4 text-white text-[20px] pb-8'>
        <div className='flex flex-row gap-2 justify-center'>
          {/* <p>&copy; {Date().substring(11, 15)}</p> */}
          {/* <a href='https://cestazivota.sk' target='_blank'>
            cestazivota.sk
          </a> */}
        </div>
        <div className='flex flex-row gap-2 items-center justify-center'>
          <a href='https://cestazivota.sk' target='_blank'>
            cestazivota.sk
          </a>
          <p>|</p>
          <a href='https://sk.bereanbeacon.org' target='_blank'>
            sk.bereanbeacon.org
          </a>
          {/* <a href='https://svedkovia.sk' target='_blank'>
            svedkovia.sk
          </a> */}
        </div>
        <div className='flex justify-center mt-2'>
          <a href='https://pictusweb.sk'>
            &#60;&#47;&#62; PICTUSWEB development
          </a>
        </div>
      </section>
    </footer>
  )
}

export default Footer
