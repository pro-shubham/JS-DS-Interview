const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const {
  anagrams,
  arrayChunk,
  capitalize,
  countChar,
  curning,
  evenOdd,
  factorial,
  countVowels,
  fizbuzz,
  maxChar,
  matrix,
  mergeIntervals,
  paildrome,
  isPrime,
  pyramid,
  reverse,
  playRPS,
  sort,
  printSteps,
  Node,
  validateBST,
  Queue,
  weave,
  Tree,
  TreeNode,
  LinkedList,
  isCircularLinkList,
  levelWidth,
  stackQueue,
  fromLast,
} = require("./exercises");

const exampleList = [
  "Anagrams",
  "Array Chunking",
  "String Capitalize",
  "Character Count",
  "Curning Function",
  "Even and Odd Functions",
  "Factorial",
  "Count Vowels",
  "FizzBuzz",
  "Max Character",
  "Spherical Matrix",
  "Merge Intervals",
  "Palindrome",
  "Is Prime Number",
  "Pyramid Pattern",
  "Reverse String and Integer",
  "Rock-Paper-Scissors",
  "Sorting of Array",
  "Print Steps",
  "Insert and contain in the binary search tree.",
  "Queue of List",
  "Weave to queue list",
  "Breadth-First Traversal",
  "Depth-First Traversal",
  "Is BST is Validate",
  "Linked List Size",
  "Is Circular Linked List",
  "Level Widths",
  "The nth node from the end",
  "Stack Queue",
];

function displayMenu() {
  console.log("Choose an option:");
  console.log("0 : Exit");
  for (let i = 0; i < exampleList.length; i++) {
    const count = i + 1;
    console.log(`${count} : ${exampleList[i]}`);
  }
}
function getUserChoice() {
  return new Promise((resolve, reject) => {
    displayMenu(); // Display the menu first
    rl.question('Enter the number of your choice: ', (choice) => {
      const choiceNumber = parseInt(choice);
      if (isNaN(choiceNumber) || choiceNumber < 0 || choiceNumber >= exampleList.length+1) {
        console.log('Invalid choice. Please enter a valid option.');
        rl.close();
        getUserChoice().then(resolve); // Recursively ask for input
      } else {
        rl.close();
        resolve(choiceNumber);
      }
    });
  });
}

// Example usage
getUserChoice().then((choice) => {
  console.log(`You chose option ${choice}: ${exampleList[choice - 1]}`);
  executeExample(choice);
});

function executeExample(choice) {
  switch (choice) {
    case 0:
      console.log("Exiting the program.");
      break;
    case 1:
      executeAnagrams();
      break;
    case 2:
      executeArrayChunk();
      break;
    case 3:
      executeCapitalize();
      break;
    case 4:
      executeCountChar();
      break;
    case 5:
      executeCurning();
      break;
    case 6:
      executeEvenOdd();
      break;
    case 7:
      executeFactorial();
      break;
    case 8:
      executeCountVowels();
      break;
    case 9:
      executeFizzBuzz();
      break;
    case 10:
      executeMaxChar();
      break;
    case 11:
      executeMatrix();
      break;
    case 12:
      executeMergeIntervals();
      break;
    case 13:
      executePalindrome();
      break;
    case 14:
      executeIsPrime();
      break;
    case 15:
      executePyramid();
      break;
    case 16:
      executeReverse();
      break;
    case 17:
      executePlayRPS();
      break;
    case 18:
      executeSort();
      break;
    case 19:
      executePrintSteps();
      break;
    case 20:
      executeInsertAndContainBST();
      break;
    case 21:
      executeQueueList();
      break;
    case 22:
      executeWeaveQueueList();
      break;
    case 23:
      executeBreadthFirstTraversal();
      break;
    case 24:
      executeDepthFirstTraversal();
      break;
    case 25:
      executeIsBSTValidate();
      break;
    case 26:
      executeLinkedListSize();
      break;
    case 27:
      executeIsCircularLinkedList();
      break;
    case 28:
      executeLevelWidth();
      break;
    case 29:
      executeNthNodeFromEnd();
      break;
    case 30:
      executeStackQueue();
      break;
    default:
      console.log("Invalid choice. Please select a valid option.");
      break;
  }
}

function executeAnagrams() {
  const stringA = "listen";
  const stringB = "silent";
  const result1 = anagrams(stringA, stringB);
  if (result1) {
    console.log(`${stringA} and ${stringB} are anagrams.`);
  } else {
    console.log(`${stringA} and ${stringB} are not anagrams.`);
  }
}

function executeArrayChunk() {
  const arrayToChunk = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const chunkSize = 3;
  const chunkedArray = arrayChunk(arrayToChunk, chunkSize);
  console.log(`Original Array: ${arrayToChunk}`);
  console.log(`Chunked Array with size ${chunkSize}:`, chunkedArray);
}

function executeCapitalize() {
  console.log("String Capitalize:");
  console.log(capitalize("i love india"));
}

