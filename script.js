function compute(){
    const startTime = performance.now();
    let i = document.getElementById('time').value;
    let p = 0
    for(k = 0; k < i; k++){
        let x = Math.random(0, 1);
        let y = Math.random(0, 1);
        if(x * x + y * y <= 1){
            p++;
        };
    };
    document.getElementById('result').innerText = 4 * p / i;
    const endTime = performance.now();
    document.getElementById('performance').innerHTML = String(endTime - startTime);
}