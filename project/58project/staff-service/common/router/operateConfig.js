/**
 * 运营中心模块路由
 */


/**
 * 运营---工作台
 */
import operateWorkStation from '@/pages/operateWorkStation.vue'

/**
 * 运营---订单运营
 */
import operateOrderList from '@/pages/operateOrder/orderList.vue'
import operateOrderConfig from '@/pages/operateOrder/orderConfig.vue'
import operateOrderApplyList from '@/pages/operateOrder/orderApplyList.vue'
import operateOrderApplyItem from '@/pages/operateOrder/orderApplyItem.vue'
import operateCreateOrderPage from '@/pages/operateOrder/createOrderPage.vue'
import clientRequireList from '@/pages/operateOrder/clientRequireList.vue'
import clientRequireItem from '@/pages/operateOrder/clientRequireItem.vue'

/**
 * 运营---合同管理
 */
import operateVoidContractList from '@/pages/operateContract/voidContractList.vue'
import operateContractList from '@/pages/operateContract/contractList.vue'
import operateContractItem from '@/pages/operateContract/contractItem.vue'

/**
 * 运营—--客户端订单
 */

 
/**
 * 运营 --- 小程序运营
 */
import productList from '@/pages/operateCustom/productList.vue'
import resourceList from '@/pages/operateCustom/resourceList.vue'
import videoList from '@/pages/operateCustom/videoList.vue'
import workerAdList from '@/pages/operateCustom/workerAdList.vue'
import customAdList from '@/pages/operateCustom/customAdList.vue'
import adPositionItem from '@/pages/operateCustom/adPositionItem.vue'
import adPictureItem from '@/pages/operateCustom/adPictureItem.vue'
import resourceVideoItem from '@/pages/operateCustom/resourceVideoItem.vue'
/**
 * 运营---服务人员管理
 */
import workerList from '@/pages/operateWorker/workerList.vue'
import workerFormConfig from '@/pages/operateWorker/workerFormConfig.vue'
import workerItem from '@/pages/operateWorker/workerItem.vue'
import workerItemShow from '@/pages/operateWorker/workerItemShow.vue'
import newWorkerList from '@/pages/operateWorker/newWorkerList.vue'
import errorWorkerList from '@/pages/operateWorker/errorWorkerList.vue'
import returnWorkerList from '@/pages/operateWorker/returnWorkerList.vue'
import workerList1 from '@/pages/operateWorker/workerList1.vue'
/**
 * 客户管理
 */ 
import clientList from '@/pages/operateClient/clientList.vue'
import clientItem from '@/pages/operateClient/clientItem.vue'


export const operateConfigModule = [
    {
        path: '/operate/operateWorkStation',
        name: 'operateWorkStation',
        component: operateWorkStation,
    },
    {
        path: '/operate/operateOrderList',
        name: 'operateOrderList',
        component: operateOrderList,
    },
    {
        path: '/operate/operateCreateOrderPage',
        name: 'operateCreateOrderPage',
        component: operateCreateOrderPage,
    },
    {
        path: '/operate/operateOrderConfig',
        name: 'operateOrderConfig',
        component: operateOrderConfig,
    },
    {
        path: '/operate/operateOrderApplyList',
        name: 'operateOrderApplyList',
        component: operateOrderApplyList,
    },
    {
        path: '/operate/operateOrderApplyItem',
        name: 'operateOrderApplyItem',
        component: operateOrderApplyItem,
    },
    {
        path: '/operate/operateVoidContractList',
        name: 'operateVoidContractList',
        component: operateVoidContractList,
    },
    {
        path: '/operate/operateContractList',
        name: 'operateContractList',
        component: operateContractList,
    },
    {
        path: '/operate/operateContractItem',
        name: 'operateContractItem',
        component: operateContractItem,
    },
    {
        path: '/operate/productList',
        name: 'productList',
        component: productList,
    },
    {
        path: '/operate/resourceList',
        name: 'resourceList',
        component: resourceList,
    },

    {
        path: '/operate/videoList',
        name: 'videoList',
        component: videoList,
    },
    {
        path: '/operate/workerAdList',
        name: 'workerAdList',
        component: workerAdList,
    },
    {
        path: '/operate/customAdList',
        name: 'customAdList',
        component: customAdList,
    },
    {
        path: '/operate/adPositionItem',
        name: 'adPositionItem',
        component: adPositionItem,
    },
    {
        path: '/operate/adPictureItem',
        name: 'adPictureItem',
        component: adPictureItem,
    },
    {
        path: '/operate/resourceVideoItem',
        name: 'resourceVideoItem',
        component: resourceVideoItem,
    },
    {
        path: '/operate/clientRequireList',
        name: 'clientRequireList',
        component: clientRequireList,
    },
    {
        path: '/operate/clientRequireItem',
        name: 'clientRequireItem',
        component: clientRequireItem,
    },
    {
        path: '/worker/workerList',
        name: 'workerList',
        component: workerList,
    },
    {
        path: '/worker/workerList1',
        name: 'workerList1',
        component: workerList1,
    },
    {
        path: '/worker/errorWorkerList',
        name: 'errorWorkerList',
        component: errorWorkerList,
    },
    {
        path: '/worker/newWorkerList',
        name: 'newWorkerList',
        component: newWorkerList,
    },
    {
        path: '/worker/workerItem',
        name: 'workerItem',
        component: workerItem,
    },
    {
        path: '/worker/workerItemShow',
        name: 'workerItemShow',
        component: workerItemShow,
    },
    {
        path: '/worker/workerFormConfig',
        name: 'workerFormConfig',
        component: workerFormConfig,
    },
    {
        path: '/worker/returnWorkerList',
        name: 'returnWorkerList',
        component: returnWorkerList,
    },
    {
        path: '/operate/clientList',
        name: 'clientList',
        component: clientList,
    },
    {
        path: '/operate/clientItem',
        name: 'clientItem',
        component: clientItem,
    },
]