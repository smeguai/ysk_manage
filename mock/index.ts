//  模拟延迟
const awaitTime = (timer: number = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, timer * 1000);
  });
};
//  菜单
export const menus = [
  {
    name: '首页',
    path: '/',
  },
  {
    key: '0',
    name: '综合',
    icon: 'icon-all',
    children: [
      {
        name: '会员管理',
        path: '/complex/member',
        key: '01',
      },
      {
        name: '云供应链',
        path: 'WH_Supply/Supply',
        key: '02',
      },
      {
        name: '工程管理',
        path: 'ProManage/index',
        key: '03',
      },
    ],
  },
  {
    key: '1',
    name: '客房',
    icon: '',
    children: [
      {
        name: '酒店报表',
        path: 'RP_Hotel/RP_Hotel',
        key: '11',
      },
      {
        name: '酒店BOSS决策',
        path: 'RP_HotelBoss/RP_HotelBoss',
        key: '12',
      },

      {
        name: '团队管理',
        path: 'guest/team',
        key: '13',
      },
      {
        name: '营业收入日报表',
        path: 'RP_Hotel/NewHotel',
        key: '14',
      },
      {
        name: '投资管家',
        path: 'TZGJ/TZGJ',
        key: '15',
      },
      {
        name: '房态',
        path: 'guest/room?tabcur=0',
        key: '16',
      },
      {
        name: '报吧',
        path: 'guest/chamberInfo',
        key: '17',
      },
      {
        name: '预订',
        path: 'guest/room?tabcur=2',
        key: '18',
      },
      {
        name: '远期房态',
        path: 'guest/room?tabcur=1',
        key: '19',
      },
      {
        name: '客人管理',
        path: 'guest/people',
        key: '191',
      },
      {
        name: '账号申请',
        path: 'RP_Application/RP_Application',
        key: '192',
      },

      {
        name: '调整房价',
        path: 'RM_PriceAdjust/RoomPrice/RoomPrice',
        key: '193',
      },
      {
        name: '审批',
        path: 'R_SH/R_SH',
        key: '194',
      },
    ],
  },
  {
    key: '2',
    name: '餐饮',
    icon: '',
    children: [
      {
        name: '点单收银',
        path: 'CA_fastOrder/CA_fastOrder',
        key: '21',
      },
      {
        name: '估清管理',
        path: 'CA_clearly/clearly',
        key: '22',
      },
      {
        name: '收入日报',
        path: 'RPRestDataanalysis/NewRest',
        key: '23',
      },
      {
        name: '预订',
        path: 'CA_Book/book',
        key: '24',
      },
      {
        name: '数据分析',
        path: 'RPRestDataanalysis/RestDataanalysis',
        key: '25',
      },
      {
        name: 'BOSS决策',
        path: 'RPRestBoos/RPRestBoos',
        key: '26',
      },
      {
        name: '商品管理',
        path: 'CA_goods/goodsManager',
        key: '27',
      },
      {
        name: '房态',
        path: 'CA_FacilityCode/Select',
        key: '28',
      },
      {
        name: '店铺管理',
        path: 'CA_store/store',
        key: '29',
      },
    ],
  },
  {
    key: '3',
    name: '足浴',
    icon: '',
    children: [
      {
        name: '预约管理',
        path: 'RE_Appointment/Appointment',
        key: '31',
      },
      {
        name: '沐足前台',
        path: 'RE_footBath/RE_selectService/Select',
        key: '32',
      },
      {
        name: '技师管理',
        path: 'RE_footBath/RE_Supervise/SuperviseSelect',
        key: '33',
      },
      {
        name: '个人业绩',
        path: 'Performance/Performance',
        key: '34',
      },
      {
        name: '数据分析',
        path: 'RPFootDataanalysis/FootDataanalysis',
        key: '35',
      },
      {
        name: '待排任务',
        path: 'RE_footBath/waittask/waittask',
        key: '36',
      },
      {
        name: 'BOSS决策',
        path: 'RPFootBoss/RPFootBoss',
        key: '37',
      },
      {
        name: '收入日报',
        path: 'RPFootDataanalysis/NewFoot',
        key: '38',
      },
      {
        name: '考勤打卡',
        path: 'RE_footBath/RE_JScard/RE_JScard',
        key: '39',
      },
    ],
  },
];
const getMenus = async (req: any, res: any) => {
  await awaitTime(2);
  res.send({
    code: 200,
    data: menus,
  });
};
//  登录
const login = async (req: any, res: any) => {
  await awaitTime(1.4);
  const { username, password } = req.body;
  if (username === 'smeguai' && password === 'xxxccc') {
    return res.send({
      code: 200,
      data: {
        username,
        userid: 'YSK226691',
        token: '531EA45D2A13F09457DF0574A9A5A192',
        rule: 1,
      },
    });
  }
  res.send({
    code: 401,
    msg: '账号或密码错误',
  });
};

export default {
  'post /api/login': login,
  'get /api/menus': getMenus,
};
