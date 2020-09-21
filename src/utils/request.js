import axios from 'axios';

const service = axios.create({
    baseURL: 'http://pd-hwssapi.huawenfengze.com/',
//   const apiUrl = 'http://ttmsapi.huawenfengze.com/';//正式地址 
    timeout: 5000
});
service.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
service.defaults.withCredentials = true;
service.interceptors.request.use(
    config => {
        let token = 'Bearer '+sessionStorage.getItem('token');
        //    console.log(token);
        if (token) {
            // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = token;
            
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        console.log(error);
        if(error.response.data.status===401){ 
            this.$router.push('/401');       
        }
        if(error.response.data.status===404){ 
            this.$router.push('/404');       
        }
        if(error.response.data.status===500){ 
            Vue.prototype.$message.error(error.response.data.msg);        
        }
        return Promise.reject();
    }
);

export default service;
