var canvas = document.querySelector('canvas');
canvas.width = 400;
canvas.height = 400;


var ctx = canvas.getContext('2d');


async function qsort(array, a, b) {
    if (typeof(a) === "undefined" && typeof(b) === "undefined") {
        a = 0;
        b = array.length;
    }
    if (Math.abs(b-a) <= 1)
        return;
    let i=a,j=b-1;
    let pivot = array[j];
    let t;
    while (true) {
        while (array[i] < pivot)
            i++;
        while (array[j] > pivot)
            j--;
        if (i >= j)
            break;
        await new Promise(function (resolve) {
            setTimeout(resolve, 1);
        });
        t = array[i];
        array[i] = array[j];
        array[j] = t;
        i++;
        j--;
    }
    qsort(array, a, i);
    qsort(array, j+1, b);
}

async function bubble_sort(array) {
    let p = true, i, t;
    while (p) {
        p = false;
        i=0;
        while (i < array.length-1) {
            if (array[i+1] < array[i]) {
                p = true;
                await new Promise(function (resolve) {
                    setTimeout(resolve, 1);
                });
                t = array[i];
                array[i] = array[i+1];
                array[i+1] = t;
            }
            i++;
        }
    }
}

var array = [], array2 = [];
var N = 100, i;
var dx = canvas.width / N;

for (i=0; i<N; i++) {
    array[i] = Math.random() * 200;
    array2[i] = array[i];
}

qsort(array2);
bubble_sort(array);


function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 200, 400, 1);
    ctx.fillStyle = 'dodgerblue';
    for (i=0; i<N; i++) {
        ctx.fillRect(i*dx, canvas.height - array[i], dx, array[i]);
        ctx.fillRect(i*dx, canvas.height/2 - array2[i], dx, array2[i]);
    }
}

animate();
