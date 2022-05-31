import React from 'react';
import { Link } from 'react-router-dom';
import "./About.css";


const About = () => {
    return (
        <div className="header">
        <div style={{width: '50%'}} >
          <h1 className="header-title">
            Nur Adnan Chowdhury <br />
            <span className="text-color">Become A Software Engineer</span>
          </h1>
          <br />
          <p>
            “The success of every websites now depends on search engine optimisation and digital marketing strategy. If you are on first page of all major search engines then you are ahead among your competitors in terms of online sales.”
          </p>
          <br />
          <Link to="#">
            <button type="button">
            <span>See More !</span>
            <div class="liquid"></div>
            </button>
          </Link>
        </div>
        <div >
          <img className="header-img" src="https://scontent.fdac11-1.fna.fbcdn.net/v/t1.6435-9/72990987_2413461075578810_7320019668603764736_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFw1WWQdEquigTW7OH1YglrKmPWniyGX2oqY9aeLIZfaquloZc4vAB7uuPXJu146M1bevaQZTuy1uCF1YQcIPff&_nc_ohc=1B2ogW9HNvoAX8G7CC3&tn=RlFaW3uXWzGHHRTc&_nc_ht=scontent.fdac11-1.fna&oh=00_AT957wXZbIFZ3JOw0chLbSSgmEQVJeilk3CsS5feusD5Dg&oe=62859D44" alt="Owner" />
        </div>
      </div>
    );
};

export default About;