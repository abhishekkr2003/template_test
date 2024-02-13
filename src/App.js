import logo from './logo.svg';
import './App.css';
import Hamburger from 'hamburger-react'
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { RiArrowDropUpLine } from "react-icons/ri";
import { useState } from 'react';
import { CiSearch } from "react-icons/ci"
import { RiArrowDropDownLine } from "react-icons/ri";
function App() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div>
      <div className='bg-[#002859] flex items-center text-white'>
        <div className='mx-2'>
          <Hamburger toggled={isOpen} toggle={setOpen} color='white' size={25} />
        </div>
        <div className='ms-5 mr-1'>Reviewing Tool</div>
        <div>&gt;</div>
        <div className='ms-1 mr-1'>Order Approval</div>
      </div>

      <div className='flex flex-1'>
        <div>
          <div className='flex flex-col flex-1 shadow-lg sidebar justify-around'>{/*this is sidebar*/}
            <div className='flex flex-col px-2 py-1 ms-4 gap-5 mt-20'>
              <BsFillGrid3X3GapFill className="mt-5" />
              <BsFillGrid3X3GapFill />
              <BsFillGrid3X3GapFill />
              <BsFillGrid3X3GapFill />
              <BsFillGrid3X3GapFill />
            </div>

            <div className='flex flex-col px-2 py-1 ms-4 gap-5 mt-20 mb-20 me-4'>
              <BsFillGrid3X3GapFill />
              <BsFillGrid3X3GapFill color='rgb(163,213,119)' />
              <BsFillGrid3X3GapFill />
              <BsFillGrid3X3GapFill />
              <BsFillGrid3X3GapFill className='mb-2' />
            </div>
            <div className='bg-[#002859] height' />

            <div className='image-container items-center content-center justify-center justify-self-center'>
              <img src='https://www.w3schools.com/howto/img_avatar.png' alt='avatar' className='_img' />
            </div>
          </div>
        </div>

        <div className='flex-1 bg-[#f0f7ff]'>

          <div className='navbar bg-white flex flex-1 gap-11 py-2 px-10'>
            <div className='ms-12 font-medium text-gray-500 px-3 py-1'>All</div>
            <div className='font-medium text-white bg-[#acd987] px-3 py-1 rounded-md'>To Review(37)</div>
            <div className='font-medium text-gray-500 px-3 py-1'>On Hold(2)</div>
            <div className='font-medium text-gray-500 px-3 py-1'>Processing(15)</div>
          </div>

          <div className='navbar flex flex-1 gap-11 px-2 py-1 justify-around ms-1'>
            <div className='font-semibold text-sm  px-3 py-1 '>ORDER ID &#8593;</div>
            <div className='font-semibold text-sm px-3 py-1  '>PROGRAM NAME</div>
            <div className='font-semibold text-sm px-3 py-1 '>EXPECTED MAIL DATE</div>
            <div className='font-semibold text-sm px-3 py-1 '>PIECES</div>

            <div className='flex bg-[#e3ecf6] rounded-3xl gap-44 py-1'>
              <div className='font-semibold text-sm text-gray-500 px-3 py-1 items-center text-center'>Search</div>
              <div className='font-semibold text-sm px-3 py-1 flex items-center'><CiSearch /></div>
            </div>
          </div>


          <div className='flex gap-11 px-2 py-1 justify-around bg-white shadow-md mb-1 ms-2'>
            <div className='font-semibold text-sm text-gray-500 py-1'>1122334455</div>
            <div className='font-semibold text-sm text-gray-500 py-1'>NDS ASHBURNHAM LIGHT</div>
            <div className='font-semibold text-sm text-gray-500  py-1'>2/22/21 8:16 AM EST</div>
            <div className='font-semibold text-sm text-gray-500 ms-4 pe-5 py-1'>456</div>
            <div className='flex rounded-3xl py-1 justify-around items-center'>
              <div className='font-semibold text-sm text-gray-500 px-8 py-1 me -4 bg-[#d8edff] rounded'>Hold</div>
              <div className='font-semibold text-sm text-white px-8 py-1 bg-[#384c72] ms-4  me-4 rounded'>Approve</div>
              <div className='font-semibold text-sm text-gray-500 py-1'><RiArrowDropDownLine size={24} /></div>
            </div>
          </div>

          <div className='flex gap-11 px-2 py-1 justify-around bg-white shadow-md mb-1 ms-2'>
            <div className='font-semibold text-sm text-gray-500 py-1'>3465235621</div>
            <div className='font-semibold text-sm text-gray-500 py-1'>NDS SOUTHBERWICK WATER</div>
            <div className='font-semibold text-sm text-gray-500  py-1'>2/17/21 10:15 AM EST</div>
            <div className='font-semibold text-sm text-gray-500 ms-4 pe-5 py-1'>23</div>
            <div className='flex rounded-3xl py-1 justify-around items-center'>
              <div className='font-semibold text-sm text-gray-500 px-8 py-1 me -4 bg-[#d8edff] rounded'>Hold</div>
              <div className='font-semibold text-sm text-white px-8 py-1 bg-[#384c72] ms-4  me-4 rounded'>Approve</div>
              <div className='font-semibold text-sm text-gray-500 py-1'><RiArrowDropUpLine size={24} /></div>
            </div>
          </div>

          <div className='flex bg-white ms-2 py-2 px-10'>
            <div className='ms-5 grow min-wdth'>
              <div className='text-sm font-semibold  text-gray-500 '>
                Details
              </div>
              <div className='line bg-gray-400 mb-2' />
              <div className='flex gap-11'>
                <div className='flex flex-col pe-5'>
                  <div>
                  </div>
                  <div className='font-bold text-xs text-gray-500'>PROGRAM ID</div>
                  <div className='text-xs text-gray-400 font-semibold'>345</div>
                </div>
                <div className='flex flex-col pe-5'>
                  <div className='font-bold text-xs  text-gray-500'>ENVELLOPE QUANTITY</div>
                  <div className='text-xs text-gray-400 font-semibold'>693</div>
                </div>
                <div className='flex flex-col me-5 pe-5'>
                  <div className='font-bold text-xs  text-gray-500'>IMAGES(CLICKs)</div>
                  <div className='text-xs text-gray-400 font-semibold'>160</div>
                </div>
              </div>

              <div className='flex gap-11 mt-5'>
                <div className='flex flex-col pe-5'>
                  <div>
                    <div className='font-bold text-xs text-gray-500'>DATE CREATED</div>
                  </div>

                  <div className='text-xs text-gray-400 font-semibold'>2/22/21 8:16</div>
                </div>
                <div className='flex flex-col pe-5'>
                  <div className='font-bold text-xs  text-gray-500'>FILE NAME</div>
                  <div className='text-xs text-gray-400 font-semibold'>DATA_2020935983J35D2K529_2021501.ZIP</div>
                </div>
              </div>

            </div>



            <div className='ms-5'>
              <div className='text-sm font-semibold  text-gray-500 '>
                Last Notes
              </div>
              <div className='line bg-gray-400 mb-2' />
              <div className='flex gap-11'>
                <div className='flex grow-1'>
                  <div className='conatiner-card mx-2'>
                    <img src='https://www.w3schools.com/howto/img_avatar.png' alt='avatar' className='card-image' />
                  </div>
                  <div className='flex flex-col pe-5'>
                    <div className='font-bold small-font text-gray-500'>Kate Smith,11:35</div>
                    <div className='text-xs text-gray-400 font-semibold'>Please take a look at doc 123456789 attached to this order.
                      seems like it should have been approved long lime ago.
                    </div>
                  </div>
                </div>
                <div className='flex grow-1'>
                  <div className='conatiner-card mx-2'>
                    <img src='https://www.w3schools.com/howto/img_avatar.png' alt='avatar' className='card-image' />
                  </div>
                  <div className='flex flex-col pe-5'>
                    <div className='font-bold small-font text-gray-500'>John Johnson,yesterday</div>
                    <div className='text-xs text-gray-400 font-semibold'>Preview of every document make it easier to find mistakes.Does tis order suppose to be send today or monday 5th?</div>
                  </div>
                </div>
              </div>

            </div>


          </div>

          <div className='flex gap-11 px-2 py-1 justify-around bg-white shadow-md mb-1 ms-2'>
            <div className='font-semibold text-sm text-gray-500 py-1'>1122562849</div>
            <div className='font-semibold text-sm text-gray-500 py-1'>NDS SOUTHBERWICK WATER</div>
            <div className='font-semibold text-sm text-gray-500  py-1'>2/17/21 10:15 AM EST</div>
            <div className='font-semibold text-sm text-gray-500 ms-4 pe-5 py-1'>23</div>
            <div className='flex rounded-3xl py-1 justify-around items-center'>
              <div className='font-semibold text-sm text-gray-500 px-8 py-1 me -4 bg-[#d8edff] rounded'>Hold</div>
              <div className='font-semibold text-sm text-white px-8 py-1 bg-[#384c72] ms-4  me-4 rounded'>Approve</div>
              <div className='font-semibold text-sm text-gray-500 py-1'><RiArrowDropDownLine size={24} /></div>
            </div>
          </div>
          <div className='flex gap-11 px-2 py-1 justify-around bg-white shadow-md mb-1 ms-2'>
            <div className='font-semibold text-sm text-gray-500 py-1'>3465235621</div>
            <div className='font-semibold text-sm text-gray-500 py-1'>NDS SOUTHBERWICK WATER</div>
            <div className='font-semibold text-sm text-gray-500  py-1'>2/17/21 10:15 AM EST</div>
            <div className='font-semibold text-sm text-gray-500 ms-4 pe-5 py-1'>23</div>
            <div className='flex rounded-3xl py-1 justify-around items-center'>
              <div className='font-semibold text-sm text-gray-500 px-8 py-1 me -4 bg-[#d8edff] rounded'>Hold</div>
              <div className='font-semibold text-sm text-white px-8 py-1 bg-[#384c72] ms-4  me-4 rounded'>Approve</div>
              <div className='font-semibold text-sm text-gray-500 py-1'><RiArrowDropDownLine size={24} /></div>
            </div>
          </div>
          <div className='flex gap-11 px-2 py-1 justify-around bg-white shadow-md mb-1 ms-2'>
            <div className='font-semibold text-sm text-gray-500 py-1'>3465235621</div>
            <div className='font-semibold text-sm text-gray-500 py-1'>NDS SOUTHBERWICK WATER</div>
            <div className='font-semibold text-sm text-gray-500  py-1'>2/17/21 10:15 AM EST</div>
            <div className='font-semibold text-sm text-gray-500 ms-4 pe-5 py-1'>23</div>
            <div className='flex rounded-3xl py-1 justify-around items-center'>
              <div className='font-semibold text-sm text-gray-500 px-8 py-1 me -4 bg-[#d8edff] rounded'>Hold</div>
              <div className='font-semibold text-sm text-white px-8 py-1 bg-[#384c72] ms-4  me-4 rounded'>Approve</div>
              <div className='font-semibold text-sm text-gray-500 py-1'><RiArrowDropDownLine size={24} /></div>
            </div>
          </div>
          <div className='flex gap-11 px-2 py-1 justify-around bg-white shadow-md mb-1 ms-2'>
            <div className='font-semibold text-sm text-gray-500 py-1'>3465235621</div>
            <div className='font-semibold text-sm text-gray-500 py-1'>NDS SOUTHBERWICK WATER</div>
            <div className='font-semibold text-sm text-gray-500  py-1'>2/17/21 10:15 AM EST</div>
            <div className='font-semibold text-sm text-gray-500 ms-4 pe-5 py-1'>23</div>
            <div className='flex rounded-3xl py-1 justify-around items-center'>
              <div className='font-semibold text-sm text-gray-500 px-8 py-1 me -4 bg-[#d8edff] rounded'>Hold</div>
              <div className='font-semibold text-sm text-white px-8 py-1 bg-[#384c72] ms-4  me-4 rounded'>Approve</div>
              <div className='font-semibold text-sm text-gray-500 py-1'><RiArrowDropDownLine size={24} /></div>
            </div>
          </div>
          <div className='flex gap-11 px-2 py-1 justify-around bg-white shadow-md mb-1 ms-2'>
            <div className='font-semibold text-sm text-gray-500 py-1'>3465235621</div>
            <div className='font-semibold text-sm text-gray-500 py-1'>NDS SOUTHBERWICK WATER</div>
            <div className='font-semibold text-sm text-gray-500  py-1'>2/17/21 10:15 AM EST</div>
            <div className='font-semibold text-sm text-gray-500 ms-4 pe-5 py-1'>23</div>
            <div className='flex rounded-3xl py-1 justify-around items-center'>
              <div className='font-semibold text-sm text-gray-500 px-8 py-1 me -4 bg-[#d8edff] rounded'>Hold</div>
              <div className='font-semibold text-sm text-white px-8 py-1 bg-[#384c72] ms-4  me-4 rounded'>Approve</div>
              <div className='font-semibold text-sm text-gray-500 py-1'><RiArrowDropDownLine size={24} /></div>
            </div>
          </div>
          <div className='flex gap-11 px-2 py-1 justify-around bg-white shadow-md mb-1 ms-2'>
            <div className='font-semibold text-sm text-gray-500 py-1'>3465235621</div>
            <div className='font-semibold text-sm text-gray-500 py-1'>NDS SOUTHBERWICK WATER</div>
            <div className='font-semibold text-sm text-gray-500  py-1'>2/17/21 10:15 AM EST</div>
            <div className='font-semibold text-sm text-gray-500 ms-4 pe-5 py-1'>23</div>
            <div className='flex rounded-3xl py-1 justify-around items-center'>
              <div className='font-semibold text-sm text-gray-500 px-8 py-1 me -4 bg-[#d8edff] rounded'>Hold</div>
              <div className='font-semibold text-sm text-white px-8 py-1 bg-[#384c72] ms-4  me-4 rounded'>Approve</div>
              <div className='font-semibold text-sm text-gray-500 py-1'><RiArrowDropDownLine size={24} /></div>
            </div>
          </div>
          <div className='flex gap-11 px-2 py-1 justify-around bg-white shadow-md mb-1 ms-2'>
            <div className='font-semibold text-sm text-gray-500 py-1'>3465235621</div>
            <div className='font-semibold text-sm text-gray-500 py-1'>NDS SOUTHBERWICK WATER</div>
            <div className='font-semibold text-sm text-gray-500  py-1'>2/17/21 10:15 AM EST</div>
            <div className='font-semibold text-sm text-gray-500 ms-4 pe-5 py-1'>23</div>
            <div className='flex rounded-3xl py-1 justify-around items-center'>
              <div className='font-semibold text-sm text-gray-500 px-8 py-1 me -4 bg-[#d8edff] rounded'>Hold</div>
              <div className='font-semibold text-sm text-white px-8 py-1 bg-[#384c72] ms-4  me-4 rounded'>Approve</div>
              <div className='font-semibold text-sm text-gray-500 py-1'><RiArrowDropDownLine size={24} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


{/* <img src='https://www.w3schools.com/howto/img_avatar.png' alt='avatar' className='_img' /> */ }