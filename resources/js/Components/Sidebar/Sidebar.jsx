import React from "react";
import "./Sidebar.css";

function Sidebar({ classname }) {
    return (
        <>
            <div className={"sidebar " + classname}>
                <div className="logo_container">
                    <img
                        src="https://dynamic.brandcrowd.com/asset/logo/9b10e92b-fb36-4f10-8dd9-88ad49341c8e/logo-search-grid-1x?logoTemplateVersion=1&v=638091149117130000"
                        alt=""
                    />
                    <h1>Admin Panel</h1>
                </div>
                <hr />
                <div className="user_name">
                    <i className="fa-regular fa-user  p-2 m-2 fs-3 rounded-circle bg-white"></i>
                    <span className="fs-5 fw-bold">Kaushal ghimire </span>
                </div>
                <hr />

                <div className=" search input-group my-2 w-52 mx-1">
                    <input
                        type="text"
                        className="form-control p-1"
                        placeholder="search"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <span className="input-group-text" id="basic-addon2">
                        <a href="#">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </a>
                    </span>
                </div>
                <hr />
                <div className="navigation_link">
                    <ul className="">
                        <li className="mb-3 ms-2 ">
                            <a href="#" className="ps-1  fs-5">
                                <i className="fa-solid fa-house pe-2"></i>
                                <span > Banner Slider </span>
                            </a>
                        </li>
                        <li className="mb-3 ms-2 ">
                            <a href="#" className="ps-1  fs-5">
                                <i className="fa-solid fa-book pe-2"></i>
                                <span > Banner Slider </span>
                            </a>
                        </li>
                        <li className="mb-3 ms-2 ">
                            <a href="#" className="ps-1  fs-5">
                                <i className="fa-solid fa-list pe-2"></i>
                                <span > Banner Slider </span>
                            </a>
                        </li>  <li className="mb-3 ms-2 ">
                            <a href="#" className="ps-1  fs-5">
                                <i className="fa-solid fa-user pe-2"></i>
                                <span > Banner Slider </span>
                            </a>
                        </li>  <li className="mb-3 ms-2 ">
                            <a href="#" className="ps-1  fs-5">
                                <i className="fa-solid fa-newspaper pe-2"></i>
                                <span > Banner Slider </span>
                            </a>
                        </li>  <li className="mb-3 ms-2 ">
                            <a href="#" className="ps-1  fs-5">
                                <i className="fa-solid fa-location pe-2"></i>
                                <span > Banner Slider </span>
                            </a>
                        </li>
                        <li className="mb-3 ms-2 ">
                            <a href="#" className="ps-1  fs-5">
                                <i className="fa-solid fa-house pe-2"></i>
                                <span > Banner Slider </span>
                            </a>
                        </li>
                       
                      
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Sidebar;
