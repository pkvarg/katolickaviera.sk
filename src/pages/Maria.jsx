import React from 'react'
import HeaderTransparent from '../components/HeaderTransparent'

const Maria = () => {
  return (
    <>
      <HeaderTransparent />
      <main>
        <div className='maria-pic flex h-[550px] lg:h-[1250px] -mt-[125px] lg:-mt-[125px]'></div>

        <div className='flex flex-col align-center mx-4 lg:mx-16 -mt-[100px] lg:-mt-[800px]'>
          <h1 className='text-title2 text-center text-[35px] mb-8'>Mária</h1>
          <div className='flex flex-row gap-8 align-center'>
            <div className='text-justify text-[20px] flex flex-col gap-2'>
              <p>
                Katolícka cirkev konštruuje paralelu Márie k Ježišovi Kristovi.
                Učí, že práve tak, ako Kristus bol bez hriechu, tak to bolo aj s
                Máriou. Učí tiež, že aj keď milosť prichádza od Krista, Mária je
                matkou milosti. Práve tak, ako Pán zachraňuje svoj ľud od
                hriechov, tiež sa vyučuje, že aj Mária môže spôsobiť túto
                záchranu. Hoci Biblia zreteľne uvádza, že je len jediný
                prostredník medzi Bohom a človekom, prekvapivo katechizmus
                katolíckej cirkvi vyučuje, že Mária je prostredníkom. Práve tak,
                ako Ježiš Kristus vstúpil do neba a je Kráľom kráľov, cirkev
                učí, že Mária tiež vstúpila na nebesia telom i dušou a je
                Kráľovnou nebies. Katolícka cirkev ide ešte ďalej v tvrdení, že
                Mária bola počatá bez poškvrnenia dedičného hriechu práve tak,
                ako bol počatý Ježiš Kristus. V tejto časti uvidíte, ako tu
                katechizmus predstavuje paralelnú stratégiu a ako jasne toto
                Biblia vyvráti a rezervuje tieto úlohy len pre Ježiša Krista
                samotného.
              </p>

              {/* <div className='maria-pic flex lg:hidden w-[100%] h-[30vh] my-4'></div> */}

              <p>
                Všetko, čo je zdokumentované v katechizme katolíckej cirkvi
                týkajúce sa Márie je úplne v rozpore k Svätému Písmu a výsade
                jediného Spasiteľa, Pána Ježiša Krista. Dávanie vašej dôvery
                Márii pre svoje spasenie je tá najnebezpečnejšia a preukázateľná
                bariéra k večnému životu. Obráťte sa preto k Pánovi Ježišovi
                Kristovi samotnou vierou k spaseniu, založenou na Jeho smrti a
                zmŕtvychvstania. On sám dáva vo všetkých veciach usvedčenie
                Svojho Svätého Ducha. Verte len Jemu samotnému.
              </p>
            </div>
          </div>
        </div>
      </main>
      {/* Mária */}
      <section className='flex flex-col text-[20px] justify-center mx-4 lg:mx-16  mt-8 gap-8 pb-8'>
        <h1 className='text-title2 text-center text-[35px]'>
          Je Mária celá svätá?
        </h1>
        <div className='text-justify flex flex-col gap-2 mt-8'>
          <p>
            Biblia zreteľne učí, že Boh sám je nekonečný, večný a nemenný vo
            svojom bytí. Boh je múdrosť, sila, svätosť, spravodlivosť, dobrota a
            pravda.
            <span className='font-bold'> Je celý Svätý. </span>
            Jeho Svätosť je vlastnosťou, ktorá zahŕňa všetky ostatné - Jeho
            spravodlivosť je Svätá, Jeho pravda je Svätá a Jeho spravodlivosť je
            Svätá. On je každou svojou vlastnosťou a celkovou vlastnosťou
            svätosti oddelený od každého bytia. Napriek tomu katechizmus
            katolíckej cirkvi adresuje Márii vlastnosti, ktoré náležia len Bohu,
            ako sú „Matka milosrdenstva“, ktorá
            <span className='font-bold'> je celá svätá. </span>
          </p>
        </div>
      </section>
      {/* Maria table lg */}
      <section className='hidden text-[18px] lg:flex justify-center mx-12 mt-8 gap-8 pb-8'>
        <div className='w-[50%] border flex flex-col items-center mx-4 pb-4'>
          <h2 className='font-semibold text-center mt-4'>
            Katechizmus hovorí:
          </h2>
          <div className='mx-4 text-justify font-semibold flex flex-col gap-4 mt-8'>
            <p>
              § 2677 Keď žiadame Pannu Máriu, aby za nás prosila, uznávame, že
              sme úbohí hriešnici a obraciame sa na „Matku milosrdenstva“, na
              tú, ktorá <span className='font-bold'> je celá svätá. </span>
            </p>
            <p>
              § 2030 Od Cirkvi sa (veriaci) učí príkladu svätosti, ktorej vzor a
              prameň spoznáva v
              <span className='font-bold'> presvätej Panne Márii. </span>
            </p>
          </div>
        </div>
        <div className='w-[50%] border flex flex-col items-center pb-4 mx-4'>
          <h2 className='font-semibold text-center mt-4'>Biblia hovorí:</h2>
          <div className='mx-4 text-justify font-semibold flex flex-col gap-4 mt-8'>
            <p>
              Zjavenie Jána 15:4
              <span className='italic'>
                {' '}
                Kto by sa nebál, Pane, a neoslavoval Tvoje meno? Veď
                <span className='font-bold'> Ty jediný si svätý, </span>a všetky
                národy prídu a budú sa Ti klaňať, že sa zjavili Tvoje
                spravodlivé súdy!
              </span>
            </p>
            <p>
              Izaiáš 6:3
              <span className='italic'>
                {' '}
                Svätý, svätý, svätý je Hospodin mocností, plná je všetka zem
                Jeho slávy.{' '}
              </span>
            </p>
            <p>
              Prvá Samuelova 2:2
              <span className='italic'>
                {' '}
                <span className='font-bold'>
                  {' '}
                  Nikto nie je svätý ako Hospodin,{' '}
                </span>
                lebo niet nikoho okrem Teba, a nik nie je skalou ako náš Boh.
              </span>
            </p>
            <p>
              Izaiáš 42:8
              <span className='italic'>
                {' '}
                Ja som Hospodin, to je moje meno; svoju
                <span className='font-bold'>
                  {' '}
                  slávu inému nedám, ani svoju chválu modlám.{' '}
                </span>
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* Maria table mobile only */}
      <section className='flex flex-col lg:hidden mt-8 gap-8 pb-8'>
        <div className='flex flex-col items-center justify-center mx-4'>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className=' text-center mt-4'>
            § 2677 Keď žiadame Pannu Máriu, aby za nás prosila, uznávame, že sme
            úbohí hriešnici a obraciame sa na „Matku milosrdenstva“, na tú,
            ktorá <span className='font-bold'> je celá svätá. </span>
          </p>

          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className=' text-center mt-4'>
            Zjavenie Jána 15:4
            <span className='italic'>
              {' '}
              Kto by sa nebál, Pane, a neoslavoval Tvoje meno? Veď
              <span className='font-bold'> Ty jediný si svätý, </span>a všetky
              národy prídu a budú sa Ti klaňať, že sa zjavili Tvoje spravodlivé
              súdy!
            </span>
          </p>
          <p className=' text-center mt-4'>
            Izaiáš 6:3
            <span className='italic'>
              {' '}
              Svätý, svätý, svätý je Hospodin mocností, plná je všetka zem Jeho
              slávy.{' '}
            </span>
          </p>

          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>

          <p className='text-center mt-4'>
            § 2030 Od Cirkvi sa (veriaci) učí príkladu svätosti, ktorej vzor a
            prameň spoznáva v
            <span className='font-bold'> presvätej Panne Márii. </span>
          </p>

          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>

          <p className=' text-center mt-4'>
            Prvá Samuelova 2:2
            <span className='italic'>
              {' '}
              <span className='font-bold'>
                {' '}
                Nikto nie je svätý ako Hospodin,{' '}
              </span>
              lebo niet nikoho okrem Teba, a nik nie je skalou ako náš Boh.
            </span>
          </p>
          <p className=' text-center mt-4'>
            Izaiáš 42:8
            <span className='italic'>
              {' '}
              Ja som Hospodin, to je moje meno; svoju
              <span className='font-bold'>
                {' '}
                slávu inému nedám, ani svoju chválu modlám.{' '}
              </span>
            </span>
          </p>
        </div>
      </section>
      {/* Maria lg and mob OK */}
      <section>
        <div className='text-justify text-[20px] flex flex-col gap-2 mx-4 lg:mx-16'>
          <p>
            Katolícke vyučovanie, že Mária je "celá svätá" je veľmi závažné
            tvrdenie. Božie Slovo vyhlasuje:
            <span className='italic'>
              {' '}
              Svätý, svätý, svätý je Hospodin mocností, plná je všetka zem Jeho
              slávy.
            </span>
            <span className='text-[15px]'> Izaiáš 6:3. </span>
            Preto nazývať Máriu ako celú svätú a ako zdroj svätosti je rúhanie a
            úplne proti Písmu. Toto neúctivé vyučovanie je pokusom o krádež
            základnej božskej slávy. Dôvod, prečo potrebujeme byť spasení pred
            Bohom je ten, že On je Svätý.
          </p>
          <p>
            Ako u mnohých ďalších katolíkov, dnes to môže byť prvýkrát, čo ste
            bol konfrontovaný s touto pravdou. Je úplne zrejmé, že
            rímskokatolícka cirkev robí z Márie Boha. Avšak teraz ste videli
            celkom jasne oficiálne učenie rímskej cirkvi vo svetle biblickej
            pravdy. Naozaj môžete byť verní katolíckemu vyučovaniu alebo veríte
            Božiemu Slovu? Biblia a katolícke vyučovanie sú v diametrálnej
            opozícii voči sebe:
            <span className='italic'>
              {' '}
              Ak sa vám nepáči slúžiť Hospodinovi, vyvoľte si dnes, komu chcete
              slúžiť.
            </span>
            <span className='text-[15px]'> Jozue 24:15</span>
          </p>
        </div>
      </section>
      {/*Je Mária prostredníkom?
 black lg and mob OK */}
      <section className='bg-black text-white'>
        <div className='text-justify text-[20px] flex flex-col gap-2 mt-16 mx-4 lg:mx-16'>
          <h2 className='text-title text-center text-[30px] my-16'>
            Je Mária prostredníkom?
          </h2>
          <p>
            Katolícky katechizmus predstavuje Máriu ako prostrednicu a ako
            ekvivalent k Ježišovi Kristovi ako tomu, ktorý zmieri Boha a
            človeka. Inak povedané prostredník medzi Bohom a človekom je ten,
            ktorý prosí a intervenuje v našom záujme. Podľa Písma Svätého, naše
            prosby v modlitbách k Bohu sú prijateľné iba skrze jediného
            prostredníka Ježiša Krista. Tieto záležitosti sprostredkovania medzi
            Bohom a človekom sa musia brať so všetkou vážnosťou, pretože je len
            jediný, kto je zároveň Bohom i človekom, a tým je Ježiš Kristus.
            Jedine tento prostredník môže priviesť veriaceho do vzťahu s Bohom,
            ktorý jediný je Svätý. Bohu sme prijateľní iba vtedy, ak ideme k
            Nemu skrze samotného Ježiša Krista.
          </p>
        </div>
      </section>
      {/* Je Mária prostredníkom?
 black table lg */}
      <section className='hidden text-[18px] bg-black text-white lg:flex justify-center px-12 gap-8 pt-16 pb-16'>
        <div className='w-[50%] border flex flex-col items-center mx-4 pb-4'>
          <h2 className='font-semibold text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <div className='mx-4 text-justify flex flex-col gap-4 mt-8'>
            <p>
              § 969 Preto sa Preblahoslavená Panna vzýva v Cirkvi pod titulmi
              Orodovnica, Ochrankyňa, Pomocnica, Prostrednica.
            </p>
            <p>
              § 2674 Ježiš, jediný Prostredník, je cesta našej modlitby; Mária,
              jeho a naša Matka, ho necháva úplne presvitať: ona „ukazuje cestu“
              a podľa tradičnej východnej i západnej ikonografie je jej
              „znakom“.
            </p>
          </div>
        </div>
        <div className='w-[50%] border flex flex-col items-center pb-4 mx-4'>
          <h2 className='font-semibold text-center  mt-4'>Biblia hovorí:</h2>
          <div className='mx-4  text-justify flex flex-col gap-4 mt-8'>
            <p>
              Prvý Timotejovi 2:5
              <span className='italic'>
                {' '}
                Jeden je totiž Boh,
                <span className='font-bold'> jeden aj Prostredník </span>
                medzi Bohom a ľuďmi, človek Ježiš Kristus.
              </span>
            </p>
            <p>
              Prvý Jánov 2:1
              <span className='italic'>
                {' '}
                Ale ak niekto zhreší, máme obhajcu u Otca, Ježiša Krista,
                spravodlivého.
              </span>
            </p>
            <p>
              Židom 13:6
              <span className='italic'>
                {' '}
                Pán je mojím pomocníkom, nebudem sa báť; veď čo mi urobí človek?
              </span>
            </p>
            <p>
              Ján 14:6 Ja som cesta i pravda i život. Nik neprichádza k Otcovi,
              ak len nie skrze mňa.
              <span className='italic'>
                {' '}
                <span className='font-bold'> Ja som cesta </span>i pravda i
                život. Nik neprichádza k Otcovi,
                <span className='font-bold'> ak len nie skrze mňa. </span>
              </span>
            </p>
          </div>
        </div>
      </section>
      {/*  Maria table mobile only */}
      <section className='flex flex-col bg-black text-white lg:hidden pt-8 gap-8 pb-8'>
        <div className='flex flex-col items-center justify-center mx-4'>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className='text-center mt-4'>
            § 969 Preto sa Preblahoslavená Panna vzýva v Cirkvi pod titulmi
            Orodovnica, Ochrankyňa, Pomocnica, Prostrednica.
          </p>

          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Prvý Timotejovi 2:5
            <span className='italic'>
              {' '}
              Jeden je totiž Boh,
              <span className='font-bold'> jeden aj Prostredník </span>
              medzi Bohom a ľuďmi, človek Ježiš Kristus.
            </span>
          </p>
          <p className='text-center mt-4'>
            Prvý Jánov 2:1
            <span className='italic'>
              {' '}
              Ale ak niekto zhreší, máme obhajcu u Otca, Ježiša Krista,
              spravodlivého.
            </span>
          </p>
          <p className='text-center mt-4'>
            Židom 13:6
            <span className='italic'>
              {' '}
              Pán je mojím pomocníkom, nebudem sa báť; veď čo mi urobí človek?
            </span>
          </p>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className='text-center mt-4'>
            § 2674 Ježiš, jediný Prostredník, je cesta našej modlitby; Mária,
            jeho a naša Matka, ho necháva úplne presvitať: ona „ukazuje cestu“ a
            podľa tradičnej východnej i západnej ikonografie je jej „znakom“.
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p>
            Ján 14:6 Ja som cesta i pravda i život. Nik neprichádza k Otcovi, ak
            len nie skrze mňa.
            <span className='italic'>
              {' '}
              <span className='font-bold'> Ja som cesta </span>i pravda i život.
              Nik neprichádza k Otcovi,
              <span className='font-bold'> ak len nie skrze mňa. </span>
            </span>
          </p>
        </div>
      </section>
      {/* Maria black lg and mob OK */}
      <section className='bg-black text-white'>
        <div className='text-justify text-[20px] flex flex-col gap-2 pb-16 mx-4 lg:mx-16'>
          <p>
            Nebeský Otec poslal svojho jediného Syna, aby hriešnik mohol k Nemu
            prichádzať priamo skrze "človeka Ježiša Krista". Tvrdenie, že je
            ešte ďalší pomocník, prostredník a príhovorca alebo ochranca, je v
            plnom rozpore s Božím Slovom. Tak veľa zmätku je obsiahnutých v
            oficiálnom učení katolíckej cirkvi, že veľmi zreteľné a dôležité
            vlastnosti Boha, Ducha Svätého a Jeho Syna Ježiša Krista, sú
            pripisované rímskokatolíckej Márii. Nebuďte oklamaní, vaše modlitby
            k Márii nedosiahnu ani k Bohu Otcovi v nebi, ani k Ježišovi
            Kristovi.
            <span className='italic'>
              {' '}
              Ale vaše neprávosti sa stali hrádzou medzi vami a vaším Bohom!
              Vaše hriechy zakryli Jeho tvár pred vami, takže nepočuje.
            </span>
            <span className='text-[15px]'> Izaiáš 59:2 </span>
            <span className='italic'> Nik neprichádza k Otcovi, </span>
            <span className='font-bold'> ak len nie skrze mňa. </span>
            <span className='text-[15px]'> Ján 14:6 </span>
          </p>
        </div>
      </section>
      {/* Bola Mária počatá bez poškvrny dedičného hriechu? white lg and mob OK */}
      <section>
        <div className='text-justify text-[20px] flex flex-col gap-2 py-8 mx-4 lg:mx-16'>
          <h2 className='text-title text-center text-[30px] mt-4 mb-8'>
            Bola Mária počatá bez poškvrny dedičného hriechu?{' '}
          </h2>

          <p>
            Katechizmus katolíckej cirkvi učí, že Mária bola "plná milosti" a
            bezhriešna od samého začiatku jej počatia. Preto tiež vyučuje dogmu
            o nepoškvrnenom počatí. Toto veľmi závažné tvrdenie stojí oproti
            tomu, čo je napísané v Biblii, kde je len jedno "nepoškvrnené
            počatie" a to nášho Pána a Spasiteľa Ježiša Krista.
          </p>
        </div>
      </section>
      {/* Bola Mária počatá bez poškvrny dedičného hriechu? table lg */}
      <section className='hidden text-[18px]  lg:flex justify-center mx-12 mt-8 gap-8 pb-8'>
        <div className='w-[50%] border flex flex-col items-center mx-4 pb-4'>
          <h2 className='font-semibold text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <div className='mx-4 text-justify font-semibold flex flex-col gap-4 mt-8'>
            <p>
              § 491 Cirkev si v priebehu storočí uvedomila, že Mária, ktorú Boh
              naplnil milosťou, bola vykúpená už od svojho počatia.
            </p>

            <p>
              {' '}
              § 508 Boh si z Evinho potomstva vyvolil Pannu Máriu, aby bola
              Matkou jeho Syna. Ako „plná milosti“ je „vynikajúce ovocie
              vykúpenia“: od prvej chvíle svojho počatia je celkom uchránená od
              škvrny dedičného hriechu a cez celý svoj život zostala čistá aj od
              akéhokoľvek osobného hriechu.
            </p>
          </div>
        </div>
        <div className='w-[50%] border flex flex-col items-center pb-4 mx-4'>
          <h2 className='font-semibold text-center mt-4'>Biblia hovorí:</h2>
          <div className='mx-4 text-justify font-semibold flex flex-col gap-4 mt-8'>
            <p>
              Ján 1:14
              <span className='italic'>
                {' '}
                A to Slovo stalo sa telom, prebývalo medzi nami, a my sme
                hľadeli na Jeho slávu ako na slávu jednorodeného od Otca, (bolo)
                plné milosti a pravdy.
              </span>
            </p>
            <p>
              Ján 1:16
              <span className='italic'>
                {' '}
                Z Jeho plnosti sme zaiste všetci prijali, a to milosť nad
                milosť.
              </span>
            </p>
            <p>
              Ján 1:17
              <span className='italic'>
                {' '}
                Milosť a pravda stala sa skrze Ježiša Krista.
              </span>
            </p>
            <p>
              Efezským 1:22-23
              <span className='italic'>
                {' '}
                A všetko Mu poddal pod nohy a urobil Ho hlavou nad všetkým v
                cirkvi, ktorá je Jeho telom, plnosťou Toho, ktorý naplňuje
                všetko vo všetkých.
              </span>
            </p>

            <p>
              Židom 1:3
              <span className='italic'>
                {' '}
                Tento (Syn) ako odblesk slávy Boha a obraz Jeho podstaty udržuje
                všetko svojím mocným slovom a posadil sa na pravici Velebnosti
                na výsostiach, keď (prv) spôsobil očistenie od hriechov.
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* 
Bola Mária počatá bez poškvrny dedičného hriechu?
  table mobile only */}
      <section className='flex flex-col lg:hidden mt-8 gap-8 pb-8'>
        <div className='flex flex-col items-center justify-center mx-4'>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className=' text-center mt-4'>
            § 491 Cirkev si v priebehu storočí uvedomila, že Mária, ktorú Boh
            naplnil milosťou, bola vykúpená už od svojho počatia.
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Ján 1:14
            <span className='italic'>
              {' '}
              A to Slovo stalo sa telom, prebývalo medzi nami, a my sme hľadeli
              na Jeho slávu ako na slávu jednorodeného od Otca, (bolo) plné
              milosti a pravdy.
            </span>
          </p>
          <p className='text-center mt-4'>
            Ján 1:16
            <span className='italic'>
              {' '}
              Z Jeho plnosti sme zaiste všetci prijali, a to milosť nad milosť.
            </span>
          </p>
          <p className='text-center mt-4'>
            Ján 1:17
            <span className='italic'>
              {' '}
              Milosť a pravda stala sa skrze Ježiša Krista.
            </span>
          </p>

          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className=' text-center mt-4'>
            § 508 Boh si z Evinho potomstva vyvolil Pannu Máriu, aby bola Matkou
            jeho Syna. Ako „plná milosti“ je „vynikajúce ovocie vykúpenia“: od
            prvej chvíle svojho počatia je celkom uchránená od škvrny dedičného
            hriechu a cez celý svoj život zostala čistá aj od akéhokoľvek
            osobného hriechu.
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Efezským 1:22-23
            <span className='italic'>
              {' '}
              A všetko Mu poddal pod nohy a urobil Ho hlavou nad všetkým v
              cirkvi, ktorá je Jeho telom, plnosťou Toho, ktorý naplňuje všetko
              vo všetkých.
            </span>
          </p>

          <p className='text-center mt-4'>
            Židom 1:3
            <span className='italic'>
              {' '}
              Tento (Syn) ako odblesk slávy Boha a obraz Jeho podstaty udržuje
              všetko svojím mocným slovom a posadil sa na pravici Velebnosti na
              výsostiach, keď (prv) spôsobil očistenie od hriechov.
            </span>
          </p>
        </div>
      </section>
      {/* Bola Mária počatá  white lg and mob OK */}
      <section>
        <div className='text-justify text-[20px] flex flex-col gap-2 py-8 mx-4 lg:mx-16'>
          <p>
            Najväčším požehnaním milosti je "Slovo, ktoré sa stalo telom".
            Otcova vôľa bola, aby plnosť a milosť, prebývala v Kristovi Ježišovi
            samotnom.
          </p>
          <p>
            Od samého pádu Adama v záhrade Eden, sa celé ľudstvo rodí s dedičným
            hriechom a človek vinný hriechom je oddelený od Boha od okamihu
            narodenia.
            <span className='italic'>
              {' '}
              Preto ako skrze jedného človeka hriech prišiel na svet a skrze
              hriech smrť - tak smrť prišla na všetkých ľudí, pretože všetci
              zhrešili.
            </span>
            <span className='text-[15px]'> Rimanom 5:12 </span>
            Všetko, čo bolo kedy zdokumentované, týkajúce sa vyučovania
            katolíckej cirkvi o Márii a jej nepoškvrnenom počatí je úplné
            znesvätenie a rúhanie pred Bohom, ktorý Jediný je Svätý, a výlučným
            Spasiteľom Pánom Ježišom Kristom.
          </p>
        </div>
      </section>
      {/*Máriina úloha v spasení?
 black lg and mob OK */}
      <section className='bg-black text-white'>
        <div className='text-justify text-[20px] flex flex-col gap-2 mt-16 mx-4 lg:mx-16'>
          <h2 className='text-title text-center text-[30px] my-16'>
            Máriina úloha v spasení?
          </h2>
          <p>
            Božia milosť a láska v spasení k nám neprichádza cez matku. Skôr
            Božia milosť a láska v spasení je práca najvyššieho kňaza Ježiša
            Krista prichádzajúca skrze Neho samotného. Podľa Písma svätého naše
            osobné spasenie bolo kúpené smrťou, kde sa obetoval za naše hriechy
            Ježiš Kristus pred 2000 rokmi. Pán Ježiš Kristus sám žil perfektný
            život a kúpil svojou vlastnou krvou našu spásu. Bola to práca Ježiša
            Krista samotného. Katechizmus katolíckej cirkvi na druhej strane
            pripisuje Márii účasť v práci na našom spasení.
          </p>
        </div>
      </section>
      {/* Máriina úloha v spasení?
 black table lg */}
      <section className='hidden text-[18px] bg-black text-white lg:flex justify-center px-12 gap-8 pt-16 pb-16'>
        <div className='w-[50%] border flex flex-col items-center mx-4 pb-4'>
          <h2 className='font-semibold text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <div className='mx-4 text-justify flex flex-col gap-4 mt-8'>
            <p>
              § 494 Ona, ako hovorí svätý Irenej, poslušnosťou sa stala príčinou
              spásy pre seba a pre celé ľudské pokolenie.
            </p>
            <p>
              § 511 Panna Mária „spolupracovala slobodnou vierou a poslušnosťou
              na ľudskej spáse“.
            </p>
            <p>
              § 968 Ona „poslušnosťou, vierou, nádejou a vrúcnou láskou celkom
              mimoriadnym spôsobom spolupracovala na Spasiteľovom diele pre
              obnovu nadprirodzeného života duší. Preto je našou Matkou v
              poriadku milosti.“
            </p>
            <p>
              § 969 Lebo ani po svojom nanebovzatí neprestala v tomto
              spasiteľnom poslaní, ale svojím ustavičným orodovaním nám aj
              naďalej sprostredkúva dary večnej spásy… Preto sa Preblahoslavená
              Panna vzýva v Cirkvi pod titulmi Orodovnica, Ochrankyňa,
              Pomocnica, Prostrednica.“
            </p>
            <p>
              § 964 Toto spojenie Matky so Synom na diele spásy sa prejavuje od
              chvíle panenského počatia Krista až po jeho smrť. Preblahoslavená
              Panna napredovala na ceste viery a verne vytrvala vo svojom
              spojení so Synom až po kríž, kde stála nie bez Božieho zámeru;
              spolu so svojím Jednorodeným veľmi trpela a s materským srdcom sa
              spojila s jeho obetou, keď s láskou súhlasila s obetovaním obete,
              ktorú ona porodila.
            </p>
          </div>
        </div>
        <div className='w-[50%] border flex flex-col items-center pb-4 mx-4'>
          <h2 className='font-semibold text-center  mt-4'>Biblia hovorí:</h2>
          <div className='mx-4 text-justify flex flex-col gap-4 mt-8'>
            <p>
              Skutky apoštolov 4:12
              <span className='italic'>
                {' '}
                A nieto spasenia v nikom inom, lebo nebolo dané pre ľudí iné
                meno pod nebom, v ktorom by sme mali dôjsť spasenia.
              </span>
            </p>
            <p>
              Ján 3:16
              <span className='italic'>
                {' '}
                Lebo tak Boh miloval svet, že svojho jednorodeného Syna dal, aby
                nezahynul, ale večný život mal každý, kto verí v Neho.
              </span>
            </p>
            <p>
              Kolosenským 1:20
              <span className='italic'>
                {' '}
                Aby Ním zmieril so sebou všetko, aj čo je na zemi aj čo je v
                nebesiach, a priniesol pokoj v krvi Jeho kríža.
              </span>
            </p>
            <p>
              Filipským 2:8-10
              <span className='italic'>
                {' '}
                A keď sa zjavil ako človek, ponížil sa a bol poslušný do smrti,
                a to až do smrti na kríži. Preto Ho aj Boh nadmieru povýšil a
                dal Mu meno nad každé meno, aby v Ježišovom mene pokľaklo každé
                koleno tých, čo sú na nebi aj na zemi, aj pod zemou.
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
              Skutky apoštolov 16:31
              <span className='italic'>
                {' '}
                Ver v Pána Ježiša a budeš spasený ty aj tvoj dom!
              </span>
            </p>
            <p>
              Ján 3:36
              <span className='italic'>
                {' '}
                Kto verí v Syna, má večný život, kto však neposlúcha Syna,
                neuvidí život, ale hnev Boží zostáva na ňom.
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* Máriina úloha v spasení? table mobile only */}
      <section className='flex flex-col bg-black text-white lg:hidden pt-8 gap-8 pb-8'>
        <div className='flex flex-col items-center justify-center mx-4'>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className='text-center mt-4'>
            § 494 Ona, ako hovorí svätý Irenej, poslušnosťou sa stala príčinou
            spásy pre seba a pre celé ľudské pokolenie.
          </p>
          <p>
            § 511 Panna Mária „spolupracovala slobodnou vierou a poslušnosťou na
            ľudskej spáse“.
          </p>

          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Skutky apoštolov 4:12
            <span className='italic'>
              {' '}
              A nieto spasenia v nikom inom, lebo nebolo dané pre ľudí iné meno
              pod nebom, v ktorom by sme mali dôjsť spasenia.
            </span>
          </p>
          <p className='text-center mt-4'>
            Ján 3:16
            <span className='italic'>
              {' '}
              Lebo tak Boh miloval svet, že svojho jednorodeného Syna dal, aby
              nezahynul, ale večný život mal každý, kto verí v Neho.
            </span>
          </p>

          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className='text-center mt-4'>
            § 968 Ona „poslušnosťou, vierou, nádejou a vrúcnou láskou celkom
            mimoriadnym spôsobom spolupracovala na Spasiteľovom diele pre obnovu
            nadprirodzeného života duší. Preto je našou Matkou v poriadku
            milosti.“
          </p>
          <p>
            § 969 Lebo ani po svojom nanebovzatí neprestala v tomto spasiteľnom
            poslaní, ale svojím ustavičným orodovaním nám aj naďalej
            sprostredkúva dary večnej spásy… Preto sa Preblahoslavená Panna
            vzýva v Cirkvi pod titulmi Orodovnica, Ochrankyňa, Pomocnica,
            Prostrednica.“
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p>
            Kolosenským 1:20
            <span className='italic'>
              {' '}
              Aby Ním zmieril so sebou všetko, aj čo je na zemi aj čo je v
              nebesiach, a priniesol pokoj v krvi Jeho kríža.
            </span>
          </p>
          <p className='text-center mt-4'>
            Filipským 2:8-10
            <span className='italic'>
              {' '}
              A keď sa zjavil ako človek, ponížil sa a bol poslušný do smrti, a
              to až do smrti na kríži. Preto Ho aj Boh nadmieru povýšil a dal Mu
              meno nad každé meno, aby v Ježišovom mene pokľaklo každé koleno
              tých, čo sú na nebi aj na zemi, aj pod zemou.
            </span>
          </p>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className='text-center mt-4'>
            § 964 Toto spojenie Matky so Synom na diele spásy sa prejavuje od
            chvíle panenského počatia Krista až po jeho smrť. Preblahoslavená
            Panna napredovala na ceste viery a verne vytrvala vo svojom spojení
            so Synom až po kríž, kde stála nie bez Božieho zámeru; spolu so
            svojím Jednorodeným veľmi trpela a s materským srdcom sa spojila s
            jeho obetou, keď s láskou súhlasila s obetovaním obete, ktorú ona
            porodila.
          </p>

          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>

          <p className='text-center mt-4'>
            Židom 1:3
            <span className='italic'>
              {' '}
              Posadil sa na pravici Velebnosti na výsostiach, keď (prv) spôsobil
              očistenie od hriechov.
            </span>
          </p>
          <p className='text-center mt-4'>
            Skutky apoštolov 16:31
            <span className='italic'>
              {' '}
              Ver v Pána Ježiša a budeš spasený ty aj tvoj dom!
            </span>
          </p>
          <p className='text-center mt-4'>
            Ján 3:36
            <span className='italic'>
              {' '}
              Kto verí v Syna, má večný život, kto však neposlúcha Syna, neuvidí
              život, ale hnev Boží zostáva na ňom.
            </span>
          </p>
        </div>
      </section>
      {/* Máriina úloha v spasení? black lg and mob OK */}
      <section className='bg-black text-white'>
        <div className='text-justify text-[20px] flex flex-col gap-2 pb-16 mx-4 lg:mx-16'>
          <p>
            Akékoľvek obrátenie sa človeka k Márii s nádejou, že v nej nájde
            spasenie, je domýšľavou urážkou dokonalej práce Pána Ježiša Krista a
            Boha, ktorý je pôvodnou príčinou spasenia človeka. Je to tiež krádež
            spásonosnej úlohy Pána Ježiša Krista, keď On sám je spôsobom našej
            záchrany. Tvrdenie, že Mária je "našou matkou v poriadku milosti" je
            pravé odmietnutie Osoby a úradu Ježiša Krista, o ktorom jasne
            vyučuje Písmo Sväté. Toto tvrdenie predpokladá, že k Jeho dielu
            milosti bola potrebná aj matka. Taká "milosť" nie je vôbec milosťou.
            Tak ako apoštol Peter hovorí:
            <span className='italic'>
              {' '}
              Boh všetkej milosti, ktorý vás povolal v Kristovi do svojej večnej
              slávy, keď trochu potrpíte, vás zdokonalí!
            </span>
            <span className='text-[15px]'> Prvý Petrov 5:10 </span>
            <span className='italic'>
              {' '}
              Ale keď prišla plnosť času, poslal Boh Syna svojho, narodeného zo
              ženy, narodeného pod zákonom, aby vykúpil tých, čo sú pod zákonom,
              aby sme prijali synovstvo.{' '}
            </span>
            <span className='text-[15px]'> Galatským 4:4-5 </span>
          </p>
          <p>
            Z Písma Svätého je celkom zreteľné, koho Boh ustanovil k úlohe
            Vykupiteľa a to Ježiša Krista. Táto úloha v žiadnom prípade nebola
            zdieľaná s nikým iným. Pre Boha bola prijateľná iba dokonalá obeť
            Pána Ježiša Krista, a tak vykúpenie bolo dokončené len skrze Neho.
            <span className='italic'>
              {' '}
              Nik neprichádza k Otcovi, ak len nie skrze mňa.
            </span>
            <span className='text-[15px]'> Ján 14:6 </span>
            <span className='italic'>
              {' '}
              Kto nevchádza do ovčinca dvermi, ale inokade prelieza, je zlodej a
              lotor.
            </span>
            <span className='text-[15px]'> Ján 10:1 </span>
          </p>
        </div>
      </section>
      {/* Je Mária kráľovnou nebies? */}
      <section className='flex flex-col text-[20px] justify-center mx-4 lg:mx-16  mt-8 gap-8 pb-8'>
        <h1 className='text-title text-center text-[35px]'>
          Je Mária kráľovnou nebies?
        </h1>
        <div className='text-justify  flex flex-col gap-2 mt-8'>
          <p>
            K biblickému faktu, že Kristus Ježiš bol vyvýšený na nebesia ako
            Kráľ kráľov, katolícke učenie v katechizme pridáva tvrdenie, že
            Mária bola predurčená do neba a je Kráľovnou všetkého tvorstva.
          </p>
        </div>
      </section>
      {/*    Je Mária kráľovnou nebies? table lg */}
      <section className='hidden text-[20px] lg:flex justify-center mx-12 mt-8 gap-8 pb-8'>
        <div className='w-[50%] border flex flex-col items-center mx-4 pb-4'>
          <h2 className='font-semibold text-center mt-4'>
            Katechizmus hovorí:
          </h2>
          <div className='mx-4 text-justify font-semibold flex flex-col gap-4 mt-8'>
            <p>
              § 966 Napokon bola Nepoškvrnená Panna – uchránená nedotknutá od
              akejkoľvek škvrny dedičného hriechu – po skončení pozemského
              života vzatá s telom i dušou do nebeskej slávy a Pán ju povýšil za
              Kráľovnú vesmíru.
            </p>
            <p>
              § 974 Preblahoslavená Panna Mária po skončení svojho pozemského
              života bola vzatá s telom i dušou do nebeskej slávy, kde už má
              účasť na sláve zmŕtvychvstania svojho Syna, a tak anticipuje
              vzkriesenie všetkých údov jeho tela.
            </p>
          </div>
        </div>
        <div className='w-[50%] border flex flex-col items-center pb-4 mx-4'>
          <h2 className='font-semibold text-center mt-4'>Biblia hovorí:</h2>
          <div className='mx-4  text-justify font-semibold flex flex-col gap-4 mt-8'>
            <p>
              Skutky apoštolov 1:11
              <span className='italic'>
                {' '}
                Tento Ježiš, ktorý vám bol vzatý do neba, príde zase tak, ako
                ste Ho videli odchádzať do neba.
              </span>
            </p>
            <p>
              Prvý Timotejovi 6:15
              <span className='italic'>
                {' '}
                Blahoslavený a jediný Panovník, Kráľ kraľujúcich a Pán
                panujúcich.{' '}
              </span>
            </p>
            <p>
              Izaiáš 45:22
              <span className='italic'>
                {' '}
                Obráťte sa ku mne a dajte sa zachrániť, všetky končiny zeme,
                lebo ja som Boh, a iného nieto.
              </span>
            </p>
            <p>
              Jeremiáš 7:18
              <span className='italic'>
                {' '}
                Deti zbierajú drevo a otcovia zakladajú oheň, kým ženy miesia
                cesto, aby pripravili koláče kráľovnej nebies a obetujú úliatby
                iným bohom, aby ma zarmucovali.
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* Je Mária kráľovnou nebies? table mobile only */}
      <section className='flex flex-col lg:hidden mt-8 gap-8 pb-8'>
        <div className='flex flex-col items-center justify-center mx-4'>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className=' text-center mt-4'>
            § 966 Napokon bola Nepoškvrnená Panna – uchránená nedotknutá od
            akejkoľvek škvrny dedičného hriechu – po skončení pozemského života
            vzatá s telom i dušou do nebeskej slávy a Pán ju povýšil za Kráľovnú
            vesmíru.
          </p>

          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className=' text-center mt-4'>
            Skutky apoštolov 1:11
            <span className='italic'>
              {' '}
              Tento Ježiš, ktorý vám bol vzatý do neba, príde zase tak, ako ste
              Ho videli odchádzať do neba.
            </span>
          </p>
          <p className=' text-center mt-4'>
            Prvý Timotejovi 6:15
            <span className='italic'>
              {' '}
              Blahoslavený a jediný Panovník, Kráľ kraľujúcich a Pán panujúcich.{' '}
            </span>
          </p>

          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>

          <p className='text-center mt-4'>
            § 974 Preblahoslavená Panna Mária po skončení svojho pozemského
            života bola vzatá s telom i dušou do nebeskej slávy, kde už má účasť
            na sláve zmŕtvychvstania svojho Syna, a tak anticipuje vzkriesenie
            všetkých údov jeho tela.
          </p>

          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>

          <p className=' text-center mt-4'>
            Izaiáš 45:22
            <span className='italic'>
              {' '}
              Obráťte sa ku mne a dajte sa zachrániť, všetky končiny zeme, lebo
              ja som Boh, a iného nieto.
            </span>
          </p>
          <p className=' text-center mt-4'>
            Jeremiáš 7:18
            <span className='italic'>
              {' '}
              Deti zbierajú drevo a otcovia zakladajú oheň, kým ženy miesia
              cesto, aby pripravili koláče kráľovnej nebies a obetujú úliatby
              iným bohom, aby ma zarmucovali.
            </span>
          </p>
        </div>
      </section>
      {/* Je Mária kráľovnou nebies? lg and mob OK */}
      <section>
        <div className='text-justify text-[20px] flex flex-col gap-2  mx-4 lg:mx-16'>
          <p>
            Vyučovanie rímskokatolíckej cirkvi týkajúcej sa "kráľovnej nebies"
            pripomína starovekých féničanov, ktorí uctievali Astartu ako
            "kráľovnú nebies" alebo babylončanov, ktorí uctievali Mylittu ako
            ich "kráľovnú nebies". Skrz naskrz celou históriou sveta mnoho
            pohanských národov uctievalo bohyňu, ktorú nazývali „kráľovnou
            nebies“. V Svätom Písme je jediný odkaz, týkajúci sa "kráľovnej
            nebies" a tento odkaz dôrazne varuje, že jej uctievanie provokuje
            pravého Boha k hnevu. V kapitolách štyri a päť knihy Zjavenia Jána,
            je ukázané nebo a Ježiš Kristus ako Pán Pánov a Kráľ Kráľov. Ako
            ďaleko provokujete Pána uctievaním "kráľovnej nebies" skrze svoje
            modlitby a uctievanie?
          </p>
        </div>
      </section>
      {/*Bola Mária bezhriešna?
 black lg and mob OK */}
      <section className='bg-black text-white'>
        <div className='text-justify text-[20px] flex flex-col gap-2 mt-16 mx-4 lg:mx-16'>
          <h2 className='text-title text-center text-[30px] my-16'>
            Bola Mária bezhriešna?
          </h2>
          <p>
            Rímsky katolicizmus sa pokúša vybudovať paralelu Márie k Ježišovi
            Kristovi ustanovením, že bola bez akéhokoľvek hriechu práve tak, ako
            bol Ježiš Kristus. Toto tvrdenie je základom pre mnoho ďalších
            dogiem týkajúcich sa Márie. Preto je viac ako nevyhnutné porovnať
            toto učenie katolíckeho katechizmu spolu s pravdou nájdenou v Svätej
            Biblii.
          </p>
        </div>
      </section>
      {/* Bola Mária bezhriešna?
 black table lg */}
      <section className='hidden text-[18px] bg-black text-white lg:flex justify-center px-12 gap-8 pt-16 pb-16'>
        <div className='w-[50%] border flex flex-col items-center mx-4 pb-4'>
          <h2 className='font-semibold text-center mt-4'>
            Katechizmus hovorí:
          </h2>
          <div className='mx-4 text-justify flex flex-col gap-4 mt-8'>
            <p>
              § 493 Z Božej milosti Mária počas celého svojho života zostala
              čistá od akéhokoľvek osobného hriechu.
            </p>
            <p>
              § 966 Napokon bola Nepoškvrnená Panna – uchránená nedotknutá od
              akejkoľvek škvrny dedičného hriechu.
            </p>
            <p>
              § 491 Preblahoslavená Panna Mária bola v prvej chvíli svojho
              počatia osobitnou milosťou a výsadou všemohúceho Boha, vzhľadom na
              zásluhy Ježiša Krista, Spasiteľa ľudského pokolenia, uchránená
              nedotknutá od akejkoľvek škvrny dedičného hriechu.
            </p>
          </div>
        </div>
        <div className='w-[50%] border flex flex-col items-center pb-4 mx-4'>
          <h2 className='font-semibold text-center  mt-4'>Biblia hovorí:</h2>
          <div className='mx-4  text-justify flex flex-col gap-4 mt-8'>
            <p>
              Rimanom 3:23
              <span className='italic'>
                {' '}
                Všetci totiž zhrešili a nemajú slávy Božej.
              </span>
            </p>
            <p>
              Židom 7:26
              <span className='italic'>
                {' '}
                Takého veľkňaza sme aj potrebovali: svätého, nevinného,
                nepoškvrneného, oddeleného od hriešnikov a vyvýšeného nad
                nebesá.
              </span>
            </p>
            <p>
              Prvý Jánov 3:5
              <span className='italic'>
                {' '}
                A vy viete, že On sa zjavil, aby sňal hriechy, a v Ňom nieto
                hriechu.
              </span>
            </p>

            <p>
              Rimanom 5:12
              <span className='italic'>
                {' '}
                Preto ako skrze jedného človeka hriech prišiel na svet a skrze
                hriech smrť - tak smrť prišla na všetkých ľudí, pretože všetci
                zhrešili.
              </span>
            </p>
            <p>
              Židom 4:15
              <span className='italic'>
                {' '}
                Veď nemáme Veľkňaza, ktorý by nemohol cítiť s našimi slabosťami,
                ale (máme Veľkňaza), podobne pokúšaného vo všetkom, (ale) bez
                hriechu.
              </span>
            </p>
          </div>
        </div>
      </section>
      {/*  Bola Mária bezhriešna? table mobile only */}
      <section className='flex flex-col bg-black text-white lg:hidden pt-8 gap-8 pb-8'>
        <div className='flex flex-col items-center justify-center mx-4'>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className='text-center mt-4'>
            § 493 Z Božej milosti Mária počas celého svojho života zostala čistá
            od akéhokoľvek osobného hriechu.
          </p>
          <p>
            § 966 Napokon bola Nepoškvrnená Panna – uchránená nedotknutá od
            akejkoľvek škvrny dedičného hriechu.
          </p>

          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Rimanom 3:23
            <span className='italic'>
              {' '}
              Všetci totiž zhrešili a nemajú slávy Božej.
            </span>
          </p>
          <p className='text-center mt-4'>
            Židom 7:26
            <span className='italic'>
              {' '}
              Takého veľkňaza sme aj potrebovali: svätého, nevinného,
              nepoškvrneného, oddeleného od hriešnikov a vyvýšeného nad nebesá.
            </span>
          </p>
          <p className='text-center mt-4'>
            Prvý Jánov 3:5
            <span className='italic'>
              {' '}
              A vy viete, že On sa zjavil, aby sňal hriechy, a v Ňom nieto
              hriechu.
            </span>
          </p>

          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className='text-center mt-4'>
            § 491 Preblahoslavená Panna Mária bola v prvej chvíli svojho počatia
            osobitnou milosťou a výsadou všemohúceho Boha, vzhľadom na zásluhy
            Ježiša Krista, Spasiteľa ľudského pokolenia, uchránená nedotknutá od
            akejkoľvek škvrny dedičného hriechu.
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Rimanom 5:12
            <span className='italic'>
              {' '}
              Preto ako skrze jedného človeka hriech prišiel na svet a skrze
              hriech smrť - tak smrť prišla na všetkých ľudí, pretože všetci
              zhrešili.
            </span>
          </p>
          <p className='text-center mt-4'>
            Židom 4:15
            <span className='italic'>
              {' '}
              Veď nemáme Veľkňaza, ktorý by nemohol cítiť s našimi slabosťami,
              ale (máme Veľkňaza), podobne pokúšaného vo všetkom, (ale) bez
              hriechu.
            </span>
          </p>
        </div>
      </section>
      {/* Bola Mária bezhriešna? black lg and mob OK */}
      <section className='bg-black text-white'>
        <div className='text-justify text-[20px] flex flex-col gap-2 pb-16 mx-4 lg:mx-16'>
          <p>
            Boh je nazývaný "Spasiteľ", ktorý zachránil svoj ľud od hriechu.
            Celé ľudstvo od Adama ďalej zhrešilo a rozsudok tohto hriechu je
            smrť. Z toho dôvodu potrebujeme Spasiteľa. Dokonca matka Pána sama
            potrebovala svojho Spasiteľa a bez Neho by bola duchovne stratená.
            Mária bola hriešna a Božou milosťou bola zachránená Bohom svojim
            Spasiteľom. Sama sa radovala z tej radosti, ktorú zdieľala spolu so
            všetkými veriacimi, pretože mala pravého Spasiteľa.
          </p>
        </div>
      </section>
      {/* Bola Mária bezhriešna? OUTRO white lg and mob OK */}
      <section>
        <div className='text-justify text-[20px] flex flex-col gap-2 py-8 mx-4 lg:mx-16'>
          <p>
            Máriina pozícia je tiež viditeľná v nasledujúcich Písmach. Po prvé,
            Mária sama seba uznávala za zachránenú hriešnicu. Vtedy Mária
            povedala:
            <span className='italic'>
              {' '}
              Vtedy povedala Mária: Velebí moja duša Pána a môj duch sa
              rozveselil v Bohu, v mojom Spasiteľovi.
            </span>
            <span className='text-[15px]'> Lukáš 1:46-47 </span>
            Potom Jozef a Mária spoločne obetovali za hriech podľa toho ako
            vyžadoval Boží Zákon.
            <span className='italic'>
              {' '}
              A aby priniesli obeť podľa slov zákona Pánovho: dve hrdličky alebo
              dve holúbätá.{' '}
            </span>
            <span className='text-[15px]'> Lukáš 2:24 </span> Ak bola Mária
            bezhriešna, nebolo by potrebné obetovať pár vtáctva ako obeť Pánovi.
          </p>
          <p>
            Môžeme všetci ďakovať Pánovi, že Mária bola a je naozaj "požehnaná
            medzi ženami", avšak vieme, že nebola požehnaná ako rovná Pánovi
            Ježišovi Kristovi. Preto Božie Slovo hovorí:
            <span className='italic'>
              {' '}
              Ja som Hospodin, to je moje meno; svoju slávu inému nedám, ani
              svoju chválu modlám.
            </span>
            <span className='text-[15px]'> Izaiáš 42:8</span>
          </p>
        </div>
      </section>
      <span className='font-bold'></span>
      <span className='font-bold'></span>
      <span className='italic'> </span>
      <span className='text-[15px]'> </span> <span className='italic'> </span>
      <span className='text-[15px]'> </span> <span className='italic'> </span>
      <span className='text-[15px]'> </span>
    </>
  )
}

export default Maria
