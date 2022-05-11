console.log('**************');

let user = prompt('Хто прийшов?', 'Адмін');

console.log(user);

if (user === "Адмін") {
    console.log('Адмін')

    let password = prompt('Введіть пароль', '123');

    if(password === '123'){
        console.log('ласкаво просимо');
    } else if (password === null || password === "") {
        console.log('Вхід відмінено');
    } else {
        console.log('пароль не правильний');
    }

} else if (user === null || user === "") {
    console.log('Вхід відмінено');
} else {
    console.log('Я вас не знаю');
}