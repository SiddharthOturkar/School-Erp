
import { DownOutlined } from '@ant-design/icons/lib/icons'
import { Dropdown, Space } from "antd";
import { Link } from 'react-router-dom';

const items = [
  {
    label: <Link to="/FourthStandard">Class 4<sup>th</sup></Link>,
    key: '/FourthStandard',
  },
  {
    label: <Link to="/FifthStandard">Class 5<sup>th</sup></Link>,
    key: '/FifthStandard',
  },
  {
    label: <Link to="/SixthStandard">Class 6<sup>th</sup></Link>,
    key: '/SixthStandard',
  },
  {
    label: <Link to="/SeventhStandard">Class 7<sup>th</sup></Link>,
    key: '/SeventhStandard',
  },
  {
    label: <Link to="/EighthStandard">Class 8<sup>th</sup></Link>,
    key: '/EighthStandard',
  },
  {
    label:<Link to="/NinthStandard">Class 9<sup>th</sup></Link>,
    key: '/NinthStandard',
  },
];

function DropdownCompo() {
    return (
        <div>
            <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <Link onClick={(e) => e.preventDefault()}>
      <Space>
        Class 4<sup>th</sup>
        <DownOutlined />
      </Space>
    </Link>
  </Dropdown>
            </div>
    )
}

export default DropdownCompo;