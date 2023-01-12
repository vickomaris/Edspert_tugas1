import React, { useState, useRef } from 'react'
import StyleAddRecipe from './AddRecipe.module.css';
import Footer from '../../Component/Footer';
import { Link } from "react-router-dom";

const AddRecipe = () => {

    // const hiddenFileInput = useRef(null);
    // // const navigate = useNavigate();
    // const [image, setImage] = useState('');

    // const handleClick = (event) => {
    //     hiddenFileInput.current.click();
    // };
    // const handleChange = (event) => {
    //     const fileUploaded = event.target.files[0];
    //     document.getElementById('customBtn').innerHTML = fileUploaded.name;
    //     setImage(fileUploaded);
    // };


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
                                <Link className={`${StyleAddRecipe['nav-link']} active`} aria-current="page" to="/landingpage">Home</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className={`${StyleAddRecipe['nav-link']} ${StyleAddRecipe.active}`} to="/addrecipe">Add Recipe</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className={`${StyleAddRecipe['nav-link']} active`} to="/profile">Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- form input add recipe --> */}
            <section className="addrecipe">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                            <div className={`col-md-7 mb-4 d-flex flex-column justify-content-center  ${StyleAddRecipe.addphoto}`}>
                                <input className="form-control" type="file" id="addphoto" style={{ display: 'none' }} />
                                <div className="text-center" type="button"
                                    onclick="document.getElementById('addphoto').click()"> <i
                                        className="fa-regular fa-image fa-4x mb-3"></i> <br /> Add Photo</div>
                            </div>

                            {/* <img src={require('../../assets/image/icon/image.png')} alt="" id="customBtn" for="image" name="image" onClick={handleClick} classnName={style.labelImage} />
                                <input type="file" ref={hiddenFileInput} id="formFile" onChange={handleChange} style={{ display: 'none' }} />
                                <h4 for="image" name="image" id="customBtn " onClick={handleClick} classnName={style.labelImage}>
                                    Add image
                                </h4> */}


                            <div className="col-md-7 mb-4">
                                <div className="form-floating">
                                    <input type="text " className={`form-control ${StyleAddRecipe.costuminput}`} id="floatingInputGroup1" placeholder="Title" />
                                    <label for="floatingInputGroup1 ">Title</label>
                                </div>
                                <div className="form-floating my-4">
                                    <textarea className={`form-control ${StyleAddRecipe.costuminput}`} placeholder="Leave a comment here" id="floatingTextarea2"
                                        style={{ height: '200px' }}></textarea>
                                    <label for="floatingTextarea2">Ingredients</label>
                                </div>

                                <div className="form-floating">
                                    <input type="text " className={`form-control ${StyleAddRecipe.costuminput}`} id="floatingInputGroup1" placeholder="Title" />
                                    <label for="floatingInputGroup1 ">Video</label>
                                </div>
                            </div>
                            <button type="button " className={`btn d-grid gap-2 col-3 mx-auto text-white ${StyleAddRecipe['btn-send']}`} > Post </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- footer --> */}
            <Footer />

        </>
    )
}

export default AddRecipe