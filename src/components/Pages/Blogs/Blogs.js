import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='cont'>
        <section >
           <h1>1. Difference Between Authorization & Authentication ? </h1>
            <p>
                <span>Ans: </span> 
                Authentication is the process of ascertaining that users are who they say they are. This is the initial stage in every security procedure & Authorization is the process of granting a user permission to access a particular resource or function in a computer system. Often used synonymously with access control or client privilege.
            </p>
           </section>
           <section>
               <h1>2.Why are you using Firebase? What other options do you have to implement Authentication ? </h1>
               <p> 
               <span>Ans: </span> 
               Firebase Authentication enables you to authenticate users in your app using backend services, simple-to-use SDKs, and pre-built UI libraries. It works with passwords, phone numbers, and prominent federated identity providers such as Google, Facebook, and Twitter, among others.
               </p>
           </section>
           <section>
               <h1>3. What other services does Firebase provide other than Authentication ? </h1>
               <p>
               <span>Ans: </span> 
               Firebase offers a variety of services. Among the most useful are the following:
               Cloud-based data storage.
               Cloud-based Services.
               Authentication & sHosting.
               Cloud Computing.
               Analytics by Google.
               Predictions.
              Cloud Messaging Services.
            </p>
           </section>
        </div>
    );
};

export default Blogs;