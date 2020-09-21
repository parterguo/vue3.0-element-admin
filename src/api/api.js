import request from '../utils/request';
export default {
 //  登录
 postLogin(params) {
    return request.fetchPost('srms/login', params);
    
},
  // 首页信息
  getPortalList(params){
    return request.fetchPost('rdms/portal',params); 
},

// 创建流程图id
postSetmold(params){
    return request.fetchPost('rdms/mold', params);

},
// 绘制流程图
postFlowMold(mold_id,params){
    return request.fetchPost('/rdms/mold/'+mold_id+'/nodes',params);   
},
// 获取流程图信息
getFlowMold(mold_id){
      return request.fetchGet('/rdms/mold/'+mold_id+'/nodes'); 
},
// 获取流程列表
postMoldList(params){
    return request.fetchPost('/rdms/molds',params); 
},
// 获取绘制流程图信息
getFlowData(mold_id){
    return request.fetchGet('/rdms/mold/'+mold_id); 
},
// 新增项目
getProc(params){
    return request.fetchPost('/rdms/proc',params); 
},
// 获取事项详情
getExceTails(exec_id){
    return request.fetchGet('/rdms/exec/'+exec_id);
},
// 处理事项
postExec(exec_id,params){
    return request.fetchPost('/rdms/exec/'+exec_id,params);
},
// 获取事项列表
postExecList(params){
    return request.fetchPost('/rdms/execs',params); 

},
// 项目列表
getprocsList(params){
    return request.fetchPost('rdms/procs',params); 
},

// 获取员工列表
getUserList(params){
    return request.fetchPost('srms/staff/list',params); 
},
// 项目详情 
getProcs(proc_id){
    return request.fetchGet('rdms/proc/'+proc_id); 
},

getFiles(exec_id){
    return request.fetchGet('/rdms/exec/'+exec_id+'/files'); 
}, 
// 上传
postDoc(params){
    return request.fetchPost('rdms/doc',params); 
},
// 项目详情
getdocList(proc_id){
    return request.fetchGet('rdms/proc/'+proc_id+'/doc'); 
},
// 创建项目
postProc(params){
    return request.fetchPost('rdms/proc/echo',params); 
},
// 获取节点列表
postnodes(params){
    return request.fetchPost('rdms/nodes',params); 
},
// 获取阶段列表
poststages(params){
    return request.fetchPost('rdms/stages',params); 
},
// 添加模板节点
postAddnode(params){
    return request.fetchPost('rdms/node',params);     
},
// 批量创建
postnodesbatch(mold_id,params){
    return request.fetchPost('rdms/mold/'+mold_id+'/nodes',params);     
},
// 详情
postNodeTails(node_id){
    return request.fetchGet('rdms/node/'+node_id); 
},
//获取节点操作者列表
postNode_user(params){
return request.fetchPost('rdms/node/node_user',params);     
}





}