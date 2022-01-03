import axios from "axios";
import { notification } from "antd";
import { availableLanguages } from "../Localization";
import CacheService from "./Service/CacheService";
import UrlHelper from "./Helper/UrlHelper";
import { LOGIN_PAGE } from "../Routing/RouteNames";
import FlashMessageNotifier from "./Helper/Flash/FlashMessageNotifier";
import Notification from "./Helper/Flash/Messages/Notification";

const axiosInstance = axios.create({
    baseURL: process.env.API_ROOT,
});


class BaseService {
    static token = null;

    static DEFAULT_TTL = 86400; // one day

    static REMEMBER_ME_TTL = 30 * 86400; // 30 days

    constructor() {
        this.cancelTokenSource = axios.CancelToken.source();

        this.cacheService = CacheService.getInstance();

        if (BaseService.token === null) {
            BaseService.token = this.cacheService.getItem("token", null);
        }
    }

    cancelAllRequests() {
        this.cancelTokenSource.cancel();
    }

    setToken(token, rememberMe = false) {
        BaseService.token = token;

        this.cacheService.setItem(
            "token",
            token,
            rememberMe ? BaseService.REMEMBER_ME_TTL : BaseService.DEFAULT_TTL
        );
    }

    clearToken() {
        BaseService.token = null;

        this.cacheService.clearItem("token");
    }

    get(url, config = {}) {
        return axiosInstance.get(url, this.getFullConfig(config));
    }

    delete(url, config = {}) {
        return axiosInstance.delete(url, this.getFullConfig(config));
    }

    head(url, config = {}) {
        return axiosInstance.head(url, this.getFullConfig(config));
    }

    options(url, config = {}) {
        return axiosInstance.options(url, this.getFullConfig(config));
    }

    post(url, data, config = {}) {
        return axiosInstance.post(url, data, this.getFullConfig(config));
    }

    put(url, data, config = {}) {
        return axiosInstance.put(url, data, this.getFullConfig(config));
    }

    getFullConfig(config = {}) {
        const baseConfig = JSON.parse(JSON.stringify(config));

        if (BaseService.token !== null) {
            baseConfig.headers = baseConfig.headers || {};
            baseConfig.headers.Authorization = `Bearer ${BaseService.token}`;
        }

        baseConfig.cancelToken = this.cancelTokenSource.token;

        return baseConfig;
    }
}

export default BaseService;
