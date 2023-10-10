import React from 'react'
import Slider from "react-slick";
import image1 from '../../Image/41nN4nvKaAL._AC_SY200_.jpg'
import image2 from '../../Image/XCM_Manual_1396328_4379574_Egypt_EG_BAU_GW_DC_SL_Jewelry_379x304_1X._SY304_CB650636675_.jpg'
import image3 from '../../Image/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg'

export default function MainSlider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
  
  return <>

    <div className="row py-4">
        <div className="col-md-9">
            <Slider {...settings}>
                  <img src={image1} className='w-100' height={500}  alt="" />
                  <img src={image2} className='w-100' height={500} alt="" />
                  <img src={image3} className='w-100' height={500} alt="" />
             </Slider>
        </div>
        <div className="col-md-3">
        <img src={image1} className='w-100' height={250}  alt="" />
        <img src={image3} className='w-100' height={250}  alt="" />
        </div>
    </div>

  
  </>
}
