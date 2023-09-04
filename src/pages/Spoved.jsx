import React from 'react'
import Header from '../components/Header'

const Spoved = () => {
  return (
    <>
      <Header />
      <header className=''>
        <div className='flex flex-col align-center mx-4 lg:mx-16 my-8'>
          <h1 className='text-title text-center text-[35px]'>Spoveď</h1>
          <div className='text-justify text-[22.5px] flex flex-col gap-2 mt-8'>
            <p>
              Vyznávanie našich priestupkov je základom v živote kresťana.
              Rozpoznanie našej hriešnosti je nevyhnutné v každodennom živote s
              Pánom. Podľa katechizmu je však sviatosť spovede nutnosťou na
              spasenie. Oproti tomu stojí Písmo, ktoré hovorí:
              <span className='italic'>
                {' '}
                Ak ústami vyznávaš Pána Ježiša a v srdci veríš, že Ho Boh
                vzkriesil z mŕtvych, budeš spasený; lebo srdcom veríme na
                spravodlivosť a ústami vyznávame na spasenie.
              </span>
              <span className='text-[15px]'> Rimanom 10:9-10 </span>Vyznávanie
              tu spomínané odkazuje na vieru, že Ježiš Kristus zomrel na
              golgotskom kríži za naše hriechy. Jeho smrťou zástupne za nás sme
              uchránení od trestu za naše hriechy.
            </p>
            <p>
              Úpenlivo vás pozývam, nebuďte otrokmi náboženského systému, ktorý
              drží silu odpustenia nad vami.
              <span className='italic'>
                {' '}
                Kristus nás oslobodil k slobode. Stojte teda a nedajte sa
                zapriahnuť zase do jarma otroctva!
              </span>
              <span className='text-[15px]'> Galatským 5:1</span>
            </p>
            <p>
              Je vyznávanie vašich hriechov kňazovi nevyhnutné? Môže vaše
              utrpenie, ktoré potom žiadate, akýmkoľvek spôsobom pridať k tomu,
              čo smrť Ježiša Krista dokonala na Kalvárii?
            </p>
            <h2 className='text-title text-center text-[30px] mt-4'>
              Spoveď kňazovi
            </h2>
            <p className='mt-8'>
              V rímskokatolíckej cirkvi sa vyžaduje po jednotlivcovi
              vyspovedanie sa zo smrteľných hriechov minimálne raz za rok. V
              prípade, že katolík spáchal smrteľný hriech, nie je mu povolené
              prísť k svätému prijímaniu až do doby, kým sú hriechy vyznané
              kňazovi. Podľa Katechizmu, spoveď je nevyhnutná na účel získania
              spásy. Tento proces sa môže stať ťaživým až do stavu duchovného
              otroctva. V Novom Zákone apoštoli vymenovali starších a diakonov,
              nie mnoho kňazov.
            </p>
            <p>
              Preto vás vyzývam, aby ste naozaj prichádzali k štúdiu Písma
              starostlivo. Je nevyhnutné na odpustenie hriechu vyznať svoje
              hriechy kňazovi? A má kňaz tú autoritu a moc odpustiť vám vaše
              hriechy?
            </p>
          </div>
        </div>
      </header>
      {/* spoved table lg */}
      <section className='hidden lg:flex justify-center mx-12 mt-8 gap-8 pb-8'>
        <div className='w-[50%] text-[22.5px] border flex flex-col items-center mx-4'>
          <h2 className='font-semibold text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <div className='ml-4 font-semibold flex flex-col gap-4 mt-8'>
            <p>
              § 1424 Volá sa sviatosť svätej spovede, lebo spoveď, vyznanie
              hriechov pred kňazom je podstatnou zložkou tejto sviatosti. V
              hlbokom zmysle je táto sviatosť aj „vyznaním“, čiže uznaním a
              chválou Božej svätosti a Božieho milosrdenstva voči hriešnemu
              človekovi. Volá sa sviatosť odpustenia, lebo kňazovým sviatostným
              rozhrešením Boh udeľuje kajúcnikovi „odpustenie a pokoj“.
            </p>

            <p>
              {' '}
              § 1493 Kto chce dosiahnuť zmierenie s Bohom a s Cirkvou, musí
              vyznať kňazovi všetky ťažké hriechy, z ktorých sa ešte nespovedal
              a na ktoré sa rozpamätá po starostlivom spytovaní svedomia.
            </p>
            <p>
              § 1457 Podľa prikázania Cirkvi „každý veriaci, keď dosiahol vek
              usudzovania, je povinný úprimne sa vyspovedať zo svojich ťažkých
              hriechov aspoň raz do roka“. Kto si je vedomý, že sa dopustil
              smrteľného hriechu, nesmie pristúpiť k svätému prijímaniu, ani
              keby pociťoval veľkú ľútosť, prv ako by prijal sviatostné
              rozhrešenie, ibaže by mal vážny dôvod pristúpiť k prijímaniu a
              nebolo by mu možné vyspovedať sa. Deti majú pristúpiť k sviatosti
              pokánia skôr, ako pristúpia k prvému svätému prijímaniu.
            </p>
            <p>
              § 1456 Vyznanie hriechov kňazovi tvorí podstatnú časť sviatosti
              pokánia. Treba, „aby kajúcnici pri spovedi vyznali všetky smrteľné
              hriechy, ktorých sú si vedomí po dôkladnom spytovaní svedomia.
            </p>

            <p>
              § 1497 Individuálne a úplné vyznanie ťažkých hriechov, po ktorom
              nasleduje rozhrešenie, je jediným riadnym prostriedkom zmierenia s
              Bohom a s Cirkvou.
            </p>
          </div>
        </div>
        <div className='w-[50%] text-[22.5px] border flex flex-col items-center pb-4 mx-4'>
          <h2 className='font-semibold  text-center mt-4'>Biblia hovorí:</h2>
          <div className='mx-4  text-justify font-semibold flex flex-col gap-4 mt-8'>
            <p>
              Matúš 23:8
              <span className='italic'>
                {' '}
                Lebo jeden je váš Majster a vy všetci ste bratia.
              </span>
            </p>
            <p>
              Prvý Timotejovi 2:5
              <span className='italic'>
                {' '}
                Jeden je totiž Boh, jeden aj Prostredník medzi Bohom a ľuďmi,
                človek Ježiš Kristus.{' '}
              </span>
            </p>
            <p>
              Marek 2:7
              <span className='italic'>
                {' '}
                Čo tento hovorí? Rúha sa! Ktože môže odpúšťať hriechy, ak len
                nie Jeden, Boh?
              </span>
            </p>

            <p>
              Rimanom 5:8
              <span className='italic'>
                {' '}
                Ale Boh dokazuje svoju lásku k nám tým, že Kristus umrel za nás,
                keď sme boli ešte hriešni. O čo skorej budeme teda zachránení od
                hnevu skrze Neho, keď sme teraz ospravedlnení Jeho krvou?! Lebo
                ak sme boli zmierení s Bohom smrťou Jeho Syna už vtedy, keď sme
                boli nepriatelia, o čo skorej budeme zachránení Jeho životom,
                keď sme zmierení?!
              </span>
            </p>
            <p>
              Prvý Jánov 1:9
              <span className='italic'>
                {' '}
                Ak vyznávame svoje hriechy, On je verný a spravodlivý, aby nám
                odpustil hriechy a očistil nás od všetkej neprávosti.
              </span>
            </p>
            <p>
              Žalmy 32:5
              <span className='italic'>
                {' '}
                Vtedy som Ti vyznal svoj hriech a nezastrel som svoju vinu.
                Riekol som: Vyznám Hospodinovi svoje priestupky! A Ty si
                odpustil vinu môjho hriechu.
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* spoved table mobile only */}
      <section className='flex flex-col text-[22.5px] lg:hidden mt-8 gap-8 pb-8'>
        <div className='flex flex-col items-center justify-center mx-4'>
          <h2 className='font-semibold  mt-4'>Katechizmus hovorí:</h2>
          <p className=' text-center mt-4'>
            § 1424 Volá sa sviatosť svätej spovede, lebo spoveď, vyznanie
            hriechov pred kňazom je podstatnou zložkou tejto sviatosti. V
            hlbokom zmysle je táto sviatosť aj „vyznaním“, čiže uznaním a
            chválou Božej svätosti a Božieho milosrdenstva voči hriešnemu
            človekovi. Volá sa sviatosť odpustenia, lebo kňazovým sviatostným
            rozhrešením Boh udeľuje kajúcnikovi „odpustenie a pokoj“.
          </p>
          <p className=' text-center mt-4'>
            § 1493 Kto chce dosiahnuť zmierenie s Bohom a s Cirkvou, musí vyznať
            kňazovi všetky ťažké hriechy, z ktorých sa ešte nespovedal a na
            ktoré sa rozpamätá po starostlivom spytovaní svedomia.
          </p>
          <h2 className='font-semibold  mt-4'>Biblia hovorí:</h2>
          <p className=' text-center mt-4'>
            Matúš 23:8
            <span className='italic'>
              {' '}
              Lebo jeden je váš Majster a vy všetci ste bratia.
            </span>
          </p>
          <p className=' text-center mt-4'>
            Prvý Timotejovi 2:5
            <span className='italic'>
              {' '}
              Jeden je totiž Boh, jeden aj Prostredník medzi Bohom a ľuďmi,
              človek Ježiš Kristus.{' '}
            </span>
          </p>

          <p className=' text-center mt-4'>
            Marek 2:7
            <span className='italic'>
              {' '}
              Čo tento hovorí? Rúha sa! Ktože môže odpúšťať hriechy, ak len nie
              Jeden, Boh?
            </span>
          </p>
          <h2 className='font-semibold  mt-4'>Katechizmus hovorí:</h2>
          <p className=' text-center mt-4'>
            § 1457 Podľa prikázania Cirkvi „každý veriaci, keď dosiahol vek
            usudzovania, je povinný úprimne sa vyspovedať zo svojich ťažkých
            hriechov aspoň raz do roka“. Kto si je vedomý, že sa dopustil
            smrteľného hriechu, nesmie pristúpiť k svätému prijímaniu, ani keby
            pociťoval veľkú ľútosť, prv ako by prijal sviatostné rozhrešenie,
            ibaže by mal vážny dôvod pristúpiť k prijímaniu a nebolo by mu možné
            vyspovedať sa. Deti majú pristúpiť k sviatosti pokánia skôr, ako
            pristúpia k prvému svätému prijímaniu.
          </p>
          <h2 className='font-semibold  mt-4'>Biblia hovorí:</h2>
          <p className=' text-center mt-4'>
            Rimanom 5:8
            <span className='italic'>
              {' '}
              Ale Boh dokazuje svoju lásku k nám tým, že Kristus umrel za nás,
              keď sme boli ešte hriešni. O čo skorej budeme teda zachránení od
              hnevu skrze Neho, keď sme teraz ospravedlnení Jeho krvou?! Lebo ak
              sme boli zmierení s Bohom smrťou Jeho Syna už vtedy, keď sme boli
              nepriatelia, o čo skorej budeme zachránení Jeho životom, keď sme
              zmierení?!
            </span>
          </p>
          <h2 className='font-semibold  mt-4'>Katechizmus hovorí:</h2>
          <p className=' text-center mt-4'>
            § 1456 Vyznanie hriechov kňazovi tvorí podstatnú časť sviatosti
            pokánia. Treba, „aby kajúcnici pri spovedi vyznali všetky smrteľné
            hriechy, ktorých sú si vedomí po dôkladnom spytovaní svedomia.
          </p>
          <p className=' text-center mt-4'>
            § 1497 Individuálne a úplné vyznanie ťažkých hriechov, po ktorom
            nasleduje rozhrešenie, je jediným riadnym prostriedkom zmierenia s
            Bohom a s Cirkvou.
          </p>
          <h2 className='font-semibold  mt-4'>Biblia hovorí:</h2>
          <p className=' text-center mt-4'>
            Prvý Jánov 1:9
            <span className='italic'>
              {' '}
              Ak vyznávame svoje hriechy, On je verný a spravodlivý, aby nám
              odpustil hriechy a očistil nás od všetkej neprávosti.
            </span>
          </p>
          <p className=' text-center mt-4'>
            Žalmy 32:5
            <span className='italic'>
              {' '}
              Vtedy som Ti vyznal svoj hriech a nezastrel som svoju vinu. Riekol
              som: Vyznám Hospodinovi svoje priestupky! A Ty si odpustil vinu
              môjho hriechu.
            </span>
          </p>
        </div>
      </section>
      {/* spoved lg and mob OK */}
      <section>
        <div className='text-justify text-[22.5px] flex flex-col gap-2  mx-8 lg:mx-16'>
          <p>
            Katolícky katechizmus vyžaduje od členov vyznávanie hriechov
            človeku, ale Biblia odhaľuje, že ten, kto sa narodil do Božej rodiny
            má priamy prístup k Božiemu trónu prijať odpustenie hriechov. Keď
            potom urobí hriech po spasení, vyznáva svoj hriech Bohu, aby zmieril
            svoj vzťah s Ním. Pravdivé odpustenia začínajú, keď osoba verí
            Pánovi Ježišovi Kristovi.
            <span className='italic'>
              Vedzte teda, mužovia, bratia, že sa vám skrze Neho zvestuje
              odpustenie hriechov a že od všetkých (hriechov), od ktorých vás
              ani zákon Mojžišov nemohol ospravedlniť, je každý veriaci
              ospravedlnený skrze Neho.
            </span>
            <span className='text-[15px]'> Skutky apoštolov 13:38-39 </span>
            Vierou v dokončené dielo Pána Ježiša (Jeho smrti za naše hriechy)
            veriaci je obdarený obomi, ako odpustením hriechov, tak aj 100%
            spoločenstvom s Bohom. Je to v Ježišovi Kristovi a Jeho živote,
            ktorý za nás obetoval.
            <span className='italic'>
              V Ňom máme vykúpenie, odpustenie hriechov.
            </span>{' '}
            <span className='text-[15px]'> Kolosenským 1:14 </span>
            Evanjelium je Božia moc na záchranu (spasenie) človeka.
          </p>
        </div>
      </section>
      {/* pokanie black lg and mob OK */}
      <section className='bg-black text-white'>
        <div className='text-justify text-[22.5px] flex flex-col gap-2 mt-16 mx-8 lg:mx-16'>
          <h2 className='text-title text-center text-[30px] my-16'>Pokánie</h2>
          <p>
            Milióny katolíkov po celom svete poctivo vykonávajú pokánie. Podľa
            katechizmu kňaz je ten, kto ukladá tieto úkony hriešnikovi v čase
            spovede. Tieto úkony pokánia sú tu preto, aby sa odčinili
            (odstránili) hriechy. Pokánie môže zahŕňať aj určité odriekanie
            modlitieb ako trest za vyspovedané hriechy. Tento celý proces je v
            plnom rozpore s tým, čo hovorí Biblia. Prečo Ježiš Kristus zomrel na
            kríži?
          </p>
        </div>
      </section>
      {/* pokanie black table lg */}
      <section className='hidden text-[22.5px] bg-black text-white lg:flex justify-center px-8 gap-8 pt-16 pb-16 px-4'>
        <div className='w-[50%] border flex flex-col items-center mx-4'>
          <h2 className='font-semibold  text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <div className='ml-4  flex flex-col gap-4 mt-8'>
            <p>
              § 1459 Musí teda urobiť niečo viac, aby odčinil svoje hriechy:
              musí primeraným spôsobom „zadosťučiniť“ za svoje hriechy alebo ich
              „odpykať“. Toto zadosťučinenie sa volá aj „pokánie“.
            </p>

            <p>
              {' '}
              § 1460 Môže to byť modlitba, milodar, skutky milosrdenstva, služba
              blížnemu, dobrovoľné odriekania.
            </p>
            <p>
              § 1491 Úkony kajúcnika sú: ľútosť, spoveď čiže vyznanie hriechov
              kňazovi a predsavzatie vykonať zadosť učinenie a skutky
              zadostúčinenia.
            </p>

            <p>
              {' '}
              § 1494 Spovedník ukladá kajúcnikovi vykonať isté úkony
              „zadostúčinenia“ alebo „pokánia“, aby tak napravil škodu, ktorú
              spôsobil hriechom, a znova si osvojil spôsoby správania, ktoré má
              mať Kristov učeník.
            </p>
            <p>
              {' '}
              § 980 Pokrstený sa teda môže zmieriť s Bohom a s Cirkvou
              sviatosťou pokánia: „Cirkevní Otcovia právom nazvali pokánie
              ,akýmsi namáhavým krstom‘, Táto sviatosť pokánia je však taká
              potrebná na spásu pre tých, čo po krste padli, ako je potrebný sám
              krst pre tých, čo ešte nie sú znovuzrodení.“
            </p>
          </div>
        </div>
        <div className='w-[50%] border flex flex-col items-center pb-4 mx-4'>
          <h2 className='font-semibold text-center  mt-4'>Biblia hovorí:</h2>
          <div className='mx-4  text-justify flex flex-col gap-4 mt-8'>
            <p>
              Skutky apoštolov 5:29-31
              <span className='italic'>
                {' '}
                Ale Peter a apoštolovia odpovedali: Boha treba viac poslúchať
                ako ľudí! Boh našich otcov vzkriesil Ježiša, ktorého ste vy
                zamordovali, keď ste Ho povesili na drevo. Toho Boh povýšil
                svojou pravicou za Vodcu a Spasiteľa, aby dal Izraelovi pokánie
                a odpustenie hriechov.
              </span>
            </p>
            <p>
              Rimanom 4:24-25
              <span className='italic'>
                {' '}
                Ale aj kvôli nám, ktorým sa má počítať ako veriacim v Toho,
                ktorý vzkriesil z mŕtvych Ježiša, nášho Pána, vydaného pre naše
                hriechy a vzkrieseného na naše ospravedlnenie.{' '}
              </span>
            </p>
            <p>
              Židom 1:3
              <span className='italic'>
                {' '}
                Posadil sa na pravici Velebnosti na výsostiach, keď (prv)
                spôsobil očistenie od hriechov.
              </span>
            </p>
            <p>
              Prvý Petrov 2:24
              <span className='italic'>
                {' '}
                Na vlastnom tele vyniesol naše hriechy na drevo, aby sme
                odumreli hriechom a žili spravodlivosti; Jeho krvavé rany vás
                uzdravili.
              </span>
            </p>
            <p>
              Rimanom 4:5
              <span className='italic'>
                {' '}
                Kto však nekoná skutky, ale verí v Toho, ktorý ospravedlňuje
                bezbožného, tomu sa jeho viera počíta za spravodlivosť.
              </span>
            </p>

            <p>
              Rimanom 5:9-10
              <span className='italic'>
                {' '}
                O čo skorej budeme teda zachránení od hnevu skrze Neho, keď sme
                teraz ospravedlnení Jeho krvou?! Lebo ak sme boli zmierení s
                Bohom smrťou Jeho Syna už vtedy, keď sme boli nepriatelia, o čo
                skorej budeme zachránení Jeho životom, keď sme zmierení?!
              </span>
            </p>
            <p>
              Efezským 2:8
              <span className='italic'>
                {' '}
                Lebo milosťou ste spasení skrze vieru. A to nie sami zo seba; je
                to dar Boží
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* pokanie black table mobile only */}
      <section className='bg-black text-[22.5px] text-white flex flex-col lg:hidden  gap-8 py-8'>
        <div className='flex flex-col items-center justify-center mx-4'>
          <h2 className='font-semibold text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <p className=' text-center mt-8'>
            § 1459 Musí teda urobiť niečo viac, aby odčinil svoje hriechy: musí
            primeraným spôsobom „zadosťučiniť“ za svoje hriechy alebo ich
            „odpykať“. Toto zadosťučinenie sa volá aj „pokánie“.
          </p>
          <p className=' text-center mt-8'>
            § 1460 Môže to byť modlitba, milodar, skutky milosrdenstva, služba
            blížnemu, dobrovoľné odriekania.
          </p>

          <h2 className='font-semibold  text-center  mt-4'>Biblia hovorí:</h2>
          <p className=' text-center mt-4'>
            Skutky apoštolov 5:29-31
            <span className='italic'>
              {' '}
              Ale Peter a apoštolovia odpovedali: Boha treba viac poslúchať ako
              ľudí! Boh našich otcov vzkriesil Ježiša, ktorého ste vy
              zamordovali, keď ste Ho povesili na drevo. Toho Boh povýšil svojou
              pravicou za Vodcu a Spasiteľa, aby dal Izraelovi pokánie a
              odpustenie hriechov.
            </span>
          </p>
          <p className=' text-center mt-4'>
            Rimanom 4:24-25
            <span className='italic'>
              {' '}
              Ale aj kvôli nám, ktorým sa má počítať ako veriacim v Toho, ktorý
              vzkriesil z mŕtvych Ježiša, nášho Pána, vydaného pre naše hriechy
              a vzkrieseného na naše ospravedlnenie.
            </span>
          </p>

          <h2 className='font-semibold text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <p className=' text-center mt-4'>
            § 1491 Úkony kajúcnika sú: ľútosť, spoveď čiže vyznanie hriechov
            kňazovi a predsavzatie vykonať zadosť učinenie a skutky
            zadostúčinenia.
          </p>
          <p className=' text-center mt-4'>
            § 1494 Spovedník ukladá kajúcnikovi vykonať isté úkony
            „zadostúčinenia“ alebo „pokánia“, aby tak napravil škodu, ktorú
            spôsobil hriechom, a znova si osvojil spôsoby správania, ktoré má
            mať Kristov učeník.
          </p>

          <h2 className='font-semibold  text-center  mt-4'>Biblia hovorí:</h2>
          <p className=' text-center mt-4'>
            Židom 1:3
            <span className='italic'>
              {' '}
              Posadil sa na pravici Velebnosti na výsostiach, keď (prv) spôsobil
              očistenie od hriechov.
            </span>
          </p>
          <p className=' text-center mt-4'>
            Prvý Petrov 2:24
            <span className='italic'>
              {' '}
              Na vlastnom tele vyniesol naše hriechy na drevo, aby sme odumreli
              hriechom a žili spravodlivosti; Jeho krvavé rany vás uzdravili.
            </span>
          </p>
          <p className=' text-center mt-4'>
            Rimanom 4:5
            <span className='italic'>
              {' '}
              Kto však nekoná skutky, ale verí v Toho, ktorý ospravedlňuje
              bezbožného, tomu sa jeho viera počíta za spravodlivosť.
            </span>
          </p>

          <h2 className='font-semibold text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <p className=' text-center mt-4'>
            § 980 Pokrstený sa teda môže zmieriť s Bohom a s Cirkvou sviatosťou
            pokánia: „Cirkevní Otcovia právom nazvali pokánie ,akýmsi namáhavým
            krstom‘, Táto sviatosť pokánia je však taká potrebná na spásu pre
            tých, čo po krste padli, ako je potrebný sám krst pre tých, čo ešte
            nie sú znovuzrodení.“
          </p>
          <h2 className='font-semibold text-center  mt-4'>Biblia hovorí:</h2>
          <p className=' text-center mt-4'>
            {' '}
            Rimanom 5:9-10
            <span className='italic'>
              {' '}
              O čo skorej budeme teda zachránení od hnevu skrze Neho, keď sme
              teraz ospravedlnení Jeho krvou?! Lebo ak sme boli zmierení s Bohom
              smrťou Jeho Syna už vtedy, keď sme boli nepriatelia, o čo skorej
              budeme zachránení Jeho životom, keď sme zmierení?!{' '}
            </span>
          </p>
          <p className=' text-center mt-4'>
            {' '}
            Efezským 2:8
            <span className='italic'>
              {' '}
              Lebo milosťou ste spasení skrze vieru. A to nie sami zo seba; je
              to dar Boží.{' '}
            </span>
          </p>
        </div>
      </section>

      {/* pokanie outro black lg and mob OK */}
      <section className='bg-black text-white'>
        <div className='text-justify text-[22.5px] flex flex-col gap-2 pb-8 mx-8 lg:mx-16'>
          <p>
            Z Písma svätého vidíme, že Ježiš Kristus zaplatil na Kalvárii plnú
            cenu za naše hriechy. Viera, že dobré skutky sú nevyhnutné pre
            obnovu "plného duchovného zdravia" a že spolu s pokáním sú
            vyžadované pre spasenie človeka, je popieraním Božieho Slova. Boh
            sľúbil odpustenie všetkým, kto plne verí v Ježiša Krista:
            <span className='italic'>
              {' '}
              A na ich hriechy a na ich neprávosti viacej nepomyslím. Kde sú
              však hriechy odpustené, niet už viac obetí za hriechy.{' '}
            </span>
            <span className='text-[15px]'>Židom 10:17-18 </span>
            Boh sľúbil, že nikdy nespomenie na hriechy pravých kresťanov a
            deklaruje, že tie hriechy sú odpustené raz a navždy skrze vieru v
            Krista, preto už nie je viac potreba obetí za hriechy. Keď to
            zhrnieme inak, nie je žiadneho skutku, ktorý môžeme urobiť, aby naše
            hriechy boli odpustené. Ježiš Kristus to urobil všetko!!
            <span className='italic'>
              {' '}
              Lebo tak myslíme, že človek ospravedlnený býva vierou bez skutkov
              zákona.{' '}
            </span>
            <span className='text-[15px]'> Rimanom 3:28</span>
          </p>
        </div>
      </section>
      {/* pokanie outro white lg and mob OK */}

      <section>
        <div className='text-justify text-[22.5px] flex flex-col gap-2 py-8 mx-8 lg:mx-16'>
          <p>
            Prosím uváž, čo Biblia hovorí, pokiaľ ide o úplne dostačujúcu ponuku
            Ježiša Krista na kríži, ktorou zaplatil všetok dlh hriechu. Podľa
            Písem{' '}
            <span className='italic'>
              {' '}
              všetci sme boli podobní nečistému a všetka naša spravodlivosť bola
              ako poškvrnené rúcho.{' '}
            </span>
            <span className='text-[15px]'>Izaiáš 64:5 </span>
            Nie je nič, čo by si mohol urobiť preto, aby si si zaslúžil Božiu
            priazeň, len veriť že On urobil všetko pre Teba.
            <span className='italic'>
              {' '}
              Ale Boh dokazuje svoju lásku k nám tým, že Kristus umrel za nás,
              keď sme boli ešte hriešni. zákona.{' '}
            </span>
            <span className='text-[15px]'> Rimanom 5:8</span>
          </p>
        </div>
      </section>

      <span className='italic'></span>
      <span className='italic'></span>
      <span className='text-[15px]'></span>
      <span className='text-[15px]'></span>
    </>
  )
}

export default Spoved
