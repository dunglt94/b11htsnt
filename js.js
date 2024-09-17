let number = +prompt('Nhập N số nguyên tố đầu tiên');
let count = 0;
let N = 2;

function checkNT(N) {
    if (N < 2) {
        return false;
    } else {
        for (let i = 2; i < N; i++) {
            if (N % i == 0) {
                return false;
            }
        }
    }
    return true;
}
while (count < number) {
    if (checkNT(N)) {
        document.write(`${N} <br>`);
        count++;
    }
    N++;
}




