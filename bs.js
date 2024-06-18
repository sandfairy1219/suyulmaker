function generateGeometricSequence() {
    const firstTerm = parseFloat(document.getElementById('first-term').value);
    const commonRatio = parseFloat(document.getElementById('common-ratio').value);
    const length = parseInt(document.getElementById('length').value);

    if (isNaN(firstTerm) || isNaN(commonRatio) || isNaN(length) || length <= 0) {
        alert('모든 값을 올바르게 입력해주세요.');
        return;
    }

    let sequence = [];
    for (let i = 0; i < length; i++) {
        sequence.push(firstTerm * Math.pow(commonRatio, i));
    }

    document.getElementById('result').innerText = `등비수열: ${sequence.join(', ')}`;
}
let home = document.querySelector('#home')
home.addEventListener('click', function(){
    location.href = 'index.html'
})