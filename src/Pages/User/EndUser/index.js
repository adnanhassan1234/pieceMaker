import React, { useState } from "react";
import PageTitle from "../../../Components/Pagetitle";
import { Col, Dropdown, Row, Card, Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import UserImg from "../../../Images/unsplash.png";
import UserImg1 from "../../../Images/unsplash1.png";
import UserImg2 from "../../../Images/unsplash2.png";
import Search from "../../../Components/Search";
import { useNavigate } from "react-router-dom";

const data = [
  {
    image: UserImg,
    name: "ADNAN",
    phone: "+932535333",
    location: "California123",
    status: "Active",
    email: "adnan12@gmail.com",
  },
  {
    image: UserImg1,
    name: "HASSAN",
    phone: "+932534333",
    location: "California123",
    status: "Active",
    email: "adnan562@gmail.com",
  },
  {
    image: UserImg2,
    name: "WAQAS",
    phone: "+932265333",
    location: "California123",
    status: "inActive",
    email: "adnan1012@gmail.com",
  },
  {
    image: UserImg,
    name: "ADNAN",
    phone: "+932535333",
    location: "California123",
    status: "Active",
    email: "adnan12@gmail.com",
  },
  {
    image: UserImg1,
    name: "HASSAN",
    phone: "+932534333",
    location: "California123",
    status: "Active",
    email: "adnan562@gmail.com",
  },
  {
    image: UserImg2,
    name: "WAQAS",
    phone: "+932265333",
    location: "California123",
    status: "inActive",
    email: "adnan1012@gmail.com",
  },
  {
    image: UserImg,
    name: "ADNAN",
    phone: "+932535333",
    location: "California123",
    status: "Active",
    email: "adnan12@gmail.com",
  },
  {
    image: UserImg1,
    name: "HASSAN",
    phone: "+932534333",
    location: "California123",
    status: "Active",
    email: "adnan562@gmail.com",
  },
  {
    image: UserImg2,
    name: "WAQAS",
    phone: "+932265333",
    location: "California123",
    status: "inActive",
    email: "adnan1012@gmail.com",
  },
  {
    image: UserImg,
    name: "ADNAN",
    phone: "+932535333",
    location: "California123",
    status: "Active",
    email: "adnan12@gmail.com",
  },
  {
    image: UserImg1,
    name: "HASSAN",
    phone: "+932534333",
    location: "California123",
    status: "Active",
    email: "adnan562@gmail.com",
  },
  {
    image: UserImg2,
    name: "Areeba",
    phone: "+932265333",
    location: "California123",
    status: "inActive",
    email: "areeba12@gmail.com",
  },
];

const EndUser = (props) => {
  const navigate = useNavigate();
  const [search, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    console.log("🚀 ~ file: index.js:116 ~ handleSearch ~ event:", event);
    setSearchTerm(event.target.value);
  };

  const handleViewClick = (row) => {
    navigate("/end-user/username", { state: { row } });
  };

  const columns = [
    {
      name: "Select All",
      //   selector: (row) => row.image,
      cell: (row) => (
        <div className="image_sec">
          <img src={row.image} />
        </div>
      ),
    },
    {
      name: "Name",
      //   selector: (row) => row.name,
      cell: (row) => (
        <div className="image_sec">
          <p>{row.name}</p>
          <p>{row.email}</p>
        </div>
      ),
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },

    {
      name: "Location",
      selector: (row) => row.location,
    },

    {
      name: "Status",
      selector: (row) => row.status,
    },

    {
      name: "Action",
      selector: (row) => row.action,
      cell: (row) => (
        <Dropdown align={"end"}>
          <Dropdown.Toggle variant={"dropdownToggle"}>
            <i className={"fal fa-ellipsis-v"}></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="" onClick={() => handleViewClick(row)}>
              View Profile
            </Dropdown.Item>
            <Dropdown.Item href="#">Disable Account</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ),
    },
  ];

  return (
    <>
      <PageTitle title={"Users"} />
      <section>
        <Card className="p-0">
          <Card.Header>
            <div className="tableHeader">
              <Dropdown>
                <Dropdown.Toggle variant="filter">Filter</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {/* <Search placeholder={"Search"} value={search} onChange={handleSearch} /> */}
              <input
                type="search"
                placeholder="Search Users by Name, Email or Date"
                value={search}
                onChange={handleSearch}
              />
            </div>
            <Button variant={"csv"}>Download CSV</Button>
          </Card.Header>
          <DataTable
            columns={columns}
            data={data.filter((item) => {
              const searchTerm = search.trim().toLowerCase().replace(/\s/g, "");
              return searchTerm === ""
                ? item
                : item.email.toLowerCase().replace(/\s/g, "").includes(searchTerm) ||
                    item.name.toLowerCase().replace(/\s/g, "").includes(searchTerm);
            })}
            selectableRows
            pagination
            paginationPerPage={5}
            paginationRowsPerPageOptions={[5, 10, 15, 25, 50]}
          />
        </Card>
      </section>
    </>
  );
};

export default EndUser;
