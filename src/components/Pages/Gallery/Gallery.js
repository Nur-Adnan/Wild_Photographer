import React from 'react';
import { Link } from 'react-router-dom';
import "./Gallery.css";

const Gallery = () => {
    return (
      <div style={{ marginTop: 50 }}>
        <section className="gallery" id="gallery">
          <h1 style={{textAlign: 'center', marginTop:'80px'}}>Gallery</h1>
          <hr />
        <div className="box-container">
          <div className="box">
            <img src="https://images.wallpaperscraft.com/image/single/snow_leopard_snow_hunting_attention_black_and_white_57947_800x600.jpg" alt="" />
            <div className="content">
              <h2>Leopard</h2>
              <p>I've never met a leopard print I didn't like . . .</p>
              <Link to="#">
                <button type="button">
                <span>See More!</span>
                <div class="liquid"></div>
                </button>
              </Link>
            </div>
          </div>
          <div className="box">
            <img src="https://images.wallpaperscraft.com/image/single/tiger_face_eyes_black_and_white_72403_800x600.jpg" alt="" />
            <div className="content">
              <h2>Tiger</h2>
              <p>My weakness is wearing too much leopard print . . .</p>
              <Link to="#">
                <button type="button">
                <span>See More!</span>
                <div class="liquid"></div>
                </button>
              </Link>
            </div>
          </div>
          <div className="box">
            <img src="https://images.wallpaperscraft.com/image/single/kitten_cat_computer_keyboard_apple_mac_black_and_white_94218_800x600.jpg" alt="" />
            <div className="content">
              <h2>Cat</h2>
              <p>As leopard feels at home with leopard . . .</p>
              <Link to="#">
                <button type="button">
                <span>See More!</span>
                <div class="liquid"></div>
                </button>
              </Link>
            </div>
          </div>
          <div className="box">
            <img src="https://images.wallpaperscraft.com/image/single/cat_muzzle_profile_black_background_118788_800x600.jpg" alt="" />
            <div className="content">
              <h2>Black Cat</h2>
              <p>You cannot change the stripes of a leopard . . .</p>
              <Link to="#">
                <button type="button">
                <span>See More!</span>
                <div class="liquid"></div>
                </button>
              </Link>
            </div>
          </div>
          <div className="box">
            <img src="https://images.wallpaperscraft.com/image/single/leopard_predator_muzzle_bw_119486_800x600.jpg" alt="" />
            <div className="content">
              <h2>Chitah</h2>
              <p>I've never met a leopard print I didn't like . . .</p>
              <Link to="#">
                <button type="button">
                <span>See More!</span>
                <div class="liquid"></div>
                </button>
              </Link>
            </div>
          </div>
          <div className="box">
            <img src="https://images.wallpaperscraft.com/image/single/snow_leopard_face_big_cat_predator_65466_800x600.jpg" alt="" />
            <div className="content">
              <h2>Blue Eyes Leopard</h2>
              <p>A girl in want of a Leopard still has feet . . .</p>
              <Link to="#">
                <button type="button">
                <span>See More!</span>
                <div class="liquid"></div>
                </button>
              </Link>
            </div>
          </div>
          <div className="box">
            <img src="https://images.wallpaperscraft.com/image/single/lion_predator_mane_sight_bw_118473_800x600.jpg" alt="" />
            <div className="content">
              <h2>Aged Lion</h2>
              <p>"I've often felt that the Indian tiger has not been unleashed . . .</p>
              <Link to="#">
                <button type="button">
                <span>See More!</span>
                <div class="liquid"></div>
                </button>
              </Link>
            </div>
          </div>
          <div className="box">
            <img src="https://images.wallpaperscraft.com/image/single/tiger_muzzle_sight_predator_bw_119456_800x600.jpg" alt="" />
            <div className="content">
              <h2>White Tiger</h2>
              <p>"No man can tame a tiger into a kitten by stroking it . . .</p>
              <Link to="#">
                <button type="button">
                <span>See More!</span>
                <div class="liquid"></div>
                </button>
              </Link>
            </div>
          </div>
          <div className="box">
            <img src="https://images.wallpaperscraft.com/image/single/cat_black_white_blue_eyes_baby_beautiful_1196_800x600.jpg" alt="" />
            <div className="content">
              <h2>Blue Eyes Cat</h2>
              <p>"If you rile a tiger, he's going to show his claws . . .</p>
              <Link to="#">
                <button type="button">
                <span>See More!</span>
                <div class="liquid"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
};

export default Gallery;