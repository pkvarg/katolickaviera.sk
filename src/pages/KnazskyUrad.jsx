import React from 'react'
import HeaderTransparent from '../components/HeaderTransparent'

const KnazskyUrad = () => {
  return (
    <>
      <HeaderTransparent />
      <div className='knaz-pic flex h-[400px] -mt-[25%] lg:-mt-[8%]'></div>
      <header>
        <div className='flex flex-col text-[20px] align-center mx-4 lg:mx-16 my-8'>
          <h1 className='text-title2 text-center text-[35px]  -mt-[20%] lg:-mt-[15%]'>
            Kňazský úrad
          </h1>
          <div className='text-justify flex flex-col gap-2 mt-8'>
            <p>
              Rímskokatolícka cirkev vyhlasuje svojich biskupov a kňazov za
              sviatostne identifikovaných so samotným Kristom. O katolíckom
              kňazovi je vyhlásené, že je ako Kristus - Najvyšší Kňaz,
              vlastniaci Jeho autoritu a moc. Veriaci sú vyučovaní, že biskup je
              žijúcim obrazom Boha Otca. Obaja, ako kňaz, tak aj biskup, ako je
              vyhlásené, zdieľajú identické kňazstvo a úrad Krista.
            </p>

            {/* <div className='knaz-pic flex lg:hidden w-[100%] h-[30vh] my-4'></div> */}

            <p>
              Naproti tomu Písmo učí, že žiadny človek nemôže zaujať Kristovo
              miesto ako kňaz. V skutočnosti nás Biblia varuje:
              <span className='italic'>
                {' '}
                Hľaďte, aby vás niekto nezviedol. Mnohí prídu v mojom mene a
                budú hovoriť: Ja som (Kristus); zvedú mnohých.
              </span>
              <span className='text-[15px]'> Marek 13:6 </span>
            </p>
            <p>
              Nekončiace kňazstvo Ježiša Krista nemôže byť prevedené na inú
              osobu, ako je uvedené v Písme:
              <span className='italic'>
                {' '}
                On však, pretože zostáva naveky, zastáva kňazský úrad, ktorý
                neprechádza na iného.{' '}
              </span>
              <span className='text-[15px]'> Židom 7:24 </span>
              Teda rímska sviatosť "svätenia", ktorá si uplatňuje nárok na
              Kristovo obetné kňazstvo "kňazským vysvätením", je tradícia ľudí,
              ktorí popierajú zjavenú biblickú pravdu.
            </p>
            <p>
              Rímskokatolícka cirkev neprenecháva samotné Kristovo novozákonné
              obetné kňazstvo jednému vyššie postavenému biskupovi. Katolícke
              kňazstvo je vytvorené za účelom zvečniť svojich sedem fyzických
              sviatostí, o ktorých vyhlasuje, že sú nevyhnutné na spasenie. Celý
              život cirkvi rímskej sa točia okolo jej biskupov, kňazov a
              sviatostí, ktoré vykonávajú.
            </p>
            <p>
              Podľa Biblie majú všetci veriaci priamy prístup k Bohu v Pánovi
              Ježišovi Kristovi.
              <span className='italic'>
                {' '}
                Ale vy ste vyvoleným rodom, kráľovským kňazstvom, svätým
                národom, ľudom Jemu vlastným.
              </span>
              <span className='text-[15px]'> Prvý Petrov 2:9 </span>
            </p>
          </div>
        </div>
      </header>
      {/* Iný Kristus */}
      <section className='flex flex-col text-[20px] justify-center mx-4 lg:mx-16  mt-8 gap-8 pb-8'>
        <h1 className='text-title text-center text-[35px]'>Iný Kristus</h1>
        <div className='text-justify flex flex-col gap-2 mt-8'>
          <p>
            Katolícky veriaci je vyučovaný, že medzi kňazom a Kristom je
            špecifická identifikácia. Toto nevedie do žiadnych pochybností, keď
            katolícky katechizmus vyhlasuje v § 1548: “Lebo on (služobník) vďaka
            kňazskej vysviacke, ktorú prijal, je pripodobnený Veľkňazovi a má
            moc konať mocou a v osobe samého Krista.“ V Novom Zákone Biblie nie
            je žiadna zmienka o cirkevných kňazoch ani kňazskom poradí vedenia.
            V skutočnosti Biblia varuje nasledovníkov Ježiša Krista, aby boli
            bdelí voči tým, ktorí sa pokúsia s Ním zosobniť.
          </p>
        </div>
      </section>
      {/* Iný Kristus  table lg */}
      <section className='hidden text-[18px] lg:flex justify-center mx-12 mt-8 gap-8 pb-8'>
        <div className='w-[50%] border flex flex-col items-center mx-4 pb-4'>
          <h2 className='font-semibold text-center mt-4'>
            Katechizmus hovorí:
          </h2>
          <div className='mx-4 text-justify font-semibold flex flex-col gap-4 mt-8'>
            <p>
              § 1548 Lebo on (služobník) vďaka kňazskej vysviacke, ktorú prijal,
              je pripodobnený Veľkňazovi a má moc konať mocou a v osobe samého
              Krista [virtute ac persona ipsius Christi].“ „Kristus je prameňom
              každého kňazstva, lebo starozákonný kňaz bol jeho „za predobrazom;
              ale kňaz nového Zákona koná v jeho osobe.“
            </p>
            <p>
              § 1549 Prostredníctvom vysvätenej služby (ministerium ordinatum),
              najmä biskupov a kňazov, sa prítomnosť Krista ako Hlavy Cirkvi
              stáva viditeľnou uprostred spoločenstva veriacich. Podľa krásneho
              výroku svätého Ignáca Antiochijského biskup je typos tou Patros,
              akoby živý obraz Boha Otca.
            </p>
            <p>
              § 1551 Sviatosť posvätného stavu udeľuje „posvätnú moc“, ktorá je
              v skutočnosti Kristovou mocou. Vykonávanie tejto moci sa preto má
              riadiť príkladom Krista, ktorý sa z lásky stal posledným a
              služobníkom všetkých. „Pán teda právom povedal, že starostlivosť o
              [jeho] stádo je dôkazom lásky k nemu.“
            </p>
            <p>
              § 1563 Udeľuje sa tou osobitnou sviatosťou, ktorou sú kňazi
              pomazaním Ducha Svätého označení osobitným charakterom [znakom], a
              sú natoľko pripodobnení Kristovi Kňazovi, že môžu konať v osobe
              Krista Hlavy.
            </p>
          </div>
        </div>
        <div className='w-[50%] border flex flex-col items-center pb-4 mx-4'>
          <h2 className='font-semibold text-center mt-4'>Biblia hovorí:</h2>
          <div className='mx-4  text-justify font-semibold flex flex-col gap-4 mt-8'>
            <p>
              Židom 7:24-26
              <span className='italic'>
                {' '}
                On však, pretože zostáva naveky, zastáva kňazský úrad, ktorý
                neprechádza na iného. Preto aj môže dokonale spasiť tých, čo
                skrze Neho pristupujú k Bohu, keďže vždy žije, aby sa prihováral
                za nich. Takého veľkňaza sme aj potrebovali: svätého, nevinného,
                nepoškvrneného, oddeleného od hriešnikov a vyvýšeného nad
                nebesá.
              </span>
            </p>
            <p>
              Prvý Timotejovi 2:5
              <span className='italic'>
                {' '}
                Jeden je totiž Boh, jeden aj Prostredník medzi Bohom a ľuďmi,
                človek Ježiš Kristus. .{' '}
              </span>
            </p>
            <p>
              Matúš 23:8
              <span className='italic'>
                {' '}
                Vy si však nedajte hovoriť: Majster! lebo jeden je váš Majster a
                vy všetci ste bratia.
              </span>
            </p>
            <p>
              Matúš 7:15-16
              <span className='italic'>
                {' '}
                Varujte sa falošných prorokov, ktorí prichádzajú k vám v ovčom
                rúchu, ale vo vnútri sú draví vlci. Po ovocí poznáte ich. Či
                oberajú z tŕnia hrozno alebo z bodľačia figy?
              </span>
            </p>

            <p>
              Matúš 24:4-5
              <span className='italic'>
                {' '}
                Ježiš im odpovedal: Hľaďte, aby vás nikto nezviedol! Lebo mnohí
                prídu v mojom mene a budú hovoriť: Ja som Kristus, - a mnohých
                zvedú.
              </span>
            </p>

            <p>
              Matúš 24:24
              <span className='italic'>
                {' '}
                Lebo povstanú falošní proroci a budú robiť veľké znamenia a
                zázraky, aby zviedli, ak možno, aj vyvolených.
              </span>
            </p>
          </div>
        </div>
      </section>
      {/*  Iný Kristus  table mobile only */}
      <section className='flex flex-col lg:hidden mt-8 gap-8 pb-8'>
        <div className='flex flex-col items-center justify-center mx-4'>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className='text-center mt-4'>
            § 1548 Lebo on (služobník) vďaka kňazskej vysviacke, ktorú prijal,
            je pripodobnený Veľkňazovi a má moc konať mocou a v osobe samého
            Krista [virtute ac persona ipsius Christi].“ „Kristus je prameňom
            každého kňazstva, lebo starozákonný kňaz bol jeho „za predobrazom;
            ale kňaz nového Zákona koná v jeho osobe.“
          </p>
          <p className='text-center'>
            § 1549 Prostredníctvom vysvätenej služby (ministerium ordinatum),
            najmä biskupov a kňazov, sa prítomnosť Krista ako Hlavy Cirkvi stáva
            viditeľnou uprostred spoločenstva veriacich. Podľa krásneho výroku
            svätého Ignáca Antiochijského biskup je typos tou Patros, akoby živý
            obraz Boha Otca.
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className=' text-center mt-4'>
            Židom 7:24-26
            <span className='italic'>
              {' '}
              On však, pretože zostáva naveky, zastáva kňazský úrad, ktorý
              neprechádza na iného. Preto aj môže dokonale spasiť tých, čo skrze
              Neho pristupujú k Bohu, keďže vždy žije, aby sa prihováral za
              nich. Takého veľkňaza sme aj potrebovali: svätého, nevinného,
              nepoškvrneného, oddeleného od hriešnikov a vyvýšeného nad nebesá.
            </span>
          </p>

          <p className=' text-center mt-4'>
            Prvý Timotejovi 2:5
            <span className='italic'>
              {' '}
              Jeden je totiž Boh, jeden aj Prostredník medzi Bohom a ľuďmi,
              človek Ježiš Kristus.
            </span>
          </p>

          <p className=' text-center mt-4'>
            Matúš 23:8
            <span className='italic'>
              {' '}
              Vy si však nedajte hovoriť: Majster! lebo jeden je váš Majster a
              vy všetci ste bratia.
            </span>
          </p>

          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>

          <p className=' text-center mt-4'>
            § 1551 Sviatosť posvätného stavu udeľuje „posvätnú moc“, ktorá je v
            skutočnosti Kristovou mocou. Vykonávanie tejto moci sa preto má
            riadiť príkladom Krista, ktorý sa z lásky stal posledným a
            služobníkom všetkých. „Pán teda právom povedal, že starostlivosť o
            [jeho] stádo je dôkazom lásky k nemu.“
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className=' text-center mt-4'>
            Matúš 7:15-16
            <span className='italic'>
              {' '}
              Varujte sa falošných prorokov, ktorí prichádzajú k vám v ovčom
              rúchu, ale vo vnútri sú draví vlci. Po ovocí poznáte ich. Či
              oberajú z tŕnia hrozno alebo z bodľačia figy?{' '}
            </span>
          </p>
          <h2 className='font-semibold mt-4'>Katechizmus hovorí:</h2>
          <p className=' text-center mt-4'>
            § 1563 Udeľuje sa tou osobitnou sviatosťou, ktorou sú kňazi
            pomazaním Ducha Svätého označení osobitným charakterom [znakom], a
            sú natoľko pripodobnení Kristovi Kňazovi, že môžu konať v osobe
            Krista Hlavy.
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className=' text-center mt-4'>
            Matúš 24:4-5
            <span className='italic'>
              {' '}
              Ježiš im odpovedal: Hľaďte, aby vás nikto nezviedol! Lebo mnohí
              prídu v mojom mene a budú hovoriť: Ja som Kristus, - a mnohých
              zvedú.
            </span>
            <span className='font-bold'>
              {' '}
              Veď ak niekto svoj dom nevie spravovať, ako sa bude starať o
              cirkev Božiu?{' '}
            </span>{' '}
          </p>

          <p className=' text-center mt-4'>
            Matúš 24:24
            <span className='italic'>
              {' '}
              Lebo povstanú falošní proroci a budú robiť veľké znamenia a
              zázraky, aby zviedli, ak možno, aj vyvolených.
            </span>
          </p>
        </div>
      </section>
      {/* Iný Kristus  lg and mob OK */}
      <section>
        <div className='text-justify text-[20px] flex flex-col gap-2 mx-4 lg:mx-16'>
          <p>
            Rozdiely medzi kňazstvom Ježiša Krista a starozákonným kňazstvom sú
            veľmi jasné. Kňazi pred Ježišom Kristom boli Židia - Leviti
            (levitskí kňazi). Boli to iba smrteľní ľudia a bolo nevyhnutnosťou,
            aby ich úrad bol zverený do iných rúk. Na rozdiel od toho, Ježiš
            Kristus je večným kňazom a Jeho kňazstvo je neprenositeľné a
            nepotrebuje žiadneho následníka, pretože je večný:
            <span className='italic'>
              {' '}
              On však, pretože zostáva naveky, zastáva kňazský úrad, ktorý
              neprechádza na iného.
            </span>
            <span className='text-[15px]'> Židom 7:24 </span>
          </p>
          <p>
            Kristus Ježiš odstránil starozákonných kňazov a ich obetné kňazstvo,
            keď umrel na kríži:
            <span className='italic'>
              {' '}
              A hľa, chrámová opona roztrhla sa na dvoje, od vrchu až do spodku,
              zem sa triasla, skaly sa pukali.
            </span>
            <span className='text-[15px]'> Matúš 27:51 </span>
            Táto udalosť odstránila prekážku kňazského sprostredkovania medzi
            Bohom a človekom. Úrad mnohých kňazov Starého Zákona bol odstránený,
            pretože jediný Kňaz - Ježiš, pokračuje navždy a obetnú prácu
            dokončil raz a navždy!
          </p>
          <p>
            Prichádzate k Bohu skrze tohto jediného Najvyššieho Kňaza - Ježiša
            Krista, aby vás zachránil? Alebo ako hriešni sa máte obracať k tým,
            čo sa vyhlasujú za vašich prostredníkov a robia pozemské obete za
            vaše hriechy?
            <span className='italic'>
              {' '}
              Jeden je totiž Boh, jeden aj Prostredník medzi Bohom a ľuďmi,
              človek Ježiš Kristus.
            </span>
            <span className='text-[15px]'> Prvý Timotejovi 2:5</span>
          </p>
        </div>
      </section>
      {/* Celibát black lg and mob OK */}
      <section className='bg-black text-white'>
        <div className='text-justify text-[20px] flex flex-col gap-2 mt-16 mx-4 lg:mx-16'>
          <h2 className='text-title text-center text-[30px] my-16'>Celibát</h2>
          <p>
            V Písme je napísané:
            <span className='italic'>
              {' '}
              Manželstvo všetci majte v úcte a manželské lôžko nepoškvrnené,
              lebo smilníkov a cudzoložníkov bude súdiť Boh.
            </span>
            <span className='text-[15px]'> Židom 13:4 </span>
            Biblická kvalifikácia pastora alebo biskupa je, že má byť mužom
            jednej manželky a najprv vedieť, ako zvládať svoj vlastný domov a
            potom Božiu cirkev. Pán Ježiš Kristus hovorí o dare slobodného stavu
            (celibátu) ako o dare, ktorý je daný len niektorým. Avšak v rímskej
            cirkvi vidíme, že tento slobodný stav je nariadený a len tí, ktorí
            sa zaviažu byť celibátni, sú schopní viesť a dohliadať na cirkev.
            Celý koncept celibátneho vedenia je úplným opakom jasného vyučovania
            nájdeného v Božom Slove.
          </p>
        </div>
      </section>
      {/* Celibát black table lg */}
      <section className='hidden text-[18px] bg-black text-white lg:flex justify-center gap-8 pt-16 pb-16 px-12'>
        <div className='w-[50%] border flex flex-col items-center mx-4 pb-4'>
          <h2 className='font-semibold text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <div className='mx-4 text-justify flex flex-col gap-4 mt-8'>
            <p>
              § 1579 Všetci vysvätení služobníci Latinskej cirkvi, okrem
              trvalých diakonov, sa normálne vyberajú spomedzi veriacich mužov,
              ktorí sú slobodní a chcú zachovávať celibát „pre nebeské
              kráľovstvo“ (Mt 19,12). Sú povolaní, aby sa s nerozdeleným srdcom
              zasvätili Pánovi a jeho veciam, a teda sa celí oddávajú Bohu a
              ľuďom. Celibát je znakom tohto nového života. Na službu tomuto
              životu je služobník Cirkvi vysvätený. Keď je celibát prijatý s
              radostným srdcom, pôsobivo ohlasuje Božie kráľovstvo.
            </p>

            <p>
              {' '}
              § 1599 V Latinskej cirkvi sa sviatosť posvätného stavu v stupni
              kňazov (presbyterát) udeľuje spravidla len kandidátom, ktorí sú
              ochotní slobodne prijať celibát a verejne osvedčia svoju vôľu
              zachovávať ho z lásky k Božiemu kráľovstvu a k službe ľudom.
            </p>
          </div>
        </div>
        <div className='w-[50%] border flex flex-col items-center pb-4 mx-4'>
          <h2 className='font-semibold text-center mt-4'>Biblia hovorí:</h2>
          <div className='mx-4  text-justify flex flex-col gap-4 mt-8'>
            <p>
              Prvý Timotejovi 3:2-5
              <span className='italic'>
                {' '}
                Biskup musí byť bez úhony, muž jednej ženy, striezlivý, rozumný,
                slušný, pohostinný, spôsobný vyučovať, nie pijan, nie bitkár ani
                nie žiadostivý nečistého zisku, ale mierny, nehašterivý a nie
                lakomý. Má si dobre spravovať dom a deti udržiavať v poddanosti
                so všetkou dôstojnosťou. Veď ak niekto svoj dom nevie spravovať,
                ako sa bude starať o cirkev Božiu?
              </span>
            </p>
            <p>
              Títovi 1:5-6
              <span className='italic'>
                {' '}
                Nato som ťa nechal na Kréte, aby si usporiadal, čo ešte nebolo
                (zriadené), a po mestách ustanovil starších, ako som ti
                prikázal: ak je niekto bez úhony, muž jednej ženy, má veriace
                deti, ktoré nie sú obviňované z roztopašnosti a neposlušnosti.
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* Celibat black table mobile only */}
      <section className='bg-black text-white flex flex-col lg:hidden  gap-8 py-8'>
        <div className='flex flex-col items-center justify-center mx-4'>
          <h2 className='font-semibold text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <p className=' text-center mt-8'>
            § 1579 Všetci vysvätení služobníci Latinskej cirkvi, okrem trvalých
            diakonov, sa normálne vyberajú spomedzi veriacich mužov, ktorí sú
            slobodní a chcú zachovávať celibát „pre nebeské kráľovstvo“ (Mt
            19,12). Sú povolaní, aby sa s nerozdeleným srdcom zasvätili Pánovi a
            jeho veciam, a teda sa celí oddávajú Bohu a ľuďom. Celibát je znakom
            tohto nového života. Na službu tomuto životu je služobník Cirkvi
            vysvätený. Keď je celibát prijatý s radostným srdcom, pôsobivo
            ohlasuje Božie kráľovstvo.
          </p>

          <h2 className='font-semibold text-center  mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Prvý Timotejovi 3:2-5
            <span className='italic'>
              {' '}
              Biskup musí byť bez úhony, muž jednej ženy, striezlivý, rozumný,
              slušný, pohostinný, spôsobný vyučovať, nie pijan, nie bitkár ani
              nie žiadostivý nečistého zisku, ale mierny, nehašterivý a nie
              lakomý. Má si dobre spravovať dom a deti udržiavať v poddanosti so
              všetkou dôstojnosťou. Veď ak niekto svoj dom nevie spravovať, ako
              sa bude starať o cirkev Božiu?
            </span>
          </p>

          <h2 className='font-semibold text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <p className=' text-center mt-4'>
            § 1599 V Latinskej cirkvi sa sviatosť posvätného stavu v stupni
            kňazov (presbyterát) udeľuje spravidla len kandidátom, ktorí sú
            ochotní slobodne prijať celibát a verejne osvedčia svoju vôľu
            zachovávať ho z lásky k Božiemu kráľovstvu a k službe ľudom.
          </p>

          <h2 className='font-semibold text-center  mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            Títovi 1:5-6
            <span className='italic'>
              {' '}
              Nato som ťa nechal na Kréte, aby si usporiadal, čo ešte nebolo
              (zriadené), a po mestách ustanovil starších, ako som ti prikázal:
              ak je niekto bez úhony, muž jednej ženy, má veriace deti, ktoré
              nie sú obviňované z roztopašnosti a neposlušnosti.
            </span>
          </p>
        </div>
      </section>

      {/* Celibat black lg and mob OK */}
      <section className='bg-black text-white'>
        <div className='text-justify text-[20px] flex flex-col gap-2 pb-16 mx-4 lg:mx-16'>
          <p>
            Katolícka cirkev popiera aj v tomto bode Božie Slovo a pokúša Pána
            Boha v tom, čo robí svojim mladým. Celý účel Vatikánu - pápeža,
            kardinálov, kúrie - je udržiavať celosvetovo kontrolu nad všetkým
            kňazstvom. Museli teda uložiť zákon kňazského celibátu tak, aby
            mohli pokračovať vo svojej kontrole. Ak by sa kňazi oženili, bola by
            cirkev zodpovedná za ich deti, majetok a domácnosti.
          </p>
        </div>
      </section>

      {/* Celibat outro white lg and mob OK */}
      <section>
        <div className='text-justify text-[20px] flex flex-col gap-2 py-8 mx-4 lg:mx-16'>
          <p>
            Rímska cirkev požaduje celibát na všetkých, ktorí sú vo vedení a
            zakazuje im sexuálne naplnenie manželstva, ktoré bolo dané Bohom.
            Tieto ľudské ustanovenia sú ťažkým bremenom, ktoré spočíva na každom
            z ľudí pod celibátom. Každý človek vstupuje do cirkvi s veľkými
            ambíciami, ale málokto je toto bremeno schopný uniesť a nepodľahne.
            Otázkou je stále, aké ovocie nesie tento strom a aké dôsledky majú
            tieto ľudské nariadenia. Týmto ovocím a dôsledky je v celej histórii
            cirkev rímska známa po celé stáročia.
          </p>
          <p>
            <span className='italic'>
              {' '}
              Ale Duch výslovne hovorí, že v posledných časoch niektorí odpadnú
              od viery a budú sa pridŕžať bludných duchov a učenia démonických,
              pokryteckých, falošných učiteľov, ktorí majú biľagované svedomie,
              zabraňujú ženiť sa (a prikazujú) zdržiavať sa pokrmov, ktoré Boh
              stvoril, aby ich s ďakovaním požívali veriaci a tí, čo poznali
              pravdu.
            </span>
            <span className='text-[15px]'> Prvý Timotejovi 4:1-3 </span>
          </p>
        </div>
      </section>

      <span className='italic'></span>
      <span className='text-[15px]'></span>
      <span className='italic'></span>
      <span className='text-[15px]'></span>
    </>
  )
}

export default KnazskyUrad
