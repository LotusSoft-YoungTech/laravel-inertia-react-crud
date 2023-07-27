import React from "react";
import "./Header.css";
import ResponsiveNavLink from "../ResponsiveNavLink";
export default function Header({ className }) {
    return (
        <div className={"header " + className}>
            <div className="row m-0 d-flex">
                <div className="col-5">
                    <span className="d-flex align-items-center">
                        <a href="#">
                            <i className="fa-solid fa-bars hamburger  "></i>
                        </a>
                        <h1 className="px-3 mt-2 font-bold fs-3">Dashboard</h1>
                    </span>
                </div>

                <div className="col-7 text-right align-self-center">
                    <div className="dropdown z-10">
                        <i
                            className="fa-regular fa-user drop_down rounded-circle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        ></i>

                        <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                        >
                            <li>
                                <a className="dropdown-item" href="#">
                                    My Account
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href={route("logout")}>
                                    Logout
                                </a> 
             
                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    Log Out 
                                </ResponsiveNavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
