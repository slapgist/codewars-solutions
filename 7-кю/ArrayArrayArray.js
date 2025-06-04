function explode(x){
    if (typeof x[0] === 'number' && typeof x[1] === 'number')
    {
        let sum = x[0] + x[1]
        let result = []
        for (let i = 0; i < sum; i++){
            result.push([...x])
        }
        return result
    }
    else if (typeof x[0] !== 'number' && typeof x[1] !== 'number'){
        return "Void!"
    }
    else {
        let filtered = x.filter(item => typeof item === 'number' )
        let result = []
        for (let i = 0; i < filtered; i++){
            result.push([...x])
        }
        return result
    }
}