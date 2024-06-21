
interface Response<T = any> {
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, string>;

}

function createUrlWithParams(url: string, params?: Record<string, any>): string {
    const urlObj = new URL(url);
    if (params) {
        Object.keys(params).forEach(key => {
            const value = params[key];
            if (Array.isArray(value)) {
                value.forEach(item => urlObj.searchParams.append(`${key}[]`, item));
            } else {
                urlObj.searchParams.append(key, value);
            }
        });
    }
    return urlObj.toString();
}

async function axiosLikeRequest({
    method,
    url,
    baseURL,
    headers = {},
    params = {},
    data = null,
    ...restOptions
}: {
    method: string;
    url: string;
    baseURL?: string;
    params?: any;
    data?: any;
    [key: string]: any;
}): Promise<any> {
    const fetchOptions: RequestInit = {
        method: method.toUpperCase(),
        headers: headers as HeadersInit,
        ...restOptions
    };

    if (data) {
        fetchOptions.body = JSON.stringify(data);
        fetchOptions.headers = {
            ...fetchOptions.headers,
            'Content-Type': 'application/json'
        };
    }

    const finalUrl = baseURL ? baseURL + url : url;
    const finalUrlWithParams = params ? createUrlWithParams(finalUrl, params) : finalUrl;

    try {
        const response = await fetch(finalUrlWithParams, fetchOptions);
        const responseData = await response.json();

        if (!response.ok) {
            throw {
                response: {
                    status: response.status,
                    statusText: response.statusText,
                    data: responseData
                }
            };
        }

        return {
            data: responseData,
            status: response.status,
            statusText: response.statusText,
            headers: response.headers
        };
    } catch (error) {
        if (error) {
            return error;
        } else {
            return {
                message: error,
                response: null
            };
        }
    }
}


export const makeRequest = (baseURL?: string, optionsa?: RequestInit) => ({
    get: async <T = any>(url: string, options: RequestInit & { params?: any } = {},): Promise<Response<T>> => {
        const response = await axiosLikeRequest({ method: 'GET', url, baseURL, ...options, ...optionsa });
        return response as Response<T>;
    },
    post: async <T = any>(url: string, data?: any, options: RequestInit = {}): Promise<Response<T>> => {
        const response = await axiosLikeRequest({ method: 'POST', url, baseURL, data, ...options });
        return response as Response<T>;
    },
    put: async <T = any>(url: string, data?: any, options: RequestInit = {}): Promise<Response<T>> => {
        const response = await axiosLikeRequest({ method: 'PUT', url, baseURL, data, ...options });
        return response as Response<T>;
    },
    delete: async <T = any>(url: string, options: RequestInit = {}): Promise<Response<T>> => {
        const response = await axiosLikeRequest({ method: 'DELETE', url, baseURL, ...options });
        return response as Response<T>;
    },
    patch: async <T = any>(url: string, data?: any, options: RequestInit = {}): Promise<Response<T>> => {
        const response = await axiosLikeRequest({ method: 'PATCH', url, baseURL, data, ...options });
        return response as Response<T>;
    }
});
