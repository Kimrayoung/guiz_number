const num = 30;

const input = document.querySelector('input');
let c = document.querySelector('#count');
let count = 0;

const btn = document.querySelector('button');

btn.addEventListener('click',function(){
    //btn에서 click이라는 이벤트가 btn에 전달될 때 function을 실행
    console.log(input.value);
   
    const l = document.querySelector('#log');
    
     if(num < Number(input.value)){
        l.textContent = 'down';
    }
    else if(num > Number(input.value)){
        l.textContent = 'up';
    }
    else{
        l.textContent = '정답';
    }

    //count++;
    c.textContent = String(++count);
})