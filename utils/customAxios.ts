import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'localhost:3000' : 'localhost:3000',
  timeout: 10000, // ms 단위
  headers: {
    'Content-Type': 'application/json',
  },
});

//baseURL : 통신의 기본이 될 주소다. 만들어진 axios객체를 사용하여 통신을 할 땐 ip나 도메인 같은 baseURL은 생략하고 /login 와 같이 사용하면 된다
//timeout : ms가 기준이며, 해당 시간이 지나도 응답이 없다면 시간초과 에러를 발생시킨다
//headers : 통신에 사용할 헤더를 설정하는 부분이다.

export default instance;
