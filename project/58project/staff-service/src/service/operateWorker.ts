import {
    apiRequestWorker,
    apiRequestFormConfig,
    apiRequestService,
} from '@/request/index'

import {workerItem} from '@/pages/operateWorker/workerItem/IworkerItem'

import {workerFormConfig} from '@/pages/operateWorker/workerFormConfig/IworkerFormConfig'

import {operateSearchWorkerItem} from '@/pages/operateWorker/workerList/IworkerList'

export const operateWorkerService = {
    /**
     * 请求列表数据
     */
    getTableList(type:string, queryObject:operateSearchWorkerItem):Promise<any>{

        return  Promise.all([
            apiRequestFormConfig.getWorkerFormConfig(type), //获取表单配置字段
            apiRequestWorker.getStaffList(queryObject), //获取列表数据
            apiRequestService.getServiceTree() //服务商品树形
        ]).then(data =>{

            return {
                workerConfigForm: {
                    ...data[0].data,
                },
                pagination: {
                    currentPage: data[1].data.current_page, //当前页码
                    total: data[1].data.total, //列表总条数
                    pageNumber: data[1].data.per_page //每页显示数
                },
                workerTable: data[1].data.data
            }
        })
    },
    /**
     * 
     * @param type 查询类型  edit 使用 config 编辑
     */
    async getWorkerFormConfig(type:string):Promise<any>{
        return apiRequestFormConfig.getWorkerFormConfig(type)
    },
    /**
     * 获取服务人员信息
     * @param id 
     * @param workerFormConfig 
     */
    async getWorker(id:string, workerFormConfig:workerFormConfig):Promise<any>{
        let skillConfig = workerFormConfig.skill
        return apiRequestWorker.getStaff(id).then(data =>{
            if(data.code == "0"){

                var workerForm = data.data
                workerForm.skill = workerForm.skill.map((item:number) =>{
                    return setTreeArray(item,skillConfig)
                })

                return workerForm
            }
        })
    },
    /**
     * 包装级联选择器的数据
     * @param arr 级联选择器原始数据
     */
    sendCascanderData(originArr:any){
        if(originArr.length == 0){
            return []
        }
        if(Array.isArray(originArr[0])){
            return originArr.reduce((arr:any,item:any) => {
                if(item.length == 1){
                    return [...arr,item[0]]
                } else {
                    let length = item.length -1
                    return [...arr,item[length]]
                }   
            },[])
        } else {
            return [originArr[originArr.length-1]]
        }
    },
    /**
     * 编辑服务人员信息
     * @param workerForm 
     */
    async editWorker(workerForm:workerItem):Promise<any>{
        return apiRequestWorker.editStaff(workerForm)
    },
}
/**
 * 将叶节点数组，转换成级联选择器的数据格式
 * @param key 当前key
 * @param tree  级联选择器渲染的树形数组
 */
function setTreeArray(key:number,tree:Array<any>){
    var tmpParentIdList:any = [];
    function getTreeInitModel(key:number,tree:Array<any>){
        for (var i = 0; i < tree.length; i++) {
            if (tree[i].id == key) {
                tmpParentIdList.push(tree[i].id);
                return true;
            }else{
                if (tree[i].children && tree[i].children.length > 0) {
                    if (getTreeInitModel(key,tree[i].children)) {
                        tmpParentIdList.push(tree[i].id);
                        return true;
                    }
                } 
            }
        }
        return false;
    }
    getTreeInitModel(key,tree);
    return tmpParentIdList.reverse()
}





