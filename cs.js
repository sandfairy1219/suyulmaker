function generateSequence() {
    const firstTerm = parseInt(document.getElementById('first-term').value);
    const commonDifference = parseInt(document.getElementById('common-difference').value);
    const length = parseInt(document.getElementById('length').value);

    if (isNaN(firstTerm) || isNaN(commonDifference) || isNaN(length) || length <= 0) {
        alert('모든 값을 올바르게 입력해주세요.');
        return;
    }

    let sequence = [];
    for (let i = 0; i < length; i++) {
        sequence.push(firstTerm + i * commonDifference);
    }

    document.getElementById('result').innerText = `등차수열: ${sequence.join(', ')}`;

}
let home = document.querySelector('#home')
home.addEventListener('click', function(){
    location.href = 'index.html'
})