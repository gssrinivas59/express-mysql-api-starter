
const pool = require("../config/db");
const { getIpAddress } = require("../helpers/functions");

module.exports = async (req, res, next) => {
    
    /* const start = Date.now();
    const { method, originalUrl: url, headers, query, body: requestBody, decoded, authUser } = req;
    let responseBody;    
    const originalJson = res.json.bind(res);
    res.json = function (body) {
        responseBody = body;
        return originalJson(body);
    }

    const ip_address = getIpAddress(req);

    const device_type = decoded?.device_type || null;
    const version_name = decoded?.version_name || null;
    const version_code = decoded?.version_code || null;
    const device_model = decoded?.device_model || null;
    const device_id = decoded?.device_id || null;

    const user_id = authUser?.id || null;

    res.on('finish', async () => {

        const isProd = process.env.NODE_ENV === 'production';

        if(isProd) {
            const duration = Date.now() - start;

            let event = null, table_name = null;
            if(url.startsWith('/api/v1/admin')) {
                event = 'admin';
                table_name = 'api_admin_logs';
            } else if(url.startsWith('/api/v1/client')) {
                event = 'client';
                table_name = 'api_client_logs';
            }
            
            if(event == 'client') {
                await pool.query(`INSERT INTO ${table_name} (user_id, method, url, headers, query, request_body, response_body, status_code, response_time, device_type, version_name, version_code, device_id, device_model, ip_address) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,[
                    user_id, 
                    method, 
                    url, 
                    JSON.stringify(headers), 
                    JSON.stringify(query), 
                    JSON.stringify(requestBody), 
                    typeof responseBody === 'object' || Buffer.isBuffer(responseBody) ? JSON.stringify(responseBody) : responseBody, 
                    res.statusCode, 
                    duration, 
                    device_type, 
                    version_name, 
                    version_code, 
                    device_id, 
                    device_model, 
                    ip_address
                ]);
            } else if(event == 'admin') {
                await pool.query(`INSERT INTO ${table_name} (user_id, method, url, headers, query, request_body, response_body, status_code, response_time, ip_address) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
                    user_id, 
                    method, 
                    url, 
                    JSON.stringify(headers), 
                    JSON.stringify(query), 
                    JSON.stringify(requestBody), 
                    typeof responseBody === 'object' || Buffer.isBuffer(responseBody) ? JSON.stringify(responseBody) : responseBody, 
                    res.statusCode, 
                    duration,
                    ip_address
                ])
            }
        }

    }); */
    
    next();
}