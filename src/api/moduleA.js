import axios from '@/http/axios';

// 分页查询商品列表
export const queryGoodsList = (data) => {
    return axios({
        url: '/farm_cms/insComm/pageList',
        data,
        method: 'get',
    });
};

// 文件上传
// export const fileUpload = (data) => {
//     return axios({
//         url: '/farm_cms/fileUpload/uploadfileToQuanzi',
//         data,
//         method: 'post',
//         config: {
//             timeout: 30000,
//             headers: {
//                 'content-type': 'multipart/form-data',
//             },
//         },
//     });
// };
