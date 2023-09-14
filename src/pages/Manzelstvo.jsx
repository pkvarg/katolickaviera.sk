import React from 'react'
import Header from '../components/Header'

const Manzelstvo = () => {
  return (
    <>
      <Header />
      <main>
        <div className='manzelstvo-pic flex h-[450px] -mt-[25%] lg:-mt-[8%]'></div>

        <div className='flex flex-col text-[20px] align-center mx-4 lg:mx-16 '>
          <h1 className='text-title2 text-center text-[35px] -mt-[20%] mb-8'>
            Manželstvo
          </h1>
          <div className='flex flex-row'>
            <div className='text-justify flex flex-col gap-2'>
              <p>
                Svätosť a dôstojnosť manželstva je veriacimi v rímskokatolíckej
                cirkvi rešpektovaná práve rovnako tak, ako u každého biblického
                kresťana. Avšak nastáva mnoho problémov, ktoré vyvstávajú podľa
                učenia katolíckej cirkvi v téme manželstva. Problémy nastávajú,
                keď cirkev vyhlasuje, že má absolútnu autoritu nad manželstvom.
                Rímska cirkev sa pokúšala aj v histórii zmocniť civilnej moci
                nad aktom manželstva, chtiac prevýšiť civilné právo. Ustanovila
                teda manželstvo ako sviatosť, ktorá môže byť spravovaná iba
                rímskokatolíckou cirkvou.
              </p>
              <p>
                Život veriaceho je v základe vtkaný do sviatostného systému.
                Podľa katechizmu duchovná vitalita a večný osud závisí od
                schopnosti aktívnej a pravidelnej účasti na týchto sviatostiach.
                Inak povedané: veriaci sa musia zúčastňovať sviatostí, aby mohol
                získať spásu. Tento sviatostný systém je ako padajúce domino.
                Keď prvá kocka spadne, odštartuje reťazovú reakciu, ktorá vedie
                do večného zatratenia, ak sa veriaci celkom nepodrobí učeniu
                katechizmu.
              </p>
              <p>
                Je to veľmi smutné, keď človek vidí, aká skaza je pôsobená v
                životoch tých, ktorí patria katolíckej cirkvi a ako veľa bolesti
                a ťažkostí to prináša na tých, ktorí skúšajú prežiť svoje
                manželstvo pod súdnou právomocou rímskej cirkvi. Prosím, príďte
                k Písmu Svätému a uvidíte, čo Pán Ježiš povedal, aby vaša
                unavená duša mohla nájsť odpočinok.
              </p>
            </div>
          </div>

          {/* <div className='manzelstvo-pic flex lg:hidden w-[100%] h-[60vh] mt-16'></div> */}

          <div className='flex flex-col align-center my-8'>
            <h2 className='text-title text-center text-[30px] mt-4'>Rozvod</h2>
            <p className='mt-8 text-justify'>
              Katolícka cirkev zaujíma veľmi prísne stanovisko, rovnako tak
              dobre ako aj Písmo zabraňuje rozvodu. Problémy však nastávajú, keď
              by veriaci povedal, že jedine Boh má nad tým všetkým zvrchovanosť.
              Katechizmus ukladá zbytočné obmedzenia tým, ktorí sú v ťažkom
              manželstve. Tieto obmedzenia ovplyvňujú schopnosť zúčastniť sa
              tzv. "životodarných" sviatostí rímskokatolíckej cirkvi. Vidíme v
              Písme rôzne miesta, kde Ježiš hovoril o týchto veciach.
            </p>
          </div>
        </div>
      </main>
      {/* manzelstvo table lg */}
      <section className='hidden text-[18px] lg:flex justify-center mx-12 mt-8 gap-8 pb-8'>
        <div className='w-[50%] border flex flex-col items-center mx-4 pb-4'>
          <h2 className='font-semibold text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <div className='mx-4 text-justify font-semibold flex flex-col gap-4 mt-8'>
            <p>
              § 2382 Medzi pokrstenými „platne uzavreté a [manželským úkonom]
              zavŕšené manželstvo nemôže byť rozviazané nijakou ľudskou mocou a
              z nijakého dôvodu, iba smrťou“.
            </p>

            <p>
              {' '}
              § 1650 Dnes je v mnohých krajinách veľký počet katolíkov, ktorí sa
              uchyľujú k rozvodu podľa občianskych zákonov a civilne uzatvárajú
              nový zväzok. Preto nemôžu pristupovať k prijímaniu Eucharistie,
              kým táto situácia trvá.
            </p>
            <p>
              § 1665 Nové manželstvo rozvedených, kým žije legitímny manželský
              partner, porušuje Boží plán a zákon, ako ich učil Kristus.
              Rozvedení, ktorí uzavreli nový zväzok nie sú odlúčení od Cirkvi,
              ale nemôžu prijímať Eucharistiu. Majú viesť svoj kresťanský život
              najmä tým, že vychovávajú svoje deti vo viere.
            </p>
            <p>
              § 1129 Cirkev tvrdí, že sviatosti Novej zmluvy sú pre veriacich
              nevyhnutne potrebné na spásu.
            </p>
          </div>
        </div>
        <div className='w-[50%]  border flex flex-col items-center pb-4 mx-4'>
          <h2 className='font-semibold text-center mt-4'>Biblia hovorí:</h2>
          <div className='mx-4 text-justify font-semibold flex flex-col gap-4 mt-8'>
            <p>
              Matúš 5:31-32
              <span className='italic'>
                {' '}
                A bolo povedané: Kto by prepustil manželku, nech jej dá
                priepustný list. Ale ja vám hovorím, že ktokoľvek prepúšťa
                manželku, okrem príčiny smilstva, vystavuje ju cudzoložstvu, a
                kto si vezme prepustenú, cudzoloží.
              </span>
            </p>
            <p>
              Matúš 19:9
              <span className='italic'>
                {' '}
                Hovorím vám: Kto by si prepustil ženu - ak len nie pre smilstvo
                - a vzal by si inú, cudzoloží a kto si prepustenú vezme,
                cudzoloží.
              </span>
            </p>
            <p>
              Rimanom 10:9
              <span className='italic'>
                {' '}
                Ak ústami vyznávaš Pána Ježiša a v srdci veríš, že Ho Boh
                vzkriesil z mŕtvych, budeš spasený.
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* spoved table mobile only */}
      <section className='flex flex-col text-[20px] lg:hidden mt-8 gap-8 pb-8'>
        <div className='flex flex-col items-center justify-center mx-4'>
          <h2 className='font-semibold  mt-4'>Katechizmus hovorí:</h2>
          <p className=' text-center mt-4'>
            § 2382 Medzi pokrstenými „platne uzavreté a [manželským úkonom]
            zavŕšené manželstvo nemôže byť rozviazané nijakou ľudskou mocou a z
            nijakého dôvodu, iba smrťou“.
          </p>
          <h2 className='font-semibold  mt-4'>Biblia hovorí:</h2>
          <p className=' text-center mt-4'>
            Matúš 5:31-32
            <span className='italic'>
              {' '}
              A bolo povedané: Kto by prepustil manželku, nech jej dá priepustný
              list. Ale ja vám hovorím, že ktokoľvek prepúšťa manželku, okrem
              príčiny smilstva, vystavuje ju cudzoložstvu, a kto si vezme
              prepustenú, cudzoloží.
            </span>
          </p>
          <h2 className='font-semibold  mt-4'>Katechizmus hovorí:</h2>
          <p className=' text-center mt-4'>
            § 1650 Dnes je v mnohých krajinách veľký počet katolíkov, ktorí sa
            uchyľujú k rozvodu podľa občianskych zákonov a civilne uzatvárajú
            nový zväzok. Preto nemôžu pristupovať k prijímaniu Eucharistie, kým
            táto situácia trvá.
          </p>
          <p className=' text-center mt-4'>
            § 1665 Nové manželstvo rozvedených, kým žije legitímny manželský
            partner, porušuje Boží plán a zákon, ako ich učil Kristus.
            Rozvedení, ktorí uzavreli nový zväzok nie sú odlúčení od Cirkvi, ale
            nemôžu prijímať Eucharistiu. Majú viesť svoj kresťanský život najmä
            tým, že vychovávajú svoje deti vo viere.
          </p>
          <h2 className='font-semibold  mt-4'>Biblia hovorí:</h2>
          <p className=' text-center mt-4'>
            Matúš 19:9
            <span className='italic'>
              {' '}
              Hovorím vám: Kto by si prepustil ženu - ak len nie pre smilstvo -
              a vzal by si inú, cudzoloží a kto si prepustenú vezme, cudzoloží.
            </span>
          </p>
          <h2 className='font-semibold  mt-4'>Katechizmus hovorí:</h2>
          <p className=' text-center mt-4'>
            § 1129 Cirkev tvrdí, že sviatosti Novej zmluvy sú pre veriacich
            nevyhnutne potrebné na spásu.
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className=' text-center mt-4'>
            Rimanom 10:9
            <span className='italic'>
              {' '}
              Ak ústami vyznávaš Pána Ježiša a v srdci veríš, že Ho Boh
              vzkriesil z mŕtvych, budeš spasený.
            </span>
          </p>
        </div>
      </section>
      {/* manzelstvo lg and mob OK */}
      <section>
        <div className='text-justify text-[20px] flex flex-col gap-2 mx-4 lg:mx-16'>
          <p>
            Podľa Písma je rozvod možný za dvoch podmienok. Prvá sa týka nevery
            druhého partnera (Matúš 5:32, 19:9). Druhý je možný ak neveriaci
            partner chce opustiť manželstvo, čo má za následok odlúčenie (Prvý
            Korintským 7:15). Je to jasné z Písem, že zmierenie je vykonané, ale
            Boh umožní rozvod len za týchto okolností. Z týchto rôznych pasáží
            vidíme, aké vážne sú Sväté Písma a ako katechizmus jedná s
            manželstvom. Avšak, tieto pravdy, ktoré prežívajú v životoch
            katolíckych veriacich, sú konfrontované s otázkou rozvodu.
            Rímskokatolícka cirkev sa toho pevne drží a kto sa rozvádza, je
            donútený sa zdržiavať eucharistickej sviatosti prijímania (§ 1650 a
            1665) a katechizmus vyhlasuje, že účasť na sviatostiach je
            nevyhnutná pre spasenie. (§ 1129). Preto cirkev vytvorila cestu, ako
            obísť toto učenie a vytvorila katolícke zrušenie zväzku (anulovanie)
            a katolícke učenie o manželskom rozdelení. Božie Slovo učí, že
            manželský status veriaceho nemá vplyv na spásu duše veriaceho.
          </p>
        </div>
      </section>
      {/* manzelstvo black lg and mob OK */}
      <section className='bg-black text-white'>
        <div className='text-justify text-[20px] flex flex-col gap-2 mt-16 mx-4 lg:mx-16'>
          <h2 className='text-title text-center text-[30px] my-16'>
            Anulovanie manželstva
          </h2>
          <p>
            Podľa výkladu katechizmu katolíckej cirkvi v § 1650 je veriacemu
            daná možnosť znovu sa oženiť a zúčastniť sa tak ďalej sviatostného
            systému v cirkvi, pokiaľ dosiahne zrušenie predchádzajúceho
            manželstva. Katolík, ktorý si praje oženiť sa znova bez
            predchádzajúceho anulovania zväzku, sa oženiť môže, ale bude vo
            večnom stave hriechu a nikdy sa už nebude môcť zúčastniť sviatosti
            Eucharistie. Použitím oficiálneho zrušenia manželstva namiesto
            rozvodu katolík smie prijať eucharistické spoločenstvo, a tak získať
            ďalšiu záslužnú záchranu podľa rímskokatolíckej cirkvi. Účasť na
            sviatostiach je nevyhnutná na spasenie podľa § 1129.
          </p>
        </div>
      </section>
      {/* manzelstvo black table lg */}
      <section className='hidden text-[18px] bg-black text-white lg:flex justify-center px-12 gap-8 pt-16 pb-16'>
        <div className='w-[50%] border flex flex-col items-center mx-4 pb-4'>
          <h2 className='font-semibold text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <div className='mx-4 text-justify flex flex-col gap-4 mt-8'>
            <p>
              § 1629 Po preskúmaní prípadu kompetentným cirkevným súdom vyhlásiť
              „nulitu manželstva“, to značí vyhlásiť, že manželstvo nikdy
              nejestvovalo. V tomto prípade sa zmluvné strany môžu zosobášiť,
              ale sú povinné plniť prirodzené záväzky vyplývajúce z
              predchádzajúceho spojenia.
            </p>

            <p>
              {' '}
              § 1650 Ak sa rozvedení zosobášili civilne, nachádzajú sa v
              situácii, ktorá objektívne porušuje Boží zákon. Preto nemôžu
              pristupovať k prijímaniu Eucharistie, kým táto situácia trvá.
            </p>
            <p>
              § 1129 Cirkev tvrdí, že sviatosti Novej zmluvy sú pre veriacich
              nevyhnutne potrebné na spásu.
            </p>
          </div>
        </div>
        <div className='w-[50%] border flex flex-col items-center pb-4 mx-4'>
          <h2 className='font-semibold  text-center  mt-4'>Biblia hovorí:</h2>
          <div className='mx-4 text-justify flex flex-col gap-4 mt-8'>
            <p>
              Matúš 19:6
              <span className='italic'>
                {' '}
                Takže už nie sú dve telá, ale jedno. Čo teda Boh spojil, človek
                nerozlučuj!
              </span>
            </p>
            <p>
              Prvý Korintským 11:28
              <span className='italic'>
                {' '}
                Skúmaj sa teda, človeče, a tak jedz z chleba a pi z kalicha.
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
      {/* manzelstvo black table mobile only */}
      <section className='bg-black text-[20px] text-white flex flex-col lg:hidden  gap-8 py-8'>
        <div className='flex flex-col items-center justify-center mx-4'>
          <h2 className='font-semibold text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <p className=' text-center mt-8'>
            § 1629 Po preskúmaní prípadu kompetentným cirkevným súdom vyhlásiť
            „nulitu manželstva“, to značí vyhlásiť, že manželstvo nikdy
            nejestvovalo. V tomto prípade sa zmluvné strany môžu zosobášiť, ale
            sú povinné plniť prirodzené záväzky vyplývajúce z predchádzajúceho
            spojenia.
          </p>

          <h2 className='font-semibold text-center  mt-4'>Biblia hovorí:</h2>
          <p className=' text-center mt-4'>
            Matúš 19:6
            <span className='italic'>
              {' '}
              Takže už nie sú dve telá, ale jedno. Čo teda Boh spojil, človek
              nerozlučuj!
            </span>
          </p>

          <h2 className='font-semibold text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <p className=' text-center mt-4'>
            § 1650 Ak sa rozvedení zosobášili civilne, nachádzajú sa v situácii,
            ktorá objektívne porušuje Boží zákon. Preto nemôžu pristupovať k
            prijímaniu Eucharistie, kým táto situácia trvá.
          </p>

          <h2 className='font-semibold text-center  mt-4'>Biblia hovorí:</h2>
          <p className=' text-center mt-4'>
            Prvý Korintským 11:28
            <span className='italic'>
              {' '}
              Skúmaj sa teda, človeče, a tak jedz z chleba a pi z kalicha.
            </span>
          </p>

          <h2 className='font-semibold  text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <p className='text-center mt-4'>
            § 1129 Cirkev tvrdí, že sviatosti Novej zmluvy sú pre veriacich
            nevyhnutne potrebné na spásu.
          </p>
          <h2 className='font-semibold  text-center  mt-4'>Biblia hovorí:</h2>
          <p className='text-center mt-4'>
            {' '}
            Efezským 2:8-9
            <span className='italic'>
              {' '}
              Lebo milosťou ste spasení skrze vieru. A to nie sami zo seba; je
              to dar Boží; nie zo skutkov, aby sa nikto nechválil.
            </span>
          </p>
        </div>
      </section>

      {/* manzelstvo black lg and mob OK */}
      <section className='bg-black text-white'>
        <div className='text-justify text-[20px] flex flex-col gap-2 pb-16 mx-4 lg:mx-16'>
          <p>
            Pán Ježiš Kristus oznámil štyri pravidlá týkajúce sa rozvodu v
            Biblii. Dve z týchto uvažovaných tvrdení sú proti rozvodu a dve
            ďalšie rozvod robia prijateľným a právo oženiť sa je na strane
            nevinného (viac v sekcii Rozvod). Rímskokatolícka cirkev dôrazne
            tvrdí, že rozvod je nezákonný pre manželstvo, ktoré bolo uzavreté
            legálne a kde boli manželia pokrstení do katolíckej cirkvi. Avšak,
            keď preštudujeme cirkevné zákony týkajúce sa zrušenia, uvidíme, že
            celé anulovanie manželského zväzku prechádza technicky-gymnastickými
            kúskami za účelom dosiahnutie cirkevného zrušenia.
          </p>
          <p className='pt-8'>
            Zrušenie manželstva schválené cirkvou je v skutočnosti formou
            identickou s rozvodom. Katolícka cirkev v poskytovaní zrušenia
            deklaruje, že manželstvo nikdy neexistovalo! A tak sa tiež stáva, čo
            je absurdnou situáciou, že veriaci, ktorý bol niekoľko rokov v
            manželstve a má deti, je uznaný v očiach cirkvi, akoby nebol nikdy
            ženatý. Toto je dosahované cez technické manipulácie a vytvorené
            podmienky, ktoré sú uvedené v zákone o zrušení zväzku manželstva.
            Napríklad podstatnou časťou a dôvodom pre cirkevné zrušenie sobáša
            je to, čo sa nazýva "prekážka rušiaca platnosť manželstva". Je to
            akákoľvek prekážka vážna natoľko, aby sa manželstvo mohlo zrušiť
            automaticky. Takou prekážkou by mohol byť ako nesúhlas spoločnosti k
            sobášu, tak nedostatok "formy sobáša" znamenajúci sobáš, ktorý nebol
            vykonaný pred kňazom a dvoma svedkami. Tak rímska cirkev vyvinula
            názvoslovie, ktoré predbehne pokrytectvo. Rím vyhlasuje túto bizarnú
            moc, pretože vidí sobáše ako sviatosti. Je to z toho dôvodu, aby
            bola zachovaná moc cirkvi vytvoriť či zrušiť manželstvo podľa svojej
            vôle a účelov, nie na báze toho, čo vyhlasuje Biblia.
          </p>
          <p className='pt-8'>
            Je možné vytvoriť manželstvo príkazom Ríma? V Písme je manželstvo
            upravené podľa vôle a zámeru Boha. Pán Ježiš povedal:
            <span className='italic'>
              {' '}
              Preto opustí človek otca i matku a pripojí sa k manželke, i budú
              dvaja jedno telo.
            </span>
            <span className='text-[15px]'> Matúš 19:5 </span>
            Toto samotné je a stáva sa platným pred Bohom.
          </p>
        </div>
      </section>

      {/* manzelstvo zivot v odluceni white lg and mob OK */}
      <section>
        <div className='text-justify text-[20px] flex flex-col gap-2 py-8 mx-4 lg:mx-16'>
          <h2 className='text-title text-center text-[30px] mt-4 mb-8'>
            Život v odlúčení (separácii){' '}
          </h2>

          <p>
            Mnoho krajín je v súčasnosti ovplyvnených rímskokatolíckou cirkvou a
            veľkým radom nasledovníkov žije oddelene od svojich manželov.
            Odlúčenie je cirkvou podporované natoľko, že veriaci sa môže zákonne
            zúčastňovať eucharistického prijímania. Avšak toto nie je
            podporované Bibliou, rovnako tiež život v manželstve, ktorý je
            poškodzovaný manželskou neverou. Rímskokatolícke náboženstvo
            podporuje jarmo zákonov, ktoré možno ťažko uniesť. Jedine milosť
            Ježiša Krista môže oslobodiť od týchto pút zúfalstva. Pán Ježiš
            Kristus apeluje:
            <span className='italic'>
              {' '}
              Poďte ku mne všetci, ktorí sa namáhate a ste preťažení; ja vám dám
              odpočinutie! Vezmite na seba moje jarmo a učte sa odo mňa, lebo
              som krotký a pokorný v srdci, a nájdete si odpočinutie duše.
            </span>
            <span className='text-[15px]'> Matúš 11:28-29 </span>
          </p>
        </div>
      </section>

      {/* zivot v odluceni table lg */}
      <section className='hidden text-[18px] lg:flex justify-center mx-12 mt-8 gap-8 pb-8'>
        <div className='w-[50%] border flex flex-col items-center mx-4 pb-4'>
          <h2 className='font-semibold text-center  mt-4'>
            Katechizmus hovorí:
          </h2>
          <div className='mx-4 text-justify font-semibold flex flex-col gap-4 mt-8'>
            <p>
              § 2383 Odluka manželov, pri ktorej však pretrváva manželský
              zväzok, môže byť oprávnená v niektorých prípadoch predvídaných
              kánonickým právom.
            </p>

            <p>
              {' '}
              § 1649 Sú však situácie, v ktorých sa manželské spolužitie stáva z
              najrozličnejších dôvodov prakticky nemožným. V takýchto prípadoch
              Cirkev pripúšťa fyzickú rozluku manželov a koniec spolužitia. Pred
              Bohom však manželia neprestávajú byť manželom a manželkou; nemôžu
              uzavrieť nový zväzok. V takejto ťažkej situácii najlepším riešením
              by bolo zmierenie, ak je to možné. Kresťanské spoločenstvo je
              povolané pomáhať týmto osobám, aby kresťansky prežívali svoju
              situáciu verní svojmu manželskému zväzku, ktorý ostáva
              nerozlučiteľný.
            </p>
          </div>
        </div>
        <div className='w-[50%] border flex flex-col items-center pb-4 mx-4'>
          <h2 className='font-semibold  text-center mt-4'>Biblia hovorí:</h2>
          <div className='mx-4 text-justify font-semibold flex flex-col gap-4 mt-8'>
            <p>
              Prvý Korintským 7:10-14
              <span className='italic'>
                {' '}
                Manželom však prikazujem - vlastne nie ja, ale Pán: nech žena
                neodchádza od muža - a ak by aj odišla, nech ostane nevydatá,
                alebo nech sa zmieri s mužom. A muž nech neprepúšťa ženu!
                Ostatným hovorím ja, nie Pán: ak niektorý brat má neveriacu ženu
                a ona chce žiť s ním, nech ju neprepúšťa. A ak niektorá žena má
                neveriaceho muža a on chce žiť s ňou, nech neopúšťa muža. Lebo
                neveriaci muž sa posväcuje v žene a neveriaca žena posväcuje sa
                v bratovi; veď ináč vaše deti boli by nečisté, a predsa sú
                sväté.
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* zivot v odluceni table mobile only */}
      <section className='flex flex-col text-[20px] lg:hidden mt-8 gap-8 pb-8'>
        <div className='flex flex-col items-center justify-center mx-4'>
          <h2 className='font-semibold  mt-4'>Katechizmus hovorí:</h2>
          <p className=' text-center mt-4'>
            § 2383 Odluka manželov, pri ktorej však pretrváva manželský zväzok,
            môže byť oprávnená v niektorých prípadoch predvídaných kánonickým
            právom.
          </p>
          <p className=' text-center mt-4'>
            § 1649 Sú však situácie, v ktorých sa manželské spolužitie stáva z
            najrozličnejších dôvodov prakticky nemožným. V takýchto prípadoch
            Cirkev pripúšťa fyzickú rozluku manželov a koniec spolužitia. Pred
            Bohom však manželia neprestávajú byť manželom a manželkou; nemôžu
            uzavrieť nový zväzok. V takejto ťažkej situácii najlepším riešením
            by bolo zmierenie, ak je to možné. Kresťanské spoločenstvo je
            povolané pomáhať týmto osobám, aby kresťansky prežívali svoju
            situáciu verní svojmu manželskému zväzku, ktorý ostáva
            nerozlučiteľný.
          </p>
          <h2 className='font-semibold mt-4'>Biblia hovorí:</h2>
          <p className=' text-center mt-4'>
            Prvý Korintským 7:10-14
            <span className='italic'>
              {' '}
              Manželom však prikazujem - vlastne nie ja, ale Pán: nech žena
              neodchádza od muža - a ak by aj odišla, nech ostane nevydatá,
              alebo nech sa zmieri s mužom. A muž nech neprepúšťa ženu! Ostatným
              hovorím ja, nie Pán: ak niektorý brat má neveriacu ženu a ona chce
              žiť s ním, nech ju neprepúšťa. A ak niektorá žena má neveriaceho
              muža a on chce žiť s ňou, nech neopúšťa muža. Lebo neveriaci muž
              sa posväcuje v žene a neveriaca žena posväcuje sa v bratovi; veď
              ináč vaše deti boli by nečisté, a predsa sú sväté.
            </span>
          </p>
        </div>
      </section>
      {/* zivot v odluceni outro white lg and mob OK */}
      <section>
        <div className='text-justify text-[20px] flex flex-col gap-2 py-8 mx-4 lg:mx-16'>
          <p>
            Čo sa týka manželstva rímskokatolícka cirkev odmieta biblickú
            autoritu. Jedine sám Boh je ten, kto je autorom manželstva a má
            schopnosť toto riadiť. Nebiblické zákony cirkvi zväzujú takto
            každého veriaceho. Rím ide tak ďaleko, že spája manželský stav spolu
            so spasením veriaceho (viď. Rozvod a Zrušenie sobáša). Tento
            pokrytecký systém pokračuje v nakladaní bremien na Boží ľud. Biblia
            zreteľne špecifikuje, že kresťan nemá hľadať oddelenie od manžela.
            Božie Slovo je napísané tak, že podnecuje zúčastnené strany
            manželstva, aby si navzájom odpustili. Avšak, žiadna ľudská autorita
            nemôže zaviazať manželstvo ako nerozlučiteľné, keď manžel, ktorý
            opustil druhého, neverí v Slovo Božie. Prosím pamätaj, že tvoj
            manželský stav nemôže akokoľvek zabrániť a ovplyvniť milosť Božiu
            pracujúcu v tvojom živote.
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

export default Manzelstvo
