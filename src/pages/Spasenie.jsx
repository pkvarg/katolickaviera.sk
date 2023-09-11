import React from 'react'
import Header from '../components/Header'

const Spasenie = () => {
  return (
    <>
      <Header />
      {/* Spasenie*/}
      <header className='flex flex-col text-[20px] justify-center mx-4 lg:mx-16  mt-8 gap-8 pb-8'>
        <h1 className='text-title text-center text-[35px]'>Spasenie</h1>
        <div className='text-justify flex flex-col gap-2 mt-8'>
          <p>
            Podľa rímskokatolíckej cirkvi záchranou pre vašu dušu je dlhá cesta
            cez jej sviatostný systém. Na tejto ceste rímska cirkev stojí ako
            koordinačný orgán, dokonca seba definuje ako plnosť vášho spasenia.
            V podstate hovorí, že ak existuje vaše spasenie, môže byť udelené
            cez rímskokatolícku cirkev.
          </p>
          <p>
            Sviatosti katolíckej cirkvi sú vyučované vo svetle nevyhnutnosti pre
            vaše spasenie spolu s "posväcujúcou milosťou", ktorá prebýva vo
            veriacom a udeľuje sa mu účasťou na každej sviatosti. Ako katolíkovi
            vaše úsilie slúži na to, aby sa zväčšila miera „posväcujúcej
            milosti“ vo vás a urobila vás natoľko dobrým, aby ste, keď umriete,
            mohli byť vyslobodení od súdu pekla a prinajhoršom sa ocitol na
            nejaký čas v očistci, než pôjdete do neba.
          </p>
          <p>
            Pod učením rímskej cirkvi istota spasenia nie je nikdy daná, dokonca
            ani tým najviac oddaným. Preto dohoda o vašom spasení a úprimné
            jednanie s pravdivým Autorom spasenia by nemala byť braná na ľahkú
            váhu. Nemôžete byť opýtaní vážnejšou otázkou ako je táto: "Ak ešte
            dnes zomriete, kde budete tráviť večnosť?“ Kde nájdete správnu
            odpoveď? Pýtam sa vás, pretože to je krajne závažná otázka. Prosím,
            nezmýšľajte naivne, že sa niekedy dostanete pomocou cirkvi do neba.
            Čo naozaj potrebujete vedieť je, ako budete stáť pred Svätým Bohom.
            Vinný alebo nevinný? Vezmite prosím do úvahy všetko, čo je v
            kontraste so Svätým Božím Slovom.
          </p>
        </div>
      </header>
      {/* Spasenie len skrze Ježiša Krista
       */}
      <section className='flex flex-col text-[20px] justify-center mx-4 lg:mx-16  mt-8 gap-8 pb-8'>
        <h1 className='text-title text-center text-[35px]'>
          Spasenie len skrze Ježiša Krista
        </h1>
        <div className='text-justify flex flex-col gap-2 mt-8'>
          <p>
            V Písme Svätom je spasenie vždy videné v Kristovi, ktorý je ako
            Autorom, tak Postupiteľom. Napríklad vo všetkých knihách apoštola
            Pavla je spasenie vyjadrené "byť v Kristovi". A podobne v listoch
            apoštola Jána, večný život je v Kristovi a je to skrze vieru v Jeho
            prácu, ktorou získal večný život pre svoj ľud. Avšak v katolíckej
            cirkvi je spasenie videné ako bytie v cirkvi a skrze jej sviatosti.
            Toto je rozhodujúca téma, pretože spasenie vašej duše môže byť
            udelené skrze prácu Boha, ako o tom celkom zreteľne učí Jeho Slovo.
          </p>
        </div>
      </section>
      {/* Spasenie len skrze Ježiša Krista
 table lg */}
      <section className='hidden text-[18px] lg:flex justify-center mx-12 mt-8 gap-8 pb-8'>
        <div className='w-[50%] border flex flex-col items-center mx-4 pb-4'>
          <h2 className='font-semibold text-center mt-4'>
            Katechizmus hovorí:
          </h2>
          <div className='mx-4 text-justify font-semibold flex flex-col gap-4 mt-8'>
            <p>
              § 824
              <span className='font-bold'> V Cirkvi </span>
              sa nachádza „plnosť všetkých prostriedkov spásy“. V nej „s pomocou
              Božej milosti dosahujeme svätosť“.
            </p>
            <p>
              § 982
              <span className='font-bold'>
                {' '}
                Nejestvuje hriech, aj keby bol akokoľvek ťažký, ktorý by svätá
                Cirkev nemohla odpustiť.{' '}
              </span>
              „Nik nie je taký zlý a hriešny, aby nemohol s istotou dúfať v
              odpustenie, ak úprimne ľutuje svoje poklesky.“
            </p>

            <p>
              § 181
              <span className='font-bold'> „Veriť“ je ekleziálny úkon. </span>
              Viera Cirkvi predchádza, rodí, udržiava a živí našu vieru.
              <span className='font-bold'>
                {' '}
                Cirkev je matka všetkých veriacich. „Nemôže mať Boha za Otca,
                kto nemá Cirkev za matku“.{' '}
              </span>
            </p>
            <p>
              § 169 Spása prichádza jedine od Boha. Ale pretože život viery
              dostávame
              <span className='font-bold'>
                {' '}
                prostredníctvom Cirkvi, ona je našou matkou.{' '}
              </span>
            </p>
          </div>
        </div>
        <div className='w-[50%] border flex flex-col items-center pb-4 mx-4'>
          <h2 className='font-semibold text-center mt-4'>Biblia hovorí:</h2>
          <div className='mx-4 text-justify font-semibold flex flex-col gap-4 mt-8'>
            <p>
              Prvý Jánov 5:20
              <span className='italic'>
                {' '}
                Avšak vieme, že Syn Boží prišiel a dal nám rozum, aby sme
                poznali toho Pravého; a my sme v tom Pravom, v Jeho Synovi
                Ježišovi Kristovi.
                <span className='font-bold'>
                  {' '}
                  On je pravý Boh a večný život.{' '}
                </span>
              </span>
            </p>
            <p>
              Prvý Jánov 1:9
              <span className='italic'>
                {' '}
                Ak vyznávame svoje hriechy, On je verný a spravodlivý, aby nám
                odpustil hriechy a očistil nás od všetkej neprávosti.{' '}
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
              Židom 12:2
              <span className='italic'>
                {' '}
                Hľaďme na Ježiša, Pôvodcu a Dokonávateľa viery.
              </span>
            </p>
            <p>
              Efezským 1:6-7
              <span className='italic'>
                {' '}
                A zvelebovať slávu Jeho milosti, ktorou nás omilostil v
                Milovanom. V Ňom máme vykúpenie skrze Jeho krv, odpustenie
                hriechov podľa bohatstva Jeho milosti.
              </span>
            </p>
            <p>
              Rimanom 3:24
              <span className='italic'>
                {' '}
                Ale ospravedlňovaní sú zadarmo z Jeho milosti skrze vykúpenie v
                Kristovi Ježišovi.
              </span>
            </p>

            <p>
              Prvý Jánov 5:11-12
              <span className='italic'>
                {' '}
                A toto je svedectvo, že Boh nám dal večný život, a tento
                <span className='font-bold'> život je v Jeho Synovi. </span>
                Kto má Syna, má život; kto nemá Syna Božieho, nemá život.
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* Spasenie len skrze Ježiša Krista
table mobile only */}
      <section className='flex flex-col lg:hidden mt-8 gap-8 pb-8'>
        <div className='flex flex-col items-center justify-center mx-4'>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className='text-center mt-4'>
            § 824
            <span className='font-bold'> V Cirkvi </span>
            sa nachádza „plnosť všetkých prostriedkov spásy“. V nej „s pomocou
            Božej milosti dosahujeme svätosť“.
          </p>
          <p className='text-center mt-4'>
            § 982
            <span className='font-bold'>
              {' '}
              Nejestvuje hriech, aj keby bol akokoľvek ťažký, ktorý by svätá
              Cirkev nemohla odpustiť.{' '}
            </span>
            „Nik nie je taký zlý a hriešny, aby nemohol s istotou dúfať v
            odpustenie, ak úprimne ľutuje svoje poklesky.“
          </p>

          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Prvý Jánov 5:20
            <span className='italic'>
              {' '}
              Avšak vieme, že Syn Boží prišiel a dal nám rozum, aby sme poznali
              toho Pravého; a my sme v tom Pravom, v Jeho Synovi Ježišovi
              Kristovi.
              <span className='font-bold'>
                {' '}
                On je pravý Boh a večný život.{' '}
              </span>
            </span>
          </p>
          <p className='text-center mt-4'>
            Prvý Jánov 1:9
            <span className='italic'>
              {' '}
              Ak vyznávame svoje hriechy, On je verný a spravodlivý, aby nám
              odpustil hriechy a očistil nás od všetkej neprávosti.{' '}
            </span>
          </p>
          <p className='text-center mt-4'>
            Marek 2:7
            <span className='italic'>
              {' '}
              Čo tento hovorí? Rúha sa! Ktože môže odpúšťať hriechy, ak len nie
              Jeden, Boh?
            </span>
          </p>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>

          <p className='text-center mt-4'>
            § 181
            <span className='font-bold'> „Veriť“ je ekleziálny úkon. </span>
            Viera Cirkvi predchádza, rodí, udržiava a živí našu vieru.
            <span className='font-bold'>
              {' '}
              Cirkev je matka všetkých veriacich. „Nemôže mať Boha za Otca, kto
              nemá Cirkev za matku“.{' '}
            </span>
          </p>

          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>

          <p className='text-center mt-4'>
            Židom 12:2
            <span className='italic'>
              {' '}
              Hľaďme na Ježiša, Pôvodcu a Dokonávateľa viery.
            </span>
          </p>
          <p className='text-center mt-4'>
            Efezským 1:6-7
            <span className='italic'>
              {' '}
              A zvelebovať slávu Jeho milosti, ktorou nás omilostil v Milovanom.
              V Ňom máme vykúpenie skrze Jeho krv, odpustenie hriechov podľa
              bohatstva Jeho milosti.
            </span>
          </p>
          <p className='text-center mt-4'>
            Rimanom 3:24
            <span className='italic'>
              {' '}
              Ale ospravedlňovaní sú zadarmo z Jeho milosti skrze vykúpenie v
              Kristovi Ježišovi.
            </span>
          </p>

          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>

          <p className='text-center mt-4'>
            § 169 Spása prichádza jedine od Boha. Ale pretože život viery
            dostávame
            <span className='font-bold'>
              {' '}
              prostredníctvom Cirkvi, ona je našou matkou.{' '}
            </span>
          </p>

          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>

          <p className=' text-center mt-4'>
            Prvý Jánov 5:11-12
            <span className='italic'>
              {' '}
              A toto je svedectvo, že Boh nám dal večný život, a tento
              <span className='font-bold'> život je v Jeho Synovi. </span>
              Kto má Syna, má život; kto nemá Syna Božieho, nemá život.
            </span>
          </p>
        </div>
      </section>
      {/* Spasenie len skrze Ježiša Krista
lg and mob OK */}
      <section>
        <div className='text-justify text-[20px] flex flex-col gap-2 mx-4 lg:mx-16'>
          <p>
            Podľa Biblie je záchrana nájdená v Kristovi. Nenachádza sa v žiadnej
            cirkvi, či už v katolíckej, protestantskej alebo inom náboženskom
            systéme. Nasledovanie rímskokatolíckeho učenia, ktoré vyučuje, že
            cirkev je "plnosť všetkých prostriedkov spasenia" skôr ako Kristus,
            ktorý sám je plnosťou spasenia, doslova zatracuje dušu.
          </p>
          <p>
            Apoštol Pavol v liste Filipským 3:8-9 hovorí:
            <span className='italic'>
              A iste aj pokladám všetko za stratu pre nekonečne vzácne poznanie
              Ježiša Krista, svojho Pána, pre ktorého som všetko stratil a
              všetko pokladám za smeti, aby som Krista získal, a aby som aj sám
              <span className='font-bold'> bol v ňom </span>
              ako taký, ktorý nemá vlastnej spravodlivosti zo zákona, ale z
              viery v Krista, teda spravodlivosť z Boha, (založenú) na viere.
            </span>
            Môžete po prečítaní týchto textov povedať, že ste v Kristovi, alebo
            ste pyšní na to, že zostávate v systéme, kde si môžete svojou
            účasťou získať spasenie?
          </p>
        </div>
      </section>

      {/* Spasenie vlastným pričinením a dobrými skutkami black lg and mob OK */}
      <section className='bg-black text-white'>
        <div className='text-justify text-[20px] flex flex-col gap-2 mt-16 mx-4 lg:mx-16'>
          <h2 className='text-title text-center text-[30px] my-16'>
            Spasenie vlastným pričinením a dobrými skutkami
          </h2>
          <p>
            Vo vyučovaní rímskokatolíckej cirkvi sa vyvinula myšlienka o
            spolupráci medzi Bohom a človekom. Podľa tohto názoru Boh a človek
            pracujú spoločne, aby mohli dokončiť spasenie jedinca. Katolícky
            veriaci je učený, že s Božou pomocou, jeho úsilie "byť dobrý" má
            zásluhu v očiach Boha a prispeje k spravodlivosti, ktorá je Bohom
            vyžadovaná pre spasenie. Toto učenie je proti tomu, čo hovorí Božie
            Slovo, a prekrýva svojím omylom Osobu a dokonalú prácu Pána Ježiša
            Krista.
          </p>
          <p>
            Práca vyžadovaná Bohom pre spasenie duší bola úplne a výhradne
            naplnená Bohom-človekom Ježišom Kristom. Pán Ježiš Kristus sa stal
            našou spravodlivosťou Svojím perfektným a bezhriešnym životom, čo je
            základom spasenia pre pravých veriacich.
          </p>
          <p>
            Učenie, že existuje spolupráca človeka s Bohom, v ktorom si veriaci
            svojou poslušnosťou "Zákonu Božiemu" môže zaslúžiť spasenie, je
            absurdné. Inak povedané, ak skúšate žiť podľa striktných noriem, aby
            ste si zaslúžili spasenie svojím životom a konaním, hovoríte, že
            perfektný, bezhriešny a poslušný život Ježiša Krista nebol
            dostatočný.
          </p>
          <p>
            Apoštol Pavol hovorí:
            <span className='italic'>
              {' '}
              Nepohŕdam milosťou Božou. Lebo ak je spravodlivosť zo zákona, tak
              Kristus nadarmo umrel.{' '}
            </span>
            <span className='text-[15px]'> Galatským 2:21 </span>
          </p>
        </div>
      </section>
      {/* Spasenie vlastným pričinením a dobrými skutkami black table lg */}
      <section className='hidden text-[18px] bg-black text-white lg:flex justify-center px-12 gap-8 pt-16 pb-16'>
        <div className='w-[50%] border flex flex-col items-center mx-4 pb-4'>
          <h2 className='font-semibold text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <div className='mx-4 text-justify flex flex-col gap-4 mt-8'>
            <p>
              § 2025 Pred Bohom máme zásluhu len následkom slobodného
              rozhodnutia Boha pridružiť človeka k dielu svojej milosti. Zásluha
              patrí na prvom mieste Božej milosti a na druhom mieste spolupráci
              človeka. Aj zásluha človeka patrí Bohu.
            </p>

            <p>
              § 1521 Utrpenie, následok dedičného hriechu, dostáva nový zmysel:
              stáva sa účasťou na Ježišovom spasiteľnom diele.
            </p>

            <p>
              § 618 Kríž je jediná obeta Krista, ktorý je jediný „prostredník
              medzi Bohom a ľuďmi“ (1Tim 2,5) . Keďže sa však vo svojej vtelenej
              osobe „určitým spôsobom zjednotil s každým človekom“, „dáva
              všetkým možnosť, aby sa spôsobom známym Bohu stali účastnými na
              tomto veľkonočnom tajomstve“.
            </p>
          </div>
        </div>
        <div className='w-[50%] border flex flex-col items-center pb-4 mx-4'>
          <h2 className='font-semibold text-center  mt-4'>Biblia hovorí:</h2>
          <div className='mx-4  text-justify flex flex-col gap-4 mt-8'>
            <p>
              Židom 1:3
              <span className='italic'>
                {' '}
                Tento (Syn) ako odblesk slávy Boha a obraz Jeho podstaty udržuje
                všetko svojím mocným slovom a posadil sa na pravici Velebnosti
                na výsostiach, keď (prv) spôsobil očistenie od hriechov.
              </span>
            </p>
            <p>
              Títovi 3:5
              <span className='italic'>
                {' '}
                Spasil nás nie pre skutky spravodlivosti, ktoré sme konali.
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
              Rimanom 11:6
              <span className='italic'>
                {' '}
                A keď z milosti, tak nie zo skutkov, ináč by milosť nebola
                milosťou.
              </span>
            </p>

            <p>
              Jób 9:20
              <span className='italic'>
                {' '}
                Ak som aj v práve, vlastné ústa ma obvinia, ak som aj nevinný,
                On ma vyhlási za vinného.
              </span>
            </p>
            <p>
              Galatským 2:16
              <span className='italic'>
                {' '}
                Vediac, že človek nebýva ospravedlnený zo skutkov zákona, ale
                vierou v Krista Ježiša, aj my sme uverili v Krista Ježiša, aby
                sme boli ospravedlnení z viery v Krista, a nie zo skutkov
                zákona, pretože zo skutkov zákona nebude ospravedlnený nikto.
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* Spasenie vlastným pričinením a dobrými skutkami
 table mobile only */}
      <section className='flex flex-col bg-black text-white lg:hidden pt-8 gap-8 pb-8'>
        <div className='flex flex-col items-center justify-center mx-4'>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className='text-center mt-4'>
            § 2025 Pred Bohom máme zásluhu len následkom slobodného rozhodnutia
            Boha pridružiť človeka k dielu svojej milosti. Zásluha patrí na
            prvom mieste Božej milosti a na druhom mieste spolupráci človeka. Aj
            zásluha človeka patrí Bohu.
          </p>

          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Židom 1:3
            <span className='italic'>
              {' '}
              Tento (Syn) ako odblesk slávy Boha a obraz Jeho podstaty udržuje
              všetko svojím mocným slovom a posadil sa na pravici Velebnosti na
              výsostiach, keď (prv) spôsobil očistenie od hriechov.
            </span>
          </p>
          <p className='text-center mt-4'>
            Títovi 3:5
            <span className='italic'>
              {' '}
              Spasil nás nie pre skutky spravodlivosti, ktoré sme konali.
            </span>
          </p>

          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className='text-center mt-4'>
            § 1521 Utrpenie, následok dedičného hriechu, dostáva nový zmysel:
            stáva sa účasťou na Ježišovom spasiteľnom diele.
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Rimanom 4:5
            <span className='italic'>
              {' '}
              Kto však nekoná skutky, ale verí v Toho, ktorý ospravedlňuje
              bezbožného, tomu sa jeho viera počíta za spravodlivosť.
            </span>
          </p>
          <p className='text-center mt-4'>
            Rimanom 11:6
            <span className='italic'>
              {' '}
              A keď z milosti, tak nie zo skutkov, ináč by milosť nebola
              milosťou.
            </span>
          </p>

          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className='text-center mt-4'>
            § 618 Kríž je jediná obeta Krista, ktorý je jediný „prostredník
            medzi Bohom a ľuďmi“ (1Tim 2,5) . Keďže sa však vo svojej vtelenej
            osobe „určitým spôsobom zjednotil s každým človekom“, „dáva všetkým
            možnosť, aby sa spôsobom známym Bohu stali účastnými na tomto
            veľkonočnom tajomstve“.
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Jób 9:20
            <span className='italic'>
              {' '}
              Ak som aj v práve, vlastné ústa ma obvinia, ak som aj nevinný, On
              ma vyhlási za vinného.
            </span>
          </p>
          <p className='text-center mt-4'>
            Galatským 2:16
            <span className='italic'>
              {' '}
              Vediac, že človek nebýva ospravedlnený zo skutkov zákona, ale
              vierou v Krista Ježiša, aj my sme uverili v Krista Ježiša, aby sme
              boli ospravedlnení z viery v Krista, a nie zo skutkov zákona,
              pretože zo skutkov zákona nebude ospravedlnený nikto.
            </span>
          </p>
        </div>
      </section>
      {/* Spasenie vlastným pričinením a dobrými skutkami 
 black lg and mob OK */}
      <section className='bg-black text-white'>
        <div className='text-justify text-[20px] flex flex-col gap-2 pb-16 mx-4 lg:mx-16'>
          <p>
            Katolícke učenie, že je "vytvorené partnerstvo" človeka s Bohom v
            Kristovej obete je neúctivé a zvrhlé. Nie je žiaden biblický základ
            pre tento koncept partnerstva s Kristom na Jeho obeti. Jeho obeť
            bola z Jeho slobodnej vôle. Sám seba dal ukrižovať za hriechy svojho
            ľudu. Boh nakoniec plne prijal Jeho obeť na kompletné odpustenie
            všetkých hriechov Jeho ľudí. (pozri Židom kapitola 10) Ponúknutie
            niečoho viac je tá najväčšia lož, pretože popiera opakované tvrdenia
            Božej pravdy nájdené v Biblii. Práca vykúpenia je
            <span className='italic'> skrze Syna </span>
            <span className='text-[15px]'> Židom 1:3 </span>
            <span className='italic'> bez skutkov zákona. </span>
            <span className='text-[15px]'> Rimanom 3:28 </span>
            <span className='italic'>
              {' '}
              Lebo milosťou ste spasení skrze vieru. A to nie sami zo seba; je
              to dar Boží; nie zo skutkov, aby sa nikto nechválil.{' '}
            </span>
            <span className='text-[15px]'> Efezským 2:8-9 </span>
          </p>
          <p>
            Boh sľúbil, že bude Otcom pravým veriacim, takže oni sú Jeho synmi a
            Jeho dcérami. Toto je najväčšia česť, ktorú ľudstvo mohlo dostať.
            Aký nevďačný musí byť ten, komu bola daná táto výsada a chcel by sa
            degradovať tým, že pridáva k tejto úplne dostačujúcej obeti vlastné
            zásluhy. Ježiš Kristus sľúbil:
            <span className='italic'>
              {' '}
              Všetko, čo mi dáva Otec, príde ku mne, a kto prichádza ku mne,
              nevyhodím ho.{' '}
            </span>
            <span className='text-[15px]'> Ján 6:37 </span>
            Ver len Jemu samému. Boh neklame.
          </p>
          <p></p>
        </div>
      </section>

      {/* Spasenie pomocou sviatostí white lg and mob OK */}
      <section>
        <div className='text-justify text-[20px] flex flex-col gap-2 py-8 mx-4 lg:mx-16'>
          <h2 className='text-title text-center text-[30px] mt-4 mb-8'>
            Spasenie pomocou sviatostí{' '}
          </h2>

          <p>
            Katechizmus katolíckej cirkvi vyhlasuje, že sviatosti sú efektívnymi
            prostriedkami milosti, ktoré sú potrebné na spasenie. Vo viac
            zjednodušenom podaní, katolík sa musí aktívne zúčastniť na
            cirkevných sviatostiach za účelom prijatia milostí v nádeji, že si
            zaslúži spásu. Nemýľte sa: tieto sviatosti sú deklarované ako
            nevyhnutné pre spasenie, pretože ony samy znamenajú milosť! Toto
            učenie je tak dôrazné, že "sviatostná milosť" prijatá cez tieto
            sviatosti je vyhlásená ako milosť Ducha Svätého. Vo svetle Svätého
            Písma prosím uvážte, aký osudný je tento nebiblický systém viery.
          </p>
        </div>
      </section>
      {/* Spasenie pomocou sviatostí table lg */}
      <section className='hidden text-[18px]  lg:flex justify-center mx-12 mt-8 gap-8 pb-8'>
        <div className='w-[50%] border flex flex-col items-center mx-4 pb-4'>
          <h2 className='font-semibold text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <div className='mx-4 text-justify font-semibold flex flex-col gap-4 mt-8'>
            <p>
              § 1113 Celý liturgický život Cirkvi sa sústreďuje okolo
              eucharistickej obety a sviatostí. V Cirkvi je sedem sviatostí:
              krst, birmovanie čiže krizmácia, Eucharistia, pokánie, pomazanie
              chorých, posvätný stav a manželstvo.
            </p>

            <p>
              {' '}
              § 1129 Cirkev tvrdí, že sviatosti Novej zmluvy sú pre veriacich
              nevyhnutne potrebné na spásu. „Sviatostná milosť“ je milosť Ducha
              Svätého udelená Kristom a vlastná každej sviatosti.
            </p>
            <p>
              § 1493 Kto chce dosiahnuť zmierenie s Bohom a s Cirkvou, musí
              vyznať kňazovi všetky ťažké hriechy, z ktorých sa ešte nespovedal
              a na ktoré sa rozpamätá po starostlivom spytovaní svedomia.
            </p>
          </div>
        </div>
        <div className='w-[50%] border flex flex-col items-center pb-4 mx-4'>
          <h2 className='font-semibold text-center mt-4'>Biblia hovorí:</h2>
          <div className='mx-4 text-justify font-semibold flex flex-col gap-4 mt-8'>
            <p>
              Prvý Jánov 5:11-12
              <span className='italic'>
                {' '}
                A toto je svedectvo, že Boh nám dal večný život, a tento život
                je v Jeho Synovi. Kto má Syna, má život; kto nemá Syna Božieho,
                nemá život.
              </span>
            </p>

            <p>
              Prvý Jánov 5:13
              <span className='italic'>
                {' '}
                Toto som napísal vám, veriacim v meno Syna Božieho, aby ste
                vedeli, že máte večný život
              </span>
            </p>
            <p>
              Skutky apoštolov 16:31
              <span className='italic'>
                {' '}
                Odpovedali mu: Ver v Pána Ježiša a budeš spasený ty aj tvoj dom!
              </span>
            </p>

            <p>
              Rimanom 3:21
              <span className='italic'>
                {' '}
                Ale teraz sa bez zákona zjavila spravodlivosť Božia.
              </span>
            </p>
            <p>
              Efezským 1:7
              <span className='italic'>
                {' '}
                V Ňom máme vykúpenie skrze Jeho krv, odpustenie hriechov podľa
                bohatstva Jeho milosti.
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
          </div>
        </div>
      </section>
      {/* Spasenie pomocou sviatostí table mobile only */}
      <section className='flex flex-col lg:hidden mt-8 gap-8 pb-8'>
        <div className='flex flex-col items-center justify-center mx-4'>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className=' text-center mt-4'>
            § 1113 Celý liturgický život Cirkvi sa sústreďuje okolo
            eucharistickej obety a sviatostí. V Cirkvi je sedem sviatostí: krst,
            birmovanie čiže krizmácia, Eucharistia, pokánie, pomazanie chorých,
            posvätný stav a manželstvo.
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Prvý Jánov 5:11-12
            <span className='italic'>
              {' '}
              A toto je svedectvo, že Boh nám dal večný život, a tento život je
              v Jeho Synovi. Kto má Syna, má život; kto nemá Syna Božieho, nemá
              život.
            </span>
          </p>

          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className=' text-center mt-4'>
            § 1129 Cirkev tvrdí, že sviatosti Novej zmluvy sú pre veriacich
            nevyhnutne potrebné na spásu. „Sviatostná milosť“ je milosť Ducha
            Svätého udelená Kristom a vlastná každej sviatosti.
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Prvý Jánov 5:13
            <span className='italic'>
              {' '}
              Toto som napísal vám, veriacim v meno Syna Božieho, aby ste
              vedeli, že máte večný život
            </span>
          </p>
          <p className='text-center mt-4'>
            Skutky apoštolov 16:31
            <span className='italic'>
              {' '}
              Odpovedali mu: Ver v Pána Ježiša a budeš spasený ty aj tvoj dom!
            </span>
          </p>

          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className=' text-center mt-4'>
            § 1493 Kto chce dosiahnuť zmierenie s Bohom a s Cirkvou, musí vyznať
            kňazovi všetky ťažké hriechy, z ktorých sa ešte nespovedal a na
            ktoré sa rozpamätá po starostlivom spytovaní svedomia.
          </p>

          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Rimanom 3:21
            <span className='italic'>
              {' '}
              Ale teraz sa bez zákona zjavila spravodlivosť Božia.
            </span>
          </p>
          <p className='text-center mt-4'>
            Efezským 1:7
            <span className='italic'>
              {' '}
              V Ňom máme vykúpenie skrze Jeho krv, odpustenie hriechov podľa
              bohatstva Jeho milosti.
            </span>
          </p>
          <p className='text-center mt-4'>
            Prvý Jánov 1:9
            <span className='italic'>
              {' '}
              Ak vyznávame svoje hriechy, On je verný a spravodlivý, aby nám
              odpustil hriechy a očistil nás od všetkej neprávosti.
            </span>
          </p>
        </div>
      </section>
      {/* Spasenie pomocou sviatostí white lg and mob OK */}
      <section>
        <div className='text-justify text-[20px] flex flex-col gap-2 py-8 mx-4 lg:mx-16'>
          <p>
            Nie je to milosť Božia, za ktorú platíte svojou účasťou na
            sviatostiach. Muži, ženy aj deti sú od mladosti vedení veriť, že
            spasenie začína a končí v týchto obradoch. Všetkých sedem obradov je
            náhradou za jednoduchý akt viery v Pána Ježiša Krista. Satanov plán
            je vymeniť Krista a Jeho evanjelium milosti zadarmo za falzifikát
            evanjelia, kde ľudské úsilie môže človeka spasiť pomocou obradov.
            Tieto nebiblické obrady.
            <span className='italic'>
              {' '}
              Budú sa tváriť po bož ne, ale silu (pobožnosti) budú popierať. Aj
              od tých sa odvracaj.{' '}
            </span>
            <span className='text-[15px]'> Druhý Timotejovi 3:5 </span>
            Rímskokatolícky systém zaslúženej milosti je natoľko spletitý, že
            Pánovo prikázanie jednoducho veriť musí byť opäť slávnostne
            zopakované:
            <span className='italic'>
              {' '}
              Skutkom Božím je veriť v Toho, ktorého On poslal.{' '}
            </span>
            <span className='text-[15px]'> Ján 6:29 </span>
          </p>
        </div>
      </section>

      {/* Očistec black lg and mob OK */}
      <section className='bg-black text-white'>
        <div className='text-justify text-[20px] flex flex-col gap-2 mt-16 mx-4 lg:mx-16'>
          <h2 className='text-title text-center text-[30px] my-16'>Očistec</h2>
          <p>
            Ježiš ochotne zomrel za hriechy. Zomrel namiesto nás, aby zaplatil
            dlh, ktorý by sme sami nemohli nikdy zaplatiť.
            <span className='italic'>
              {' '}
              Na vlastnom tele vyniesol naše hriechy na drevo, aby sme odumreli
              hriechom a žili spravodlivosti; Jeho krvavé rany vás uzdravili.{' '}
            </span>
            <span className='text-[15px]'> Prvý Petrov 2:24 </span>
            Ako zničujúce je, keď katolíci veria v miesto, ktoré nie je nikde v
            Písme spomenuté, a ktoré nazývajú Očistec. Sú vyučovaní, aby verili,
            že nejakým spôsobom môžu byť očistení skrze utrpenie, aby dosiahli
            potrebný stupeň svätosti na vstup do neba.
          </p>
          <p>
            Pre pravých veriacich je obeť Ježiša Krista na Golgote úplne
            dostačujúca na to, aby mohla zaplatiť všetky hriechy.
            <span className='italic'>
              {' '}
              Veď inak by musel trpieť znovu a znovu od stvorenia sveta. A On sa
              zjavil raz pri skončení vekov, aby svojou obeťou zahladil hriech.{' '}
            </span>
            <span className='text-[15px]'> Židom 9:26 </span>
            <span className='italic'>
              {' '}
              Ktorého Boh dal ako prostriedok zmierenia skrze vieru, v Jeho
              krvi.{' '}
            </span>
            <span className='text-[15px]'> Rimanom 3:25 </span>
          </p>
          <p>
            Písmo Sväté objasňuje:
            <span className='italic'>
              {' '}
              Lebo odmena za hriech je smrť, ale Božím darom milosti je večný
              život v Kristovi Ježišovi, Pánovi našom.{' '}
            </span>
            <span className='text-[15px]'> Rimanom 6:23 </span>
            Tí, ktorí neprijali večný život, stoja tvárou v tvár rozsudku a
            peklu. Nie je žiadny biblický termín "medzistav", ktorý platí pre
            dušu.
            <span className='italic'>
              {' '}
              A ako je ľuďom uložené raz umrieť a potom príde súd.{' '}
            </span>
            <span className='text-[15px]'> Židom 9:27 </span>
          </p>
        </div>
      </section>
      {/* Očistec black table lg */}
      <section className='hidden text-[18px] bg-black text-white lg:flex justify-center px-12 gap-8 pt-16 pb-16'>
        <div className='w-[50%] border flex flex-col items-center mx-4 pb-4'>
          <h2 className='font-semibold text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <div className='mx-4 text-justify flex flex-col gap-4 mt-8'>
            <p>
              § 1030 Tí, čo zomierajú v Božej milosti a v priateľstve s Bohom,
              ale nie sú dokonale očistení, hoci sú si istí svojou večnou
              spásou, podstupujú po svojej smrti očisťovanie, aby dosiahli
              svätosť potrebnú na to, aby vošli do nebeskej radosti.
            </p>
            <p>
              § 1472 Každý hriech, aj všedný, má za následok nezdravé pripútanie
              k stvoreniam, ktoré potrebuje očistenie či už tu na zemi, alebo po
              smrti, v stave nazývanom očistec. Toto očistenie oslobodzuje od
              takzvaného „časného trestu“ za hriech.
            </p>

            <p>
              § 1475 V spoločenstve svätých „je nepochybne trvalé puto lásky a
              hojná výmena všetkých dobier medzi veriacimi, ktorí už dosiahli
              nebeskú vlasť alebo odpykávajú [svoje] viny v očistci, alebo ešte
              putujú na zemi“.
            </p>

            <p>
              § 1498 Odpustkami môžu veriaci získať pre seba i pre duše v
              očistci odpustenie časných trestov, ktoré sú následkami hriechov.
            </p>
          </div>
        </div>
        <div className='w-[50%] border flex flex-col items-center pb-4 mx-4'>
          <h2 className='font-semibold text-center  mt-4'>Biblia hovorí:</h2>
          <div className='mx-4  text-justify flex flex-col gap-4 mt-8'>
            <p>
              Židom 1:3
              <span className='italic'>
                {' '}
                Posadil sa na pravici Velebnosti na výsostiach, keď (prv)
                spôsobil očistenie od hriechov.
              </span>
            </p>
            <p>
              Prvý Jánov 1:7
              <span className='italic'>
                {' '}
                Ale ak chodíme vo svetle, ako On je vo svetle, máme spoločenstvo
                medzi sebou a krv Ježiša, Jeho Syna, nás očisťuje od každého
                hriechu.
              </span>
            </p>

            <p>
              Prvý Jánov 4:10
              <span className='italic'>
                {' '}
                V tom je láska, že nie my sme milovali Boha, ale že On miloval
                nás a poslal svojho Syna ako obeť zmierenia za naše hriechy.
              </span>
            </p>
            <p>
              Prvý Jánov 2:1-2
              <span className='italic'>
                {' '}
                Ale ak niekto zhreší, máme obhajcu u Otca, Ježiša Krista,
                spravodlivého. On je obeťou zmierenia za naše hriechy, a nielen
                za naše, ale aj za hriechy celého sveta.
              </span>
            </p>

            <p>
              Skutky apoštolov 8:20
              <span className='italic'>
                {' '}
                Odpovedal mu Peter: Nech zahynie tvoje striebro aj s tebou,
                pretože si sa nazdal, že za peniaze si nadobudneš dar Boží.
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* Očistec
 table mobile only */}
      <section className='flex flex-col bg-black text-white lg:hidden pt-8 gap-8 pb-8'>
        <div className='flex flex-col items-center justify-center mx-4'>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className='text-center mt-4'>
            § 1030 Tí, čo zomierajú v Božej milosti a v priateľstve s Bohom, ale
            nie sú dokonale očistení, hoci sú si istí svojou večnou spásou,
            podstupujú po svojej smrti očisťovanie, aby dosiahli svätosť
            potrebnú na to, aby vošli do nebeskej radosti.
          </p>
          <p className='text-center mt-4'>
            § 1472 Každý hriech, aj všedný, má za následok nezdravé pripútanie k
            stvoreniam, ktoré potrebuje očistenie či už tu na zemi, alebo po
            smrti, v stave nazývanom očistec. Toto očistenie oslobodzuje od
            takzvaného „časného trestu“ za hriech.
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
            Prvý Jánov 1:7
            <span className='italic'>
              {' '}
              Ale ak chodíme vo svetle, ako On je vo svetle, máme spoločenstvo
              medzi sebou a krv Ježiša, Jeho Syna, nás očisťuje od každého
              hriechu.
            </span>
          </p>

          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className='text-center mt-4'>
            § 1475 V spoločenstve svätých „je nepochybne trvalé puto lásky a
            hojná výmena všetkých dobier medzi veriacimi, ktorí už dosiahli
            nebeskú vlasť alebo odpykávajú [svoje] viny v očistci, alebo ešte
            putujú na zemi“.
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Prvý Jánov 4:10
            <span className='italic'>
              {' '}
              V tom je láska, že nie my sme milovali Boha, ale že On miloval nás
              a poslal svojho Syna ako obeť zmierenia za naše hriechy.
            </span>
          </p>
          <p className='text-center mt-4'>
            Prvý Jánov 2:1-2
            <span className='italic'>
              {' '}
              Ale ak niekto zhreší, máme obhajcu u Otca, Ježiša Krista,
              spravodlivého. On je obeťou zmierenia za naše hriechy, a nielen za
              naše, ale aj za hriechy celého sveta.
            </span>
          </p>

          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className='text-center mt-4'>
            § 1498 Odpustkami môžu veriaci získať pre seba i pre duše v očistci
            odpustenie časných trestov, ktoré sú následkami hriechov.
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Skutky apoštolov 8:20
            <span className='italic'>
              {' '}
              Odpovedal mu Peter: Nech zahynie tvoje striebro aj s tebou,
              pretože si sa nazdal, že za peniaze si nadobudneš dar Boží.
            </span>
          </p>
        </div>
      </section>
      {/* Očistec
 black lg and mob OK */}
      <section className='bg-black text-white'>
        <div className='text-justify text-[20px] flex flex-col gap-2 pb-16 mx-4 lg:mx-16'>
          <p>
            Aký hrozný je to klam, ktorý je uvalený na veriacich. Skutočným
            dôvodom a účelom prečo sa Ježiš Kristus stal človekom a trpel
            bolestivou smrťou bolo, aby odčinil hriech raz a navždy svoju
            vlastnou dokonalou obeťou. Ako môže akákoľvek cirkev, ktorá
            vyhlasuje, že nasleduje Ježiša Krista, odoprieť túto pravdu od
            svojho ľudu?
          </p>
        </div>
      </section>

      {/* Očistec white OUTRO white lg and mob OK */}
      <section>
        <div className='text-justify text-[20px] flex flex-col gap-2 py-8 mx-4 lg:mx-16'>
          <p>
            Nielenže rímskokatolícka cirkev odmieta znalosť Kristovej dokončenej
            práce na kríži, išla ešte viac do extrému vytvorením neexistujúceho
            miesta, zvaného očistec, ktorý podľa svojho učenia ruší Spasiteľovu
            dokončenú prácu.
            <span className='italic'>
              {' '}
              Len potom povedal: Ajhľa, idem, aby som plnil Tvoju vôľu. Ruší
              prvé, aby ustanovil druhé. Podľa tejto vôle sme posvätení tým, že
              Ježiš Kristus raz navždy obetoval svoje telo.
            </span>
            <span className='text-[15px]'> Židom 10:9-10 </span>
          </p>
        </div>
      </section>

      <span className='font-bold'></span>
      <span className='font-bold'></span>

      <span className='italic'> </span>
      <span className='text-[15px]'> </span>
      <span className='italic'> </span>
      <span className='text-[15px]'> </span>
    </>
  )
}

export default Spasenie
