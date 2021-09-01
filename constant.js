var Constant = (function(){
    return {
        aggregate:{
            plugins:{
                mysql:{
                    "name" : "mysqlItem",
                    "entry": NODE_ENV === 'development' ? "//localhost:1890/module/mysql" : '/module/mysql/index.html'
                }
            }
        }
    }
})();