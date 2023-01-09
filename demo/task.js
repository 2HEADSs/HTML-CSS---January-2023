/*
Габи иска да започне здравословен начин на живот и си е поставила за цел да върви 10 000 стъпки всеки ден.
 Някои дни обаче е много уморена от работа и ще иска да се прибере преди да постигне целта си.
  Напишете програма, която чете от конзолата по колко стъпки изминава тя всеки път като излиза през деня
   и когато постигне целта си да се изписва "Goal reached! Good job!" 

Ако иска да се прибере преди това, тя ще въведе командата "Going home" и ще въведе стъпките,
 които е извървяла докато се прибира. След което, ако не е успяла да постигне целта си, на конзолата трябва да се изпише:
  "{разликата между стъпките} more steps to reach goal."
  -10000>Goal reached! Good job!
  <10000 {разликата между стъпките} more steps to reach goal."
*/


function solve(input) {
    let targetSteps = 10000;
    let totalSteps = 0;
    let index = 0;
    let command = input[index]

    while (command !== "Going home") {
        totalSteps += Number(command);

        if (totalSteps >= targetSteps) {
            break;
        }
        
        index++;
        command = input[index]
    }

    if (command === "Going home") {
        index++
        command = input[index]
        totalSteps += Number(command)
    }
    if (totalSteps >= targetSteps) {
        console.log("Goal reached! Good job!");
    } else {
        console.log(`${targetSteps - totalSteps} more steps to reach goal.`);
    }

}

solve([5000,
    5000,
]);

solve([1000,
    1500,
    2000,
    6500,
]);

solve([1500,
    3000,
    250,
    1548,
    2000,
    "Going home",
    2000])

solve([1500,
    300,
    2500,
    3000,
    "Going home",
    200]);