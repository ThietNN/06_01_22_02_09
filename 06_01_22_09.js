function check(){
    let x = parseInt(document.getElementById("a").value);
    let y = parseInt(document.getElementById("b").value);
    let z = parseInt(document.getElementById("c").value);

    if(x>0 && y>0 && z>0 && x+y>z && y+z>x && z+x>y){
    document.getElementById("result").innerText="Đây là 3 cạnh của 1 tam giác"
    }
    else{
    document.getElementById("result").innerText="Đây không phải 3 cạnh của 1 tam giác"
    }
}
