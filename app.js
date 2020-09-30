
function getWords(word){
    console.log(word)
}

setTimeout(()=>{
    getWords('first of get words')
},0)

setTimeout(()=>{
    getWords('2nd of get words')
},3000)

setTimeout(()=>{
    getWords('3rd of get words')
},5000)

setTimeout(()=>{
    getWords('4th of get words')
},6000)

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