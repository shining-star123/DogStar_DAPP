import arrows from '@/assets/images/arrows.png'
import batteryIcon from '@/assets/images/battery-mini.png'
import blackToy3 from '@/assets/images/black-toys-5-1-2.png'
import characterA from '@/assets/images/black-toys-5-1.png'
import characterB from '@/assets/images/black-toys-5-2.png'
import diagonalArrow from '@/assets/images/diagonal-arrow.png'
import myLabText from '@/assets/images/mylab-text-logo720_125.png'
import trianglePower from '@/assets/images/power-2.png'
// import { Layout } from '@/components/layout/Layout'
import avatar_1 from '@/assets/images/power-card/power-card-avatar-1.png'
import avatar_2 from '@/assets/images/power-card/power-card-avatar-2.png'
import avatar_3 from '@/assets/images/power-card/power-card-avatar-3.png'
import avatar_4 from '@/assets/images/power-card/power-card-avatar-4.png'
import avatar_5 from '@/assets/images/power-card/power-card-avatar-5.png'
import avatar_6 from '@/assets/images/power-card/power-card-avatar-6.png'
import terryCoinIcon from '@/assets/images/terry-coin.png'
import './index.scss'
import { LabLayout } from '@/components/lab-layout'
import { PowerCard } from '@/components/power-card'

