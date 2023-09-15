import React from 'react'
import HeaderTransparent from '../components/HeaderTransparent'

const Hriech = () => {
  return (
    <>
      <HeaderTransparent />
      {/* Hriech*/}

      <main>
        <div className='hriech-pic flex h-[450px] lg:h-[850px] -mt-[25%] lg:-mt-[155px]'></div>
        <div className='flex flex-col text-[20px] justify-center mx-4 lg:mx-16 -mt-[125px] lg:-mt-[425px] gap-8 pb-8'>
          <h1 className='text-[#98724c] lg:text-title1 text-center text-[35px]'>
            Hriech
          </h1>
          <div className='text-justify flex flex-col gap-2 mt-8'>
            <p>
              Rímskokatolícka cirkev rozdeľuje hriechy do dvoch skupín a robí
              rozdiel medzi "smrteľným" hriechom a "ľahkým". Smrteľný hriech je
              popísaný ako vážny, ktorý musí byť vyznaný kňazovi, aby bol
              hriešnik zmierený s Bohom a cirkvou. Na druhej strane ľahké
              hriechy sú malé, ľahké prehrešky voči Bohu alebo nášmu susedovi.
              Medzi kňazmi neexistuje žiadna presná dohoda, ktoré hriechy sú
              smrteľné a ktoré sú ľahké. Medzi duchovenstvom a laikmi také
              rozlíšenie však existuje. Čo je pre jedného hriech ľahký, pre
              druhého už môže byť smrteľný.
            </p>
            <p>
              Písané Slovo Božie nám ukazuje, že my všetci sme hriešni. Biblia
              je v tomto učiteľom, ktorý nás vedie k dokonalému ospravedlneniu
              skrze Ježiša Krista. Bez zapísaného záznamu Božích prikázaní by
              sme sa uchýlili k vlastnému svedomiu a diktátu tých, ktorí
              definujú, čo je správne a zlé. Je naliehavé, aby ste rozumeli, čo
              je hriech a čo je po vás vyžadované. Ak ste vyučovaní, že sú rôzne
              stupne hriechu a odlišný spôsob, ako odstrániť toto bremeno
              hriechu, musíte sa sami uistiť, že tá autorita, ktorej sa
              podrobujete je správna.
            </p>
            <p>
              Tvrdenie, že nejaké hriechy sú väčšie ako iné, predbieha tá
              najdôležitejšia sporná otázka, ako je táto: Je tu čokoľvek, čo
              môžete urobiť za svoj hriech?
            </p>
          </div>
        </div>
      </main>
      {/* Ľahký hriech */}
      <section className='flex flex-col text-[20px] justify-center mx-4 lg:mx-16  mt-8 gap-8 pb-8'>
        <h1 className='text-title text-center text-[35px]'>Ľahký hriech</h1>
        <div className='text-justify flex flex-col gap-2 mt-8'>
          <p>
            Podľa katechizmu katolíckej cirkvi sú ľahké hriechy považované za
            menší priestupok voči Bohu ako hriechy smrteľné. Ľahké hriechy sú
            také poklesky, ktoré sú buď z neznalosti alebo bez priameho zámeru
            ublížiť. Na nápravu týchto hriechov katechizmus tvrdí, že páchateľ
            musí urobiť individuálne dobré skutky a nemusí ich ďalej vyznávať
            kňazovi.
          </p>
          <p>
            Podľa katechizmu smrteľný hriech odstraňuje človeka od Božej
            milosti, a preto vyčleňuje takéto ľahšie hriechy, aby mal jedinec
            možnosť zostávať pod Božou milosťou aj po spáchaní ľahšieho hriechu.
            Môžeme teda predpokladať, že ak každý podľa svojho názoru (svojej
            vlastnej interpretácie), spácha počas svojho života iba ľahký
            hriech, je uistený o nasledujúcom dedičstve večného života.
          </p>

          <p>
            Biblia však nepozná žiadny pojem "ľahký" hriech.
            <span className='italic'>
              {' '}
              A tak: kto vie dobre robiť, a nerobí, má hriech.{' '}
            </span>
            <span className='text-[15px]'> Jakubov 4:17 </span>
            <span className='italic'>
              {' '}
              Všetci totiž zhrešili a nemajú slávy Božej.{' '}
            </span>
            <span className='text-[15px]'> Rimanom 3:23 </span>
            <span className='italic'>
              {' '}
              Lebo odmena za hriech je smrť, ale Božím darom milosti je večný
              život v Kristovi Ježišovi, Pánovi našom.
            </span>
            <span className='text-[15px]'> Rimanom 6:23 </span>
          </p>
          <p>
            Poďme sa teda spoločne pozrieť, čo Písmo Sväté hovorí ohľadom
            hriechu a jeho dôsledkov.
          </p>
        </div>
      </section>
      {/* Ľahký hriech table lg */}
      <section className='hidden text-[18px] lg:flex justify-center mx-12 mt-8 gap-8 pb-8'>
        <div className='w-[50%] border flex flex-col items-center mx-4 pb-4'>
          <h2 className='font-semibold text-center mt-4'>
            Katechizmus hovorí:
          </h2>
          <div className='mx-4 text-justify font-semibold flex flex-col gap-4 mt-8'>
            <p>
              § 1862 Všedný hriech spácha človek vtedy, keď v nezávažnej veci
              nezachová mieru predpísanú morálnym zákonom alebo keď neposlúchne
              morálny zákon vo vážnej veci, ale bez plného poznania a úplného
              súhlasu.
            </p>
            <p>
              § 1863 Všedný hriech neruší zmluvu s Bohom. S pomocou Božej
              milosti ho možno napraviť. „Nepozbavuje posväcujúcej milosti,
              priateľstva s Bohom ani lásky, a teda ani večnej blaženosti.“
            </p>
            <p>
              § 1875 Všedný hriech je morálna nezriadenosť možno ju napraviť
              láskou, ktorú v nás všedný hriech ponecháva.
            </p>
          </div>
        </div>
        <div className='w-[50%] border flex flex-col items-center pb-4 mx-4'>
          <h2 className='font-semibold text-center mt-4'>Biblia hovorí:</h2>
          <div className='mx-4 text-justify font-semibold flex flex-col gap-4 mt-8'>
            <p>
              1. Jána 3:4
              <span className='italic'>
                {' '}
                Každý, kto pácha hriech, koná aj proti zákonu; hriech je predsa
                prestúpením zákona.
              </span>
            </p>
            <p>
              Izaiáš 59:2
              <span className='italic'>
                {' '}
                Ale vaše neprávosti sa stali hrádzou medzi vami a vaším Bohom!
                Vaše hriechy zakryli Jeho tvár pred vami, takže nepočuje.{' '}
              </span>
            </p>
            <p>
              Rimanom 6:23
              <span className='italic'>
                {' '}
                Lebo odmena za hriech je smrť, ale Božím darom milosti je večný
                život v Kristovi Ježišovi, Pánovi našom.
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* Ľahký hriech table mobile only */}
      <section className='flex flex-col lg:hidden mt-8 gap-8 pb-8'>
        <div className='flex flex-col items-center justify-center mx-4'>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className=' text-center mt-4'>
            § 1862 Všedný hriech spácha človek vtedy, keď v nezávažnej veci
            nezachová mieru predpísanú morálnym zákonom alebo keď neposlúchne
            morálny zákon vo vážnej veci, ale bez plného poznania a úplného
            súhlasu.
          </p>

          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className=' text-center mt-4'>
            Jakuba 2:10
            <span className='italic'>
              {' '}
              Lebo keby niekto celý zákon zachoval, ale previnil by sa v jednom
              (prikázaní), previnil sa proti všetkým.
            </span>
          </p>
          <p className=' text-center mt-4'>
            1. Jána 3:4
            <span className='italic'>
              {' '}
              Každý, kto pácha hriech, koná aj proti zákonu; hriech je predsa
              prestúpením zákona.{' '}
            </span>
          </p>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>

          <p className='text-center mt-4'>
            § 1863 Všedný hriech neruší zmluvu s Bohom. S pomocou Božej milosti
            ho možno napraviť. „Nepozbavuje posväcujúcej milosti, priateľstva s
            Bohom ani lásky, a teda ani večnej blaženosti.“
          </p>

          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>

          <p className=' text-center mt-4'>
            Izaiáš 59:2
            <span className='italic'>
              {' '}
              Ale vaše neprávosti sa stali hrádzou medzi vami a vaším Bohom!
              Vaše hriechy zakryli Jeho tvár pred vami, takže nepočuje.
            </span>
          </p>

          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>

          <p className='text-center mt-4'>
            § 1875 Všedný hriech je morálna nezriadenosť možno ju napraviť
            láskou, ktorú v nás všedný hriech ponecháva.
          </p>

          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>

          <p className=' text-center mt-4'>
            Rimanom 6:23
            <span className='italic'>
              {' '}
              Lebo odmena za hriech je smrť, ale Božím darom milosti je večný
              život v Kristovi Ježišovi, Pánovi našom.
            </span>
          </p>
        </div>
      </section>
      {/*Ľahký hriech lg and mob OK */}
      <section>
        <div className='text-justify text-[20px] flex flex-col gap-2 mx-4 lg:mx-16'>
          <p>
            Písmo nám bolo dané tak, aby sme mohli vedieť, čím je náš hriešny
            stav pred Svätým Bohom. Sama Biblia sa opisuje ako zrkadlo, ktoré
            odráža pravdu a našu vážnu potrebu byť ospravedlnení.
            <span className='italic'>
              {' '}
              Lebo slovo Božie je živé a mocné a je ostrejšie než ktorýkoľvek
              dvojsečný meč a preniká až do rozdelenia duše a ducha, kĺbov a
              špikov a je schopné posudzovať hnutie a zmýšľanie srdca.{' '}
            </span>
            <span className='text-[15px]'> Židom 4:12 </span>
          </p>
          <p>
            Ježiš počas svojej pozemskej služby zvýšil ešte požiadavky Zákona
            deklarovaním nášho nevhodného zmýšľania a citov ako hriechov.
            Premenný stupeň hriešnosti v našich životoch nemá nič spoločné so
            spasením. Je to hriech, je jedno ako malý, ktorý nás kvalifikuje pre
            večné odsúdenie do pekelného ohňa. Keď človek posudzuje podľa svojho
            uváženia, ktorý hriech je len "ľahký", odcudzuje sa pravde Božieho
            Slova.
          </p>
          <p>
            Ak hovoríme, že nemáme hriech, sami seba klameme a nie je v nás
            pravda.
            <span className='italic'>
              {' '}
              Ak vyznávame svoje hriechy, On je verný a spravodlivý, aby nám
              odpustil hriechy a očistil nás od všetkej neprávosti. Ak hovoríme,
              že sme nezhrešili, Jeho robíme klamárom, a Jeho slovo v nás
              neprebýva.{' '}
            </span>
            <span className='text-[15px]'> 1. Jána 1:8-10 </span>
          </p>
          <p>
            <span className='italic'>
              {' '}
              Preto kajajte sa a obráťte, aby vám boli zahladené hriechy, prišli
              vám časy duchovného osvieženia od Pána.{' '}
            </span>
            <span className='text-[15px]'> Skutky apoštolov 3:19-20 </span>
          </p>
        </div>
      </section>

      {/*Interrupcia black lg and mob OK */}
      <section className='bg-black text-white'>
        <div className='text-justify text-[20px] flex flex-col gap-2 mt-16 mx-4 lg:mx-16'>
          <h2 className='text-title text-center text-[30px] my-16'>
            Interrupcia
          </h2>
          <p>
            Pretože je v dnešnej dobe interrupcia bežná, je takmer isté, že
            mnoho katolíkov sa tohto zúčastnilo. Hoci Písmo Sväté nenazýva tento
            špecifický hriech menom, katechizmus katolíckej cirkvi identifikuje
            tento zvláštny hriech ako najťažší.
          </p>
          <p>
            Od doby nátlaku za legalizáciu interrupcie, mnoho katolíkov a
            biblicky-veriacich kresťanských skupín stálo ruka v ruke v odpore
            voči tejto praxi. Katolíci a protestanti súhlasia, že toto je
            morálne zlé a obidve skupiny rozpoznávajú vážnosť tohto hriechu.
            Avšak je významnejší rozdiel medzi tým ako katechizmus jedná s týmto
            druhom hriechu a ako sa naňho pozerá Biblia.
          </p>
          <p>
            Ak ste v živote prešli interrupciou a pocítili ste odsúdenie a
            odmietnutie rímskokatolíckej cirkvi, prosím vás, poďte sa spolu so
            mnou pozrieť k Písmu Svätému a napite sa z fontány pravdy, pri
            ktorej môžete nájsť mier a občerstvenie pre vašu unavenú a kajúcnu
            dušu.
          </p>
        </div>
      </section>
      {/* Interrupcia black table lg */}
      <section className='hidden text-[18px] bg-black text-white lg:flex justify-center px-12 gap-8 pt-16 pb-16'>
        <div className='w-[50%] border flex flex-col items-center mx-4 pb-4'>
          <h2 className='font-semibold text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <div className='mx-4 text-justify flex flex-col gap-4 mt-8'>
            <p>
              § 2272 Formálna (vedomá a dobrovoľná, a nie iba materiálna)
              spolupráca pri potrate je ťažký hriech. Cirkev trestá tento zločin
              proti ľudskému životu kánonickým trestom exkomunikácie. „Kto
              zapríčiní potrat, ktorý skutočne nastane, upadne do exkomunikácie.
            </p>
            <p>
              § 2322 Dieťa má už od svojho počatia právo na život. Priamy
              potrat, to znamená chcený ako cieľ alebo ako prostriedok, je
              „hanebný čin“, ktorý závažne protirečí morálnemu zákonu. Tento
              zločin proti ľudskému životu stíha Cirkev kánonickým trestom
              exkomunikácie.
            </p>
            <p>
              § 1463 Niektoré zvlášť ťažké hriechy sa trestajú exkomunikáciou,
              najprísnejším cirkevným trestom, ktorý nedovoľuje prijímať
              sviatosti a vykonávať niektoré cirkevné úkony.
            </p>
            <p>
              § 1129 Cirkev tvrdí, že sviatosti Novej zmluvy sú pre veriacich
              nevyhnutne potrebné na spásu.
            </p>
          </div>
        </div>
        <div className='w-[50%] border flex flex-col items-center pb-4 mx-4'>
          <h2 className='font-semibold text-center  mt-4'>Biblia hovorí:</h2>
          <div className='mx-4  text-justify flex flex-col gap-4 mt-8'>
            <p>
              Ján 1:29
              <span className='italic'>
                {' '}
                Keď druhého dňa videl (Ján) Ježiša, ako prichádza k nemu,
                povedal: Ajhľa, Baránok Boží, ktorý sníma hriech sveta.
              </span>
            </p>
            <p>
              Rimanom 6:23
              <span className='italic'>
                {' '}
                Lebo odmena za hriech je smrť, ale Božím darom milosti je večný
                život v Kristovi Ježišovi, Pánovi našom.
              </span>
            </p>
            <p>
              1. Jána 1:9
              <span className='italic'>
                {' '}
                Ak vyznávame svoje hriechy, On je verný a spravodlivý, aby nám
                odpustil hriechy a očistil nás od všetkej neprávosti.
              </span>
            </p>
            <p>
              2. Korintským 5:21
              <span className='italic'>
                {' '}
                Toho, ktorý nepoznal hriech, urobil hriechom za nás, aby sme my
                boli v Ňom spravodlivosťou pred Bohom.
              </span>
            </p>

            <p>
              Matúš 12:31
              <span className='italic'>
                {' '}
                Preto vravím vám: Každý hriech i rúhanie odpustí sa ľuďom.
              </span>
            </p>

            <p>
              Efezským 2:8-9
              <span className='italic'>
                {' '}
                Lebo milosťou ste spasení skrze vieru. A to nie sami zo seba; je
                to dar Boží; nie zo skutkov, aby sa nikto nechválil.
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* Interrupcia
 table mobile only */}
      <section className='flex flex-col bg-black text-white lg:hidden pt-8 gap-8 pb-8'>
        <div className='flex flex-col items-center justify-center mx-4'>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className='text-center mt-4'>
            § 2272 Formálna (vedomá a dobrovoľná, a nie iba materiálna)
            spolupráca pri potrate je ťažký hriech. Cirkev trestá tento zločin
            proti ľudskému životu kánonickým trestom exkomunikácie. „Kto
            zapríčiní potrat, ktorý skutočne nastane, upadne do exkomunikácie.
          </p>
          <p className='text-center mt-4'>
            § 2322 Dieťa má už od svojho počatia právo na život. Priamy potrat,
            to znamená chcený ako cieľ alebo ako prostriedok, je „hanebný čin“,
            ktorý závažne protirečí morálnemu zákonu. Tento zločin proti
            ľudskému životu stíha Cirkev kánonickým trestom exkomunikácie.
          </p>

          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Ján 1:29
            <span className='italic'>
              {' '}
              Keď druhého dňa videl (Ján) Ježiša, ako prichádza k nemu, povedal:
              Ajhľa, Baránok Boží, ktorý sníma hriech sveta.
            </span>
          </p>
          <p className='text-center mt-4'>
            Rimanom 6:23
            <span className='italic'>
              {' '}
              Lebo odmena za hriech je smrť, ale Božím darom milosti je večný
              život v Kristovi Ježišovi, Pánovi našom.
            </span>
          </p>
          <p className='text-center mt-4'>
            1. Jána 1:9
            <span className='italic'>
              {' '}
              Ak vyznávame svoje hriechy, On je verný a spravodlivý, aby nám
              odpustil hriechy a očistil nás od všetkej neprávosti.
            </span>
          </p>

          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className='text-center mt-4'>
            § 1463 Niektoré zvlášť ťažké hriechy sa trestajú exkomunikáciou,
            najprísnejším cirkevným trestom, ktorý nedovoľuje prijímať sviatosti
            a vykonávať niektoré cirkevné úkony.
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            2. Korintským 5:21
            <span className='italic'>
              {' '}
              Toho, ktorý nepoznal hriech, urobil hriechom za nás, aby sme my
              boli v Ňom spravodlivosťou pred Bohom.
            </span>
          </p>

          <p className='text-center mt-4'>
            Matúš 12:31
            <span className='italic'>
              {' '}
              Preto vravím vám: Každý hriech i rúhanie odpustí sa ľuďom.
            </span>
          </p>

          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className='text-center mt-4'>
            § 1129 Cirkev tvrdí, že sviatosti Novej zmluvy sú pre veriacich
            nevyhnutne potrebné na spásu.
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Efezským 2:8-9
            <span className='italic'>
              {' '}
              Lebo milosťou ste spasení skrze vieru. A to nie sami zo seba; je
              to dar Boží; nie zo skutkov, aby sa nikto nechválil.
            </span>
          </p>
        </div>
      </section>
      {/* Interrupcia
 black lg and mob OK */}
      <section className='bg-black text-white'>
        <div className='text-justify text-[20px] flex flex-col gap-2 pb-16 mx-4 lg:mx-16'>
          <p>
            Ako sme videli v Písme, Boh je milosrdný a plný zľutovania, dokonca
            aj k tým, ktorí sú zosobášení hanebnému hriechu. Verím, že ste
            videli aj tú priepasť, ktorou sa rozdeľujú pohľady katechizmu a
            Biblie. Na jednej strane je povedané, že interrupcia je smrteľný
            hriech, ktorý potrebuje byť vyznaný kňazovi. Táto spoveď musí byť
            vykonaná, aby sa katolík mohol riadne zúčastňovať večnej a
            "životodarnej sviatosti" Eucharistie. Potom na druhej strane
            katechizmus vynáša súd vylúčenia z cirkvi nad tými, ktorí sa
            zúčastňujú interrupcie a dostávajú zákaz prijímania tejto
            "životodarnej sviatosti."
          </p>
          <p>
            Každý hriech nás oddeľuje od večného a životodarného Boha. Boh
            neoddelil hriech interrupcie a neodoprel svoju spasiteľnú milosť
            tým, ktorí upadli na takú cestu. Biblia zaznamenáva vražedné životy
            apoštola Pavla (Skutky apoštolov 26:10), Mojžiša (Skutky apoštolov
            7:28) a dokonca aj muža podľa Božieho srdca kráľa Dávida (2.
            Samuelova 11). Každý z nich bral nevinné životy. Preto každý z nich
            potreboval Boha svojho Spasiteľa.
          </p>
          <p>
            Len Boh ponúka večný život. Nebuďte oklamaní náukami ľudí. Boh mocou
            Svojho Ducha Svätého dáva usvedčenie z hriechu. Obráťte sa k Nemu a
            verte, že On zaplatil plnú cenu za vaše hriechy ako v minulosti, tak
            v prítomnosti, ako aj budúcnosti. Toto je milosť Božia,
            <span className='italic'>
              {' '}
              otvárať im oči, aby sa obrátili od tmy ku svetlu a od diabolskej
              moci k Bohu a tak dosiahli odpustenie hriechov a podiel s tými, čo
              sú posvätení vierou vo mňa.
            </span>
            <span className='text-[15px]'> Skutky apoštolov 26:18 </span>
            <span className='italic'>
              {' '}
              I Riekol Ježiš Židom, ktorí uverili: Ak vy zostanete v mojom
              slove, ste naozaj moji učeníci. A poznáte pravdu a pravda vás
              vyslobodí.{' '}
            </span>
            <span className='text-[15px]'> Ján 8:31-32 </span>
          </p>
        </div>
      </section>

      {/* Smrteľný hriech white lg and mob OK */}
      <section>
        <div className='text-justify text-[20px] flex flex-col gap-2 py-8 mx-4 lg:mx-16'>
          <h2 className='text-title text-center text-[30px] mt-4 mb-8'>
            Smrteľný hriech{' '}
          </h2>

          <p>
            Katechizmus katolíckej cirkvi vážne pojednáva so smrteľným alebo
            ťažkým hriechom. Podľa katechizmu všetci tí, ktorí sa dopustia
            smrteľného hriechu bez vyznania kňazovi, sú odsúdení do pekla. Pre
            istotu, aby sa toto nestalo, katolíci musia podrobne vyznať všetky
            smrteľné hriechy katolíckemu kňazovi, ktorý rozhodne, aké pokánie
            bude požadované. Toto vyznanie má byť urobené najmenej raz za rok,
            aby veriaci mohol ísť k sviatosti Eucharistie (pozri kapitolu
            Spoveď). Účasť na Eucharistii a všetkých sviatostiach je podľa
            katechizmu nutná pre spásu človeka. Katolícky katechizmus v § 1129
            hovorí: “Cirkev tvrdí, že sviatosti Novej zmluvy sú pre veriacich
            nevyhnutne potrebné na spásu.”
          </p>
          <p>
            Každý, kto študuje Písmo, rovnako ako katechizmus, čoskoro porozumie
            závažnosti hriechu. Avšak v týchto dvoch dokumentoch sú odlišne
            popísané dôsledky hriechu. Biblia definuje náš hriech a vedie nás k
            Ježišovi Kristovi, bez ktorého by sme boli stratení. Na druhej
            strane, rímskokatolícka cirkev definuje hriech tak, aby bol
            zachovaný sviatostný systém. Písma nás vedú k tomu, aby sme videli,
            ako potrebujeme Spasiteľa na získanie večného života, zatiaľ čo
            katechizmus nás vedie ku kňazovi a sviatostiam, ktoré tu sú za
            účelom získať nádej na večný život.
          </p>
          <p>
            Otázka, ktorá potrebuje vyvstať vo vašom srdci nie je tá, aké to sú
            smrteľné hriechy, ale skôr, čo budete robiť so všetkými svojimi
            hriechmi?
          </p>
        </div>
      </section>
      {/* Smrteľný hriech table lg */}
      <section className='hidden text-[18px]  lg:flex justify-center mx-12 mt-8 gap-8 pb-8'>
        <div className='w-[50%] border flex flex-col items-center mx-4 pb-4'>
          <h2 className='font-semibold text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <div className='mx-4 text-justify font-semibold flex flex-col gap-4 mt-8'>
            <p>
              § 1855 Smrteľný hriech – vážnym prestúpením Božieho zákona – ničí
              v srdci človeka lásku.
            </p>

            <p>
              {' '}
              § 1861 Má za následok stratu Božej lásky a zbavuje posväcujúcej
              milosti čiže stavu milosti. Ak nie je napravený ľútosťou a Božím
              odpustením, spôsobuje vylúčenie z Božieho kráľovstva a večnú smrť
              v pekle.
            </p>
            <p>
              § 1033 Zomrieť v smrteľnom hriechu, ak sme ho neoľutovali a ak sme
              nedosiahli Božiu milosrdnú lásku, znamená zostať navždy odlúčenými
              od Boha vinou našej slobodnej voľby. A tento stav definitívneho
              vylúčenia seba zo spoločenstva s Bohom a s blaženými sa označuje
              slovom „peklo“.
            </p>
            <p>
              § 1874 Smrteľný hriech v nás ničí lásku; bez ktorej nie je možná
              večná blaženosť. Ak ho hriešnik neoľutuje, má za následok večnú
              smrť.
            </p>
            <p>
              § 1035 Duše tých, čo zomierajú v stave smrteľného hriechu,
              zostupujú hneď po smrti do pekla, kde trpia pekelné muky, „večný
              oheň“.
            </p>
            <p>
              § 1033 Nemôžeme byť zjednotení s Bohom, ak sa slobodne
              nerozhodneme milovať ho. Nemôžeme však milovať Boha, ak ťažko
              hrešíme proti nemu, proti svojmu blížnemu alebo proti sebe samým.
            </p>
          </div>
        </div>
        <div className='w-[50%] border flex flex-col items-center pb-4 mx-4'>
          <h2 className='font-semibold text-center mt-4'>Biblia hovorí:</h2>
          <div className='mx-4 text-justify font-semibold flex flex-col gap-4 mt-8'>
            <p>
              1. Jána 3:4
              <span className='italic'>
                {' '}
                Každý, kto pácha hriech, koná aj proti zákonu; hriech je predsa
                prestúpením zákona.
              </span>
            </p>

            <p>
              Jakuba 2:10
              <span className='italic'>
                {' '}
                Lebo keby niekto celý zákon zachoval, ale previnil by sa v
                jednom (prikázaní), previnil sa proti všetkým.
              </span>
            </p>
            <p>
              Rimanom 3:23
              <span className='italic'>
                {' '}
                Všetci totiž zhrešili a nemajú slávy Božej.
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
              Rimanom 5:21
              <span className='italic'>
                {' '}
                Aby tak, ako hriech zavládol nad smrťou, aj milosť panovala nad
                spravodlivosťou k večnému životu skrze nášho Pána Ježiša Krista.
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
              1. Jána 4:19
              <span className='italic'>
                {' '}
                My milujeme, lebo On nás miloval ako prvý.
              </span>
            </p>
            <p>
              1. Jána 4:10
              <span className='italic'>
                {' '}
                V tom je láska, že nie my sme milovali Boha, ale že On miloval
                nás a poslal svojho Syna ako obeť zmierenia za naše hriechy.
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* Smrteľný hriech table mobile only */}
      <section className='flex flex-col lg:hidden mt-8 gap-8 pb-8'>
        <div className='flex flex-col items-center justify-center mx-4'>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className=' text-center mt-4'>
            § 1855 Smrteľný hriech – vážnym prestúpením Božieho zákona – ničí v
            srdci človeka lásku.
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            1. Jána 3:4
            <span className='italic'>
              {' '}
              Každý, kto pácha hriech, koná aj proti zákonu; hriech je predsa
              prestúpením zákona.
            </span>
          </p>

          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className=' text-center mt-4'>
            § 1861 Má za následok stratu Božej lásky a zbavuje posväcujúcej
            milosti čiže stavu milosti. Ak nie je napravený ľútosťou a Božím
            odpustením, spôsobuje vylúčenie z Božieho kráľovstva a večnú smrť v
            pekle.
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Jakuba 2:10
            <span className='italic'>
              {' '}
              Lebo keby niekto celý zákon zachoval, ale previnil by sa v jednom
              (prikázaní), previnil sa proti všetkým.
            </span>
          </p>
          <p className='text-center mt-4'>
            Rimanom 3:23
            <span className='italic'>
              {' '}
              Všetci totiž zhrešili a nemajú slávy Božej.
            </span>
          </p>

          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className=' text-center mt-4'>
            § 1033 Zomrieť v smrteľnom hriechu, ak sme ho neoľutovali a ak sme
            nedosiahli Božiu milosrdnú lásku, znamená zostať navždy odlúčenými
            od Boha vinou našej slobodnej voľby. A tento stav definitívneho
            vylúčenia seba zo spoločenstva s Bohom a s blaženými sa označuje
            slovom „peklo“.
          </p>
          <p className=' text-center mt-4'>
            § 1874 Smrteľný hriech v nás ničí lásku; bez ktorej nie je možná
            večná blaženosť. Ak ho hriešnik neoľutuje, má za následok večnú
            smrť.
          </p>
          <p className=' text-center mt-4'>
            § 1035 Duše tých, čo zomierajú v stave smrteľného hriechu, zostupujú
            hneď po smrti do pekla, kde trpia pekelné muky, „večný oheň“.
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
            Rimanom 5:21
            <span className='italic'>
              {' '}
              Aby tak, ako hriech zavládol nad smrťou, aj milosť panovala nad
              spravodlivosťou k večnému životu skrze nášho Pána Ježiša Krista.
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
          <p className=' text-center mt-4'>
            § 1033 Nemôžeme byť zjednotení s Bohom, ak sa slobodne nerozhodneme
            milovať ho. Nemôžeme však milovať Boha, ak ťažko hrešíme proti nemu,
            proti svojmu blížnemu alebo proti sebe samým.
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            1. Jána 4:19
            <span className='italic'>
              {' '}
              My milujeme, lebo On nás miloval ako prvý.
            </span>
          </p>
          <p className='text-center mt-4'>
            1. Jána 4:10
            <span className='italic'>
              {' '}
              V tom je láska, že nie my sme milovali Boha, ale že On miloval nás
              a poslal svojho Syna ako obeť zmierenia za naše hriechy.
            </span>
          </p>
        </div>
      </section>
      {/* Smrteľný hriech  white lg and mob OK */}
      <section>
        <div className='text-justify text-[20px] flex flex-col gap-2 py-8 mx-4 lg:mx-16'>
          <p>
            Koncepty smrteľného hriechu a jeho dôsledky rímskokatolíckej cirkvi
            majú schopnosť zotročiť ľútostivého hriešnika diktátu cirkvi. Keď
            katolícka cirkev nepredstavuje žiadnu jednoznačnú definíciu
            smrteľného hriechu, je osoba úplne v rukách kňaza, aby definoval
            krutosť jeho hriechu a jeho pokánie, práve tak, ako jeho odpustenie.
          </p>
          <p>
            Biblia jednoducho hovorí:
            <span className='italic'> Lebo odmena za hriech je smrť.</span>
            <span className='text-[15px]'> Rimanom 6:23 </span>V tomto verši
            apoštol Pavol nehovorí o zvláštnom druhu hriechu, ale všetkom
            hriechu. Prorok Ezechiel hovorí:
            <span className='italic'> Osoba, ktorá hreší, zomrie! </span>
            <span className='text-[15px]'> Ezechiel 18:4 </span>
            Keď Jakub povedal,
            <span className='italic'>
              {' '}
              Lebo keby niekto celý zákon zachoval, ale previnil by sa v jednom
              (prikázaní), previnil sa proti všetkým.{' '}
            </span>
            <span className='text-[15px]'> Jakub 2:10, </span>
            nemyslel tým, že osoba, ktorá sa dopustí jediného hriechu je vinná
            všetkými ďalšími druhmi hriechu, ale že aj jediný hriech zavrie
            cestu do neba. Brána do neba bola uzavretá kvôli nášmu hriechu.
            Biblia hovorí,
            <span className='italic'>
              {' '}
              Všetci totiž zhrešili a nemajú slávy Božej.{' '}
            </span>
            <span className='text-[15px]'> Rimanom 3:23 </span>
            Od pádu Adama bolo ľudstvo odcudzené Bohu a všetci zúfalo
            potrebovali Spasiteľa. My všetci sme vinní smrteľným hriechom, ktorý
            nás oddelil od Boha, a sme vo svojich možnostiach beznádejní. Nie je
            žiadnej inštitúcie alebo človeka, ktorý nám môže udeliť večný život.
            To je dôvod prečo Ježiš Kristus prišiel na tento svet a žil
            bezhriešny život a potom dal Svoj život ochotne ako výkupné za
            hriechy všetkých ľudí, kto v Neho samotného veria.
            <span className='italic'>
              {' '}
              Toho, ktorý nepoznal hriech, urobil hriechom za nás, aby sme my
              boli v Ňom spravodlivosťou pred Bohom.{' '}
            </span>
            <span className='text-[15px]'> 2. Korintským 5:21 </span>
          </p>
          <p>
            Keď spoznáte, že ste smrteľne hriešny človek, je to práca Ducha
            Svätého, ktorý vás usvedčuje. Vaša záchrana nespočíva vo vašej
            spovedi hriechov, či pokusoch ich svojou vlastnou silou napraviť.
            Vaša záchrana spočíva výhradne v obetnej smrti Ježiša Krista na
            golgotskom kríži. Volajte k Bohu o záchranu v mene Pána Ježiša
            Krista:
            <span className='italic'>
              {' '}
              Každý človek totiž, ktorý by vzýval meno Pánovo, bude spasený.{' '}
            </span>
            <span className='text-[15px]'> Rímskym 10:13 </span>
            Záchrana duše je daná priamo a milosťou.
          </p>
          <p>
            <span className='italic'>
              {' '}
              Ó Pane, Ty mi otvor pery, nech moje ústa Tvoju chválu zvestujú.
              Lebo Ty nemáš záľubu v zábitku, a keby som ti obetoval zápal,
              nepáčil by sa Ti. Bohu milou obeťou je duch skrúšený; Ty, Bože,
              nepohŕdaš srdcom skrúšeným a zdrveným.{' '}
            </span>
            <span className='text-[15px]'> Žalmy 51:17-19 </span>
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

export default Hriech
