/**
 * 处理全局的loading
 */


import Vue from 'vue'
import Vuex from 'vuex'
// import store from './index'
// import {queryUpdated_at} from '../../src/pages/operate/staff/interface/query.js'

Vue.use(Vuex)
/**
 * 订单申请状态
 */
export const order_apply_status = [
    {name: '待处理',id: 0, originId: ''},
    {name: '已拒绝',id: 1, originId: 'refuse'},
    {name: '已通过',id: 2, originId: 'pass'},
]

export const operateModule = {
    mutations:{
        setConfigForm(state, configForm){
            state.configForm = configForm
        },
        /** 
        * @param queryKey queryList 键名 
        * @param queryedList 键值，可能是数组，也可能是字符串
        */
        setWorkerList(state,payload){
            // debugger
            state.workerList[payload.queryKey] = payload.queryedList
        },
        /** 
        * @param queryKey queryList 键名 
        * @param queryedList 键值，可能是数组，也可能是字符串
        */
        setReturnList(state,payload){
            state.returnWorkerList[payload.queryKey] = payload.queryedList
        },
        /** 
        * @param queryKey queryList 键名 
        * @param queryedList 键值，可能是数组，也可能是字符串
        */
       setNewList(state,payload){
            state.newWorkerList[payload.queryKey] = payload.queryedList
        },
        /** 
        * @param queryKey queryList 键名 
        * @param queryedList 键值，可能是数组，也可能是字符串
        */
        setErrorList(state,payload){
            state.errorWorkerList[payload.queryKey] = payload.queryedList
        },
        /** 
        * @param queryKey queryList 键名 
        * @param queryedList 键值，可能是数组，也可能是字符串
        */
        setOrderApplyList(state,payload){
            state.orderApplyList[payload.queryKey] = payload.queryedList
        },
    },
    state: {
        order_apply_status,
        configForm: {

        }, //全部劳动者配置项

        // 回访服务人员查询
        returnWorkerList: {
            /*********************表格字段查询******************************/
            get_for: 'return',
            page: 1, //请求页码
            pageNumber: 20,//单页信息数量
            /*********************逻辑字段查询*****************************/

            /*********************业务字段查询*****************************/
            name: '',
            phone: '',

        },
        // 审核新服务人员查询
        newWorkerList: {
            /*********************表格字段查询******************************/
            get_for: 'apply',
            page: 1, //请求页码
            pageNumber: 20,//单页信息数量
            /*********************逻辑字段查询*****************************/
            
            /*********************业务字段查询*****************************/
            name: '',
            phone: '',
        },
        // 异常服务人员查询
        errorWorkerList: {
            /*********************表格字段查询******************************/
            get_for: 'warning',
            page: 1, //请求页码
            pageNumber: 20,//单页信息数量
            /*********************逻辑字段查询*****************************/
            
            /*********************业务字段查询*****************************/
            name: '',
            phone: '',

        },
        /**
         * 全部服务人员查询字段 
         */
        workerList: {
            /*********************表格字段查询******************************/
            get_for: 'total',
            page: 1, //请求页码
            pageNumber: 20,//单页信息数量

            /*********************逻辑字段查询*****************************/
            
            // staff_code: '',//员工号
            // sex: '',//性别
            // create_at: '', //创建时间
            count: 0,//添加回访人员数量

            /*********************业务字段查询*****************************/
            
            // register_at:'',//登记时间
            // updated_at:'',更新时间
            authentication_ids: [],//认证状态
            name: '', //姓名
            // age: null,//年龄--按年龄段搜索
            phone: '',//电话
            return_msg: '',//回访信息
            working_status_ids: [],//接单状态 ------
            remarks: '',//备注（商家情况）
            service_category_ids: [],//职业类型
            service_type_ids: [],//服务类型
            service_crowd_ids: [],//可服务人群
            working_age_ids: [],//工龄
            working_experience: '',//工作经验
            nation_ids: [],//民族
            birthplace: '',//籍贯
            identify: '',//身份证号
            address: '',//地址
            service_region_ids: [],//服务地区
            education_ids: [],//教育程度
            urgent_phone: '',//紧急联系人电话
            bank_card: '',//银行卡号
            course_ids: [],//参加培训
            teacher_comment:'',//教师评语
            paper_category_ids: [],//证书标签
            source_ids: [],//信息来源
            manager_ids: [],//创建人
            updated_type_ids: [],//更新时间
        },
        /**
         * 订单申请查询字段
         */
        orderApplyList: {
            page: 1, //请求页码
            pageNumber: 20,//单页信息数量
            type: '',
        }
    },
}

