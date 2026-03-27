let  i = 1;
let current = 1;

while(i <= 5){
    let line = "";
    let count = 1;
    while(count <= i){
        line += current + " ";
        count++;
        current++;
    }
    console.log(line);
    i++;
}