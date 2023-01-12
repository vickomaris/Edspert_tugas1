import React from 'react'
import StyleProfile from './Profile.module.css'
import PhotoProfile from '../../asset/img/profile.png'
import PhotoFood1 from '../../asset/img/bombchicken.png'
import PhotoFood2 from '../../asset/img/bananaspancake.png'
import Footer from '../../Component/Footer'
import { Link } from "react-router-dom";


const Profile = () => {
  const data = JSON.parse(localStorage.getItem('data'));

  return (
    <>
      {/* <!-- navbar --> */}
      <nav className="navbar navbar-expand-lg fixed-top bg-white">
        <div className="container">
          {/* <!-- <a className="navbar-brand" href="#">Mama Recipe</a> --> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item mx-5">
                <Link className={`${StyleProfile['nav-link']} `} aria-current="page" to="/landingpage">Home</Link>
              </li>
              <li className="nav-item mx-5">
                <Link className={`${StyleProfile['nav-link']} `} to="/addrecipe">Add Recipe</Link>
              </li>
              <li className="nav-item mx-5">
                <Link className={`${StyleProfile['nav-link']} ${StyleProfile.active}`} to="/profile">Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- photo profile --> */}
      <section className="profile">
        <div className="container-fluid">
          <div className="row">
            <div className={`col-md-12 d-flex flex-column justify-content-center align-items-center ${StyleProfile.photo}`}>
              <img src={PhotoProfile} alt="" />
              <p>
                <i className={`fa-solid fa-pencil fa-1x ${StyleProfile.pencil}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                </i>
              </p>
              <div className={`collapse ${StyleProfile.collcostum}`} id="collapseExample">
                <div className={`card card-body ${StyleProfile.edit}`}>
                  Change Photo Profile
                </div>
                <div className={`card card-body ${StyleProfile.edit}`}>
                  <a href="resetpassword.html">Change Password</a>
                </div>
              </div>
              <h1 className={`${StyleProfile.username} mt-5`}>
                {/* Garneta Sharina  */}
                {/* {data.username} */}
                Bella
              </h1>
              <hr className={StyleProfile.line} />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- menu --> */}
      <section className="menu">
        <div className="container-fluid">
          <div className="row">
            <div className={`col-md-12 d-flex flex-row ${StyleProfile.menucostum}`} style={{ marginLeft: '50px' }}>
              <p className={`mx-5 ${StyleProfile.myrecipe}`} type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">
                My Recipe
              </p>
              <p className={`mx-5 ${StyleProfile.savedrecipe}`} type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">
                Saved Recipe
              </p>
              <p className={`mx-5 ${StyleProfile.likedrecipe}`} type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">
                Liked Recipe
              </p>
            </div>
            <hr className={StyleProfile.linemenu} />
            <div className="row">
              <div className="col-md-4  kolom1">
                <div className="collapse multi-collapse" id="foods1" >
                  <div className={StyleProfile.foodbox}>
                    <img src={PhotoFood1} alt="" className={StyleProfile.gambar} />
                    <p className={`col-md-2 ${StyleProfile.titlefood}`}>
                      Bomb Chicken
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 kolom2">
                <div className="collapse multi-collapse" id="foods1" >
                  <div className={StyleProfile.foodbox}>
                    <img src={PhotoFood2} alt="" className={StyleProfile.gambar} />
                    <p className={`col-md-2 ${StyleProfile.titlefood}`}>
                      Bananas Pancake
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- footer --> */}
      <Footer />
    </>
  )
}

export default Profile