function getNumberName(number) {
    number = number - 1;
    var numbers = ['하나', '둘', '셋', '넷', 
    '다섯', '여섯', '일곱', '여덟', '아홉', '열'
    ];

    if (numbers[number]) {
        return numbers[number];
    } else {
        throw 'InvalidNumber';
    }
}

try {
    for (let i = 1; i <= 11; i++) {        
        console.log(getNumberName(i)); // i가 11일 때, number[10]이 호출되고
                                       // 배열의 영역을 넘어감
    }    
} catch (e) {
    console.log('모르겠어요');
}