function executeCountChar() {
  console.log("Character Count:");
  const inputString = "abbbccddddaab";
  console.log(countChar.countCharSerlize(inputString));
  console.log(countChar.countAllChar(inputString));
}

function executeCurning() {
  console.log("Curning Function:");
  console.log(curning.calc()(10)(5)(20)(2)());
}

function executeEvenOdd() {
  console.log("Even and Odd Functions:");
  console.log(evenOdd.checkEvenOdd(10));
  console.log(evenOdd.printEvenOdd(10));
}

function executeFactorial() {
  console.log("Factorial:");
  console.log(factorial.factorial(5));
  console.log(factorial.factorialRecur(5));
}

function executeCountVowels() {
  console.log("Count Vowels:");
  console.log(countVowels("MyLoveCode"));
}

function executeFizzBuzz() {
  console.log("FizzBuzz:");
  console.log(fizbuzz(15));
}

function executeMaxChar() {
  console.log("Max Character:");
  console.log(maxChar("adasdaaa !!!1"));
}

function executeMatrix() {
  console.log("Spherical Matrix:");
  console.log(matrix(4));
}

function executeMergeIntervals() {
  console.log("Merge Intervals:");
  const input1 = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ];
  console.log(mergeIntervals(input1));
  const input2 = [
    [1, 4],
    [4, 5],
  ];
  console.log(mergeIntervals(input2));
  const input3 = [
    [1, 3],
    [2, 4],
    [6, 8],
    [9, 10],
  ];
  console.log(mergeIntervals(input3));
}

function executePalindrome() {
  console.log("Palindrome:");
  console.log(paildrome("abba"));
}

function executeIsPrime() {
  console.log("Is Prime Number:");
  const num = 7; // Change this to the number you want to check
  if (isPrime(num)) {
    console.log(num + " is a prime number");
  } else {
    console.log(num + " is not a prime number");
  }
}

function executePyramid() {
  console.log("Pyramid Pattern:");
  console.log(pyramid(6));
}

function executeReverse() {
  console.log("Reverse String and Integer:");
  console.log(reverse.reverseString("apple"));
  console.log(reverse.reverseInteger(123456));
}

function executePlayRPS() {
  console.log("Rock-Paper-Scissors:");
  console.log(playRPS("rock", "scissors"));
  console.log(playRPS("rock"));
}

function executeSort() {
  console.log("Sorting of Array:");
  const inputArr = [2, 4, 6, 1, 0, 3];
  console.log(sort.bubbleSort(inputArr));
  console.log(sort.selectionSort(inputArr));
  console.log(sort.mergeSort(inputArr));
}

function executePrintSteps() {
  console.log("Print Steps:");
  printSteps.stepsRTL(5);
  printSteps.stepsLTR(5);
  printSteps.downToTop(5);
}

function executeInsertAndContainBST() {
  // Create a new root node with data 10
  console.log(` Insert and contain  in the binary search tree.`);
  const rootNode = new Node(10);
  // Insert data into the tree
  rootNode.insert(5);
  rootNode.insert(15);
  rootNode.insert(3);
  rootNode.insert(7);
  rootNode.insert(12);
  rootNode.insert(17);
  // The tree structure now looks like this:
  //       10
  //      /  \
  //     5   15
  //    / \  / \
  //   3  7 12 17

  // Search for data in the tree
  const searchData = 12;
  const foundNode = rootNode.contains(searchData);
  const nonExistentData = 8;
  const nonExistentNode = rootNode.contains(nonExistentData);
  if (foundNode) {
    console.log(`Found ${searchData} in the tree.`);
  } else {
    console.log(`${searchData} not found in the tree.`);
  }
  // Try to search for data that doesn't exist in the tree
  if (nonExistentNode) {
    console.log(`Found ${nonExistentData} in the tree.`);
  } else {
    console.log(`${nonExistentData} not found in the tree.`);
  }
}

function executeQueueList() {
  console.log("Queue of List");
  const q = new Queue();
  q.add(1);
  q.add(2);
  q.add(3);
  q.remove();
  console.log("Queue List ->", q.QueueList());
}

function executeWeaveQueueList() {
  console.log("Weave to queue list");
  const queueOne = new Queue();
  queueOne.add(1);
  queueOne.add(2);
  const queueTwo = new Queue();
  queueTwo.add("Hi");
  queueTwo.add("There");
  // Weave the two queues
  const weaveOne = weave(queueOne, queueTwo);
  console.log(weaveOne.QueueList()); //  [ 'There', 2, 'Hi', 1 ];
}

function executeBreadthFirstTraversal() {
  console.log("Breadth-First Traversal:");
  const tree = new Tree();
  // Add nodes to the tree
  tree.root = new TreeNode("A");
  tree.root.add("B");
  tree.root.add("C");
  tree.root.children[0].add("D");
  tree.root.children[0].add("E");
  tree.root.children[1].add("F");
  tree.root.children[1].add("G");
  tree.traverseBF((node) => {
    console.log(node.data);
  });
}

