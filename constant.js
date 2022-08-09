var Constant = (function(){
    return {
        aggregate:{
            plugins:[
                {
                    "name" : "mysql",
                    "entry": NODE_ENV === 'development' ? "//localhost:1890/module/mysql/" : '/module/mysql/index.html'
                }
            ]
        }
    }
})();