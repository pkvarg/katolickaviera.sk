import React from 'react'
import Header from '../components/Header'

const Omsa = () => {
  return (
    <>
      <Header />
      <main className=''>
        <div className='omsa-pic lg:flex h-[1000px] -mt-[50%] md:-mt-[75%] lg:-mt-[38%] xl:-mt-[16%] 2xl:-mt-[8%]'></div>
        <div className='text-black flex flex-col lg:flex-row mx-4 lg:mx-8'>
          <div className='flex flex-col align-center mx-4'>
            <h1 className='text-title3 text-center text-[35px] -mt-[155%] md:-mt-[45%] lg:-mt-[22%] xl:-mt-[40%] 2xl:-mt-[30%]'>
              Omša
            </h1>
            <div className='text-justify flex flex-col gap-2 mt-16 text-[20px]'>
              <p>
                "Svätá obeť omše" je centrom a najsvätejším aktom uctievania pre
                katolíkov. Katechizmus učí, že počas omše kňaz premieňa svojou
                mocou oblátku a víno prednesené na oltár vo fyzické telo, krv a
                božstvo Ježiša Krista. Takto novo vtelený Kristus je poukázaný
                ako Eucharistia. Tento proces je nazvaný transsubstanciáciou.
              </p>
              <p>
                U tejto Eucharistie, novo povedané - pravej fyzickej prítomnosti
                Ježiša Krista, je požadované, aby sa jej dostalo rovnakého
                uctievania, ako uctievanie očakávaného Boha. Táto Eucharistia je
                potom lámaná a ponúkaná kňazmi, ako nekrvavá obeť Bohu za
                hriechy živých i mŕtvych. Po tomto obetovaní za hriechy je
                Eucharistia tiež ponúknutá ako pokrm prítomným veriacim, aby
                zotrvali v dobrom postavení v učení katolíckej cirkvi a
                sviatostiach. Je tiež poukazovaná ako nebeský pokrm, ktorý im
                pomôže zaslúžiť si večný život.
              </p>
              <p>
                Teraz sa pýtam Teba, znie to v Tvojom srdci pravdivo? Veríš, že
                Ježiš Kristus je v súčasnosti premenený vo fyzickú podobu chleba
                a vína? Môžeš v skutočnosti uctievať tento chlieb - boha? Môžeš
                v skutočnosti veriť, že tento chlieb, ktorý je vyrobený ľudskou
                rukou, môže byť obetovaný za Tvoje hriechy a že je Ti udelené
                odpustenie od Boha za takú obeť? Veríš, že jedením tohto
                nebeského pokrmu môžeš získať večný život? Poďme do Božieho
                Slova.
              </p>
            </div>
          </div>
        </div>
        {/* <div className='omsa-pic flex lg:hidden w-[100%] h-[60vh] mt-16'></div> */}
      </main>
      {/* eucharistia */}
      <section className='flex flex-col items-center mx-4 lg:mx-8 pb-16'>
        <h1 className='text-title text-[30px]'>Eucharistia</h1>
        <p className='text-[20px] text-justify mt-8'>
          V katechizme katolíckej cirkvi je uvádzané, že skutočné telo, krv a
          božstvo Ježiša Krista je zoslané z neba a zázračne prepodstatnené v
          eucharistických oblátkach. Oproti tomu stojí Svätá Biblia a tá je
          jednoznačná vo vyjadrení vzťahujúcom sa k návratu Pána Ježiša Krista
          na tento svet.
        </p>
      </section>
      {/* table lg */}
      <section className='hidden text-[18px]  lg:flex justify-center mx-4 mt-8 gap-8 pb-16'>
        <div className='w-[50%] border flex flex-col items-center mx-4'>
          <h2 className='font-semibold text-center mt-4'>
            Katechizmus hovorí:
          </h2>
          <div className='mx-4 text-justify font-semibold flex flex-col gap-4 mt-8'>
            <p>
              § 1357 chlieb a víno, ktoré sa Kristovými slovami a mocou Ducha
              Svätého stali Kristovým telom a krvou; takto sa Kristus stáva
              skutočne a tajomne prítomným.
            </p>

            <p>
              {' '}
              § 1357 chlieb a víno, ktoré sa Kristovými slovami a mocou Ducha
              Svätého stali Kristovým telom a krvou; takto sa Kristus stáva
              skutočne a tajomne prítomným.
            </p>
            <p>
              {' '}
              § 1376 Konsekráciou chleba a vína sa uskutočňuje premena celej
              podstaty chleba na podstatu tela Krista, nášho Pána, a celej
              podstaty vína na podstatu jeho krvi. Túto premenu svätá katolícka
              Cirkev primerane a vhodne nazýva transsubstanciácia
              [prepodstatnenie].“
            </p>
            <p>
              {' '}
              § 1380 Je veľmi vhodné, že Kristus chcel zostať prítomný vo svojej
              Cirkvi takýmto jedinečným spôsobom. Keďže čoskoro mal opustiť
              svojich vo svojej viditeľnej podobe, chcel nám darovať svoju
              sviatostnú prítomnosť.
            </p>
          </div>
        </div>
        <div className='w-[50%] border flex flex-col items-center pb-4 mx-4'>
          <h2 className='font-semibold  text-center mt-4'>Biblia hovorí:</h2>
          <div className='mx-4 text-justify font-semibold flex flex-col gap-4 mt-8'>
            <p>
              Židom 10:10-14
              <span className='italic'>
                {' '}
                Podľa tejto vôle sme posvätení tým, že Ježiš Kristus raz navždy
                obetoval svoje telo. A potom, každý kňaz tam stojí každý deň,
                koná bohoslužbu, znovu a znovu prináša tie isté obete, ktoré
                nikdy nemôžu zahladiť hriechy. On však priniesol iba jednu obeť
                za hriechy, posadil sa navždy po pravici Božej a teraz už čaká,
                kým Mu Jeho nepriatelia nebudú položení za podnož. Lebo jedinou
                obeťou navždy zdokonalil tých, čo sa dajú posvätiť.
              </span>
            </p>
            <p>
              Matúš 24:27
              <span className='italic'>
                {' '}
                Lebo ako blesk vychádza od východu a svieti po západ, tak bude
                príchod Syna človeka.{' '}
              </span>
            </p>
            <p>
              Skutky apoštolov 1:9-11
              <span className='italic'>
                {' '}
                Len čo to povedal, vzniesol sa im pred očami do výšin a oblak
                vzal im Ho spred očí. A ako tak uprene hľadeli do neba, keď
                odchádzal, ajhľa, dvaja mužovia v bielom rúchu postavili sa
                vedľa nich hovoriac: Mužovia galilejskí, čo stojíte a hľadíte do
                neba? Tento Ježiš, ktorý vám bol vzatý do neba,
              </span>
              <span className='boldd'>
                {' '}
                príde zase tak, ako ste Ho videli odchádzať do neba.
              </span>
            </p>
            <p>
              Ján 14:16-18
              <span className='italic'>
                {' '}
                A ja budem prosiť Otca, a dá vám iného Radcu, aby bol s vami až
                naveky - Ducha pravdy, ktorého svet nemôže prijať, pretože Ho
                nevidí, ani nepozná. Vy Ho poznáte, pretože pri vás ostáva a
                bude vo vás. Neopustím vás ako siroty, prídem k vám
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* table mobile only */}
      <section className='flex flex-col lg:hidden mt-8 gap-8 pb-8'>
        <div className='flex flex-col items-center justify-center mx-4'>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className='text-center mt-4'>
            § 1357 chlieb a víno, ktoré sa Kristovými slovami a mocou Ducha
            Svätého stali Kristovým telom a krvou; takto sa Kristus stáva
            skutočne a tajomne prítomným.
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Židom 10:10-14
            <span className='italic'>
              {' '}
              Podľa tejto vôle sme posvätení tým, že Ježiš Kristus raz navždy
              obetoval svoje telo. A potom, každý kňaz tam stojí každý deň, koná
              bohoslužbu, znovu a znovu prináša tie isté obete, ktoré nikdy
              nemôžu zahladiť hriechy. On však priniesol iba jednu obeť za
              hriechy, posadil sa navždy po pravici Božej a teraz už čaká, kým
              Mu Jeho nepriatelia nebudú položení za podnož. Lebo jedinou obeťou
              navždy zdokonalil tých, čo sa dajú posvätiť.
            </span>
          </p>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className='text-center mt-4'>
            {' '}
            § 1357 chlieb a víno, ktoré sa Kristovými slovami a mocou Ducha
            Svätého stali Kristovým telom a krvou; takto sa Kristus stáva
            skutočne a tajomne prítomným.
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Matúš 24:27
            <span className='italic'>
              {' '}
              Lebo ako blesk vychádza od východu a svieti po západ, tak bude
              príchod Syna človeka.{' '}
            </span>
          </p>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className='text-center mt-4'>
            {' '}
            § 1376 Konsekráciou chleba a vína sa uskutočňuje premena celej
            podstaty chleba na podstatu tela Krista, nášho Pána, a celej
            podstaty vína na podstatu jeho krvi. Túto premenu svätá katolícka
            Cirkev primerane a vhodne nazýva transsubstanciácia
            [prepodstatnenie].“
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Skutky apoštolov 1:9-11
            <span className='italic'>
              {' '}
              Len čo to povedal, vzniesol sa im pred očami do výšin a oblak vzal
              im Ho spred očí. A ako tak uprene hľadeli do neba, keď odchádzal,
              ajhľa, dvaja mužovia v bielom rúchu postavili sa vedľa nich
              hovoriac: Mužovia galilejskí, čo stojíte a hľadíte do neba? Tento
              Ježiš, ktorý vám bol vzatý do neba,
            </span>
            <span className='boldd'>
              {' '}
              príde zase tak, ako ste Ho videli odchádzať do neba.
            </span>
          </p>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className='text-center mt-4'>
            § 1380 Je veľmi vhodné, že Kristus chcel zostať prítomný vo svojej
            Cirkvi takýmto jedinečným spôsobom. Keďže čoskoro mal opustiť
            svojich vo svojej viditeľnej podobe, chcel nám darovať svoju
            sviatostnú prítomnosť.
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Ján 14:16-18
            <span className='italic'>
              {' '}
              A ja budem prosiť Otca, a dá vám iného Radcu, aby bol s vami až
              naveky - Ducha pravdy, ktorého svet nemôže prijať, pretože Ho
              nevidí, ani nepozná. Vy Ho poznáte, pretože pri vás ostáva a bude
              vo vás. Neopustím vás ako siroty, prídem k vám
            </span>
          </p>
        </div>
      </section>
      {/* lg and mob OK */}
      <section>
        <div className='text-justify text-[20px] flex flex-col gap-2 mt-4 mx-4 lg:mx-8'>
          <p>
            Podľa Biblie Ježiš Kristus sa obetoval za hriechy ľudí. Po Jeho
            smrti a zmŕtvychvstaní bol vzatý do mrakov a zasadol večne po
            pravici Boha Otca. Ešte než odišiel z tohto sveta, mnohokrát Ježiš
            hovoril a predpovedal spôsob svojho návratu. Biblia je úplne jasná v
            tom, že Ježiš Kristus príde tým istým spôsobom, ako bol vzatý hore.
            V Matúšovi 24:27 Ježiš povedal, že sa vráti späť v telesnej forme
            práve tak, ako predtým odišiel. Nijako nespomínal vo svojom Slove,
            že by sa vrátil vo forme kúska chleba.
          </p>
          <p>
            Ešte predtým, ako odišiel, Ježiš sľúbil svojim nasledovníkom, že im
            pošle Ducha Svätého ako Utešiteľa a Sprievodcu tak, aby neboli ako
            siroty. Boh nám dal tak duchovnú prítomnosť Pána Ježiša Krista v
            Duchu Svätom:
            <span className='italic'>
              {' '}
              To je Ten, ktorý prišiel skrze vodu a krv, Ježiš Kristus; nielen
              skrze vodu, ale skrze vodu a krv; Duch je, ktorý svedčí, pretože
              Duch je pravda. Lebo traja sú, ktorí vydávajú svedectvo na nebi:
              Otec, Slovo a Duch Svätý, a títo traja jedno sú.
            </span>
            <span className='text-[15px]'> Prvý Jánov 5:6-7 </span>
            <span className='italic'>
              A ja budem prosiť Otca, a dá vám iného Radcu, aby bol s vami až
              naveky - Ducha pravdy, ktorého svet nemôže prijať, pretože Ho
              nevidí, ani nepozná. Vy Ho poznáte, pretože pri vás ostáva a bude
              vo vás.
            </span>
            <span className='text-[15px]'> Ján 14:16-17</span>
          </p>
          <p>
            Je nevyhnutnosťou poznať Pána Ježiša Krista duchovne a to skrze
            vieru. Celé písané Božie Slovo je svedectvom o skutočnom Mesiášovi.{' '}
            <span className='italic'>
              A keby vám vtedy niekto povedal: Ajhľa, tu je Kristus! alebo:
              Ajhľa, tam je! - neverte. Lebo povstanú falošní kristovia a
              falošní proroci a budú robiť znamenia a zázraky, aby zviedli, ak
              možno, vyvolených.
            </span>
            <span className='text-[15px]'> Marek 13:21-22 </span>
            Spoznal si Ježiša duchovne? Veríš Mu len skrze vieru?
          </p>
        </div>
      </section>
      {/* idolatria black lg and mob OK */}
      <section className='bg-black text-[20px] text-white'>
        <div className='text-justify flex flex-col gap-2 mt-16 mx-4 lg:mx-8'>
          <h2 className='text-title text-center text-[30px] my-16'>
            Uctievanie hostie (Idolatria)
          </h2>
          <p>
            Katechizmus katolíckej cirkvi predpokladá, že človekom vyrobený
            chlieb sa stal božským. Toto je prípad, keď katolícka cirkev učí, že
            Eucharistia je hodná rovnakého rešpektu a uctievania ako Boh. Viera,
            ktorá je takto úzko držaná, ide až za hranice katolíckej cirkvi.
            Katolícky katechizmus ide tak ďaleko, že vyhlasuje potrebu celého
            sveta zúčastňovať sa eucharistického uctievania. Toto učenie, že
            pravý Boh sa inkarnoval do objektu, ktorý vyzerá ako chlieb vyrobený
            ľudskými rukami, je nebezpečná domnienka. Katechizmus jasne
            prikazuje eucharistické uctievanie, zatiaľ čo Biblia toto striktne
            zakazuje.
          </p>
        </div>
      </section>
      {/* black table lg */}
      <section className='hidden text-[18px]  bg-black text-white lg:flex justify-center gap-8 pt-16 pb-16 px-4'>
        <div className='w-[50%] border flex flex-col items-center mx-4'>
          <h2 className='font-semibold text-center mt-4'>
            Katechizmus hovorí:
          </h2>
          <div className='mx-4 text-justify flex flex-col gap-4 mt-8 pb-4'>
            <p>
              § 1378 V omšovej liturgii vyjadrujeme svoju vieru v skutočnú
              Kristovu prítomnosť pod spôsobmi chleba a vína okrem iného aj
              pokľaknutím alebo hlbokým úklonom na znak adorácie Pána:
              „Katolícka Cirkev vzdávala a vzdáva tento kult adorácie, ktorý
              patrí sviatosti Eucharistie, nielen počas slávenia omše, ale aj
              mimo neho tak, že s najväčšou starostlivosťou uchováva
              konsekrované hostie, vystavuje ich, aby ich veriaci slávnostne
              uctievali, a nosí ich v procesii na radosť ľudu zhromaždeného vo
              veľkom počte.“
            </p>

            <p> § 1380 Cirkev a svet veľmi potrebujú eucharistický kult.</p>
            <p>
              {' '}
              § 1379 Prehĺbením viery v Kristovu skutočnú prítomnosť v
              Eucharistii si Cirkev uvedomila význam tichej adorácie Pána
              prítomného pod eucharistickými spôsobmi. Preto svätostánok má byť
              umiestnený na zvlášť dôstojnom mieste kostola a má byť vyhotovený
              tak, aby zdôrazňoval a znázorňoval pravdu, že Kristus je v
              Najsvätejšej sviatosti skutočne prítomný.
            </p>
          </div>
        </div>
        <div className='w-[50%] border flex flex-col items-center pb-4 mx-4'>
          <h2 className='font-semibold text-center mt-4'>Biblia hovorí:</h2>
          <div className='mx-4 text-justify flex flex-col gap-4 mt-8'>
            <p>
              Deuteronomium 4:13,15-16
              <span className='italic'>
                {' '}
                Vtedy vám oznámil svoju zmluvu - desať výrokov - ktorú vám
                prikázal plniť. Napísal ju na kamenné dosky. Dávajte dobrý pozor
                na seba - lebo ste neuvideli nijakú postavu v ten deň, keď
                Hospodin hovoril k vám na Chórebe z ohňa - aby ste sa nezvrhli a
                neurobili si nejakú modlu, podobu muža alebo ženy.
              </span>
            </p>
            <p>
              Izaiáš 42:8
              <span className='italic'>
                {' '}
                Ja som Hospodin, to je moje meno; svoju slávu inému nedám, ani
                svoju chválu modlám.{' '}
              </span>
            </p>
            <p>
              Ján 4:23-24
              <span className='italic'>
                {' '}
                Ale prichádza hodina, a už je tu, keď praví ctitelia budú vzývať
                Otca v duchu a v pravde; veď aj Otec takýchto ctiteľov chce mať.
                Boh je duch, a tí, čo Ho vzývajú, musia Ho vzývať v duchu a v
                pravde.
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* table mobile only */}
      <section className='flex flex-col text-[20px]  bg-black text-white lg:hidden pt-8 gap-8 pb-8'>
        <div className='flex flex-col items-center justify-center mx-4'>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className=' text-center mt-4'>
            § 1378 V omšovej liturgii vyjadrujeme svoju vieru v skutočnú
            Kristovu prítomnosť pod spôsobmi chleba a vína okrem iného aj
            pokľaknutím alebo hlbokým úklonom na znak adorácie Pána: „Katolícka
            Cirkev vzdávala a vzdáva tento kult adorácie, ktorý patrí sviatosti
            Eucharistie, nielen počas slávenia omše, ale aj mimo neho tak, že s
            najväčšou starostlivosťou uchováva konsekrované hostie, vystavuje
            ich, aby ich veriaci slávnostne uctievali, a nosí ich v procesii na
            radosť ľudu zhromaždeného vo veľkom počte.“
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Deuteronomium 4:13,15-16
            <span className='italic'>
              {' '}
              Vtedy vám oznámil svoju zmluvu - desať výrokov - ktorú vám
              prikázal plniť. Napísal ju na kamenné dosky. Dávajte dobrý pozor
              na seba - lebo ste neuvideli nijakú postavu v ten deň, keď
              Hospodin hovoril k vám na Chórebe z ohňa - aby ste sa nezvrhli a
              neurobili si nejakú modlu, podobu muža alebo ženy.
            </span>
          </p>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className=' text-center mt-4'>
            {' '}
            § 1380 Cirkev a svet veľmi potrebujú eucharistický kult.
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className=' text-center mt-4'>
            Izaiáš 42:8
            <span className='italic'>
              {' '}
              Ja som Hospodin, to je moje meno; svoju slávu inému nedám, ani
              svoju chválu modlám .{' '}
            </span>
          </p>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className='text-center mt-4'>
            {' '}
            § 1379 Prehĺbením viery v Kristovu skutočnú prítomnosť v Eucharistii
            si Cirkev uvedomila význam tichej adorácie Pána prítomného pod
            eucharistickými spôsobmi. Preto svätostánok má byť umiestnený na
            zvlášť dôstojnom mieste kostola a má byť vyhotovený tak, aby
            zdôrazňoval a znázorňoval pravdu, že Kristus je v Najsvätejšej
            sviatosti skutočne prítomný.
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Ján 4:23-24
            <span className='italic'>
              {' '}
              Ale prichádza hodina, a už je tu, keď praví ctitelia budú vzývať
              Otca v duchu a v pravde; veď aj Otec takýchto ctiteľov chce mať.
              Boh je duch, a tí, čo Ho vzývajú, musia Ho vzývať v duchu a v
              pravde.
            </span>
          </p>
        </div>
      </section>
      {/* black lg and mob OK */}
      <section className='bg-black text-white'>
        <div className='text-justify text-[20px] flex flex-col gap-2 pt-4 pb-16 mx-4 lg:mx-8'>
          <p>
            Písmo zreteľne identifikuje, že Boh je svätý a On Sám je hoden nášho
            uctievania.
            <span className='italic'>
              Kto by sa nebál, Pane, a neoslavoval Tvoje meno? Veď Ty jediný si
              svätý, a všetky národy prídu a budú sa Ti klaňať.
            </span>
            <span className='text-[15px]'> Zjavenie Jána 15:4</span>
          </p>
          <p>
            Doslovná interpretácia Písma v katechizme vedie k modlárstvu. Podľa
            Biblie nesmieme uctievať žiadneho falošného boha alebo idol,
            zahŕňajúce čokoľvek či už vyrobeného (ako obraz) alebo
            reprezentujúceho Boha. V Starom Zákone Áron padol do tejto rovnako
            vážnej chyby modlárstva:
            <span className='italic'>
              {' '}
              Keď ľud videl, že Mojžiš dlho neschádza z hory, zhromaždil sa k
              Áronovi a povedal mu: Nože, urob nám bohov, ktorí pôjdu pred nami.
            </span>
            <span className='text-[15px]'> Exodus 32:1 </span> Áron potom urobil
            zlaté teľa, ako prostredníka, skrze ktorého uctievali Boha.
            <span className='italic'>
              On to prijal z ich rúk, sformoval to rydlom a urobil z toho uliate
              teľa. Oni povedali: Izrael, toto sú tvoji bohovia, ktorí ťa
              vyviedli z Egypta. Keď to Áron videl, postavil pred ním oltár. I
              zvolal Áron: Zajtra bude sviatok Hospodinov. Na druhý deň včasráno
              obetovali spaľované obete a priniesli obete spoločenstva. Potom sa
              ľud posadil, jedol a pil; nato vstali a zabávali sa.
            </span>
            <span className='text-[15px]'> Exodus 32:4-6 </span>
          </p>
          <p>
            Ako Áron, tak aj Izraeliti nehľadeli na prikázania, ktoré im
            Hospodin dal a nepredstavovali si, že tento obraz bol sám o sebe
            boh. Urobili si len obraz ako reprezentáciu pravého Boha, ktorého
            chceli uctievať skrze tento obraz. To je ale modlárstvo. Je to
            rovnaký omyl, ktorý sa deje v cirkvi Ríma pri každej omši. Pravé
            uctievanie Boha by malo byť v duchu a v pravde, pretože Boh je Duch.
            Toto uctievanie prináša pravý pokoj a pravý kresťanský život.
            Uctievanie Eucharistie spôsobuje hnev Boha ako sľúbil vo svojom
            Slove. Boh sa pozerá na tých, ktorí praktizujú modlárstvo ako na
            tých, ktorí Ho nenávidia, hoci predstierajú (hoci aj úprimne) lásku
            k Nemu. Len On bude súdiť ich nespravodlivosť. Povedal som, že Boh
            je Jeden,{' '}
            <span className='italic'>
              ktorý však nenecháva bez trestu, ale trestá vinu otcov na synoch a
              na synoch synov až do tretieho a štvrtého pokolenia.
            </span>
            <span className='text-[15px]'> Exodus 34:7 </span>
            Spomeňme si na jednoduché Slovo nášho Pána v Marekovi 13:21:
            <span className='italic'>
              {' '}
              A keby vám vtedy niekto povedal: Ajhľa, tu je Kristus! alebo:
              Ajhľa, tam je! - neverte.
            </span>{' '}
            Príkaz uctievania Eucharistie je modlárstvo a modlárstvo je duchovné
            cudzoložstvo.
            <span className='italic'>
              {' '}
              Preto, moji milovaní, utekajte pred modloslužobníctvom!
            </span>
            <span className='text-[15px]'> Prvý Korintským 10:14</span>
          </p>
        </div>
      </section>
      {/* obetovanie omse */}
      <section className='flex flex-col text-[20px] mt-8 mx-4 lg:mx-8 pb-4'>
        <h1 className='text-title text-center text-[30px] my-8'>
          Obetovanie omše
        </h1>
        <p className='text-justify'>
          Rímskokatolícka cirkev učí, že Ježiš Kristus je novo obetovaný v omši.
          Jeho obeť, ktorá sa znovu obnovuje pri každej omši, môže byť
          pripočítaná k spaseniu človeka. Ak veríme tomu, čo je napísané v
          katechizme, potom v každý čas je obeť vykonávaná. Kristova práca na
          kríži je v prítomnosti a práca spásy je uskutočňovaná. Biblia však
          odhaľuje, že práca spasenia bola aktom niekdajším, ktorý bol
          dokončený, keď Kristus zomrel na golgotskom kríži. Vaše porozumenie
          obete Ježiša Krista na kríži je rozhodujúce pre váš večný život.
        </p>
        <p className='text-justify my-4'>
          Zotrvávate v dokončenej práci Ježiša Krista na kríži alebo v
          pokračujúcej práci kňazov na oltároch rímskokatolíckej cirkvi?
        </p>
      </section>
      {/* table lg */}
      <section className='hidden text-[18px] lg:flex justify-center mx-4 gap-8 pt-8 pb-16'>
        <div className='w-[50%] border flex flex-col items-center mx-4'>
          <h2 className='font-semibold text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <div className='text-justify font-semibold flex flex-col gap-4 mt-8 mx-4 pb-4'>
            <p>
              § 1364 Vždy, keď sa na oltári slávi obeta kríža, v ktorej “bol
              obetovaný náš veľkonočný Baránok, Kristus”, (1Kor 5,7) uskutočňuje
              sa dielo nášho vykúpenia.
            </p>

            <p>
              {' '}
              § 1366 Eucharistia je teda obeta, lebo sprítomňuje (robí
              prítomnou) obetu kríža, je jej pamiatkou a aplikuje jej ovocie:
              Kristus, „náš Boh a Pán… raz navždy [obetoval] seba samého Bohu
              Otcovi smrťou na oltári kríža, aby pre nich [ľudí] vykonal večné
              vykúpenie. Keďže však po smrti jeho kňazstvo nemalo zaniknúť (Hebr
              7,24.27) , pri Poslednej večeri, ,v tú noc, keď bol zradený‘ (1Kor
              11,23) ,… [zanechal] Cirkvi, svojej milovanej Neveste, viditeľnú
              (ako si vyžaduje ľudská prirodzenosť) obetu, aby sa ňou
              sprítomňovala krvavá [obeta], ktorá sa mala raz navždy uskutočniť
              na kríži, aby jej pamiatka zostala až do konca sveta a aby sa jej
              spásna sila aplikovala na odpustenie hriechov, ktorých sa
              každodenne dopúšťame.“
            </p>
            <p>
              {' '}
              § 1367 Kristova obeta a obeta Eucharistie sú jedna jediná obeta:
              „Lebo jediná a tá istá je obeť, ten istý obetuje teraz službou
              kňazov, ktorý vtedy obetoval seba samého na kríži; rozdielny je
              iba spôsob obetovania.“ „A keďže v tejto božskej obete, ktorá sa
              koná vo svätej omši, je prítomný a nekrvavým spôsobom sa obetuje
              ten istý Kristus, ktorý na oltári kríža ,raz navždy obetoval seba
              samého krvavým spôsobom…‘, táto obeta [je] skutočne zmierna.“
            </p>
            <p>
              {' '}
              § 1405 Lebo vždy, keď sa slávi toto tajomstvo, „uskutočňuje sa
              dielo nášho vykúpenia“ a my lámeme „jeden chlieb, ktorý je liekom
              nesmrteľnosti a protijedom, aby sme nezomreli, ale navždy žili v
              Ježišovi Kristovi“.
            </p>
            <p>
              {' '}
              § 1414 Eucharistia ako obeta sa prináša aj na zadosťučinenie za
              hriechy živých i mŕtvych a na dosiahnutie duchovných alebo časných
              dobier od Boha.
            </p>
          </div>
        </div>
        <div className='w-[50%] border flex flex-col items-center pb-4 mx-4'>
          <h2 className='font-semibold text-center mt-4'>Biblia hovorí:</h2>
          <div className='mx-4 text-justify font-semibold flex flex-col gap-4 mt-8'>
            <p>
              Ján 19:30
              <span className='italic'>
                {' '}
                Ako Ježiš okúsil ocot, riekol: Dokonané! A nakloniac hlavu,
                odovzdal Ducha (Bohu).
              </span>
            </p>
            <p>
              Židom 10:10-18
              <span className='italic'>
                {' '}
                Podľa tejto vôle sme posvätení tým, že Ježiš Kristus raz navždy
                obetoval svoje telo. A potom, každý kňaz tam stojí každý deň,
                koná bohoslužbu, znovu a znovu prináša tie isté obete, ktoré
                nikdy nemôžu zahladiť hriechy. On však priniesol iba jednu obeť
                za hriechy, posadil sa navždy po pravici Božej a teraz už čaká,
                kým Mu Jeho nepriatelia nebudú položení za podnož. Lebo jedinou
                obeťou navždy zdokonalil tých, čo sa dajú posvätiť. Dosvedčuje
                nám to aj sám Duch Svätý, lebo po slovách: Toto je zmluva, ktorú
                uzavriem s nimi, až uplynú tie dni, hovorí Pán: Svoje zákony im
                vložím do sŕdc a vpíšem im ich do mysle a na ich hriechy a na
                ich neprávosti viacej nepomyslím. Kde sú však hriechy odpustené,
                niet už viac obetí za hriechy.{' '}
              </span>
            </p>
            <p>
              Levitikus 17:11
              <span className='italic'>
                {' '}
                Keďže život tela je v krvi, dal som vám ju na oltár na vykonanie
                obradu zmierenia za vaše životy, lebo krv mocou života spôsobuje
                zmierenie.
              </span>
            </p>
            <p>
              Židom 9:22
              <span className='italic'>
                {' '}
                A podľa zákona temer všetko sa očisťuje krvou, a bez vyliatia
                krvi niet odpustenia.
              </span>
            </p>
            <p>
              Židom 9:26-28
              <span className='italic'>
                {' '}
                A On sa zjavil raz pri skončení vekov, aby svojou obeťou
                zahladil hriech. A ako je ľuďom uložené raz umrieť a potom príde
                súd, práve tak aj Kristus, raz už obetovaný, aby niesol hriechy
                mnohých, druhý raz sa zjaví bez hriechu tým, čo Ho očakávajú na
                spasenie.
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* table mobile only */}
      <section className='flex flex-col lg:hidden  gap-8 pb-8'>
        <div className='flex flex-col items-center justify-center mx-4'>
          <h2 className='font-semibold text-center mt-4'>
            Katechizmus hovorí:
          </h2>
          <p className='text-center mt-4'>
            § 1364 Vždy, keď sa na oltári slávi obeta kríža, v ktorej “bol
            obetovaný náš veľkonočný Baránok, Kristus”, (1Kor 5,7) uskutočňuje
            sa dielo nášho vykúpenia.
          </p>
          <h2 className='font-semibold text-center mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Ján 19:30
            <span className='italic'>
              {' '}
              Ako Ježiš okúsil ocot, riekol: Dokonané! A nakloniac hlavu,
              odovzdal Ducha (Bohu).
            </span>
          </p>
          <h2 className='font-semibold text-center mt-4'>
            Katechizmus hovorí:
          </h2>
          <p className='text-center mt-4'>
            § 1366 Eucharistia je teda obeta, lebo sprítomňuje (robí prítomnou)
            obetu kríža, je jej pamiatkou a aplikuje jej ovocie: Kristus, „náš
            Boh a Pán… raz navždy [obetoval] seba samého Bohu Otcovi smrťou na
            oltári kríža, aby pre nich [ľudí] vykonal večné vykúpenie. Keďže
            však po smrti jeho kňazstvo nemalo zaniknúť (Hebr 7,24.27) , pri
            Poslednej večeri, ,v tú noc, keď bol zradený‘ (1Kor 11,23) ,…
            [zanechal] Cirkvi, svojej milovanej Neveste, viditeľnú (ako si
            vyžaduje ľudská prirodzenosť) obetu, aby sa ňou sprítomňovala krvavá
            [obeta], ktorá sa mala raz navždy uskutočniť na kríži, aby jej
            pamiatka zostala až do konca sveta a aby sa jej spásna sila
            aplikovala na odpustenie hriechov, ktorých sa každodenne dopúšťame.“
          </p>
          <h2 className='font-semibold text-center  mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Židom 10:10-18
            <span className='italic'>
              {' '}
              Podľa tejto vôle sme posvätení tým, že Ježiš Kristus raz navždy
              obetoval svoje telo. A potom, každý kňaz tam stojí každý deň, koná
              bohoslužbu, znovu a znovu prináša tie isté obete, ktoré nikdy
              nemôžu zahladiť hriechy. On však priniesol iba jednu obeť za
              hriechy, posadil sa navždy po pravici Božej a teraz už čaká, kým
              Mu Jeho nepriatelia nebudú položení za podnož. Lebo jedinou obeťou
              navždy zdokonalil tých, čo sa dajú posvätiť. Dosvedčuje nám to aj
              sám Duch Svätý, lebo po slovách: Toto je zmluva, ktorú uzavriem s
              nimi, až uplynú tie dni, hovorí Pán: Svoje zákony im vložím do
              sŕdc a vpíšem im ich do mysle a na ich hriechy a na ich neprávosti
              viacej nepomyslím. Kde sú však hriechy odpustené, niet už viac
              obetí za hriechy.
            </span>
          </p>
          <h2 className='font-semibold text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <p className='text-center mt-4'>
            § 1367 Kristova obeta a obeta Eucharistie sú jedna jediná obeta:
            „Lebo jediná a tá istá je obeť, ten istý obetuje teraz službou
            kňazov, ktorý vtedy obetoval seba samého na kríži; rozdielny je iba
            spôsob obetovania.“ „A keďže v tejto božskej obete, ktorá sa koná vo
            svätej omši, je prítomný a nekrvavým spôsobom sa obetuje ten istý
            Kristus, ktorý na oltári kríža ,raz navždy obetoval seba samého
            krvavým spôsobom…‘, táto obeta [je] skutočne zmierna.“
          </p>
          <h2 className='font-semibold text-center mt-4'>Biblia hovorí:</h2>
          <p className=' text-center mt-4'>
            {' '}
            Levitikus 17:11
            <span className='italic'>
              {' '}
              Keďže život tela je v krvi, dal som vám ju na oltár na vykonanie
              obradu zmierenia za vaše životy, lebo krv mocou života spôsobuje
              zmierenie.{' '}
            </span>
          </p>
          <h2 className='font-semibold text-center mt-4'>
            Katechizmus hovorí:
          </h2>
          <p className=' text-center mt-4'>
            § 1405 Lebo vždy, keď sa slávi toto tajomstvo, „uskutočňuje sa dielo
            nášho vykúpenia“ a my lámeme „jeden chlieb, ktorý je liekom
            nesmrteľnosti a protijedom, aby sme nezomreli, ale navždy žili v
            Ježišovi Kristovi“.
          </p>
          <h2 className='font-semibold text-center  mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Židom 9:22
            <span className='italic'>
              {' '}
              A podľa zákona temer všetko sa očisťuje krvou, a bez vyliatia krvi
              niet odpustenia.
            </span>
          </p>
          <h2 className='font-semibold text-center mt-4'>
            Katechizmus hovorí:
          </h2>
          <p className='text-center mt-4'>
            § 1414 Eucharistia ako obeta sa prináša aj na zadosťučinenie za
            hriechy živých i mŕtvych a na dosiahnutie duchovných alebo časných
            dobier od Boha.
          </p>
          <h2 className='font-semibold text-center  mt-4'>Biblia hovorí:</h2>
          <p className=' text-center mt-4'>
            Židom 9:26-28
            <span className='italic'>
              {' '}
              A On sa zjavil raz pri skončení vekov, aby svojou obeťou zahladil
              hriech. A ako je ľuďom uložené raz umrieť a potom príde súd, práve
              tak aj Kristus, raz už obetovaný, aby niesol hriechy mnohých,
              druhý raz sa zjaví bez hriechu tým, čo Ho očakávajú na spasenie.
            </span>
          </p>
        </div>
      </section>
      {/* lg and mob OK */}
      <section className=''>
        <div className='text-justify text-[20px] flex flex-col gap-2 mt-4 mx-4 lg:mx-8 pb-16'>
          <p>
            Podľa rímskokatolíckej cirkvi veriaci musia prijať ustavičné
            reinkarnovanie a nekrvavú obeť Ježiša Krista pre odpustenie
            hriechov. Katolícky katechizmus v paragrafe 1381 prehlasuje:
            „nemožno poznať zmyslami, ale iba vierou, ktorá sa opiera o Božiu
            autoritu. Myšlienka, že Kristova obeť na kríži pred 2000 rokmi
            nebola postačujúca na odpustenie všetkých našich hriechov je v
            priamom rozpore so Svätým Písmom. Nielen, že je jasné z Biblie, že
            Boh vyžadoval prelievanie krvi pre odpustenie hriechov, ale tiež, že
            Ježiš prelial svoju drahocennú krv raz a navždy na Kalvárii.
          </p>
          <p>
            Začínate vidieť tie paradoxy? Bolo vám povedané, že musíte veriť
            tradičnému učeniu rímskokatolíckej cirkvi a to je obetný systém
            "samotnou vierou", zatiaľ čo Biblia vás nabáda veriť v plne
            dostačujúcu, raz a navždy urobenú a dokonalú obeť Ježiša Krista za
            všetky vaše hriechy skrze vieru. Buď Božie Slovo má pravdu alebo ju
            má katechizmus. Oba tieto názory dohromady nemôžu byť pravdivé…
          </p>
        </div>
      </section>
      {/* prijimanie black lg and mob OK */}
      <section className='bg-black text-white'>
        <div className='text-justify text-[20px] flex flex-col gap-2 pt-16 pb-16 mx-4 lg:mx-8'>
          <h1 className='text-title text-center text-[30px] pb-4'>
            Prijímanie
          </h1>
          <p>
            Vyvrcholenie omše prichádza, keď katolík prijíma posvätenú hostiu
            alebo Eucharistiu ústne. Tento fyzický akt prijímania
            reinkarnovaného Ježiša Krista je spôsobom, ako katolík získa kúsok
            božstva, ktoré mu ďalej pomáha k večnému životu. Rímskokatolícka
            cirkev tiež zdôrazňuje, že jedenie Eucharistie splnomocňuje
            jednotlivcov na prekonanie smrteľného hriechu. Inak povedané,
            Eucharistia je nadprirodzený pokrm, ktorý môže pomáhať dostať sa do
            neba a tiež, zachováva od hriechu tu na zemi. Toto učenie propaguje
            získanie duchovných výhod cez fyzické akty. Uváž, čo Ti Duch Boží
            hovorí, keď porovnávaš toto katolícke učenie s Písmom Svätým.
          </p>
        </div>
      </section>
      {/* table lg */}
      <section className='bg-black text-[18px] text-white hidden lg:flex justify-center px-4 gap-8 pb-16'>
        <div className='w-[50%] border flex flex-col items-center mx-4'>
          <h2 className='font-semibold text-center mt-4'>
            Katechizmus hovorí:
          </h2>
          <div className='flex flex-col text-justify gap-4 mt-8 mx-4'>
            <p>
              § 1384 Pán sa na nás obracia s naliehavou výzvou, aby sme ho
              prijímali vo sviatosti Eucharistie: „Veru, veru, hovorím vám: Ak
              nebudete jesť telo Syna človeka a piť jeho krv, nebudete mať v
              sebe život“ (Jn 6,53) .
            </p>

            <p>
              {' '}
              § 1382 Omša je súčasne a neoddeliteľne obetnou pamiatkou, v ktorej
              pretrváva obeta kríža, a posvätnou hostinou účasti (communio) na
              Pánovom tele a jeho krvi. Ale slávenie eucharistickej obety je
              celé zamerané na dôverné zjednotenie veriacich s Kristom
              prostredníctvom svätého prijímania (communio). Prijímať znamená
              prijať samého Krista, ktorý sa obetoval za nás.
            </p>

            <p>
              {' '}
              § 1405 a my lámeme „jeden chlieb, ktorý je liekom nesmrteľnosti a
              protijedom, aby sme nezomreli, ale navždy žili v Ježišovi
              Kristovi“.
            </p>
            <p>
              {' '}
              § 1392 Čo spôsobuje hmotný pokrm v našom telesnom živote, to
              obdivuhodným spôsobom uskutočňuje sväté prijímanie v našom
              duchovnom živote.
            </p>
            <p>
              {' '}
              § 1402 Ó svätá hostina, pri ktorej prijímame Krista: slávi sa
              pamiatka jeho umučenia, duša sa napĺňa milosťou a dostávame
              závdavok budúcej slávy.
            </p>
            <p>
              {' '}
              § 1393 Preto nás Eucharistia nemôže zjednotiť s Kristom bez toho,
              aby nás zároveň neočistila od hriechov, ktoré sme spáchali, a
              neuchránila pred budúcimi hriechmi.
            </p>
            <p>
              {' '}
              § 1395 Eucharistia nás tou istou láskou, ktorú v nás zapaľuje,
              chráni pred budúcimi smrteľnými hriechmi.
            </p>
          </div>
        </div>
        <div className='w-[50%] border flex flex-col items-center pb-4 mx-4'>
          <h2 className='font-semibold text-center  mt-4'>Biblia hovorí:</h2>
          <div className='mx-4 text-justify flex flex-col gap-4 mt-8'>
            <p>
              Ján 6:52-66
              <span className='italic'>
                {' '}
                I hádali sa Židia medzi sebou: Ako nám tento môže dať jesť svoje
                telo? Riekol im Ježiš: Veru, veru, hovorím vám: Ak nejete telo
                Syna človeka a nepijete Jeho krv, nemáte života v sebe. Kto je
                moje telo a pije moju krv, má večný život, a ja ho vzkriesim v
                posledný deň. Lebo moje telo je pravý pokrm a moja krv je pravý
                nápoj. Kto je moje telo a pije moju krv, zostáva vo mne a ja v
                ňom. Ako mňa poslal živý Otec a ja žijem skrze Otca, aj ten, kto
                mňa je, bude žiť skrze mňa. To je ten chlieb, ktorý zostúpil z
                neba, nie aký jedli otcovia, a umreli. Kto je tento chlieb, bude
                žiť naveky. Toto povedal, keď vyučoval v synagóge v Kafarnaume.
                Vtedy mnohí z Jeho učeníkov, ktorí to počuli, povedali: Tvrdá je
                táto reč, kto ju môže počúvať? Keďže Ježiš vedel sám od seba, že
                Jeho učeníci reptajú na to, povedal im: Toto vás pohoršuje? A
                čo, keď uvidíte Syna človeka, ako vystupuje tam, kde bol
                predtým?
                <span className='boldd'>
                  {' '}
                  Duch je, ktorý obživuje, telo nič neosoží. Reči, ktoré som vám
                  hovoril, sú duch a život.{' '}
                </span>
                Ale medzi vami sú niektorí, čo neveria. Ježiš totiž od počiatku
                vedel, ktorí sú neveriaci a kto Ho zradí. I riekol: Preto som
                vám hovoril, že nikto nemôže prísť ku mne, len ak by mu to dal
                Otec. Odvtedy mnohí z Jeho učeníkov odišli a nechodili viac s
                Ním..
              </span>
            </p>
            <p>
              Ján 6:63
              <span className='italic'>
                {' '}
                Duch je, ktorý obživuje, telo nič neosoží. Reči, ktoré som vám
                hovoril, sú duch a život.
              </span>
            </p>
            <p>
              Levitikus 17:11
              <span className='italic'>
                {' '}
                Keďže život tela je v krvi, dal som vám ju na oltár na vykonanie
                obradu zmierenia za vaše životy, lebo krv mocou života spôsobuje
                zmierenie. Preto som povedal Izraelcom: Nech nikto z vás neje
                krv; ani cudzinec, ktorý sa zdržuje medzi vami, nesmie jesť krv.
              </span>
            </p>
            <p>
              Genesis 9:4
              <span className='italic'>
                {' '}
                Len mäso s krvou, jeho dušou, nesmiete jesť.
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
          </div>
        </div>
      </section>
      {/* table mobile only */}
      <section className='bg-black text-white flex flex-col lg:hidden  gap-8 pb-8'>
        <div className='flex flex-col items-center justify-center mx-4'>
          <h2 className='font-semibold text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <p className=' text-center mt-4'>
            § 1384 Pán sa na nás obracia s naliehavou výzvou, aby sme ho
            prijímali vo sviatosti Eucharistie: „Veru, veru, hovorím vám: Ak
            nebudete jesť telo Syna človeka a piť jeho krv, nebudete mať v sebe
            život“ (Jn 6,53) .
          </p>
          <p className=' text-center mt-4'>
            § 1382 Omša je súčasne a neoddeliteľne obetnou pamiatkou, v ktorej
            pretrváva obeta kríža, a posvätnou hostinou účasti (communio) na
            Pánovom tele a jeho krvi. Ale slávenie eucharistickej obety je celé
            zamerané na dôverné zjednotenie veriacich s Kristom prostredníctvom
            svätého prijímania (communio). Prijímať znamená prijať samého
            Krista, ktorý sa obetoval za nás.
          </p>
          <h2 className='font-semibold text-center mt-4'>Biblia hovorí:</h2>
          <p className=' text-center mt-4'>
            Ján 6:52-66
            <span className='italic'>
              {' '}
              I hádali sa Židia medzi sebou: Ako nám tento môže dať jesť svoje
              telo? Riekol im Ježiš: Veru, veru, hovorím vám: Ak nejete telo
              Syna človeka a nepijete Jeho krv, nemáte života v sebe. Kto je
              moje telo a pije moju krv, má večný život, a ja ho vzkriesim v
              posledný deň. Lebo moje telo je pravý pokrm a moja krv je pravý
              nápoj. Kto je moje telo a pije moju krv, zostáva vo mne a ja v
              ňom. Ako mňa poslal živý Otec a ja žijem skrze Otca, aj ten, kto
              mňa je, bude žiť skrze mňa. To je ten chlieb, ktorý zostúpil z
              neba, nie aký jedli otcovia, a umreli. Kto je tento chlieb, bude
              žiť naveky. Toto povedal, keď vyučoval v synagóge v Kafarnaume.
              Vtedy mnohí z Jeho učeníkov, ktorí to počuli, povedali: Tvrdá je
              táto reč, kto ju môže počúvať? Keďže Ježiš vedel sám od seba, že
              Jeho učeníci reptajú na to, povedal im: Toto vás pohoršuje? A čo,
              keď uvidíte Syna človeka, ako vystupuje tam, kde bol predtým?
              <span className='boldd'>
                Duch je, ktorý obživuje, telo nič neosoží. Reči, ktoré som vám
                hovoril, sú duch a život.
              </span>
              Ale medzi vami sú niektorí, čo neveria. Ježiš totiž od počiatku
              vedel, ktorí sú neveriaci a kto Ho zradí. I riekol: Preto som vám
              hovoril, že nikto nemôže prísť ku mne, len ak by mu to dal Otec.
              Odvtedy mnohí z Jeho učeníkov odišli a nechodili viac s Ním.
            </span>
          </p>
          <h2 className='font-semibold text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <p className='text-center mt-4'>
            § 1405 a my lámeme „jeden chlieb, ktorý je liekom nesmrteľnosti a
            protijedom, aby sme nezomreli, ale navždy žili v Ježišovi Kristovi“.
          </p>
          <h2 className='font-semibold text-center  mt-4'>Biblia hovorí:</h2>
          <p className=' text-center mt-4'>
            Ján 6:63
            <span className='italic'>
              {' '}
              Duch je, ktorý obživuje, telo nič neosoží. Reči, ktoré som vám
              hovoril, sú duch a život.
            </span>
          </p>
          <h2 className='font-semibold text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <p className=' text-center mt-4'>
            § 1392 Čo spôsobuje hmotný pokrm v našom telesnom živote, to
            obdivuhodným spôsobom uskutočňuje sväté prijímanie v našom duchovnom
            živote.
          </p>
          <h2 className='font-semibold text-center mt-4'>Biblia hovorí:</h2>
          <p className=' text-center mt-4'>
            {' '}
            Levitikus 17:11
            <span className='italic'>
              {' '}
              Keďže život tela je v krvi, dal som vám ju na oltár na vykonanie
              obradu zmierenia za vaše životy, lebo krv mocou života spôsobuje
              zmierenie. Preto som povedal Izraelcom: Nech nikto z vás neje krv;
              ani cudzinec, ktorý sa zdržuje medzi vami, nesmie jesť krv.{' '}
            </span>
          </p>
          <p className=' text-center mt-4'>
            {' '}
            Genesis 9:4
            <span className='italic'>
              {' '}
              Len mäso s krvou, jeho dušou, nesmiete jesť.{' '}
            </span>
          </p>
          <h2 className='font-semibold text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <p className=' text-center mt-4'>
            § 1402 Ó svätá hostina, pri ktorej prijímame Krista: slávi sa
            pamiatka jeho umučenia, duša sa napĺňa milosťou a dostávame závdavok
            budúcej slávy.
          </p>
          <p className=' text-center mt-4'>
            § 1393 Preto nás Eucharistia nemôže zjednotiť s Kristom bez toho,
            aby nás zároveň neočistila od hriechov, ktoré sme spáchali, a
            neuchránila pred budúcimi hriechmi.
          </p>
          <p className=' text-center mt-4'>
            § 1395 Eucharistia nás tou istou láskou, ktorú v nás zapaľuje,
            chráni pred budúcimi smrteľnými hriechmi.
          </p>
          <h2 className='font-semibold text-center  mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Prvý Jánov 1:7
            <span className='italic'>
              {' '}
              Ale ak chodíme vo svetle, ako On je vo svetle, máme spoločenstvo
              medzi sebou a krv Ježiša, Jeho Syna, nás očisťuje od každého
              hriechu.
            </span>
          </p>
        </div>
      </section>
      {/* lg and mob OK */}
      <section className='bg-black text-white'>
        <div className='text-justify text-[20px] flex flex-col gap-2 pt-4 mx-4 lg:mx-8'>
          <p>
            <span className='italic'>
              {' '}
              Na počiatku bolo Slovo a Slovo bolo u Boha a Boh bol to Slovo.
            </span>
            <span className='text-[15px]'> Ján 1:1 </span>
            <span className='italic'>
              A to Slovo stalo sa telom, prebývalo medzi nami.
            </span>
            <span className='text-[15px]'> Ján 1:14 </span>
            Biblia nám tu ukazuje vzťah medzi písaným Slovom a samotným Ježišom
            Kristom. Základom je riadny výklad Písma Svätého. Skrz celé Písma
            sväté nachádzame, že Pán hovoril v podobenstvách.{' '}
            <span className='italic'>
              Ja som prišiel, aby mali život, a to v hojnej miere!
            </span>
            <span className='text-[15px]'> Ján 10:10 </span>
            <span className='italic'>
              {' '}
              Reči, ktoré som vám hovoril, sú duch a život.
            </span>
            <span className='text-[15px]'> Ján 6:63 </span>
            Tieto podobenstvá boli obrazným jazykom, ktorý pravdu o Kristovi mal
            urobiť viac rozoznateľnú. Ježiš vedel, že podobenstvo by bolo ťažko
            zrozumiteľné bez výkladu, ale dal vždy výklad tomu, koho sa to
            týkalo.
          </p>
          <p>
            Vo vyššie uvedenom texte Písma (Ján 6:52-66) židovský ľud, ktorému
            bola reč adresovaná, tomu podobenstvu neporozumel. Hádali sa medzi
            sebou a povedali, "Ako nám tento môže dať jesť svoje telo?“ Židovský
            ľud Ho videl a počul, ale napriek tomu v Neho neveril. Niečo z ich
            neviery možno pochádzalo z ich porozumenia Zákonu (Starému Zákonu),
            v ktorom jedenie mäsa a pitie krvi bolo zakázané. Dokonca aj dnes
            vieme, že Ježiš nemohol myslieť doslovné jedenie a pitie mäsa a
            krvi, pretože to by bolo v rozpore s tým, čo povedal Boh vo svojom
            Slove.
          </p>
        </div>
      </section>
      {/* white lg and mob OK */}
      <section className='bg-black text-white'>
        <div className='text-justify text-[20px] flex flex-col gap-2 pt-4 mx-4 lg:mx-8 pb-16'>
          <p>
            Rímskokatolícka cirkev, práve tak ako židovský ľud, neporozumela
            Kristovej správe. Vykladá ju ako telesné jedenie Kristovho tela.
            Chybne čítané slová Ježiša sa stali podporou doktríny o
            transsubstanciácii (prepodstatnení). Táto doktrína popiera základnú
            požiadavku potrebnú pre spasenie a to výhradne veriť v Pána Ježiša.
            <span className='italic'>
              {' '}
              A chlieb, ktorý ja dám, je moje telo, ktoré vydám za život sveta.
            </span>
            <span className='text-[15px]'> Ján 6:51 </span>
            Kristus tu uvádza, že sám by svoje dobrovoľné utrpenie, svoje telo,
            ponúkol ako obeť. Dal nám svoje telo ako obeť zmierenia "pre život
            sveta" a to je pre večný život!
          </p>
          <p>
            Podľa vyššie uvedených pasáží, jedenie "mäsa" a pitie "krvi" Syna
            človeka znamená prijatie Vykupiteľa a Jeho obete. Kristus Ježiš
            ponúka všetky výhody spásy: odpustenie hriechov, prijatie Boha a
            prijatie ako synov, ktorí dostanú Ducha Svätého ako sľub dedičstva
            večného života. Jedenie Jeho tela a pitie Jeho krvi znamená byť
            identifikovaný s Ním skrze vieru. Nezabudni, že
            <span className='italic'>
              Duch je, ktorý obživuje, telo nič neosoží. Reči, ktoré som vám
              hovoril, sú duch a život.
            </span>
            <span className='text-[15px]'> Ján 6:63 </span>
          </p>
          <p>
            Na ktorom chlebe sa podieľate? Bude zotrvávať vaša večná duša na
            osobe a ponuke Pána Ježiša Krista za vaše hriechy alebo budete jesť
            Eucharistiu v nádeji na získanie večného života? Rímskokatolícka
            cirkev tvrdí, že Božia moc efektívne prúdi z prvku spoločenstva sama
            aj pre seba. Ježiš Kristus sám učí veriť v Jeho osobu -
            <span className='italic'>
              {' '}
              Skutkom Božím je veriť v Toho, ktorého On poslal.
            </span>
            <span className='text-[15px]'> Ján 6:29 </span>
            Veriť v Neho, ktorého Otec poslal je našou povinnosťou, avšak je to
            "prácou Boha", ktorý dáva jasne najavo, že viera je možná skrze
            milosť Božiu.
          </p>
        </div>
      </section>
    </>
  )
}

export default Omsa
