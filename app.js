
(function getWords(first,second,third,fourth){
    setTimeout(()=>{
        console.log(first)
        setTimeout(()=>{
            console.log(second)
            setTimeout(()=>{
                console.log(third)
                setTimeout(()=>{
                    console.log(fourth)
                },1000)
            },2000)
        },3000)
    },0)
})('I','am','happy','now')







function done(){
    console.log("Job's done!")
}

function countdown(num, callback){
    if (num>0){
        console.log(num)
        setTimeout(()=>{
            countdown(num-1,callback)
        },200)
    } else {
        callback()
    }
}

countdown(10,done)

let lunchTime = true

function orderMeSomeFood(){
    return new Promise((resolve,reject)=>{
        if (lunchTime===3){
            resolve({
                lunch: 'sushi',
                drink: 'milk',
            })
        } else{
            let message = new Error('failed badly, a truly pitiful performance')
            reject(message)
        }
    })
}

orderMeSomeFood()
.then((a)=>{
    console.log(a)
}).catch((e)=>{
    console.log(e)
})