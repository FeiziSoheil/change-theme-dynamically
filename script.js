const colorBtns = document.querySelectorAll('.color-box')

colorBtns.forEach(function(colorbtn){
    console.log(colorbtn);

    colorbtn.addEventListener('click',function(event){
        let btnColor = event.target.dataset.color
    
        document.documentElement.style.setProperty('--theme-color',btnColor)
        console.log(document.documentElement.style);
    })
})

