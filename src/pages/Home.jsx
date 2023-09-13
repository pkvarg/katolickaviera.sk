import React, { useState } from 'react'
import Header from '../components/Header'
import CookieConsent from 'react-cookie-consent'
import axios from 'axios'

const Home = () => {
  const [cookieAccept, setCookieAccept] = useState(false)

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const increaseVisitorsCount = async () => {
    const { data } = await axios.put(
      // `https://pictusweb.online/api/visitors/katolicka/increase`,
      `http://localhost:2000/api/visitors/katolicka/increase`,
      config
    )
  }

  return (
    <>
      <main className='hero-bg relative'>
        <h1 className='text-title text-center text-[25px] lg:text-[30px] pt-2'>
          Nespoliehaj sa na cirkevné tradície! Riaď sa Božím Slovom!
        </h1>
        <div className='text-[#000000] flex flex-col items-center mt-[30%] lg:mt-[10%]'>
          <span className='italic text-center'>
            Ak vy zostanete v mojom slove, ste naozaj moji učeníci.
          </span>
          <span className='italic'>
            A poznáte pravdu a pravda vás vyslobodí.
          </span>

          <span className='text-[12.5px]'> Ján 8:31-32</span>
        </div>

        {/* <Header /> */}
        {/* hidden on mob */}
        {/* <div className='hidden lg:block absolute bottom-0 left-[50%]'>
          <h1 className='text-[#ffd700] text-[30px] text-center lg:text-[30px] -translate-x-[50%] leading-8'>
            Raz sa každý z nás bude zodpovedať pred Bohom sám za seba
          </h1>
          <h2 className='text-[#ffffff] text-[20px] text-center -translate-x-[50%]'>
            Kto hovorí:{' '}
            <span className='italic'>
              Poznám Ho, ale nezachováva Jeho prikázania, je klamár a niet v ňom
              pravdy.
            </span>
            <span className='text-[20px]'> Prvý Jánov 2:4</span>
          </h2>
        </div> */}
      </main>
      <section className='bg-black px-8 pt-8 pb-16'>
        {/* hidden on lg */}
        {/* <div className='lg:hidden text-center'>
          <h1 className='text-title  text-[30px] lg:text-[45px]  pt-8 '>
            Raz sa každý z nás bude zodpovedať pred Bohom sám za seba
          </h1>
          <h2 className='text-white text-[25px]'>
            Kto hovorí:{' '}
            <span className='italic'>
              Poznám Ho, ale nezachováva Jeho prikázania, je klamár a niet v ňom
              pravdy.
            </span>
            <span className='text-[15px]'> Prvý Jánov 2:4</span>
          </h2>
        </div> */}
        {/* INTRO */}
        {/* <h1 className='text-title text-center text-[25px] lg:text-[30px] pt-4'>
          Nespoliehaj sa na cirkevné tradície, ale sám poď do Božieho Slova!
        </h1> */}
        {/* <h2 className='text-white text-[22.5px] text-justify lg:text-left'>
          <span className='italic'>
            Ak vy zostanete v mojom slove, ste naozaj moji učeníci. A poznáte
            pravdu a pravda vás vyslobodí.
          </span>
          <span className='text-[15px]'> Ján 8:31-32</span>
        </h2> */}

        <h1 className='text-title text-center text-[25px] lg:text-[30px] pt-4'>
          Ako sa Božie Slovo pozerá na prihováranie veriaceho k svätcom?
        </h1>
        <h2 className='text-white text-[22.5px] text-justify lg:text-left'>
          <span className='italic'>
            Ak sa niekto obráti k duchom mŕtvych a k jasnovidcom a smilne sa im
            zapredá, ja sám obrátim svoju tvár proti tej osobe a odstránim ju z
            jej ľudu.
          </span>
          <span className='text-[15px]'> Levitikus 20:6 </span>
          Umožňuje to apokryfná kniha Makabejských, ktorá je v rozpore s
          Mojžišovým zákonom. (viac v sekcii <a href='/biblia'>Biblia </a> )
        </h2>

        <h1 className='text-title text-center text-[25px] lg:text-[30px] pt-8'>
          Kam zaraďuje Božie Slovo modlitby veriaceho k niekomu inému ako k
          Bohu?
        </h1>
        <h2 className='text-white text-[22.5px] text-justify lg:text-left'>
          <span className='italic'>
            Ale čo (pohania) obetujú, to obetujú démonom, a nie Bohu. A ja
            nechcem, aby ste boli spoločníkmi démonov. Nemôžete piť z kalicha
            Pánovho aj z kalicha démonov: nemôžete mať podiel pri stole Pánovom
            aj pri stole démonov. Či chceme azda rozhnevať Pána?
          </span>
          <span className='text-[15px]'> Prvý Korinťanom 10:14</span>
          <span className='italic'>
            {' '}
            Preto, moji milovaní, utekajte pred modloslužobníctvom!
          </span>
          <span className='text-[15px]'> Prvý Korinťanom 10:14</span>
        </h2>

        <h1 className='text-title text-center text-[25px] lg:text-[30px] pt-8'>
          Dokazuje Božie Slovo Máriu ako bezhriešnu?
        </h1>
        <h2 className='text-white text-[22.5px] text-justify lg:text-left'>
          <span className='italic'>
            Preto ako skrze jedného človeka (Adama) hriech prišiel na svet a
            skrze hriech smrť - tak smrť prišla na všetkých ľudí, pretože všetci
            zhrešili.
          </span>
          <span className='text-[15px]'> Rimanom 5:12</span>
        </h2>

        <h1 className='text-title text-center text-[25px] lg:text-[30px] pt-8'>
          Hovorí Božie Slovo, že Mária ostala pannou celý svoj život?
        </h1>
        <h2 className='text-white text-[22.5px] text-justify lg:text-left'>
          <span className='italic'>
            Keď ešte hovoril k zástupom, ajhľa, Jeho matka a bratia stáli vonku
            a žiadali si hovoriť s Ním.
          </span>
          <span className='text-[15px]'> Matúš 12:46</span>
        </h2>

        <h1 className='text-title text-center text-[25px]  lg:text-[30px] pt-8'>
          Bola Mária nanebovzatá ak to Božie Slovo neuvádza?
        </h1>
        <h2 className='text-white text-[22.5px] text-justify lg:text-left'>
          <span className='italic'>
            Každá reč Božia je prečistená. Nepridávaj nič k Jeho slovám, aby ťa
            nestrestal a neoznačil za klamára.
          </span>
          <span className='text-[15px]'> Príslovia 30:5-6</span>
          <span className='italic'>
            {' '}
            Nefalšujeme slovo Božie, ale zjavujeme pravdu, a tak sa odporúčame
            každému ľudskému svedomiu pred Bohom.{' '}
          </span>
          <span className='text-[15px]'> Druhý Korinťanom 4:2</span>
        </h2>
      </section>

      <section className='bg-white text-black  px-8 pt-8'>
        <h1 className='text-title text-center text-[25px] lg:text-[30px] pt-8'>
          Učí Božie Slovo orodovať u Márii?
        </h1>
        <h2 className='text-[25px] text-justify lg:text-left'>
          <span className='italic'>
            Pánovi, svojmu Bohu, budeš sa klaňať a len Jemu budeš slúžiť.
          </span>
          <span className='text-[15px]'> Lukáš 4:8</span>
          <span className='italic'>
            {' '}
            Milovať budeš Pána, svojho Boha, celým srdcom, celou dušou a celou
            mysľou.
          </span>
          <span className='text-[15px]'> Matúš 22:37</span>
          <span className='italic'>
            {' '}
            Jeden aj Prostredník medzi Bohom a ľuďmi, človek Ježiš Kristus.
          </span>
          <span className='text-[15px]'> Prvý Timotejovi 2:5</span>
        </h2>

        <h1 className='text-title text-center text-[25px]  lg:text-[30px] pt-8'>
          Povoľuje Božie Slovo čo i len samotnú výrobu sôch a obrazov?
        </h1>
        <h2 className=' text-[22.5px] text-justify lg:text-left'>
          <span className='italic'>
            Neurobíš si vyrezávanú modlu ani podobu ničoho, čo je na nebi hore,
            čo je na zemi dolu, alebo čo je vo vode pod zemou! Nebudeš sa im
            klaňať ani im slúžiť, lebo ja som Hospodin, tvoj Boh, Boh horliaci.
          </span>
          <span className='text-[15px]'> Exodus 20:4-5</span>
          <span className='italic'> Nebudeš mať iných bohov okrem mňa!</span>
          <span className='text-[15px]'> Exodus 20:3</span>
          <span className='italic'> Jeden je totiž Boh.</span>
          <span className='text-[15px]'> Prvý Timotejovi 2:5</span>
        </h2>

        <h1 className='text-title text-center text-[25px] lg:text-[30px] pt-8'>
          Je potrebné niečo pridávať k Božiemu Slovu?
        </h1>
        <h2 className='text-[22.5px] text-justify lg:text-left'>
          <span className='italic'>
            I riekol Pán v noci vo videní Pavlovi: Neboj sa, len hovor a nemlč.
            I zostal tam rok a šesť mesiacov a vyučoval medzi nimi slovu
            Božiemu.
          </span>
          <span className='text-[15px]'> Skutky apoštolov 18:9,11</span>
          <span className='italic'>
            {' '}
            A keď otvoril piatu pečať, videl som pod oltárom duše zamordovaných
            pre slovo Božie a pre svedectvo, ktoré vydávali.
          </span>
          <span className='text-[15px]'> Zjavenie Jána 6:9</span>
        </h2>

        <h1 className='text-title text-center text-[25px] lg:text-[30px] pt-8'>
          Čo hovorí Božie Slovo o cirkevných tradíciách, ktoré sa od neho
          odchyľujú?
        </h1>
        <h2 className='text-black text-[22.5px] text-justify lg:text-left'>
          <span className='italic'>
            Darmo ma však uctievajú, keď ľudským príkazom učia ako učeniam
            (Božím). Opustili ste prikázanie Božie a pridŕžate sa podania
            ľudského. Potom im povedal: Pekne-krásne rušíte prikázanie Božie,
            aby ste zachovávali svoje podanie.
          </span>
          <span className='text-[15px]'> Marek 7:7-9</span>
          <span className='italic'>
            {' '}
            Ak vy zostanete v mojom slove, ste naozaj moji učeníci. A poznáte
            pravdu a pravda vás vyslobodí.
          </span>
          <span className='text-[15px]'> Ján 8:31-32 </span>
        </h2>

        <h1 className='text-title text-center text-[25px] lg:text-[30px] pt-8'>
          Raz sa každý z nás bude zodpovedať pred Bohom sám za seba
        </h1>
        <h2 className='text-black text-[22.5px] text-justify lg:text-left'>
          <span className='italic'>
            Kto hovorí: Poznám Ho, ale nezachováva Jeho prikázania, je klamár a
            niet v ňom pravdy.
          </span>
          <span className='text-[15px]'> Prvý Jánov 2:4</span>
        </h2>

        <h2 className='text-[22.5px] py-10 text-justify lg:text-left'>
          Prajem ti, aby si spoznal pravdu, bol oslobodený od tradícií a tak si
          sa raz mohol čistý postaviť pred Boha ako Jeho verný služobník.
        </h2>
      </section>
      {/* <CookieConsent
        location='bottom'
        style={{
          background: '#3b2f26',
          color: '#d39f69',
          fontSize: '22.5px',
          textAlign: 'justify',
        }}
        buttonStyle={{
          background: '#222320',
          color: '#d39f69',
          fontSize: '22.5px',
        }}
        buttonText='Pokračovať'
        expires={365}
        onAccept={() => {
          setCookieAccept(true)
          increaseVisitorsCount()
        }}
      >
        Táto stránka nezhromažďuje žiadne údaje
      </CookieConsent> */}
    </>
  )
}

export default Home
