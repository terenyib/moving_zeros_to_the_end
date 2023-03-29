# Moving Zeros To The End

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Backlog

### US-1
As a zero mover
I want to move the only one zero to the end of the array
So that my 1 item array will have a zero at the end

#### UAT-1.1
Given the array [0]
When I move zeros
Then the result is [0]

#### UAT-1.2
Given the array [1]
When I move zeros
Then the result is [1]

#### UAT-1.3
Given the array [false]
When I move zeros
Then the result is [false]

### US-2
As a zero mover
I want to move the zeros to the end of the array
So that my 2 item array will have a zero at the end

#### UAT-2.1
Given the array [0, 1]
When I move zeros
Then the result is [1, 0]

#### UAT-2.2
Given the array [1, 2]
When I move zeros
Then the result is [1, 2]

#### UAT-2.3
Given the array [0, 0]
When I move zeros
Then the result is [0, 0]

### US-3
As a zero mover
I want to move the zeros to the end of the array
So that my 3 item array will have a zero at the end

#### UAT-3.1
Given the array [0, 0, 1]
When I move zeros
Then the result is [1, 0, 0]

#### UAT-3.2
Given the array [0, 2, 0]
When I move zeros
Then the result is [2, 0, 0]

#### UAT-3.3
Given the array [0, 3, 1]
When I move zeros
Then the result is [3, 1, 0]