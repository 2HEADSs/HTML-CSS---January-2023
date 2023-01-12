// Да се напише функция, която получава число n и 
// печата четните степени на 2 ≤ 2n: 20, 22, 24, 26, …, 2n.

function solve(input) {
    let firstNum = Number(input[0])
    let secondNum = Number(input[1])
    let sum = 0;
    let all = '';
    while (firstNum <= secondNum) {
        if ((firstNum % 9) == 0) {
            sum += firstNum;
            all += firstNum + "\n"
        }
        firstNum++;
    }

    console.log(`The sum: ${sum}`);
    console.log(all);

}
solve(["100", "200"])


