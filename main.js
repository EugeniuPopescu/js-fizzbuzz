// recupero il contenitore
const container = document.getElementById('container');

// ciclo da 1 a 100
for (let i = 1; i <= 100; i++) {
    
    // creo un elemento div
    let myDiv = document.createElement('div');

    // controllo prima le due condicioni poi le singole (3*5=15)
    // inserisco nel div creato da me il contenuto
    if (i % 15 == 0) {
        myDiv.classList.add('square', 'fizzbuzz');
        myDiv.innerHTML = 'FizzBuzz';

    } else if (i % 3 == 0) {
        myDiv.classList.add('square', 'fizz');
        myDiv.innerHTML = 'Fizz';
        

    } else if (i % 5 == 0) {
        myDiv.classList.add('square', 'buzz');
        myDiv.innerHTML = 'Buzz';

    } else {
        myDiv.classList.add('square');
        myDiv.innerHTML = i;
    }

    container.append(myDiv);
}