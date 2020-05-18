

// 订单申请类别
export const order_apply_typeList = [
    {id: 1,color: '#E6A23C',name: '待处理',},
    {id: 2,color: '#f56c6c',name: '已拒绝',},
    {id: 3,color: '#67c23a',name: '已通过',}
]

// 订单申请类别
export enum orderApplyType{
    storeApplication = 'apply',
    clientRequire = 'require',
}

// 改变订单申请状态表单
export interface dealOrderApplyForm{
    id: string;
    type:string;
    version: string;
}