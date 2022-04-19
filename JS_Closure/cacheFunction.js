

function cacheFunction(cb, arg){
// cache storage
    let cache={
        1 : cb,
        2 : cb,
    };
    
    function invoke(arg){
        
        //checking in cache storage and adds 
        if (cache[`${arg}`] === undefined){
            cache[`${arg}`] = cb;
            
            return cache[`${arg}`];
        }else{
            return `invoked from cache `+cache[`${arg}`] //returns from cache
        }    
    }return invoke(arg);
}

module.exports=cacheFunction;

