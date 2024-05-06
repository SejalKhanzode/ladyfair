import React from 'react'

const ServicesProvided = () => {
  return (
    <div>
        {/* Salon service */}

      <div className="pl-12 pt-10 bg-pink-50 pb-20 text-center lg:w-[100%] md:w-52">
        <h3 className=" lg:text-[40px] text-center pt-10 sm:text-[25px]">
          OUR EXPANDED{" "}
          <span className="font-semibold text-rose-600">
            SIGNATURE SERVICES
          </span>
        </h3>
        <p class="lg:text-[2rem] pb-12  sm:text-[15px]">*availability may vary by city</p>
        {/* <div className="flex flex-col">
          <div className="flex flex-col w-[20%]"></div> */}
        <div class=" items-center grid grid-cols-2 gap-4 ml-[10rem] mr-[12rem] flex lg-flex-row  sm:flex-col ">
          <div class="relative hover:bg-rose-600 sm:w-[400px] ">
            <img
              src="https://s3.amazonaws.com/priv-service-photos-q3-2018/R4_SERVICES 2/1336x360/JPEGS/Priv_Hair_1336x360_R4.jpg"
              class="hover:opacity-0"
            />
            <h1 class="text-white absolute text-center -translate-x-2/4 -translate-y-2/4 w-full left-2/4 top-2/4 text-[2rem] w-[100%] font-bold ">
              HAIR
            </h1>
          </div>
          <div class="relative hover:bg-rose-600 sm:w-[400px] ">
            <img
              src="https://s3.amazonaws.com/priv-service-photos-q3-2018/R4_SERVICES 2/1336x360/JPEGS/Priv_Makeup_1336x360_R4.jpg"
              class="hover:opacity-0"
            />
            <h1 className="text-white absolute text-center -translate-x-2/4 -translate-y-2/4 w-full left-2/4 top-2/4 text-[2rem] w-[100%] font-bold ">
              MAKEUP
            </h1>
          </div>

          <div class="relative hover:bg-rose-600 sm:w-[400px] ">
            <img
              src="https://s3.amazonaws.com/priv-service-photos-q3-2018/R4_SERVICES 2/1336x360/JPEGS/Priv_Nails_1336x360_R4.jpg"
              class="hover:opacity-0"
            />
            <h1 className="text-white absolute text-center -translate-x-2/4 -translate-y-2/4 w-full left-2/4 top-2/4 text-[2rem] w-[100%] font-bold ">
              NAILS
            </h1>
          </div>
          <div class="relative hover:bg-rose-600 sm:w-[400px] ">
            <img
              src="https://s3.amazonaws.com/priv-service-photos-q3-2018/R4_SERVICES 2/1336x360/JPEGS/Priv_Spa_1336x360_R4.jpg"
              class="hover:opacity-0"
            />
            <h1 className="text-white absolute text-center -translate-x-2/4 -translate-y-2/4 w-full left-2/4 top-2/4 text-[2rem] w-[100%] font-bold ">
              MASSAGE
            </h1>
          </div>

          <div class="relative hover:bg-rose-600 sm:w-[400px] ">
            <img
              src="https://priv-image-assets.s3.us-west-2.amazonaws.com/nwb/facial_horizontal.png"
              class="hover:opacity-0"
            />
            <h1 class="text-white absolute text-center -translate-x-2/4 -translate-y-2/4 w-full left-2/4 top-2/4 text-[2rem] w-[100%] font-bold ">
              FACIALS
            </h1>
          </div>
          <div class="relative hover:bg-rose-600 sm:w-[400px] ">
            <img
              src="https://priv-image-assets.s3.us-west-2.amazonaws.com/nwb/spray_horizontal.png"
              class="hover:opacity-0"
            />
            <h1 className="text-white absolute text-center -translate-x-2/4 -translate-y-2/4 w-full left-2/4 top-2/4 text-[2rem] w-[100%] font-bold ">
              SPRAY TAN
            </h1>
          </div>

          <div class="relative hover:bg-rose-600 sm:w-[400px] ">
            <img
              src="https://s3.amazonaws.com/priv-service-photos-q3-2018/R4_SERVICES+2/1336x360/JPEGS/Priv_Ear_Piercing_1336x360_R3.jpg"
              class="hover:opacity-0"
            />
            <h1 className="text-white absolute text-center -translate-x-2/4 -translate-y-2/4 w-full left-2/4 top-2/4 text-[2rem] w-[100%] font-bold ">
              EAR PIERCING
            </h1>
          </div>
          <div class="relative hover:bg-rose-600 sm:w-[400px] ">
            <img
              src="https://priv-service-photos-q3-2018.s3.amazonaws.com/R4_SERVICES+2/1336x360/JPEGS/Bridal.jpg"
              class="hover:opacity-0"
            />
            <h1 className="text-white absolute text-center -translate-x-2/4 -translate-y-2/4 w-full left-2/4 top-2/4 text-[2rem] w-[100%] font-bold ">
              BRIDAL
            </h1>
          </div>
          <div class="relative hover:bg-rose-600 sm:w-[400px] ">
            <img
              src="https://img.freepik.com/free-photo/woman-nail-salon-receiving-manicure-by-beautician-beauty-treatment-concept_186202-8769.jpg?t=st=1714935058~exp=1714938658~hmac=b7b07a4fcf69f270fae5a519b596432d1abc5909baa5ef757cf471fc62ea7e5c&w=740"
              class="hover:opacity-0 w-[28rem] h-[120px]"
            />
            <h1 className="text-white absolute text-center -translate-x-2/4 -translate-y-2/4 w-full left-2/4 top-2/4 text-[2rem] w-[100%] font-bold ">
              MADICURE
            </h1>
          </div>
          <div class="relative hover:bg-rose-600 sm:w-[400px] ">
            <img
              src="https://img.freepik.com/free-photo/foot-washing-spa-before-treatment-spa-treatment-product-female-feet-hand-spa_1150-37703.jpg?size=626&ext=jpg"
              class="hover:opacity-0 w-[28rem] h-[120px]"
            />
            <h1 className="text-white absolute text-center -translate-x-2/4 -translate-y-2/4 w-full left-2/4 top-2/4 text-[2rem] w-[100%] font-bold ">
            PEDICURE
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesProvided