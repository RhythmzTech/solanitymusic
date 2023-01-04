
 module.exports = class Commands {
    /**
     *
     * @param {import('../structures/client')} client
     * @param {CommandOptions} options
     */
    constructor(client, options) {
        /**
         * @type {import('../structures/client')} Extended Client
         */
        this.client = client;
        this.name = options.name;
        this.description = options.description;
    }
};