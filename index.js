let option = document.querySelector('#option')
option.addEventListener('change', function(){
    if(option.value == 'cs'){
        location.href = 'cs.html'
    
    }
    else if(option.value == 'bs'){
        location.href = 'bs.html'
    }
})