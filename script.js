document.getElementById('simulate-btn').addEventListener('click', simulateMemoryAllocation);

function simulateMemoryAllocation() {
    const stack = [];
    const heap = [];

    // Simulate a function call (stack allocation)
    setTimeout(() => {
        stack.push('Function Call: Calculate Sum');
        updateStack(stack);
    }, 500); // 500ms delay

    // Simulate primitive type allocation (stack allocation)
    setTimeout(() => {
        stack.push('Primitive: Number a = 5');
        updateStack(stack);
    }, 1000); // 1000ms delay

    // Simulate object allocation (heap allocation)
    setTimeout(() => {
        const objRef = { name: 'John' }; // This is stored in heap
        heap.push('Object: { name: "John" }');
        updateHeap(heap);
    }, 1500); // 1500ms delay

    // Store the reference to the object in the stack
    setTimeout(() => {
        stack.push('Reference: objRef -> { name: "John" }');
        updateStack(stack);
    }, 2000); // 2000ms delay

    // Simulate end of function call (stack deallocation)
    setTimeout(() => {
        stack.pop();
        updateStack(stack);
    }, 3000); // 3000ms delay

    setTimeout(() => {
        stack.pop();
        updateStack(stack);
    }, 3500); // 3500ms delay

    setTimeout(() => {
        stack.pop();
        updateStack(stack);
    }, 4000); // 4000ms delay

    setTimeout(() => {
        alert('Function execution finished, stack is cleared but heap object remains.');
    }, 4500); // 4500ms delay
}

function updateStack(stack) {
    const stackList = document.getElementById('stack-list');
    stackList.innerHTML = '';
    stack.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        stackList.appendChild(li);
    });
}

function updateHeap(heap) {
    const heapList = document.getElementById('heap-list');
    heapList.innerHTML = '';
    heap.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        heapList.appendChild(li);
    });
}
