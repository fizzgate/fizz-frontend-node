import request from '@/router/axios';
import { API_PROXY } from '@/api/config';

export const getPackageList = ( params) => {
  return request({
    url: `${API_PROXY}/invoker/list`,
    method: 'get',
    params: {
      ...params
    }
  })
};


export const getClasses = ( params) => {
  return request({
    url: `${API_PROXY}/invoker/classes`,
    method: 'get',
    params: {
      ...params
    }
  })
};


export const getMethods = (params) => {
  return request({
    url: `${API_PROXY}/invoker/methods`,
    method: 'get',
    params: {
      ...params
    }
  })
};

