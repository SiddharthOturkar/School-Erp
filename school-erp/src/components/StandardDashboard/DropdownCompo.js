import { DownOutlined } from "@ant-design/icons/lib/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    label: (
      <Link to="/FourthStandard" onClick={() => localStorage.setItem("dynamic", "Class 4")}>
        Class 4<sup>th</sup>
      </Link>
    ),
    key: "/FourthStandard",
  },
  {
    label: (
      <Link to="/FifthStandard" onClick={() => localStorage.setItem("dynamic", "Class 5")}>
        Class 5<sup>th</sup>
      </Link>
    ),
    key: "/FifthStandard",
  },
  {
    label: (
      <Link to="/SixthStandard" onClick={() => localStorage.setItem("dynamic", "Class 6")}>
        Class 6<sup>th</sup>
      </Link>
    ),
    key: "/SixthStandard",
  },
  {
    label: (
      <Link to="/SeventhStandard" onClick={() => localStorage.setItem("dynamic", "Class 7")}>
        Class 7<sup>th</sup>
      </Link>
    ),
    key: "/SeventhStandard",
  },
  {
    label: (
      <Link to="/EighthStandard" onClick={() => localStorage.setItem("dynamic", "Class 8")}>
        Class 8<sup>th</sup>
      </Link>
    ),
    key: "/EighthStandard",
  },
  {
    label: (
      <Link to="/NinthStandard" onClick={() => localStorage.setItem("dynamic", "Class 9")}>
        Class 9<sup>th</sup>
      </Link>
    ),
    key: "/NinthStandard",
  },
];

function DropdownCompo({title}) {
  return (
    <div>
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <Link onClick={(e) => e.preventDefault()}>
          <Space>
            {window.localStorage.getItem("dynamic")}<sup>th</sup>
            <DownOutlined />
          </Space>
        </Link>
      </Dropdown>
    </div>
  );
}

export default DropdownCompo;





























// import { DownOutlined } from "@ant-design/icons/lib/icons";
// import { Dropdown, Space } from "antd";
// import { Link } from "react-router-dom";

// const items = [
//   {
//     label: (
//       <Link to="/FourthStandard" onClick={() => localStorage.setItem("dynamic", "Class 4th")}>
//         Class 4<sup>th</sup>
//       </Link>
//     ),
//     key: "/FourthStandard",
//   },
//   {
//     label: (
//       <Link to="/FifthStandard" onClick={() => localStorage.setItem("dynamic", "Class 5th")}>
//         Class 5<sup>th</sup>
//       </Link>
//     ),
//     key: "/FifthStandard",
//   },
//   // ... other items
// ];

// function DropdownCompo({ title }) {
//   return (
//     <div>
//       <Dropdown menu={{ items }} trigger={["click"]}>
//         <Link onClick={(e) => e.preventDefault()}>
//           <Space>
//             {title}
//             <sup>th</sup>
//             <DownOutlined />
//           </Space>
//         </Link>
//       </Dropdown>
//     </div>
//   );
// }

// export default DropdownCompo;
