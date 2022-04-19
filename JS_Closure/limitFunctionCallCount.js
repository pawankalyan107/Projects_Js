function limitFunctionCallCount(cb=(n, i)=>{

    if (n >= 0){
        return `Function_Call_Count: ${i}`
    }
   
}, n){

    function invoke(){

        let index = 0;
        let callCounts = []
 
        //count increases upto n as limit 
        while(index < n){    

            callCounts.push(cb(n, index)); // invokes call-back and push into array
            index += 1
        }
        return callCounts

    }return invoke;
}


module.exports=limitFunctionCallCount;