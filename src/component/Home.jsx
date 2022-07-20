import React from 'react'
import Products from './Products';
import "./Home.css"
import styled from 'styled-components'
import App from '../App';

const Home = () => {
  return (
    <div className='cont'>
        <div className="card bg-dark text-white border-0">
            <img src="./assets/bg8.jpg" className="card-img" alt="BG"  
            />
              <div className="card-img-overlay d-flex flex-column text-black">
                  <div className="container">
                  <h5 className="card-title display-1 fw-bolder mb-1 text-black">New Season Arrivals</h5>
                  <p className="card-text lead fs-2">
                      CHECK OUT ALL THE AMAZING TRENDS ON ACCESSORIES
                  </p>
                  <p className='lead fs-4 mx-1'>FREE SHIPPING WITH AMAZING OFFERS!!</p>

                  </div>
              </div>
        </div>

        <section class="about" id="about">

<div class="image">
    <img src="./assets/bg7.jpg" alt=""/>
</div>

<div class="content">
    <h3>Winter Offers On Clothing</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque voluptates corrupti natus necessitatibus beatae voluptatibus, deserunt quo soluta minima libero laborum, corporis error esse vitae placeat blanditiis reiciendis vel? Minima.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta doloremque placeat porro, ipsam quia at beatae atque odit iste?</p>
    <a href="#" class="btn">read more</a>
</div>

</section>
      
     
        <Products />
        
        <section class="reviews" id="reviews">

    <h1 class="heading">Reviews</h1>
    <hr />

    <div class="swiper review-slider">

        <div class="swiper-wrapper">

            <div class="swiper-slide slide">
                <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?</p>
                <div class="user">
                    <img src="./assets/pic-1.png" alt=""/>
                    <div class="info">
                        <h3>John denver</h3>
                        <span>designer</span>
                    </div>
                </div>
            </div>

            <div class="swiper-slide slide">
                <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?</p>
                <div class="user">
                    <img src="./assets/pic-2.png" alt=""/>
                    <div class="info">
                        <h3>Anna Smith</h3>
                        <span>designer</span>
                    </div>
                </div>
            </div>

            <div class="swiper-slide slide">
                <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?</p>
                <div class="user">
                    <img src="./assets/pic-3.png" alt=""/>
                    <div class="info">
                        <h3>Nathan Drake</h3>
                        <span>designer</span>
                    </div>
                </div>
            </div>

            <div class="swiper-slide slide">
                <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?</p>
                <div class="user">
                    <img src="./assets/pic-4.png" alt=""/>
                    <div class="info">
                        <h3>Jane Depp</h3>
                        <span>designer</span>
                    </div>
                </div>
            </div>

        </div>

    </div>

</section>

<section class="footer">

    <div class="box-container">

        <div class="box">
            <h3>QUICK LINKS</h3>
            <a>Home</a>
            <a>About</a>
            <a>Shop</a>
            <a>Reviews</a>
        </div>

        <div class="box">
            <h3>LINKS</h3>
            <a>My account</a>
            <a>My order</a>
            <a>My wishlist</a>
            <a>Ask questions</a>
            <a>Terms of use</a>
            <a>Privacy policy</a>
        </div>

        <div class="box">
            <h3>CONTACT INFO</h3>
            <a> <i class="fas fa-phone"></i> +123-456-7890 </a>
            <a> <i class="fas fa-phone"></i> +111-222-3333 </a>
            <a> <i class="fas fa-envelope"></i>Keshavvats@gmail.com </a>
        </div>

    </div>

</section>

    <div className="flex text-center mx-auto     bg-black text-white">No Copyright | all rights reserved!</div>
    </div>
       
  )
};

export default Home;


