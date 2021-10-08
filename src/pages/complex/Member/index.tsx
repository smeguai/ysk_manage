import { Button, Card, Input, Space, Table } from 'antd';

const columnsData = [
  {
    title: '会员类型',
    dataIndex: 'type',
  },
  {
    title: '名称',
    dataIndex: 'name',
  },
  {
    title: '电话',
    dataIndex: 'phone',
  },
  {
    title: '结余',
    dataIndex: 'balance',
  },
  {
    title: '积分',
    dataIndex: 'integral',
  },
  {
    title: '操作',
    render: () => <a>编辑</a>,
  },
];

const data = [
  {
    type: 1,
    name: 'xxxccc',
    phone: '13800000000',
    balance: '19.02',
    integral: 11,
    oid: 1,
  },
  {
    type: 2,
    name: 'zc',
    phone: '13800001111',
    balance: '14.22',
    integral: 3,
    oid: 12,
  },
  {
    type: 3,
    name: '封装',
    phone: '13800034120',
    balance: '54.02',
    integral: 54,
    oid: 13,
  },
  {
    type: 4,
    name: '挂壁',
    phone: '13803321112',
    balance: '46.11',
    integral: 33,
    oid: 14,
  },
];

const Member = () => {
  return (
    <Card>
      <Space style={{ display: 'flex', justifyContent: 'flex-end', margin: '10px 0' }}>
        <Input style={{ width: '200px' }} placeholder="输入手机号或名字" />
        <Button type="primary">搜索</Button>
      </Space>
      <Table columns={columnsData} dataSource={data} rowKey={(record) => record.oid} />
    </Card>
  );
};

export default Member;
