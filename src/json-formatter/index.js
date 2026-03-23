const YAML = require('yaml');

/**
 * Formats JSON data with indentation.
 * @param {Object} jsonData - The JSON data to format.
 * @returns {string} The formatted JSON string.
 */
function formatJSON(jsonData) {
    return JSON.stringify(jsonData, null, 4);
}

/**
 * Validates a JSON string.
 * @param {string} jsonString - The JSON string to validate.
 * @returns {boolean} True if valid, false otherwise.
 */
function validateJSON(jsonString) {
    try {
        JSON.parse(jsonString);
        return true;
    } catch (e) {
        return false;
    }
}

/**
 * Minifies a JSON string.
 * @param {string} jsonString - The JSON string to minify.
 * @returns {string} The minified JSON string.
 */
function minifyJSON(jsonString) {
    return JSON.stringify(JSON.parse(jsonString));
}

/**
 * Converts JSON to YAML format.
 * @param {Object} jsonData - The JSON data to convert.
 * @returns {string} The YAML representation of the JSON data.
 */
function jsonToYAML(jsonData) {
    return YAML.stringify(jsonData);
}

/**
 * Converts YAML to JSON format.
 * @param {string} yamlString - The YAML string to convert.
 * @returns {Object} The JSON representation of the YAML data.
 */
function yamlToJSON(yamlString) {
    return YAML.parse(yamlString);
}

module.exports = { formatJSON, validateJSON, minifyJSON, jsonToYAML, yamlToJSON };