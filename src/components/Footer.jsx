import React from 'react'

const Footer = ({ language }) => {
  return (
    <footer className='bg-black'>
      {language === 'slovak' && (
        <section className='mx-4 pt-8'>
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
      )}
      <section className='mx-4 text-white text-[20px] pt-4 pb-8'>
        <div className='flex flex-row gap-2 justify-center'>
          {/* <p>&copy; {Date().substring(11, 15)}</p> */}
          {/* <a href='https://cestazivota.sk' target='_blank'>
            cestazivota.sk
          </a> */}
        </div>
        <div className='flex flex-col lg:flex-row gap-2 items-center justify-center'>
          <a href='https://cestazivota.sk' target='_blank'>
            cestazivota.sk
          </a>
          {/* <p className='hidden lg:flex'>|</p>
          {language === 'slovak' && (
            <a href='https://sk.bereanbeacon.org' target='_blank'>
              sk.bereanbeacon.org
            </a>
          )}
          {language === 'english' && (
            <a href='https://bereanbeacon.org' target='_blank'>
              bereanbeacon.org
            </a>
          )}
          {language === 'czech' && (
            <a href='https://sk.bereanbeacon.org' target='_blank'>
              bereanbeacon.org
            </a>
          )} */}
        </div>
        <div className='flex justify-center text-[#484848] mt-2'>
          <a href='https://pictusweb.sk'>
            &#60;&#47;&#62; PICTUSWEB development
          </a>
        </div>
      </section>
    </footer>
  )
}

export default Footer
