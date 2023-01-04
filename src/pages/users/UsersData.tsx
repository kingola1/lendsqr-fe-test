import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import MainLayout from "../../layout/MainLayout";
import { API_URL } from "../../config/Api";
import { avatar, full, star } from "../../images";
import { UserInterface } from "../../types";

import "./user.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";

const UsersData = () => {
  const { userId } = useParams(),
    [user, setUser] = useState<UserInterface>();

  useEffect(() => {
    const getUser = async () => {
      const user: UserInterface = JSON.parse(
        localStorage.getItem(`currUser`) || ""
      );
      if (user && +user?.id === +(userId || "-1")) setUser(user);
      else
        try {
          const res = await axios.get(`${API_URL}/v1/users/${userId}`);
          setUser(res.data);
        } catch (error) {
          console.log(error);
        }
    };
    getUser();

    return () => {};
  }, [userId]);

  if (!user) return <div className="">User Not Found</div>;
  else {
    const { profile, education, guarantor, socials } = user;
    return (
      <MainLayout>
        <div className="page-set">
          <div className="col-md-12">
            <div className="mt-2">
              <a className="username" href="/users">
                <span>
                  <AiOutlineArrowLeft />
                </span>
                Bact to Users
              </a>
            </div>
            <div className="row mt-4">
              <div className="col">
                <div className="dashboard_page_title">Users Details</div>
              </div>
              <div className="col d-flex justify-content-between">
                <button className="btn border-danger text-danger">
                  BLACKLIST USER
                </button>
                <button className="btn border-success text-success">
                  ACTIVATE USER
                </button>
              </div>
            </div>
          </div>
          <div className="m-4"></div>
          <div className="row">
            <div className="col-md-12 mb-3">
              <div className="card wrapper_card card_shadow">
                <div className="row">
                  <div className="col-md-4">
                    <div className="d-flex username_wrapper">
                      <div className="col username_holder">
                        {" "}
                        <img
                          className="userplace_holder"
                          src={avatar}
                          alt="brief"
                        />
                      </div>
                      <div className="col d-grid ms-1">
                        <h4 className="username mt-5">{user?.userName}</h4>
                        <h6 className="username--company">{user?.orgName}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 align-self-sm-center justify-content-sm-center">
                    <div>
                      <h3 className="tier">Users Tier</h3>
                    </div>
                    <img src={full} alt="brief" />
                    <img src={star} alt="brief" />
                    <img src={star} alt="brief2" />
                  </div>
                  <div className="col-md-3 align-self-sm-center justify-content-sm-center">
                    <div className="balanceaccount">
                      <h4>&#8358; {user?.accountBalance}</h4>
                    </div>
                    <div className="accountnumber">
                      {user?.accountNumber}/Providus Bank
                    </div>
                  </div>
                  <div className="row link_text_dis">
                    <div className="col-md-2 active_placeholder">
                      <h4 className="user_link_text active_list">
                        General Details
                      </h4>
                    </div>
                    <div className="col-md-2">
                      <h4 className="user_link_text">Document</h4>
                    </div>
                    <div className="col-md-2">
                      <h4 className="user_link_text">Bank Details</h4>
                    </div>
                    <div className="col-md-2">
                      <h4 className="user_link_text">Loans</h4>
                    </div>
                    <div className="col-md-2">
                      <h4 className="user_link_text">Savings</h4>
                    </div>
                    <div className="col-md-2">
                      <h4 className="user_link_text">App and System</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5"></div>
              <div className="row">
                <div className="col-md-12">
                  <div className="padd card card_shadow">
                    <h3 className="profilecard"> Profile Information </h3>
                    <div className="row">
                      <div className="col-md-2 mt-5 pl-5 padd">
                        <p className="namestye">Fullname</p>
                        <h2 className="nameplace">
                          {profile?.firstName} {profile?.lastName}
                        </h2>
                      </div>
                      <div className="col-md-2 mt-5 pl-5 padd">
                        <p className="namestye">Phone number</p>
                        <h2 className="nameplace">{profile?.phoneNumber}</h2>
                      </div>
                      <div className="col-md-2 mt-5 pl-5 padd">
                        <p className="namestye">Email Address </p>
                        <h2 className="nameplace">{user?.email}</h2>
                      </div>
                      <div className="col-md-2 mt-5 pl-5 padd">
                        <p className="namestye">Bvn</p>
                        <h2 className="nameplace">{profile?.bvn} </h2>
                      </div>
                      <div className="col-md-2 mt-5 pl-5 padd">
                        <p className="namestye">Gender</p>
                        <h2 className="nameplace">{profile?.gender}</h2>
                      </div>
                    </div>
                    <div className="row card__wrap__bottom">
                      <div className="col-md-2 mt-5 pl-5 padd">
                        <p className="namestye">Marital Status</p>
                        <h2 className="nameplace">{profile?.firstName}</h2>
                      </div>
                      <div className="col-md-2 mt-5 pl-5 padd">
                        <p className="namestye">Children</p>
                        <h2 className="nameplace">{profile?.firstName} </h2>
                      </div>
                      <div className="col-md-2 mt-5 pl-5 padd">
                        <p className="namestye">Type of Recidence</p>
                        <h2 className="nameplace">{profile?.firstName} </h2>
                      </div>
                    </div>
                    <hr />
                    <h3 className="profilecard"> Education and Employment </h3>
                    <div className="row">
                      <div className="col-md-2 mt-5 pl-5 padd">
                        <p className="namestye">Level of education </p>
                        <h2 className="nameplace">{education.level} </h2>
                      </div>
                      <div className="col-md-2 mt-5 pl-5 padd">
                        <p className="namestye">Employment status </p>
                        <h2 className="nameplace">
                          {education.employmentStatus}{" "}
                        </h2>
                      </div>
                      <div className="col-md-2 mt-5 pl-5 padd">
                        <p className="namestye">sector of employment</p>
                        <h2 className="nameplace">{education.sector} </h2>
                      </div>
                      <div className="col-md-2 mt-5 pl-5 padd">
                        <p className="namestye">duration of employment</p>
                        <h2 className="nameplace">{education.duration} </h2>
                      </div>
                    </div>
                    <div className="row card__wrap__bottom">
                      <div className="col-md-2 mt-5 pl-5 padd">
                        <p className="namestye">Offical email</p>
                        <h2 className="nameplace">{education.officeEmail} </h2>
                      </div>
                      <div className="col-md-2 mt-5 pl-5 padd">
                        <p className="namestye">Montly Income</p>
                        <h2 className="nameplace">
                          {education.monthlyIncome.map((_) => (
                            <span>{_}</span>
                          ))}
                        </h2>
                      </div>
                      <div className="col-md-2 mt-5 pl-5 padd">
                        <p className="namestye">Repayment</p>
                        <h2 className="nameplace">
                          {education.loanRepayment}{" "}
                        </h2>
                      </div>
                    </div>
                    <hr className="hrstyle" />
                    <h3 className="profilecard"> Social </h3>
                    <div className="row">
                      <div className="col-md-2 mt-5 pl-5 padd">
                        <p className="namestye">Twitter</p>
                        <h2 className="nameplace">{socials.twitter} </h2>
                      </div>
                      <div className="col-md-2 mt-5 pl-5 padd">
                        <p className="namestye">Facebook</p>
                        <h2 className="nameplace">{socials.facebook}</h2>
                      </div>
                      <div className="col-md-2 mt-5 pl-5 padd">
                        <p className="namestye">Instagram</p>
                        <h2 className="nameplace">{socials.instagram} </h2>
                      </div>
                    </div>{" "}
                    <hr />
                    <h3 className="profilecard"> Guarantor </h3>
                    <div className="row">
                      <div className="col-md-2 mt-5 pl-5 padd">
                        <p className="namestye">Fullname</p>
                        <h2 className="nameplace">
                          {guarantor.firstName} {guarantor.lastName}
                        </h2>
                      </div>
                      <div className="col-md-2 mt-5 pl-5 padd">
                        <p className="namestye">Phone Number</p>
                        <h2 className="nameplace">{guarantor.phoneNumber} </h2>
                      </div>
                      <div className="col-md-2 mt-5 pl-5 padd">
                        <p className="namestye">Email Address</p>
                        <h2 className="nameplace">{guarantor.address} </h2>
                      </div>
                      <div className="col-md-2 mt-5 pl-5 padd">
                        <p className="namestye">Relationship</p>
                        <h2 className="nameplace">{guarantor.gender} </h2>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-2 mt-5 pl-5 padd">
                        <p className="namestye">Fullname</p>
                        <h2 className="nameplace">Cole william </h2>
                      </div>
                      <div className="col-md-2 mt-5 pl-5 padd">
                        <p className="namestye">Phone number</p>
                        <h2 className="nameplace">Cole william </h2>
                      </div>
                      <div className="col-md-2 mt-5 pl-5 padd">
                        <p className="namestye">Email Address</p>
                        <h2 className="nameplace">Cole william </h2>
                      </div>
                      <div className="col-md-2 mt-5 pl-5 padd">
                        <p className="namestye">Relationship</p>
                        <h2 className="nameplace">Cole william </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
};

export default UsersData;
