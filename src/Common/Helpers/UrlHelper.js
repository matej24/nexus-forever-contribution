class UrlHelper {
    static instance = null;

    location = null;

    history = null;

    static getInstance() {
        if (UrlHelper.instance === null) {
            UrlHelper.instance = new UrlHelper();
        }

        return UrlHelper.instance;
    }

    goToUrl(url, withRedirect = true, state = {}, search = "") {
        if (withRedirect && this.history) {
            this.history.push(url);
            return;
        }

        this.history.push({ pathname: url, search, state });
    }

    getQueryParam(key, defaultValue = null) {
        const urlSearchParams = new URLSearchParams(this.location.search);

        if (!urlSearchParams.has(key)) {
            return defaultValue;
        }

        return urlSearchParams.get(key);
    }

    setLocation(location) {
        this.location = location;
    }

    setHistory(history) {
        this.history = history;
    }
}

export default UrlHelper;
