module.exports = {

    config: {},

    init: function(config)
    {

        this.config = config;
        return this;

    },

    run: function()
    {

        var express = require('express');
        this.express = express();

        var self = this;

        this.express.listen(this.config.port, function(){
            console.log("Listening on port " + self.config.port);
        });

    },

}
