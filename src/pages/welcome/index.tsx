import rightArrowIcon from '@/assets/icons/right-arrow.png'
import MyLabButton from '@/assets/images/mylab-button.png'
import RightArrow from '@/assets/images/right-arrow.png'
import Character from '@/assets/images/silueta skully.svg'

// import { Button } from '@components/shared/button'
// import { Layout } from '@components/layout/Layout'
import { ButtonComponent } from '@/components/elements'

import './styles.css'
import { LabLayout } from '@/components/lab-layout'

import { useState } from 'react'
import { Link } from 'react-router-dom'
// import League from 'dogstar_leag'

export const WelcomePage = () => {
  const [index, setIndex] = useState(0)
  const handleNext = () => {
    setIndex((prev) => (prev + 1) % 2)
  }
  return (
    <LabLayout>
      <div className="lab-welcome-layout">
        {/* <Layout> */}
        <div className="lab-container px-4">
          <div className="grid md:grid-cols-2 sm:grid-cols-1">
            <div></div>
            <div className="md:px-4 md:px-16 pt-6">
              <div className="text-[90px] px-6 md:text-[132px] font-extrabold flex gap-2 mt-12 md:mt-0 font-core-sans-c leading-none mb-3 tracking-tighter	">
                Hello.
                <img src={Character} alt="" />
              </div>
              <div className="md:mb-6 px-6 md:px-0 z-10 relative md:static h-[72px] md:h-auto">
                <div className="absolute md:static top-0 left-0 px-6 md:px-0 w-full md:w-[60%]">
                  <img src={MyLabButton} className="w-full" alt="" />
                </div>
              </div>
              <div
                className={`text-xs md:text-base px-6 md:px-8 py-12 md:py-4 mb-6 font-medium lab-text-container text-[#B1B1B1] z-0 min-h-[200px]`}
              >
                <div className="border">
                  <span></span>
                </div>
                <span></span>
                <div className={`${index === 0 ? 'block' : 'hidden'}`}>
                  <p className="mb-2">
                    <span className="text-[#00FFFF]">The high advanced</span>{' '}
                    will ai ( haw - ai ) has taken political control of nations,
                    central banks and tyrannically governs humanity.
                  </p>

                  <p className="mb-3">
                    while chaos reigns on the planet, a small group of crypto
                    freaks with the help of the intergalactic dog terry,
                    originally from alpha canis maioris, has managed to build
                    the resistance through a parallel system of payments and
                    exchanges outside the control.
                  </p>
                </div>
                <div className={`${index === 1 ? 'block' : 'hidden'}`}>
                  <p className="mb-3">
                    while chaos reigns on the planet, a small group of crypto
                    freaks with the help of the intergalactic dog terry,
                    originally from alpha canis maioris, has managed to build
                    the resistance through a parallel system of payments and
                    exchanges outside the control.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 md:hidden justify-between">
                  <ButtonComponent
                    variant="transparent"
                    rounded="lg"
                    text={<div className="py-1">Next</div>}
                    icon={<img src={RightArrow} alt="" />}
                    onClick={handleNext}
                  />
                  <ButtonComponent
                    variant="primary"
                    rounded="lg"
                    text={<div className="py-1">Play</div>}
                  />
                </div>
              </div>
              <div className="flex md:hidden pb-8 bg-[#0A0808] absolute left-0 pt-4 px-2">
                <ButtonComponent variant="secondary" text="COLLECTION" />
                <ButtonComponent variant="primary" text="DECK" />
                <ButtonComponent variant="primary" text="HOW-AI POT" />
              </div>
              <div className="px-6">
                <div className="hidden md:flex gap-4 mb-4">
                  <ButtonComponent
                    rounded="lg"
                    variant="secondary"
                    text={
                      <div className="flex gap-2 justify-center py-2 w-[80px]">
                        <p className="text-[26px]">Next </p>
                        <div className="flex flex-col justify-center">
                          <img src={rightArrowIcon} alt="" />
                        </div>
                      </div>
                    }
                    onClick={handleNext}
                  />
                  <ButtonComponent
                    rounded="lg"
                    variant="primary"
                    text={
                      <Link to="/my-lab">
                        <p className="text-[26px] py-2 w-[110px]">Play</p>
                      </Link>
                    }
                  />
                </div>
                <div className="flex px-2">
                  <div className="flex flex-col justify-center">
                    <input type="checkbox" />
                  </div>
                  <p className="text-base font-light hidden md:block px-2">
                    Don't show this message again
                  </p>
                </div>
              </div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        {/* </Layout> */}
      </div>
    </LabLayout>
  )
}
