import React from 'react'

 function Carsual() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>

      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://i.pinimg.com/1200x/cd/1c/7c/cd1c7cbd61e5f596d2d59ae2ea7b3d9c.jpg" height="200px" width="800px"  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-mobile-phone-qr-code-alipay-the-internet-image_19031.jpg" height="200px" width="800px"  class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://png.pngtree.com/thumb_back/fh260/background/20220215/pngtree-double-eleven-2-5d-mobile-phone-shopping-banner-poster-image_924667.jpg" height="200px" width="800px" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </div>
      </div>
  )
}

export default Carsual