function executeDepthFirstTraversal() {
  console.log("\nDepth-First Traversal:");
  const tree = new Tree();
  // Add nodes to the tree
  tree.root = new TreeNode("A");
  tree.root.add("B");
  tree.root.add("C");
  tree.root.children[0].add("D");
  tree.root.children[0].add("E");
  tree.root.children[1].add("F");
  tree.root.children[1].add("G");
  tree.traverseDF((node) => {
    console.log(node.data);
  });
}

function executeIsBSTValidate() {
  console.log("Is BST is Validate");
  class NodeOne {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

  // for valid root tree
  // const root = new NodeOne(10);
  // root.left = new NodeOne(5);
  // root.right = new NodeOne(15);
  // root.right.left = new NodeOne(14);
  // root.right.right = new NodeOne(20);

  // for invalid root tree
  const root = new NodeOne(10);
  root.left = new NodeOne(5);
  root.right = new NodeOne(15);
  root.right.left = new NodeOne(30);
  root.right.right = new NodeOne(20);

  const isValidBST = validateBST(root);
  console.log("Is BST is Validate ->", isValidBST);
}

function executeLinkedListSize() {
  //Linked List Operations

  // Create a new linked list
  const myList = new LinkedList();

  // Insert elements at the beginning of the list
  myList.insertFirst(10);
  myList.insertFirst(20);
  myList.insertFirst(30);

  // Insert elements at the end of the list
  myList.insertLast(40);
  myList.insertLast(50);

  // Get the size of the linked list
  const listSize = myList.size();
  console.log(`Linked List Size: ${listSize}`); // Output: Linked List Size: 5

  // Get the first and last nodes
  const firstNode = myList.getFirst();
  const lastNode = myList.getLast();
  console.log(`First Node: ${firstNode.data}`); // Output: First Node: 30
  console.log(`Last Node: ${lastNode.data}`); // Output: Last Node: 50

  // Iterate through the linked list and print each element
  myList.forEach((node, index) => {
    console.log(`Node ${index}: ${node.data}`);
  });
  // Output:
  // Node 0: 30
  // Node 1: 20
  // Node 2: 10
  // Node 3: 40
  // Node 4: 50

  // Remove the first and last elements
  myList.removeFirst();
  myList.removeLast();

  // Insert an element at a specific index
  myList.insertAt(25, 1);

  // Remove an element at a specific index
  myList.removeAt(3);

  // Iterate through the linked list using a generator
  for (const node of myList) {
    console.log(`Node: ${node.data}`);
  }
  // Output:
  // Node: 30
  // Node: 25
  // Node: 10

  // Clear the linked list
  myList.clear();
}

function executeIsCircularLinkedList() {
  // check Is Circulle que list or Not
  // Define the Node and LinkedList classes (assuming you already have them)
  class Nodec {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }

  class LinkedListc {
    constructor() {
      this.head = null;
    }
  }

  // Create a circular linked list for testing
  const myListC = new LinkedListc();
  const node1 = new Nodec(1);
  const node2 = new Nodec(2);
  const node3 = new Nodec(3);

  myListC.head = node1;
  node1.next = node2;
  node2.next = node3;
  node3.next = node2; // Creates a cycle

  // Check if the linked list is circular
  const isCircular = isCircularLinkList(myListC);

  if (isCircular) {
    console.log("The linked list is circular.");
  } else {
    console.log("The linked list is not circular.");
  }
}

function executeLevelWidth() {
  //get all the level width
  // Define a sample tree structure (assuming you already have your own tree structure)
  class TreeNodeLW {
    constructor(data, children = []) {
      this.data = data;
      this.children = children;
    }
  }

  // Create a sample tree
  const rootLW = new TreeNodeLW("A", [
    new TreeNodeLW("B", [new TreeNodeLW("D"), new TreeNodeLW("E")]),
    new TreeNodeLW("C", [new TreeNodeLW("F")]),
    new TreeNodeLW("I", [new TreeNodeLW("J")]),
  ]);

  // Calculate the level width
  const levelWidths = levelWidth(rootLW);

  // Output the level widths
  console.log("Level Widths:", levelWidths);
}

function executeNthNodeFromEnd() {
  //from last form link list
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.append(4);
  list.append(5);

  const n = 2; // The position from the end you want to find

  const result = fromLast(list, n);

  console.log(`The ${n}nd node from the end is: ${result.data}`); // This should print "The 2nd node from the end is: 4"
}

function executeStackQueue() {
  
  //stack queue
  const myQueue = new stackQueue();

  myQueue.add(1);
  myQueue.add(2);
  myQueue.add(3);

  console.log(myQueue.peek()); // Should print 1 (the front of the queue)

  console.log(myQueue.remove()); // Should remove and return 1
  console.log(myQueue.remove()); // Should remove and return 2

  myQueue.add(4);
  console.log(myQueue.peek()); // Should print 3 (the front of the queue)

  console.log(myQueue.remove()); // Should remove and return 3
  console.log(myQueue.remove()); // Should remove and return 4

  console.log(myQueue.peek()); // Should print undefined (the queue is empty)
}

