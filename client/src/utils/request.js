import qs from 'qs';
import axios from 'axios';
import { getSession } from '@/utils';
import { Toast } from 'vant';

const getToken = () => (getSession('token') == null ? '' : getSession('token'));

const request = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? '/api' : '',
    timeout: 5000
});

//拦截请求
request.interceptors.request.use(config => {
    config.method == 'post' ?
        (config.data = qs.stringify({...config.data })) :
        (config.params = {...config.params });
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    config.headers['authorization'] = getToken();
    return config;
});

//拦截响应
request.interceptors.response.use(
    res => {
        return res.data;
    },
    err => {
        if (err.response.status == 500) {
            Toast.fail('服务器有误');
        } else if (err.response.status == 401) {
            // window.console.log({
            //     // type: responseText[err.response.status].type || 'success',
            //     // message: responseText[err.response.status].message || '',
            //     message1: err.response.data.msg
            // });
            Toast.fail(
                err.response.data.msg !== '' ? err.response.data.msg : '参数有误'
            );
        } else {
            Toast.fail('参数有误');
        }
        return Promise.reject(err);
    }
);

export default request;