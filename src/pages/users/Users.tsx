import React, { useEffect, useState } from "react";
import axios from "axios";
import MainLayout from "../../layout/MainLayout";
import UsersTable from "../../Components/UsersTable/UsersTable";
import Card from "../../Components/Card/Card";
import { activeusers, loanUsers, saving, userIcon } from "../../images";
import { API_URL } from "../../config/Api";
import { educationType, UserInterface } from "../../types";

const Users = () => {
  const [allCount, setAllCount] = useState(0);
  const [activeCount, setActiveCount] = useState(0);
  const [loanCount, setLoanCount] = useState(0);
  const [savingCount, setSavingCount] = useState(0);

  const getCount = async () => {
    try {
      const res = await axios.get(`${API_URL}/v1/users`);
      const users = res.data;
      const activeUsers = users.filter(
        (user: UserInterface) => user.lastActiveDate > "2022-01-01"
      );
      const loanUsers = users.filter(
        (user: educationType) => user.loanRepayment > 0
      );
      const savingUser = users.filter(
        (user: UserInterface) => user.accountBalance > 0
      );

      setAllCount(users.length);
      setActiveCount(activeUsers.length);
      setLoanCount(loanUsers.length);
      setSavingCount(savingUser.length);
    } catch (error) {}
  };

  useEffect(() => {
    getCount();
  }, []);

  return (
    <MainLayout>
      <div className="page-set">
        <div className="col-md-12">
          <div className="row mt-5">
            <span className="dashboard_page_title">Users </span>
          </div>
        </div>
        <div className="m-4"></div>
        <div className="row">
          <div className="col-md-12 mb-5">
            <div className="row">
              <div className="col-md-3">
                <Card userIcon={userIcon} label={"Users"} count={allCount} />
              </div>
              <div className="col-md-3">
                <Card
                  userIcon={activeusers}
                  label={"Active Users"}
                  count={activeCount}
                />
              </div>
              <div className="col-md-3">
                <Card
                  userIcon={loanUsers}
                  label={"Users With Loans"}
                  count={loanCount}
                />
              </div>
              <div className="col-md-3">
                <Card
                  userIcon={saving}
                  label={"Users with savings"}
                  count={savingCount}
                />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="col-md-12">
              <div className="ov-x">
                <UsersTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Users;