export const MyLabPage = () => {
  return (
    <LabLayout>
      <div className="lab-home-container w-full h-full">
        {/* <Layout> */}
        <div className="w-full flex justify-center my-4 md:my-10 p-4 md:p-0">
          <div className="max-w-[1238px] lab-home-body relative">
            <div>
              <div className="relative m-2">
                <div className="absolute z-0 top-2 left-4 right-4 md:left-2 md:right-2 top-4 md:top-2 lab-home-content-bg h-[434px]">
                  <div className="hidden md:block w-full h-full"></div>
                  <div className="hidden md:block absolute top-0 left-4 w-[200px] md:w-auto md:left-[120px]">
                    <img src={characterB} alt="" />
                  </div>
                  <div className="hidden md:block absolute top-0">
                    <img src={characterA} alt="" />
                  </div>
                </div>
                <div className="z-10 relative p-2">
                  <div className="pl-[190px] md:pl-[408px] p-2 md:p-6 relative">
                    <div className="absolute top-0 -left-2 w-[190px] md:hidden">
                      <img src={characterB} alt="" />
                    </div>
                    <div className="w-full h-full absolute top-0 left-0 border border-[#05FCE5]/70 z-[-1] md:hidden opacity-70 lab-home-content-bg">
                      <div className="w-full h-full"></div>
                    </div>
                    <div className="md:hidden absolute -top-9 -left-6 w-[140px] z-10`">
                      <img src={blackToy3} alt="" className="w-full" />
                    </div>
                    <div className="w-[155px] md:w-[320px] mb-5 md:mb-8">
                      <img src={myLabText} alt="" />
                    </div>
                    <div className="flex flex-col-reverse md:flex-row gap-2 md:gap-4">
                      <div>
                        <div className="flex gap-2 md:gap-4">
                          <div className="w-9 h-9 md:w-[100px] md:h-[100px]">
                            <img
                              src={terryCoinIcon}
                              alt=""
                              className="w-full h-full"
                            />
                          </div>
                          <div>
                            <p className="font-extrabold font-core-sans-c text-xs md:text-[20px] text-gray-100">
                              Networth
                            </p>
                            <p className="text-base md:text-[30px] text-green-500 font-semibold font-core-sans-c">
                              <span className="font-core-sans-c font-extrabold">
                                23,234.956
                              </span>{' '}
                              TERRY
                            </p>
                            <div className="hidden md:block">
                              <img src={arrows} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex gap-2 md:gap-4">
                          <div className="w-8 h-9 md:w-[100px] md:h-[100px]">
                            <img
                              src={trianglePower}
                              alt=""
                              className="w-full h-full"
                            />
                          </div>
                          <div>
                            <p className="text-xs md:text-[18px] text-gray-100 font-core-sans-c">
                              Available{' '}
                              <span className="font-core-sans-c font-extrabold">
                                Power
                              </span>
                            </p>
                            <p className="text-green-500 text-8 md:text-[60px] leading-none font-['NCL_Robowapix_Mecha']">
                              2.600
                            </p>
                            <div className="hidden md:block">
                              <img src={batteryIcon} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:px-3 border-4 border-[#1E1E1F] md:border-0 rounded md:rounded-none relative z-10">
                    <div className="bg-[#1A1A1A] bg-opacity-60 grid grid-cols-1 md:grid-cols-3">
                      <div className="px-10 text-[#00FFFF] flex gap-1">
                        <div className="flex flex-col justify-center">
                          <img src={diagonalArrow} alt="" />
                        </div>
                        <p className="font-extrabold">Cards</p>
                      </div>
                      <div className="px-10 text-[#00FFFF] hidden md:flex gap-1">
                        <div className="flex flex-col justify-center">
                          <img src={diagonalArrow} alt="" />
                        </div>
                        <p>Cards</p>
                      </div>
                      <div className="px-10 text-[#00FFFF] hidden md:flex gap-1">
                        <div className="flex flex-col justify-center">
                          <img src={diagonalArrow} alt="" />
                        </div>
                        <p>Cards</p>
                      </div>
                    </div>
                    <div className="overflow-y-scroll h-[410px] md:h-[460px] py-1">
                      <div className="grid grid-cols-1 md:grid-cols-3 lab-home-grid-row px-3 md:px-4 py-1 md:py-2 bg-[#1A1A1A] gap-3 md:gap-10 md:mb-1">
                        <PowerCard
                          bg={`bg-[#FF0006] shadow-[4px_6px_10px_0px_#FF0006]`}
                          avatar={avatar_1}
                        />
                        <PowerCard
                          bg={`bg-[#FF6300] shadow-[4px_6px_10px_0px_#FF6300]`}
                          avatar={avatar_2}
                        />
                        <PowerCard
                          bg={`bg-[#00FFFF] shadow-[4px_6px_10px_0px_#00FFFF]`}
                          avatar={avatar_3}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 lab-home-grid-row px-3 md:px-4 py-1 md:py-2 bg-[#1A1A1A] gap-3 md:gap-10 md:mb-1">
                        <PowerCard
                          bg={`bg-[#792AF9] shadow-[4px_6px_10px_0px_#792AF9]`}
                          avatar={avatar_4}
                        />
                        <PowerCard
                          bg={`bg-[#24FF87] shadow-[4px_6px_10px_0px_#24FF87]`}
                          avatar={avatar_5}
                        />
                        <PowerCard
                          bg={`bg-[#FFFFFF] shadow-[4px_6px_10px_0px_#FFFFFF]`}
                          avatar={avatar_6}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 lab-home-grid-row px-3 md:px-4 py-1 md:py-2 bg-[#1A1A1A] gap-3 md:gap-10 md:mb-1">
                        <PowerCard
                          bg={`bg-[#FF0006] shadow-[4px_6px_10px_0px_#FF0006]`}
                          avatar={avatar_1}
                        />
                        <PowerCard
                          bg={`bg-[#FF6300] shadow-[4px_6px_10px_0px_#FF6300]`}
                          avatar={avatar_2}
                        />
                        <PowerCard
                          bg={`bg-[#00FFFF] shadow-[4px_6px_10px_0px_#00FFFF]`}
                          avatar={avatar_3}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 lab-home-grid-row px-3 md:px-4 py-1 md:py-2 bg-[#1A1A1A] gap-3 md:gap-10 md:mb-1">
                        <PowerCard
                          bg={`bg-[#792AF9] shadow-[4px_6px_10px_0px_#792AF9]`}
                          avatar={avatar_4}
                        />
                        <PowerCard
                          bg={`bg-[#24FF87] shadow-[4px_6px_10px_0px_#24FF87]`}
                          avatar={avatar_5}
                        />
                        <PowerCard
                          bg={`bg-[#FFFFFF] shadow-[4px_6px_10px_0px_#FFFFFF]`}
                          avatar={avatar_6}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </Layout> */}
      </div>
    </LabLayout>
  )
}
