function printList(list) {
    process.stdout.write(list.name + ", ");
    if (list.next) {
        printList(list.next);
    } else {
        process.stdout.write("\n");
    }
}

function makeNode(name, next) {
    return {name, next};
}

function makeList(array) {
    return array.reverse().reduce((list, a) => {
        return makeNode(a, list);
    }, null);
}

function find(list, name) {
    while (list) {
        if (list.name === name) {
            return list;
        }
        list = list.next;
    }
}

const one = makeList(["a", "b", "c", "d", "e", "f", "g", "h", "i"]);
const two = makeList(["x", "y", "z"]);

const D = find(one, "d");
const Z = find(two, "z");

Z.next = D;

function visit(list, fn) {
    while (list) {
        fn(list);
        list = list.next;
    }
}

function overlaps(one, two) {
    let overlap = false;
    visit(one, i => i.visited = true);
    visit(two, i => {
        if (i.visited) {
            overlap = true;
        }
    });
    return overlap;
}


printList(one);
printList(two);
console.log(overlaps(one, two));

