import React from "react";

const Imgcontainer = () => {
  return (
    // <!-- Slider main container -->
<div class="swiper">
  {/* <!-- Additional required wrapper --> */}
  <div class="swiper-wrapper">
    {/* <!-- Slides --> */}
    <div class="swiper-slide"><img alt='qualquer' src="https://s2.glbimg.com/mY7ohl5ehq4QhHYpLGHzGpSf_Uk=/0x0:1920x1280/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/1/d/V5vubYToAk0A1rpgbgOQ/strada-ranch-154.jpg"/></div>
    <div class="swiper-slide"><img alt='qualquer' url="https://quatrorodas.abril.com.br/wp-content/uploads/2020/02/carros-bc3a1sicos-comprc3a1veis.jpg?quality=70&strip=info"/></div>
    <div class="swiper-slide"><img alt='qualquer' url="https://revistacarro.com.br/wp-content/uploads/2021/06/Fiat-Pulse_1.jpg"/></div>
  </div>
  {/* <!-- If we need pagination --> */}
  <div class="swiper-pagination"></div>

  {/* <!-- If we need navigation buttons --> */}
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  {/* <!-- If we need scrollbar --> */}
  <div class="swiper-scrollbar"></div>
</div>
  );
};

export default Imgcontainer;
