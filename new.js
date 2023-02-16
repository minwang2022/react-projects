// let date = "02-13-2023"
// const newDate = new Date(date)
// const year = newDate.getFullYear()
// const month = newDate.getMonth() + 1
// const day = newDate.getDate()
// console.log(newDate)
// console.log(year)
// console.log(month)
// console.log(day)


a = ['ab', 'cd', 'ef']
b = ['af', 'ee', 'ef']

const twoString = (a, b) =>{

    for (let i = 0; i < a.length; i++) {
        word = a[i]
        word1 = b[i]
        console.log(word, word1)
        let visited = new Set()
        for(let j = 0 ;j< word.length; j++){
            aChar = word[j]

            visited.add(aChar)
        }
        for (let j = 0 ;j< word1.length; j++){
            bChar = word1[j]
            if(visited.has(bChar)){
                console.log("YES")
                break
            }
            if(j === word1.length -1){
                console.log("NO")
            }
        }
    }
}

console.log(twoString(a,b))