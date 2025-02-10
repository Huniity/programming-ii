/*

A    B    C
|    |    |
1    |    |
2    |    |
3    |    |
----------- 

Mover 1/2/3 para C usando B

1 A -> C
2 A -> B
1 C -> B
_________

3 A -> C
_________

1 B -> A
2 B -> C
1 A -> C

*/

function hanoi(n, a, b, c){

    if (n === 1) console.log(`A mover disco ${n}: ${a} -> ${c}`)
    }

hanoi(1, 'A', 'B', 'C')
