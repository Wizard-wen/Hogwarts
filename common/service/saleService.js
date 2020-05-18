/**
 * 销售门店模块接口
 */

import saleRequest from './request/saleRequest.js'

/**
 * 门店工作台
 */
export const saleWorkstation = {
    /**
     * 门店工作台
     * @param id 用户id
     */
    saleWorkBench(id){
        return saleRequest.saleWorkBench(id)
    }
}


/**
 * 订单申请相关接口
*/
export const sale_orderApplyRequest = {
    /**
     * 订单申请
     * @param applyObject 订单申请字段
     */
    applyOrder(applyObject){
        return saleRequest.applyOrder(applyObject)
    },
}

/**
 * 订单相关接口
 */
export const sale_orderRequest = {
    /**
     * 获取订单列表
     */
    getOrderList(type, orderDeafultQueryObject){
        return saleRequest.getOrderList(type, orderDeafultQueryObject)
    },
    /**
     * 获取订单信息
     * @param order_id 订单id
     */
    async getOrder(order_id){
        return saleRequest.getOrder(order_id)
    },
    /**
     * 编辑订单
     * @param obj 编辑表单字段
     */
    editOrder(obj){
        return saleRequest.editOrder(obj)
    },
    /**
     * 取消订单
     */ 
    cancelOrder(obj){
        return saleRequest.cancelOrder(obj)
    },
    /**
     * 完成订单
     */ 
    completeOrder(obj){
        return saleRequest.completeOrder(obj)
    },
    /**
     * 派发订单
     */
    assignOrder(obj){
        return saleRequest.assignOrder(obj)
    },
}

/**
 * 销售门店备选服务人员相关接口
 */
export const sale_matchServiceRequest = {
    /**
     * 添加候选人
     * @param obj 候选人字段信息
     * @param obj.order_id 订单id
     * @param obj.staff_id 服务人员id
     * @param obj.staff_name 服务人员姓名
     */
    createOrderStaff(obj){
        return saleRequest.createOrderStaff(obj)
    },
    /**
     * 删除候选人
     * @param order_staff_id 候选人员信息id
     * @param order_id 订单id
     */
    deleteOrderStaff(deleteOrderStaff){
        return saleRequest.deleteOrderStaff(deleteOrderStaff)
    },
    /**
     * 签约
     */
    sign(obj){
        return saleRequest.sign(obj)
    },
    /**
     * 拒签
     * @param refuseObj
     */
    refuse(refuseObj){
        return saleRequest.refuse(refuseObj)
    },
}

/**
 * 销售门店服务人员管理相关接口
 */
export const sale_staffRequest = {
    /**
     * 销售创建服务人员
     */
    createWorkerBySeller(obj){
        return saleRequest.createWorkerBySeller(obj)
    },
    /**
     * 销售创建服务人员
     */
    changeWorkingStatus(obj){
        return saleRequest.changeWorkingStatus(obj)
    }
}

/**
 * 订单中的合同处理接口
 */
export const sale_orderContractRequest = {
    /**
     * 获取合同详情
     * @param id 合同id
     */
    getContract(id){
        return saleRequest.getContract(id)
    },
    /**
     * 获取合同列表
     * @param type 运营请求还是门店请求
     */
    getContractList(type){
        return saleRequest.getContractList(type)
    },
    /**
     * 终止合同
     * @param paramObj
     */
    stopContract(paramObj){
        return saleRequest.stopContract(paramObj)
    },
    /**
     * 结算工资
     * @param paramObj
     */
    settleWage(paramObj){
        return saleRequest.settleWage(paramObj)
    }
}


export default {
    ...sale_orderApplyRequest,
    ...sale_orderRequest,
    ...sale_matchServiceRequest,
    ...sale_staffRequest,
    ...sale_orderContractRequest,
    ...saleWorkstation,
    /**
     * 日志信息提交
     * @param obj 
     * @param type 
     */
    logCommit(obj, type){
        //签约前、售后日志
        if(type == 'normal'){
            return saleRequest.writeOrderLog(obj)
        } 
    },
}