import Header from '/src/pages/home/Header'
import Footer from '/src/pages/home/Footer'
import { FaCheckCircle } from "react-icons/fa";
import useMedia from '/src/hooks/useMedia'



export default function Advantage() {

  const ismobile = useMedia(1024);

  if (ismobile) {

    return(
      <>
      <div className='w-full h-screen bg-[url("/src/assets/mainWallpaper.png")] bg-cover bg-center ' >
        <div className='container mx-auto flex flex-col gap-y-6 px-4 py-4'>
          <Header />
          <div className=' w-full flex justify-center items-center flex-col'>
            <h1 className='text-[35px] w-full flex justify-center items-center font-montserrat font-black mt-3 text-primary-color mb-6'>Avantajlar</h1>
            <div className='w-full flex justify-center items-center flex-col gap-y-6'>
              <div className='w-full h-full bg-white rounded-2xl py-8 px-8 flex flex-col justify-start items-center relative'>
                <div className='w-full bg-primary-color  flex justify-center items-center px-4 py-4 rounded-lg'>
                  <p className='text-white text-2xl font-montserrat font-semibold'>Giriş Seviye</p>
                </div>
                <div className='w-full mt-12 flex flex-col gap-y-6'>
                  <div className='border border-primary-color px-4 py-4 rounded-lg flex justify-between items-center h-16'>
                    <span className='text-primary-color font-montserrat font-semibold text-sm w-[200px]'>Video kayıtlarından ders izleyebilme.</span>
                    <FaCheckCircle size={30} fill='#3A7582' />
                  </div>
                  <div className='border border-primary-color px-4 py-4 rounded-lg flex justify-between items-center h-16'>
                    <span className='text-primary-color font-montserrat font-semibold text-sm w-[200px]'>Ders başı 30 dakikaya kadar video süresi.</span>
                    <FaCheckCircle size={30} fill='#3A7582' />
                  </div>
                  <div className='border border-primary-color px-4 py-4 rounded-lg flex justify-between items-center h-16'>
                    <span className='text-primary-color font-montserrat font-semibold text-sm w-[200px]'>Video başı 1 yorum hakkı.</span>
                    <FaCheckCircle size={30} fill='#3A7582' />
                  </div>
                </div>
                <button className='z-10 border mt-56 bg-white px-4 py-2 rounded-lg flex justify-center items-center w-[250px] border-[#ABABAB] font-montserrat font-extrabold text-primary-color uppercase'>ücretsiz elde et</button>
                <svg id="visual" viewBox="0 0 900 600" className='absolute bottom-0 left-0 rounded-bl-lg rounded-br-lg h-[300px] w-full' xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink">
                  <path d="M0 390L21.5 389C43 388 86 386 128.8 391.5C171.7 397 214.3 410 257.2 417.5C300 425 343 427 385.8 419C428.7 411 471.3 393 514.2 386.7C557 380.3 600 385.7 642.8 391.8C685.7 398 728.3 405 771.2 400.7C814 396.3 857 380.7 878.5 372.8L900 365L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#3a7582"></path>
                  <path d="M0 418L21.5 416.7C43 415.3 86 412.7 128.8 415.3C171.7 418 214.3 426 257.2 437C300 448 343 462 385.8 456.5C428.7 451 471.3 426 514.2 419.2C557 412.3 600 423.7 642.8 432.7C685.7 441.7 728.3 448.3 771.2 446.8C814 445.3 857 435.7 878.5 430.8L900 426L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#588d99"></path><path d="M0 468L21.5 472.7C43 477.3 86 486.7 128.8 483C171.7 479.3 214.3 462.7 257.2 458.8C300 455 343 464 385.8 473.5C428.7 483 471.3 493 514.2 498.3C557 503.7 600 504.3 642.8 500.5C685.7 496.7 728.3 488.3 771.2 488.5C814 488.7 857 497.3 878.5 501.7L900 506L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#75a5b0"></path><path d="M0 485L21.5 485.8C43 486.7 86 488.3 128.8 490C171.7 491.7 214.3 493.3 257.2 500.5C300 507.7 343 520.3 385.8 521.3C428.7 522.3 471.3 511.7 514.2 509.7C557 507.7 600 514.3 642.8 510.8C685.7 507.3 728.3 493.7 771.2 494.8C814 496 857 512 878.5 520L900 528L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#92bec8"></path>
                  <path d="M0 550L21.5 548C43 546 86 542 128.8 545.2C171.7 548.3 214.3 558.7 257.2 559.5C300 560.3 343 551.7 385.8 546.2C428.7 540.7 471.3 538.3 514.2 543.2C557 548 600 560 642.8 561C685.7 562 728.3 552 771.2 552.3C814 552.7 857 563.3 878.5 568.7L900 574L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#afd7e0"></path>
                </svg>
              </div>

              <div className='w-full h-full bg-white rounded-2xl py-8 px-8 flex flex-col justify-start items-center relative'>
                <div className='w-full bg-primary-color  flex justify-center items-center px-4 py-4 rounded-lg'>
                  <p className='text-white text-2xl font-montserrat font-semibold'>Orta Seviye</p>
                </div>
                <div className=' w-full mt-12 flex flex-col gap-y-6 '>
                  <div className='border border-primary-color px-4 py-4 rounded-lg flex justify-between items-center h-16'>
                    <span className='text-primary-color font-montserrat font-semibold text-sm w-[200px]'>Canlı derslere katılabilme imkanı</span>
                    <FaCheckCircle size={30} fill='#3A7582' />
                  </div>
                  <div className='border border-primary-color px-4 py-4 rounded-lg flex justify-between items-center h-16'>
                    <span className='text-primary-color font-montserrat font-semibold text-sm w-[200px]'>Reklamsız video kayıtları izleyebilme hakkı.</span>
                    <FaCheckCircle size={30} fill='#3A7582' />
                  </div>
                  <div className='border border-primary-color px-4 py-4 rounded-lg flex justify-between items-center h-16'>
                    <span className='text-primary-color font-montserrat font-semibold text-sm w-[200px]'>Video başına 5 yorum hakkı.</span>
                    <FaCheckCircle size={30} fill='#3A7582' />
                  </div>
                </div>
                <button className='z-10 border mt-56 bg-white px-4 py-2 rounded-lg flex justify-center items-center w-[250px] border-[#ABABAB] font-montserrat font-extrabold text-primary-color uppercase'>satın al</button>
                <svg id="visual" viewBox="0 0 900 600" className='absolute bottom-0 left-0 rounded-bl-lg rounded-br-lg  w-full' xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" version="1.1">
                  <path d="M0 249L21.5 255.2C43 261.3 86 273.7 128.8 286.8C171.7 300 214.3 314 257.2 309.2C300 304.3 343 280.7 385.8 286.7C428.7 292.7 471.3 328.3 514.2 349.2C557 370 600 376 642.8 361C685.7 346 728.3 310 771.2 310.5C814 311 857 348 878.5 366.5L900 385L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#3a7582"></path>
                  <path d="M0 329L21.5 332.5C43 336 86 343 128.8 348.7C171.7 354.3 214.3 358.7 257.2 365.3C300 372 343 381 385.8 388.8C428.7 396.7 471.3 403.3 514.2 397.3C557 391.3 600 372.7 642.8 358C685.7 343.3 728.3 332.7 771.2 329.7C814 326.7 857 331.3 878.5 333.7L900 336L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#588d99"></path><path d="M0 437L21.5 435C43 433 86 429 128.8 435.3C171.7 441.7 214.3 458.3 257.2 465.8C300 473.3 343 471.7 385.8 470.7C428.7 469.7 471.3 469.3 514.2 467.8C557 466.3 600 463.7 642.8 456.2C685.7 448.7 728.3 436.3 771.2 422.5C814 408.7 857 393.3 878.5 385.7L900 378L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#75a5b0"></path><path d="M0 440L21.5 446C43 452 86 464 128.8 465.5C171.7 467 214.3 458 257.2 460C300 462 343 475 385.8 475.2C428.7 475.3 471.3 462.7 514.2 463C557 463.3 600 476.7 642.8 478.2C685.7 479.7 728.3 469.3 771.2 464C814 458.7 857 458.3 878.5 458.2L900 458L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#92bec8"></path><path d="M0 494L21.5 497.8C43 501.7 86 509.3 128.8 513.2C171.7 517 214.3 517 257.2 523.5C300 530 343 543 385.8 547C428.7 551 471.3 546 514.2 546.3C557 546.7 600 552.3 642.8 552C685.7 551.7 728.3 545.3 771.2 544.7C814 544 857 549 878.5 551.5L900 554L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#afd7e0"></path>
                </svg>

              </div>

              <div className='w-full h-full bg-white rounded-2xl py-8 px-8 flex flex-col justify-start items-center relative'>
                <div className='w-full bg-primary-color  flex justify-center items-center px-4 py-4 rounded-lg'>
                  <p className='text-white text-2xl font-montserrat font-semibold'>Üst Seviye</p>
                </div>
                <div className=' w-full mt-12 flex flex-col gap-y-6 '>
                  <div className='border border-primary-color px-4 py-4 rounded-lg flex justify-between items-center h-16'>
                    <span className='text-primary-color font-montserrat font-semibold text-sm w-[200px]'>Canlı derslerde söz hakkı isteyebilme hakkı.</span>
                    <FaCheckCircle size={30} fill='#3A7582' />
                  </div>
                  <div className='border border-primary-color px-4 py-4 rounded-lg flex justify-between items-center h-16'>
                    <span className='text-primary-color font-montserrat font-semibold text-sm w-[200px]'>Reklamsız, sınırsız video izleme ve indirme hakkı.</span>
                    <FaCheckCircle size={30} fill='#3A7582' />
                  </div>
                  <div className='border border-primary-color px-4 py-4 rounded-lg flex justify-between items-center h-16'>
                    <span className='text-primary-color font-montserrat font-semibold text-sm w-[200px]'>Video başına sınırsız yorum hakkı.</span>
                    <FaCheckCircle size={30} fill='#3A7582' />
                  </div>
                </div>
                <button className='z-10 border mt-56 bg-white px-4 py-2 rounded-lg flex justify-center items-center w-[250px] border-[#ABABAB] font-montserrat font-extrabold text-primary-color'>SATIN AL</button>
                <svg id="visual" viewBox="0 0 900 600" className='absolute bottom-0 left-0 rounded-bl-lg rounded-br-lg w-full' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 118L21.5 135C43 152 86 186 128.8 186.3C171.7 186.7 214.3 153.3 257.2 160.2C300 167 343 214 385.8 213.7C428.7 213.3 471.3 165.7 514.2 165.2C557 164.7 600 211.3 642.8 207.5C685.7 203.7 728.3 149.3 771.2 123.7C814 98 857 101 878.5 102.5L900 104L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#3a7582"></path><path d="M0 212L21.5 227.2C43 242.3 86 272.7 128.8 286.5C171.7 300.3 214.3 297.7 257.2 298.8C300 300 343 305 385.8 301C428.7 297 471.3 284 514.2 263.7C557 243.3 600 215.7 642.8 219C685.7 222.3 728.3 256.7 771.2 274.7C814 292.7 857 294.3 878.5 295.2L900 296L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#4b828f"></path><path d="M0 219L21.5 233C43 247 86 275 128.8 281.7C171.7 288.3 214.3 273.7 257.2 262.7C300 251.7 343 244.3 385.8 259C428.7 273.7 471.3 310.3 514.2 314.7C557 319 600 291 642.8 287.7C685.7 284.3 728.3 305.7 771.2 315.3C814 325 857 323 878.5 322L900 321L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#5c909c"></path><path d="M0 379L21.5 362.8C43 346.7 86 314.3 128.8 298.8C171.7 283.3 214.3 284.7 257.2 296.7C300 308.7 343 331.3 385.8 349.3C428.7 367.3 471.3 380.7 514.2 375.2C557 369.7 600 345.3 642.8 332C685.7 318.7 728.3 316.3 771.2 311.3C814 306.3 857 298.7 878.5 294.8L900 291L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#6d9ea9"></path><path d="M0 382L21.5 380.7C43 379.3 86 376.7 128.8 375.7C171.7 374.7 214.3 375.3 257.2 381.2C300 387 343 398 385.8 390.3C428.7 382.7 471.3 356.3 514.2 350.8C557 345.3 600 360.7 642.8 371C685.7 381.3 728.3 386.7 771.2 386.3C814 386 857 380 878.5 377L900 374L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#7dacb7"></path><path d="M0 430L21.5 424.5C43 419 86 408 128.8 401.7C171.7 395.3 214.3 393.7 257.2 402.3C300 411 343 430 385.8 432.5C428.7 435 471.3 421 514.2 425.8C557 430.7 600 454.3 642.8 463.2C685.7 472 728.3 466 771.2 460.3C814 454.7 857 449.3 878.5 446.7L900 444L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#8ebac4"></path><path d="M0 477L21.5 476.7C43 476.3 86 475.7 128.8 476.2C171.7 476.7 214.3 478.3 257.2 485.5C300 492.7 343 505.3 385.8 505.8C428.7 506.3 471.3 494.7 514.2 491.7C557 488.7 600 494.3 642.8 499.8C685.7 505.3 728.3 510.7 771.2 505.2C814 499.7 857 483.3 878.5 475.2L900 467L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#9ec8d2"></path><path d="M0 550L21.5 547.7C43 545.3 86 540.7 128.8 536.5C171.7 532.3 214.3 528.7 257.2 529.8C300 531 343 537 385.8 535.8C428.7 534.7 471.3 526.3 514.2 521.8C557 517.3 600 516.7 642.8 518.3C685.7 520 728.3 524 771.2 530.5C814 537 857 546 878.5 550.5L900 555L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#afd7e0"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
  }

  return (
    <>
      <div className='w-full h-screen bg-[url("/src/assets/mainWallpaper.png")] bg-cover bg-center ' >
        <div className='container mx-auto flex flex-col gap-y-6'>
          <Header />
          <div className=' w-full h-[750px] flex justify-start items-center flex-col gap-y-6'>
            <h1 className='text-[35px] font-montserrat font-black mt-3 text-primary-color mb-6'>Avantajlar</h1>
            <div className='w-full h-full flex gap-x-24 justify-center items-center '>
              <div className='w-[500px] h-full bg-white rounded-2xl py-8 px-8 flex flex-col justify-start items-center relative'>
                <div className='w-full bg-primary-color  flex justify-center items-center px-4 py-4 rounded-lg'>
                  <p className='text-white text-2xl font-montserrat font-semibold'>Giriş Seviye</p>
                </div>
                <div className=' w-full mt-12 flex flex-col gap-y-6 '>
                  <div className='border border-primary-color px-4 py-4 rounded-lg flex justify-between items-center h-16'>
                    <span className='text-primary-color font-montserrat font-semibold text-sm w-[200px]'>Video kayıtlarından ders izleyebilme.</span>
                    <FaCheckCircle size={30} fill='#3A7582' />
                  </div>
                  <div className='border border-primary-color px-4 py-4 rounded-lg flex justify-between items-center h-16'>
                    <span className='text-primary-color font-montserrat font-semibold text-sm w-[200px]'>Ders başı 30 dakikaya kadar video süresi.</span>
                    <FaCheckCircle size={30} fill='#3A7582' />
                  </div>
                  <div className='border border-primary-color px-4 py-4 rounded-lg flex justify-between items-center h-16'>
                    <span className='text-primary-color font-montserrat font-semibold text-sm w-[200px]'>Video başı 1 yorum hakkı.</span>
                    <FaCheckCircle size={30} fill='#3A7582' />
                  </div>
                </div>
                <button className='z-10 border mt-56 bg-white px-4 py-2 rounded-lg flex justify-center items-center w-[250px] border-[#ABABAB] font-montserrat font-extrabold text-primary-color uppercase'>ücretsiz elde et</button>
                <svg id="visual" viewBox="0 0 900 600" className='absolute bottom-0 left-0 rounded-bl-lg rounded-br-lg h-[300px] w-full' xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink">
                  <path d="M0 390L21.5 389C43 388 86 386 128.8 391.5C171.7 397 214.3 410 257.2 417.5C300 425 343 427 385.8 419C428.7 411 471.3 393 514.2 386.7C557 380.3 600 385.7 642.8 391.8C685.7 398 728.3 405 771.2 400.7C814 396.3 857 380.7 878.5 372.8L900 365L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#3a7582"></path>
                  <path d="M0 418L21.5 416.7C43 415.3 86 412.7 128.8 415.3C171.7 418 214.3 426 257.2 437C300 448 343 462 385.8 456.5C428.7 451 471.3 426 514.2 419.2C557 412.3 600 423.7 642.8 432.7C685.7 441.7 728.3 448.3 771.2 446.8C814 445.3 857 435.7 878.5 430.8L900 426L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#588d99"></path><path d="M0 468L21.5 472.7C43 477.3 86 486.7 128.8 483C171.7 479.3 214.3 462.7 257.2 458.8C300 455 343 464 385.8 473.5C428.7 483 471.3 493 514.2 498.3C557 503.7 600 504.3 642.8 500.5C685.7 496.7 728.3 488.3 771.2 488.5C814 488.7 857 497.3 878.5 501.7L900 506L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#75a5b0"></path><path d="M0 485L21.5 485.8C43 486.7 86 488.3 128.8 490C171.7 491.7 214.3 493.3 257.2 500.5C300 507.7 343 520.3 385.8 521.3C428.7 522.3 471.3 511.7 514.2 509.7C557 507.7 600 514.3 642.8 510.8C685.7 507.3 728.3 493.7 771.2 494.8C814 496 857 512 878.5 520L900 528L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#92bec8"></path>
                  <path d="M0 550L21.5 548C43 546 86 542 128.8 545.2C171.7 548.3 214.3 558.7 257.2 559.5C300 560.3 343 551.7 385.8 546.2C428.7 540.7 471.3 538.3 514.2 543.2C557 548 600 560 642.8 561C685.7 562 728.3 552 771.2 552.3C814 552.7 857 563.3 878.5 568.7L900 574L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#afd7e0"></path>
                </svg>
              </div>

              <div className='w-[500px] h-full bg-white rounded-2xl py-8 px-8 flex flex-col justify-start items-center relative'>
                <div className='w-full bg-primary-color  flex justify-center items-center px-4 py-4 rounded-lg'>
                  <p className='text-white text-2xl font-montserrat font-semibold'>Orta Seviye</p>
                </div>
                <div className=' w-full mt-12 flex flex-col gap-y-6 '>
                  <div className='border border-primary-color px-4 py-4 rounded-lg flex justify-between items-center h-16'>
                    <span className='text-primary-color font-montserrat font-semibold text-sm w-[200px]'>Canlı derslere katılabilme imkanı</span>
                    <FaCheckCircle size={30} fill='#3A7582' />
                  </div>
                  <div className='border border-primary-color px-4 py-4 rounded-lg flex justify-between items-center h-16'>
                    <span className='text-primary-color font-montserrat font-semibold text-sm w-[200px]'>Reklamsız video kayıtları izleyebilme hakkı.</span>
                    <FaCheckCircle size={30} fill='#3A7582' />
                  </div>
                  <div className='border border-primary-color px-4 py-4 rounded-lg flex justify-between items-center h-16'>
                    <span className='text-primary-color font-montserrat font-semibold text-sm w-[200px]'>Video başına 5 yorum hakkı.</span>
                    <FaCheckCircle size={30} fill='#3A7582' />
                  </div>
                </div>
                <button className='z-10 border mt-56 bg-white px-4 py-2 rounded-lg flex justify-center items-center w-[250px] border-[#ABABAB] font-montserrat font-extrabold text-primary-color uppercase'>satın al</button>
                <svg id="visual" viewBox="0 0 900 600" className='absolute bottom-0 left-0 rounded-bl-lg rounded-br-lg  w-full' xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" version="1.1">
                  <path d="M0 249L21.5 255.2C43 261.3 86 273.7 128.8 286.8C171.7 300 214.3 314 257.2 309.2C300 304.3 343 280.7 385.8 286.7C428.7 292.7 471.3 328.3 514.2 349.2C557 370 600 376 642.8 361C685.7 346 728.3 310 771.2 310.5C814 311 857 348 878.5 366.5L900 385L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#3a7582"></path>
                  <path d="M0 329L21.5 332.5C43 336 86 343 128.8 348.7C171.7 354.3 214.3 358.7 257.2 365.3C300 372 343 381 385.8 388.8C428.7 396.7 471.3 403.3 514.2 397.3C557 391.3 600 372.7 642.8 358C685.7 343.3 728.3 332.7 771.2 329.7C814 326.7 857 331.3 878.5 333.7L900 336L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#588d99"></path><path d="M0 437L21.5 435C43 433 86 429 128.8 435.3C171.7 441.7 214.3 458.3 257.2 465.8C300 473.3 343 471.7 385.8 470.7C428.7 469.7 471.3 469.3 514.2 467.8C557 466.3 600 463.7 642.8 456.2C685.7 448.7 728.3 436.3 771.2 422.5C814 408.7 857 393.3 878.5 385.7L900 378L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#75a5b0"></path><path d="M0 440L21.5 446C43 452 86 464 128.8 465.5C171.7 467 214.3 458 257.2 460C300 462 343 475 385.8 475.2C428.7 475.3 471.3 462.7 514.2 463C557 463.3 600 476.7 642.8 478.2C685.7 479.7 728.3 469.3 771.2 464C814 458.7 857 458.3 878.5 458.2L900 458L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#92bec8"></path><path d="M0 494L21.5 497.8C43 501.7 86 509.3 128.8 513.2C171.7 517 214.3 517 257.2 523.5C300 530 343 543 385.8 547C428.7 551 471.3 546 514.2 546.3C557 546.7 600 552.3 642.8 552C685.7 551.7 728.3 545.3 771.2 544.7C814 544 857 549 878.5 551.5L900 554L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#afd7e0"></path>
                </svg>

              </div>

              <div className='w-[500px] h-full bg-white rounded-2xl py-8 px-8 flex flex-col justify-start items-center relative'>
                <div className='w-full bg-primary-color  flex justify-center items-center px-4 py-4 rounded-lg'>
                  <p className='text-white text-2xl font-montserrat font-semibold'>Üst Seviye</p>
                </div>
                <div className=' w-full mt-12 flex flex-col gap-y-6 '>
                  <div className='border border-primary-color px-4 py-4 rounded-lg flex justify-between items-center h-16'>
                    <span className='text-primary-color font-montserrat font-semibold text-sm w-[200px]'>Canlı derslerde söz hakkı isteyebilme hakkı.</span>
                    <FaCheckCircle size={30} fill='#3A7582' />
                  </div>
                  <div className='border border-primary-color px-4 py-4 rounded-lg flex justify-between items-center h-16'>
                    <span className='text-primary-color font-montserrat font-semibold text-sm w-[200px]'>Reklamsız, sınırsız video izleme ve indirme hakkı.</span>
                    <FaCheckCircle size={30} fill='#3A7582' />
                  </div>
                  <div className='border border-primary-color px-4 py-4 rounded-lg flex justify-between items-center h-16'>
                    <span className='text-primary-color font-montserrat font-semibold text-sm w-[200px]'>Video başına sınırsız yorum hakkı.</span>
                    <FaCheckCircle size={30} fill='#3A7582' />
                  </div>
                </div>
                <button className='z-10 border mt-56 bg-white px-4 py-2 rounded-lg flex justify-center items-center w-[250px] border-[#ABABAB] font-montserrat font-extrabold text-primary-color'>SATIN AL</button>
                <svg id="visual" viewBox="0 0 900 600" className='absolute bottom-0 left-0 rounded-bl-lg rounded-br-lg w-full' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 118L21.5 135C43 152 86 186 128.8 186.3C171.7 186.7 214.3 153.3 257.2 160.2C300 167 343 214 385.8 213.7C428.7 213.3 471.3 165.7 514.2 165.2C557 164.7 600 211.3 642.8 207.5C685.7 203.7 728.3 149.3 771.2 123.7C814 98 857 101 878.5 102.5L900 104L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#3a7582"></path><path d="M0 212L21.5 227.2C43 242.3 86 272.7 128.8 286.5C171.7 300.3 214.3 297.7 257.2 298.8C300 300 343 305 385.8 301C428.7 297 471.3 284 514.2 263.7C557 243.3 600 215.7 642.8 219C685.7 222.3 728.3 256.7 771.2 274.7C814 292.7 857 294.3 878.5 295.2L900 296L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#4b828f"></path><path d="M0 219L21.5 233C43 247 86 275 128.8 281.7C171.7 288.3 214.3 273.7 257.2 262.7C300 251.7 343 244.3 385.8 259C428.7 273.7 471.3 310.3 514.2 314.7C557 319 600 291 642.8 287.7C685.7 284.3 728.3 305.7 771.2 315.3C814 325 857 323 878.5 322L900 321L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#5c909c"></path><path d="M0 379L21.5 362.8C43 346.7 86 314.3 128.8 298.8C171.7 283.3 214.3 284.7 257.2 296.7C300 308.7 343 331.3 385.8 349.3C428.7 367.3 471.3 380.7 514.2 375.2C557 369.7 600 345.3 642.8 332C685.7 318.7 728.3 316.3 771.2 311.3C814 306.3 857 298.7 878.5 294.8L900 291L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#6d9ea9"></path><path d="M0 382L21.5 380.7C43 379.3 86 376.7 128.8 375.7C171.7 374.7 214.3 375.3 257.2 381.2C300 387 343 398 385.8 390.3C428.7 382.7 471.3 356.3 514.2 350.8C557 345.3 600 360.7 642.8 371C685.7 381.3 728.3 386.7 771.2 386.3C814 386 857 380 878.5 377L900 374L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#7dacb7"></path><path d="M0 430L21.5 424.5C43 419 86 408 128.8 401.7C171.7 395.3 214.3 393.7 257.2 402.3C300 411 343 430 385.8 432.5C428.7 435 471.3 421 514.2 425.8C557 430.7 600 454.3 642.8 463.2C685.7 472 728.3 466 771.2 460.3C814 454.7 857 449.3 878.5 446.7L900 444L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#8ebac4"></path><path d="M0 477L21.5 476.7C43 476.3 86 475.7 128.8 476.2C171.7 476.7 214.3 478.3 257.2 485.5C300 492.7 343 505.3 385.8 505.8C428.7 506.3 471.3 494.7 514.2 491.7C557 488.7 600 494.3 642.8 499.8C685.7 505.3 728.3 510.7 771.2 505.2C814 499.7 857 483.3 878.5 475.2L900 467L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#9ec8d2"></path><path d="M0 550L21.5 547.7C43 545.3 86 540.7 128.8 536.5C171.7 532.3 214.3 528.7 257.2 529.8C300 531 343 537 385.8 535.8C428.7 534.7 471.3 526.3 514.2 521.8C557 517.3 600 516.7 642.8 518.3C685.7 520 728.3 524 771.2 530.5C814 537 857 546 878.5 550.5L900 555L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#afd7e0"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
