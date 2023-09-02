import React from 'react'

const Omsa = () => {
  return (
    <>
      <header className='text-black flex flex-row mx-8'>
        <img
          className='w-[35%]'
          src='https://images.pexels.com/photos/13422648/pexels-photo-13422648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        />
        <div className='flex flex-col align-center mx-16 mt-8'>
          <h1 className='text-title text-[35px]'>Omša</h1>
          <div className='text-justify text-[22.5px] flex flex-col gap-2 mt-16'>
            <p>
              "Svätá obeť omše" je centrom a najsvätejším aktom uctievania pre
              katolíkov. Katechizmus učí, že počas omše kňaz premieňa svojou
              mocou oblátku a víno prednesené na oltár vo fyzické telo, krv a
              božstvo Ježiša Krista. Takto novo vtelený Kristus je poukázaný ako
              Eucharistia. Tento proces je nazvaný transsubstanciáciou.
            </p>
            <p>
              U tejto Eucharistie, novo povedané - pravej fyzickej prítomnosti
              Ježiša Krista, je požadované, aby sa jej dostalo rovnakého
              uctievania, ako uctievanie očakávaného Boha. Táto Eucharistia je
              potom lámaná a ponúkaná kňazmi, ako nekrvavá obeť Bohu za hriechy
              živých i mŕtvych. Po tomto obetovaní za hriechy je Eucharistia
              tiež ponúknutá ako pokrm prítomným veriacim, aby zotrvali v dobrom
              postavení v učení katolíckej cirkvi a sviatostiach. Je tiež
              poukazovaná ako nebeský pokrm, ktorý im pomôže zaslúžiť si večný
              život.
            </p>
            <p>
              Teraz sa pýtam Teba, znie to v Tvojom srdci pravdivo? Veríš, že
              Ježiš Kristus je v súčasnosti premenený vo fyzickú podobu chleba a
              vína? Môžeš v skutočnosti uctievať tento chlieb - boha? Môžeš v
              skutočnosti veriť, že tento chlieb, ktorý je vyrobený ľudskou
              rukou, môže byť obetovaný za Tvoje hriechy a že je Ti udelené
              odpustenie od Boha za takú obeť? Veríš, že jedením tohto nebeského
              pokrmu môžeš získať večný život? Poďme do Božieho Slova.
            </p>
          </div>
        </div>
      </header>
      <section className='flex flex-col items-center mt-8 mx-8'>
        <h1 className='text-title text-[35px] m-8'>Eucharistia</h1>
        <p className='text-[25px] text-justify'>
          V katechizme katolíckej cirkvi je uvádzané, že skutočné telo, krv a
          božstvo Ježiša Krista je zoslané z neba a zázračne prepodstatnené v
          eucharistických oblátkach. Oproti tomu stojí Svätá Biblia a tá je
          jednoznačná vo vyjadrení vzťahujúcom sa k návratu Pána Ježiša Krista
          na tento svet.
        </p>
      </section>
      <section className='flex justify-center mx-16 mt-8 gap-8 pb-16'>
        <div className='w-[50%] border flex flex-col items-center'>
          <h2 className='font-semibold text-[25px] mt-4'>
            Katechizmus hovorí:
          </h2>
          <div className='ml-4 text-[25px] font-semibold flex flex-col gap-4 mt-8'>
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
          </div>
        </div>
        <div className='w-[50%] border flex flex-col items-center'>
          <h2 className='font-semibold text-[25px] mt-4'>Biblia hovorí:</h2>
          <div className='mx-4 text-[25px] text-justify font-semibold flex flex-col gap-4 mt-8'>
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
          </div>
        </div>
      </section>
    </>
  )
}

export default Omsa
