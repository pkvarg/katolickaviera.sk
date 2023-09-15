import React from 'react'
import HeaderTransparent from '../components/HeaderTransparent'

const Biblia = () => {
  return (
    <>
      <HeaderTransparent />
      {/* Biblia */}
      <main>
        <div className='biblia-pic flex h-[250px] lg:h-[650px] -mt-[20%] md:-mt-[70%] lg:-mt-[17%] xl:-mt-[12%] 2xl:-mt-[8%]'></div>

        <div className='flex flex-col text-[20px] justify-center mx-4 lg:mx-16 lg:-mt-[200px] gap-8 pb-8'>
          <h1 className='text-title3 text-center text-[35px]'>Biblia</h1>
          <div className='text-justify flex flex-col gap-2 mt-8'>
            <p>
              Biblia, tiež nazývaná ako Sväté Písmo alebo Božie Slovo, je
              najdôležitejšia k nášmu porozumeniu tomu, čo je Bohom požadované
              od človeka. Rímsky katolicizmus bol vždy v rozpore so Svätým Bohom
              v otázke zdroja pravdy. Sám Pán Ježiš Kristus identifikoval pravdu
              s písaným Slovom. Povedal:
              <span className='italic'>
                {' '}
                Posväť ich v pravde - Tvoje slovo je pravda.{' '}
              </span>
              <span className='text-[15px]'> Ján 17:17 </span>
              Nie je iný zdroj, než písané Písmo Sväté, na čo vyššie citovaný
              verš poukazuje. Sám tento zdroj - Biblia, je pre veriaceho
              štandardnou pravdou a autoritou. Preto všetci pravdivo veriaci
              dôverujú Bohu samému a len Jeho Slovu. Biblia je absolútny zdroj
              všetky pravdy, rovnako ako Pán deklaroval:
              <span className='italic'> Písmo nemôže byť zrušené! </span>
              <span className='text-[15px]'> Ján 10:35 </span>
            </p>
            <p>
              Na rozdiel od toho katolícka cirkev deklaruje, že oboje „Posvätná
              Tradícia a Sväté písmo teda navzájom úzko súvisia a sú spojené.”
              (§ 80) “Preto treba obidve prijímať a vážiť si ich s rovnakou
              láskou a úctou." (§ 82)
            </p>
            <p>
              Biblia bola daná ako milosrdná a stála podpora proti všetkým
              duchovným zmätkom, temnotám a neistotám zahŕňajúcim nielen
              rímskokatolícku cirkev. Naozaj chválim Boha za tento poklad a
              dôveru, ktorú máme v Biblii. Kiež by si aj Ty čoskoro spoznal
              objatie Jeho Svätého Slova ako svojej jedinej autority.
            </p>
          </div>
        </div>
      </main>
      {/* Biblia alebo tradícia? */}
      <section className='flex flex-col text-[20px] justify-center mx-4 lg:mx-16  mt-8 gap-8 pb-8'>
        <h1 className='text-title3 text-center text-[35px]'>
          Biblia alebo tradícia?
        </h1>
        <div className='text-justify flex flex-col gap-2 mt-8'>
          <p>
            V Novom Zákone je písané Slovo Božie ako jediné, na ktoré sa Pán
            Ježiš a Jeho apoštoli odkazujú ako na konečnú autoritu. Pán Ježiš
            identifikoval pravdu ako písané Slovo. Ježiš povedal:
            <span className='italic'>
              {' '}
              Posväť ich v pravde - Tvoje slovo je pravda.{' '}
            </span>
            Apoštol Pavol deklaroval plnú dostatočnosť Písma, kedy povedal:
            <span className='text-[15px]'> Ján 17:17 </span>
            <span className='italic'>
              {' '}
              Každé písmo, vdýchnuté od Boha, (je) aj užitočné učiť, karhať,
              napravovať a vychovávať v spravodlivosti, aby bol človek Boží
              dokonalý a spôsobný na všetko dobré.{' '}
            </span>
            <span className='text-[15px]'> Druhý Timotejovi 3:16-17 </span>
          </p>
          <p>
            Avšak katolícka cirkev otvorene tvrdí, že pravda nespočíva v
            samotnom Písme, ale spoločne s Písmom a tradíciou. Prosím, zvážte
            tento rozdiel, keď sa spýtam: Na ktorej autorite založím svoju
            vieru? Katolícky katechizmus a Biblia obsahujú inštrukcie, ktoré
            vedú každá k opačnému smeru.
          </p>
        </div>
      </section>
      {/* Biblia alebo tradícia? table lg */}
      <section className='hidden text-[18px] lg:flex justify-center mx-12 mt-8 gap-8 pb-8'>
        <div className='w-[50%] border flex flex-col items-center mx-4 pb-4'>
          <h2 className='font-semibold text-center mt-4'>
            Katechizmus hovorí:
          </h2>
          <div className='mx-4 text-justify font-semibold flex flex-col gap-4 mt-8'>
            <p>
              § 80 Posvätná Tradícia a Sväté písmo teda navzájom úzko súvisia a
              sú spojené. Veď obidve vyvierajú z toho istého božského prameňa,
              určitým spôsobom splývajú v jedno a smerujú k tomu istému cieľu.
            </p>

            <p>
              § 81 Sväté písmo je Božie slovo, nakoľko je písomne zaznačené z
              vnuknutia Ducha Svätého. Posvätná Tradícia však Božie slovo, ktoré
              zveril Kristus Pán a Duch Svätý apoštolom, neporušene odovzdáva
              ich nástupcom.
            </p>

            <p>
              § 82 Z toho vyplýva, že Cirkev, ktorej je zverené odovzdávanie a
              vysvetľovanie Zjavenia, „nečerpá svoju istotu o všetkom, čo bolo
              zjavené, iba zo Svätého písma. Preto treba obidve prijímať a vážiť
              si ich s rovnakou láskou a úctou.“
            </p>
          </div>
        </div>
        <div className='w-[50%] border flex flex-col items-center pb-4 mx-4'>
          <h2 className='font-semibold text-center mt-4'>Biblia hovorí:</h2>
          <div className='mx-4 text-justify font-semibold flex flex-col gap-4 mt-8'>
            <p>
              Ján 10:35
              <span className='italic'> Písmo nemôže byť zrušené!</span>
            </p>
            <p>
              Ján 17:17
              <span className='italic'>
                {' '}
                Posväť ich v pravde - Tvoje slovo je pravda.{' '}
              </span>
            </p>
            <p>
              Matúš 4:4
              <span className='italic'>
                {' '}
                On však povedal: Napísané je: Nie samým chlebom bude človek žiť,
                ale každým slovom, ktoré vychádza z úst Božích.
              </span>
            </p>

            <p>
              Prvý Korintským 4:6
              <span className='italic'>
                {' '}
                Aby ste sa na nás naučili: Nič nad to, čo je napísané! - aby sa
                nikto nevychvaľoval jedným proti druhému.
              </span>
            </p>
            <p>
              Príslovia 30:5-6
              <span className='italic'>
                {' '}
                Každá reč Božia je prečistená, On je štítom tým, čo sa k Nemu
                utiekajú. Nepridávaj nič k Jeho slovám, aby ťa nestrestal a
                neoznačil za klamára.
              </span>
            </p>

            <p>
              Marek 7:13
              <span className='italic'>
                {' '}
                Takto rušíte slovo Božie svojím podaním, ktoré ďalej podávate; a
                mnoho tomu podobné robíte.
              </span>
            </p>
            <p>
              Zjavenie Jána 22:18
              <span className='italic'>
                {' '}
                Ja dosvedčujem každému, kto počuje prorocké slová tejto knihy:
                Ak k nim niekto pridá, tomu Boh pridá pliagy opísané v tejto
                knihe.
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* Biblia alebo tradícia?
table mobile only */}
      <section className='flex flex-col lg:hidden mt-8 gap-8 pb-8'>
        <div className='flex flex-col items-center justify-center mx-4'>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className='text-center mt-4'>
            § 80 Posvätná Tradícia a Sväté písmo teda navzájom úzko súvisia a sú
            spojené. Veď obidve vyvierajú z toho istého božského prameňa,
            určitým spôsobom splývajú v jedno a smerujú k tomu istému cieľu.
          </p>

          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Ján 10:35
            <span className='italic'> Písmo nemôže byť zrušené!</span>
          </p>
          <p className='text-center mt-4'>
            Ján 17:17
            <span className='italic'>
              {' '}
              Posväť ich v pravde - Tvoje slovo je pravda.{' '}
            </span>
          </p>
          <p className='text-center mt-4'>
            Matúš 4:4
            <span className='italic'>
              {' '}
              On však povedal: Napísané je: Nie samým chlebom bude človek žiť,
              ale každým slovom, ktoré vychádza z úst Božích.
            </span>
          </p>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>

          <p className='text-center mt-4'>
            § 81 Sväté písmo je Božie slovo, nakoľko je písomne zaznačené z
            vnuknutia Ducha Svätého. Posvätná Tradícia však Božie slovo, ktoré
            zveril Kristus Pán a Duch Svätý apoštolom, neporušene odovzdáva ich
            nástupcom.
          </p>

          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>

          <p className='text-center mt-4'>
            Prvý Korintským 4:6
            <span className='italic'>
              {' '}
              Aby ste sa na nás naučili: Nič nad to, čo je napísané! - aby sa
              nikto nevychvaľoval jedným proti druhému.
            </span>
          </p>
          <p className='text-center mt-4'>
            Príslovia 30:5-6
            <span className='italic'>
              {' '}
              Každá reč Božia je prečistená, On je štítom tým, čo sa k Nemu
              utiekajú. Nepridávaj nič k Jeho slovám, aby ťa nestrestal a
              neoznačil za klamára.
            </span>
          </p>

          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>

          <p className='text-center mt-4'>
            § 82 Z toho vyplýva, že Cirkev, ktorej je zverené odovzdávanie a
            vysvetľovanie Zjavenia, „nečerpá svoju istotu o všetkom, čo bolo
            zjavené, iba zo Svätého písma. Preto treba obidve prijímať a vážiť
            si ich s rovnakou láskou a úctou.“
          </p>

          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>

          <p className=' text-center mt-4'>
            Marek 7:13
            <span className='italic'>
              {' '}
              Takto rušíte slovo Božie svojím podaním, ktoré ďalej podávate; a
              mnoho tomu podobné robíte.
            </span>
          </p>
          <p className=' text-center mt-4'>
            Zjavenie Jána 22:18
            <span className='italic'>
              {' '}
              Ja dosvedčujem každému, kto počuje prorocké slová tejto knihy: Ak
              k nim niekto pridá, tomu Boh pridá pliagy opísané v tejto knihe.
            </span>
          </p>
        </div>
      </section>
      {/* Biblia alebo tradícia?
lg and mob OK */}
      <section>
        <div className='text-justify text-[20px] flex flex-col gap-2 mx-4 lg:mx-16'>
          <p>
            Kresťan biblicky-veriaci je usvedčovaný Duchom Svätým, prijíma,
            necháva sa viesť, verí a podriaďuje sa Biblii, pretože je autoritou
            Boha, ktorý mu ju dal. Katolícka cirkev tupí absolútnu autoritu
            Božieho Slova tvrdením, že oboje, ako Písmo, tak aj tradície musia
            byť prijímané s majú sa ctiť s rovnakou láskou a vážnosťou.
            Rímskokatolícka cirkev neguje skutočný spôsob, ako môže človek
            objaviť a naučiť sa tomu ako môže byť spasený od svojich hriechov.
            Vatikánske učenie je doslova popísané v Slove Pána Ježiša:
            <span className='italic'>
              {' '}
              Beda vám, zákonníkom, že ste vzali kľúč poznania; sami ste
              nevošli, a ktorí chceli vojsť, tým ste prekážali.{' '}
            </span>
            <span className='text-[15px]'> Lukáš 11:52 </span>
            <span className='italic'>
              {' '}
              Apoštol Pavol nalieha na veriacich: Moja reč a moja kázeň nebola v
              presvedčivých slovách múdrosti, ale v dokazovaní Ducha a moci, aby
              sa vaša viera nezakladala na ľudskej múdrosti, ale na Božej moci.{' '}
            </span>
            <span className='text-[15px]'> Prvý Korintským 2:4-5 </span>
          </p>
        </div>
      </section>

      {/* Apokryfné (deuterokanonické) zväzky black lg and mob OK */}
      <section className='bg-black text-white'>
        <div className='text-justify text-[20px] flex flex-col gap-2 mt-16 mx-4 lg:mx-16'>
          <h2 className='text-title3 text-center text-[30px] my-16'>
            Apokryfné (deuterokanonické) zväzky
          </h2>
          <p>
            Názov "Apokryf" je používaný pre zvláštne biblické spisy, ktoré sú
            obsiahnuté v katolíckej Biblii. Sú to knihy Tobiáš, Judit,
            Šalamúnova múdrosť, Prvá a Druhá kniha Makabejských, Sirachovec,
            Baruch. Tiež zahŕňajú prídavky ku knihe Daniel (13. kapitola -
            príbeh "Zuzana" a 14. kapitola - vysvetlenie "Biel a drak" a "Pieseň
            troch mladých mužov" vložených do 3. kapitoly). Kniha Ester je tiež
            rozšírená na 107 veršov. Pridaním týchto prímesí do Biblie,
            katolícka cirkev kontaminovala a znehodnotila písané Božie Slovo ako
            našu jedinú autoritu. Toto ale cirkvi nevadí, pretože jej konečná
            autorita nespočíva len v písanom Slove.
          </p>
          <p>
            Biblia je dokonalá a je dokonale vhodná na naše spasenie, ku ktorému
            bola navrhnutá. V pridávaní viacerých kníh a veršov k dokonalému
            Božiemu Slovu, katolícka cirkev ohrozuje duše mnohých mužov i žien.
          </p>
        </div>
      </section>
      {/* Apokryfné (deuterokanonické) zväzky black table lg */}
      <section className='hidden text-[18px] bg-black text-white lg:flex justify-center px-12 gap-8 pt-16 pb-16'>
        <div className='w-[50%] border flex flex-col items-center mx-4 pb-4'>
          <h2 className='font-semibold text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <div className='mx-4 text-justify flex flex-col gap-4 mt-8'>
            <p>
              § 120 Apoštolská Tradícia umožnila Cirkvi rozoznať, ktoré spisy
              majú byť započítané do zoznamu posvätných kníh. Tento úplný zoznam
              sa volá „kánon“ Svätého písma. Obsahuje 46 spisov Starého zákona
              (45, ak sa Jeremiáš a Náreky počítajú spolu) a 27 spisov Nového
              zákona.
            </p>

            <p>
              § 958 Spoločenstvo so zosnulými. „Putujúca Cirkev veľmi dobre
              pochopila toto spoločenstvo celého tajomného tela Ježiša Krista, a
              preto si už od prvotných čias kresťanstva veľmi nábožne uctievala
              pamiatku zosnulých; a keďže je svätá a spasiteľná myšlienka modliť
              sa za mŕtvych, aby boli zbavení hriechov, obetovala za nich aj
              prosby.“
            </p>

            <p>
              § 1032 Toto učenie sa opiera aj o prax modliť sa za zosnulých, o
              ktorej hovorí už Sväté písmo: „Preto [Júda Machabejský] nariadil…
              zmiernu obetu za mŕtvych, aby boli zbavení hriechu“ (2Mach 12,46)
            </p>
          </div>
        </div>
        <div className='w-[50%] border flex flex-col items-center pb-4 mx-4'>
          <h2 className='font-semibold text-center  mt-4'>Biblia hovorí:</h2>
          <div className='mx-4  text-justify flex flex-col gap-4 mt-8'>
            <p>
              Rimanom 3:1-2
              <span className='italic'>
                {' '}
                V čom je teda prednosť Žida? Veľký v každom ohľade! Predovšetkým
                to, že Židom boli zverené slová Božie.
              </span>
            </p>
            <p>
              Deuteronómium 18:10-12
              <span className='italic'>
                {' '}
                Nech sa nenájde u teba taký, čo by syna alebo dcéru prevádzal
                ohňom, ani veštec, ani vykladač znamení, ani hádač, ani
                čarodejník, ani zaklínač, ani vyvolávač duchov, ani jasnovidec,
                ani kto by sa vypytoval mŕtvych. Lebo je Hospodinovi ohavný
                každý, kto robí tieto veci.
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* Apokryfné (deuterokanonické) zväzky
 table mobile only */}
      <section className='flex flex-col bg-black text-white lg:hidden pt-8 gap-8 pb-8'>
        <div className='flex flex-col items-center justify-center mx-4'>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className='text-center mt-4'>
            § 120 Apoštolská Tradícia umožnila Cirkvi rozoznať, ktoré spisy majú
            byť započítané do zoznamu posvätných kníh. Tento úplný zoznam sa
            volá „kánon“ Svätého písma. Obsahuje 46 spisov Starého zákona (45,
            ak sa Jeremiáš a Náreky počítajú spolu) a 27 spisov Nového zákona.
          </p>

          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Rimanom 3:1-2
            <span className='italic'>
              {' '}
              V čom je teda prednosť Žida? Veľký v každom ohľade! Predovšetkým
              to, že Židom boli zverené slová Božie.
            </span>
          </p>

          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className='text-center mt-4'>
            § 958 Spoločenstvo so zosnulými. „Putujúca Cirkev veľmi dobre
            pochopila toto spoločenstvo celého tajomného tela Ježiša Krista, a
            preto si už od prvotných čias kresťanstva veľmi nábožne uctievala
            pamiatku zosnulých; a keďže je svätá a spasiteľná myšlienka modliť
            sa za mŕtvych, aby boli zbavení hriechov, obetovala za nich aj
            prosby.“
          </p>
          <p className='text-center mt-4'>
            § 1032 Toto učenie sa opiera aj o prax modliť sa za zosnulých, o
            ktorej hovorí už Sväté písmo: „Preto [Júda Machabejský] nariadil…
            zmiernu obetu za mŕtvych, aby boli zbavení hriechu“ (2Mach 12,46)
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            <p>
              Deuteronómium 18:10-12
              <span className='italic'>
                {' '}
                Nech sa nenájde u teba taký, čo by syna alebo dcéru prevádzal
                ohňom, ani veštec, ani vykladač znamení, ani hádač, ani
                čarodejník, ani zaklínač, ani vyvolávač duchov, ani jasnovidec,
                ani kto by sa vypytoval mŕtvych. Lebo je Hospodinovi ohavný
                každý, kto robí tieto veci.
              </span>
            </p>
          </p>
        </div>
      </section>
      {/* Apokryfné (deuterokanonické) zväzky 
 black lg and mob OK */}
      <section className='bg-black text-white'>
        <div className='text-justify text-[20px] flex flex-col gap-2 pb-16 mx-4 lg:mx-16'>
          <p>
            Pán Ježiš Kristus a pisatelia Nového Zákona nikdy nedávali vážnosť
            ničomu z apokryfných kníh. Charakteristické "je napísané" alebo
            ekvivalenty ako sú "toto hovorí Pán" je obvykle používané v Novom
            Zákone pri citáciách Starého Zákona. Je to neobyčajne významné, že
            takmer všetky kanonické knihy zo Starého Zákona sú notársky overené
            skrze odkazy v Novom Zákone. Na žiadnom mieste Nového Zákona nie je
            ani zmienka, ani odkaz na apokryfné knihy, preto ich môžeme vylúčiť
            aj ako Písmo.
          </p>
          <p>
            Historicky, Židia nikdy neprijali nič viac, než kanonické knihy
            Starého Zákona a odmietli zmiešať apokryfné knihy s Božími
            proroctvami.
          </p>
          <p>
            Apokryfné zväzky obsahujú chyby, bájky, povery, mágiu, klamy a zlú
            doktrínu ako je modlenie za mŕtvych. Všetky tieto veci sú úplne v
            nesúlade s čistým Slovom Božím v kanonických knihách. Skutočnosť, že
            cirkev rímska pridala knihy, ktoré obsahujú takéto falošné doktríny,
            ukazuje, že neveria v integritu pravdy a jej láska je skôr k svojej
            tradícii.
            <span className='italic'>
              {' '}
              Ja dosvedčujem každému, kto počuje prorocké slová tejto knihy: Ak
              k nim niekto pridá, tomu Boh pridá pliagy opísané v tejto knihe.{' '}
            </span>
            <span className='text-[15px]'> Zjavenie Jána 22:18 </span>
          </p>
        </div>
      </section>

      {/* Biblia je Slovo Božie white lg and mob OK */}
      <section>
        <div className='text-justify text-[20px] flex flex-col gap-2 py-8 mx-4 lg:mx-16'>
          <h2 className='text-title3 text-center text-[30px] mt-4 mb-8'>
            Biblia je Slovo Božie{' '}
          </h2>

          <p>
            Kde Biblia hovorí, že naša viera by mala byť založená iba na učení
            Biblie? Každý učeník Krista je poslušný svojmu Pánovi a verí Jeho
            Slovu. Kresťan nedovolí, aby akékoľvek stvorenie uchvátilo trón Jeho
            Pána. Okrem toho kresťan verí, že Biblia je Slovo Božie. Je oddaný
            jeho učeniu, prikázaniam a inštrukciám.
          </p>
          <p>
            Čo by ste pridali k Biblii? „Sola Scriptura“ nehovorí o tom, či
            Biblia je alebo nie je nezlyhávajúce Božie Slovo. Všetci vieme, že
            je spoľahlivé. Otázkou je, či je Biblia jediné nezlyhávajúce
            pravidlo viery alebo by sme mali pridať niečo iné, čo sa rovná
            autorite spolu s Bibliou.
          </p>
          <p>
            Čo tak pridať humanistické myšlienky a filozofiu ako to robia
            liberáli? Nie, pretože slovo človeka sa nemôže nikdy rovnať Slovu
            Boha.
            <span className='italic'>
              {' '}
              Každá reč Božia je prečistená, On je štítom tým, čo sa k Nemu
              utiekajú. Nepridávaj nič k Jeho slovám, aby ťa nestrestal a
              neoznačil za klamára.{' '}
            </span>
            <span className='text-[15px]'> Príslovia 30:5 </span>
          </p>
          <p>
            Môžeme pridať nové zjavenia? Nie, pretože Božie zjavenie je
            kompletné. Bola doba, kedy Boh dával nové zjavenia, keď odhaľoval
            plán záchrany. Vtedy ešte nebolo žiadne písané Božie Slovo a Boh
            hovoril počuteľne k ľuďom ako bol Adam, Noe a Abrahám. To boli doby,
            kedy Božie Slovo prichádzalo z formy prorockej a apoštolskej reči
            rovnako tak dobre ako písaná forma. Božie zjavenie dosiahlo svoj
            vrchol v Kristovi, ktorý je obrazom neviditeľného Boha. Počas
            apoštolského obdobia, kresťanská viera bola doručená v plnom znení
            do cirkvi, ako povedal Júda:
            <span className='italic'>
              {' '}
              Milovaní, keďže sa všemožne snažím písať vám o našom spoločnom
              spasení, nútený som vám napísať a napomenúť vás, aby ste bojovali
              za vieru, odovzdanú raz navždy svätým.{' '}
            </span>
            <span className='text-[15px]'> Júda 1:3 </span>
            Je preto mylné hľadať nové zjavenia vidiac, že Biblia deklaruje, že
            kresťanská viera je nám v plnosti doručená.
          </p>
          <p>
            Čo tak tradície? Dal Boh orgán pravdy, rôzny a nehľadiaci na
            vyučovanie z Biblie, ktorý by sa prenášal nedotknutý naskrz
            storočiami v ústnej a nepísanej forme? Absolútne nie! Môžeme
            porovnať cirkev spolu so starozákonným Božím ľudom. Od proroka
            Malachiáša k Jánovi Krstiteľovi Boh nedal žiadne nové zjavenie.
            Židia boli zodpovedne zosobášení Svätým Písmom a ničomu inému. Pán
            Ježiš Kristus počas svojej pozemskej služby neočakával, že Židia
            uveria nejakej extra-písomnej doktríne, ktorá by sa pravdepodobne
            prenášala z úst proroka po celú dobu ústne. Ježiš často poukazoval
            na Písmo Sväté – “je napísané” – nikdy neapeluje na tradíciu, ktorá
            je postavená na úroveň autority (pozri nižšie). Naopak sám pokarhal
            Židov na pridávanie tradícií, ktoré v skutočnosti podkopávajú
            vyučovanie z Písma Svätého:
            <span className='italic'>
              {' '}
              Darmo ma však uctievajú, keď ľudským príkazom učia ako učeniam
              (Božím). Opustili ste prikázanie Božie a pridŕžate sa podania
              ľudského. Potom im povedal: Pekne-krásne rušíte prikázanie Božie,
              aby ste zachovávali svoje podanie.{' '}
            </span>
            <span className='text-[15px]'> Marek 7:7-9 </span>
            Je smutné, že história sama seba opakuje. Kresťania by mali byť
            podriadení Slovu Božiemu, uchovanému v dokončených Písmach Svätých,
            ale často idú ďalej za to, čo je napísané. Kvôli tradícii má
            katolícka cirkev modly, povinný pôst, relikvie, odpustky, celibátne
            kňazstvo, obeť omše, spovednicu, očistec a iné, z ktorých sa ani
            jedno nenachádza v Biblii a svojou podstatou popierajú jednoduché
            učenie Písma Svätého.
          </p>
          <p>
            Môžeme dať vyučovaciu autoritu cirkvi na rovnakú úroveň s Bibliou?
            Samozrejme, že by sme mali počúvať a rešpektovať kresťanských
            učiteľov. Pastori (inak známi ako biskupi a starší) sú Božím darom
            do Jeho cirkvi. Sú ustanovení Bohom učiť a viesť cirkev a kresťanom
            je prikázané, aby sa im podriadili. Vedúcou zodpovednosťou je
            študovať a učiť Slovo Božie tak ako je, bez žiadnych prídavkov alebo
            zmien.
            <span className='italic'>
              {' '}
              Usiluj sa postaviť pred Boha ako osvedčený, ako pracovník, ktorý
              sa nepotrebuje hanbiť a správne podáva slovo pravdy.{' '}
            </span>
            <span className='text-[15px]'> Druhý Timotejovi 2:15 </span>
            Tým ostatní veriaci nie sú oslobodení od osobného štúdia Božieho
            Slova:
            <span className='italic'> Všetko skúmajte, dobrého sa držte! </span>
            <span className='text-[15px]'> Prvý Tesalonickým 5:21 </span>
          </p>
          <p>
            Jednoducho, Biblia je Slovo Božie a nie je autority, ktorá by mu
            mohla byť rovná. Z toho dôvodu je kresťan oddaný Biblii samotnej ako
            konečnej a absolútnej autorite. Kristus odmietol tradíciu ako
            prídavný prúd zjavenia. Kristus ukázal, že náboženskí učitelia boli
            omylní - a veľmi! Kristus mal absolútnu dôveru v Písmo Sväté ako
            Božie Slovo.
          </p>
          <p>
            Biblia zjavuje nekonečného Boha, ktorý je dokonalý vo svätosti,
            láske, múdrosti a vo všetkých Jeho vlastnostiach. Biblia nás učí,
            ako stvoril svet a ako ovláda všetky veci svojou múdrou
            prozreteľnosťou. Jeho Zákon nás odhaľuje ako hriešnych a varuje nás
            pred peklom a hnevom, ktorý príde. Vďaka Bohu, Biblia má tiež dobrú
            správu o nádeji. Boh poslal svojho Syna, ktorý dal sám Seba, ako
            výkupné za mnohých. Zvíťazil nad smrťou a teraz žije naveky. Biblia
            nás volá k pokániu a viere v Ježiša Krista pre našu spásu a prevádza
            nás svojimi príkazmi po ceste nášho života.
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

export default Biblia
