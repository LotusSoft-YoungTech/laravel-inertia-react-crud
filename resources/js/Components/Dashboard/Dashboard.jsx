import Sidebar from "@/Components/Sidebar/Sidebar";
import Layout from "@/Layouts/Layout";
import "./Dashboard.css";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Dashboard({ children }) {
    return (
        <Layout>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-2 p-0 ">
                        <Sidebar className=" d-md-block d-none " />
                    </div>
                    <div className="col-md-10 p-0 ">
                        <Header className="" />
                        <div className="main-dashboard px-1 postion-relative ">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
