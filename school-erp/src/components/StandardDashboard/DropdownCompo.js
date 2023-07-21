import { DownOutlined } from "@ant-design/icons/lib/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

// An array containing items for the dropdown menu
const items = [
  {
    label: (
      // Link component for Class 4
      <Link
        to="/FourthStandard"
        onClick={() => localStorage.setItem("dynamic", "Class 4")}
      >
        Class 4<sup>th</sup>
      </Link>
    ),
    key: "/FourthStandard",
  },
  // Repeat the above pattern for other class standards
  {
    label: (
      <Link
        to="/FifthStandard"
        onClick={() => localStorage.setItem("dynamic", "Class 5")}
      >
        Class 5<sup>th</sup>
      </Link>
    ),
    key: "/FifthStandard",
  },
  // Repeat the above pattern for other class standards
  {
    label: (
      <Link
        to="/SixthStandard"
        onClick={() => localStorage.setItem("dynamic", "Class 6")}
      >
        Class 6<sup>th</sup>
      </Link>
    ),
    key: "/SixthStandard",
  },
  // Repeat the above pattern for other class standards
  {
    label: (
      <Link
        to="/SeventhStandard"
        onClick={() => localStorage.setItem("dynamic", "Class 7")}
      >
        Class 7<sup>th</sup>
      </Link>
    ),
    key: "/SeventhStandard",
  },
  // Repeat the above pattern for other class standards
  {
    label: (
      <Link
        to="/EighthStandard"
        onClick={() => localStorage.setItem("dynamic", "Class 8")}
      >
        Class 8<sup>th</sup>
      </Link>
    ),
    key: "/EighthStandard",
  },
  // Repeat the above pattern for other class standards
  {
    label: (
      <Link
        to="/NinthStandard"
        onClick={() => localStorage.setItem("dynamic", "Class 9")}
      >
        Class 9<sup>th</sup>
      </Link>
    ),
    key: "/NinthStandard",
  },
];

// DropdownCompo is a functional component
function DropdownCompo({ title }) {
  return (
    <div>
      {/* Dropdown component from Ant Design */}
      <Dropdown
        menu={{
          items, // Use the items array for the dropdown menu
        }}
        trigger={["click"]} // The dropdown is triggered on click
      >
        <Link onClick={(e) => e.preventDefault()}>
          <Space>
            {/* Display the current class selected in local storage */}
            {window.localStorage.getItem("dynamic")}
            <sup>th</sup>
            <DownOutlined /> {/* Down arrow icon from Ant Design */}
          </Space>
        </Link>
      </Dropdown>
    </div>
  );
}

export default DropdownCompo;
