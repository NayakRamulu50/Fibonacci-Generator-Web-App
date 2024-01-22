

var tl = gsap.timeline()

tl.from("#nav img, #nav h4",{
    y: -100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger:0.5
})

tl.from("#main #container",{
    x:-200,
    opacity: 0,
    stagger: 0.5
})


function generateFibonacci() {
    // Clear previous results
    document.getElementById('result').innerHTML = '';

    // Get the user input
    const numInput = document.getElementById('numInput').value;

    // Validate input
    if (numInput <= 0) {
        alert('Please enter a valid positive number.');
        return;
    }

    // Generate Fibonacci sequence
    const fibonacciSeq = [0, 1];
    for (let i = 2; i < numInput; i++) {
        fibonacciSeq[i] = fibonacciSeq[i - 1] + fibonacciSeq[i - 2];
    }

    // Display the result
    document.getElementById('result').innerHTML = `Fibonacci Sequence: ${fibonacciSeq.join(',  ')}`;
}
