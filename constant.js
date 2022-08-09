var Constant = (function(){
    return {
        aggregate:{
            plugins:[
                {
                    "name" : "mysqlItem",
                    "entry": NODE_ENV === 'development' ? "//localhost:1890/module/mysql/" : '/module/open-document/mysql.html'
                }
            ]
        }
    }
})();