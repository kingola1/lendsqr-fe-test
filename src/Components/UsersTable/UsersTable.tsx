import { forwardRef, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Dropdown } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../config/Api";

import { moreDetails } from "../../images";
import { UserInterface } from "../../types";
import "./usersTable.scss";
import { FiUserCheck, FiUserX } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";

const status = [
  { color: "success", label: "active" },
  { color: "secondary", label: "inactive" },
  { color: "warning", label: "pending" },
  { color: "danger", label: "blacklisted" },
];
const MoreToggle = forwardRef(({ onClick }: any, ref: any) => (
  <img
    className="px-3 py-1"
    src={moreDetails}
    alt="logo"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

function UserTable() {
  const [records, setRecords] = useState<any[]>([]),
    [pending, setPending] = useState(true),
    navigate = useNavigate();

  const getRecords = async () => {
      try {
        const res = await axios.get(`${API_URL}/v1/users`);
        setRecords(res.data);
        setPending(false);
      } catch (error) {}
    },
    onViewDetails = (user: UserInterface) => {
      localStorage.setItem(`currUser`, JSON.stringify(user));
      navigate(`/users/${user.id}`);
    };

  useEffect(() => {
    getRecords();
  }, []);
  return (
    <>
      <DataTable
        customStyles={{}}
        columns={[
          {
            sortable: true,
            name: "Organization".toLocaleUpperCase(),
            selector: (row: UserInterface) => row.orgName,
          },
          {
            sortable: true,
            name: "Username".toLocaleUpperCase(),
            selector: (row: UserInterface) => row.userName,
          },
          {
            sortable: true,
            name: "Email".toLocaleUpperCase(),
            selector: (row: UserInterface) => row.email,
          },
          {
            sortable: true,
            name: "Phonenumber".toLocaleUpperCase(),
            selector: (row: UserInterface) => row.phoneNumber,
          },
          {
            sortable: true,
            name: "Data Joined".toLocaleUpperCase(),
            selector: (row: UserInterface) => row.createdAt,
          },
          {
            name: "Status".toLocaleUpperCase(),
            selector: (row: UserInterface & { status: any }) => row.status(),
            width: "100px",
          },
          {
            name: "",
            selector: (row: UserInterface & { status: any; action: any }) =>
              row.action(),
            width: "80px",
            button: true,
            wrap: false,
            allowOverflow: true,
          },
        ]}
        data={records.map((_) => {
          const _status = status[Math.floor(Math.random() * 4)];
          return {
            ..._,
            createdAt: moment(_.createdAt).format("MMMM Do YYYY, h:mm a"),
            status: () => (
              <span
                className={`badge rounded-pill bg-${_status.color} text-${_status.color} bg-opacity-10 p-2`}
              >
                {_status.label}
              </span>
            ),
            action: () => (
              <Dropdown>
                <Dropdown.Toggle
                  as={MoreToggle}
                  variant="transparent"
                  id={`dropdown-${_.id}`}
                />
                <Dropdown.Menu>
                  <div
                    role={"button"}
                    onClick={() => onViewDetails(_)}
                    className="d-block py-2 px-1"
                  >
                    <span className="mx-2">
                      <AiOutlineEye />
                    </span>
                    <small>View details</small>
                  </div>
                  <div className="d-block py-2 px-1">
                    <span className="mx-2">
                      <FiUserX />
                    </span>
                    <small>Blacklist User</small>
                  </div>
                  <div className="d-block py-2 px-1">
                    <span className="mx-2">
                      <FiUserCheck />
                    </span>
                    <small>Activate User</small>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            ),
          };
        })}
        pagination
        progressPending={pending}
      />
    </>
  );
}
export default UserTable;
