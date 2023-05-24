import instance from './index';
/**
 * @param {String} method  请求的方法：get、post、delete、put
 * @param {String} url     请求的url:
 * @param {Object} data    请求的参数
 * @param {Object} config  请求的配置
 * @returns {Promise}     返回一个promise对象，其实就相当于axios请求数据的返回值
 */
const axios = async ({ method, url, data, config }) => {
	const _ = method.toLowerCase();
	if (_ == 'post') {
		return instance.post(url, data, { ...config });
	}
	if (_ == 'get') {
		return instance.get(url, {
			params: data,
			...config,
		});
	}
	if (_ == 'delete') {
		return instance.delete(url, {
			params: data,
			...config,
		});
	}
	if (_ == 'put') {
		return instance.put(url, data, { ...config });
	}
	console.error(`未知的method${_}`);
	return false;
};

export default axios;
