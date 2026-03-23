const axios = require('axios');

class ApiTester {
    constructor(baseURL) {
        this.client = axios.create({ baseURL });
    }

    async get(endpoint, headers = {}) {
        return this.client.get(endpoint, { headers });
    }

    async post(endpoint, data, headers = {}) {
        return this.client.post(endpoint, data, { headers });
    }

    async put(endpoint, data, headers = {}) {
        return this.client.put(endpoint, data, { headers });
    }

    async delete(endpoint, headers = {}) {
        return this.client.delete(endpoint, { headers });
    }

    async patch(endpoint, data, headers = {}) {
        return this.client.patch(endpoint, data, { headers });
    }
}

module.exports = ApiTester;