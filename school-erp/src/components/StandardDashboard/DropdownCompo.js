
import { DownOutlined } from '@ant-design/icons/lib/icons'
import { Dropdown, Space } from "antd";
const items = [
  {
    label: <a href="https://www.antgroup.com">Class 4<sup>th</sup></a>,
    key: '/FourthStandard',
  },
  {
    label: <a href="https://www.aliyun.com">Class 5<sup>th</sup></a>,
    key: '/FifthStandard',
  },
  {
    label: <a href="https://www.aliyun.com">Class 6<sup>th</sup></a>,
    key: '/SixthStandard',
  },
  {
    label: <a href="https://www.antgroup.com">Class 7<sup>th</sup></a>,
    key: '/SeventhStandard',
  },
  {
    label: <a href="https://www.aliyun.com">Class 8<sup>th</sup></a>,
    key: '/EighthStandard',
  },
  {
    label: <a href="https://www.aliyun.com">Class 9<sup>th</sup></a>,
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
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Class 4<sup>th</sup>
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
            </div>
    )
}

export default DropdownCompo;