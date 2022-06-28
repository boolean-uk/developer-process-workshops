
```sh
# input.txt
W
WE
S
NSWE
NSN
N
NSSSSNNN
NSEEEEWWNWNWSWEN
```

Each line represents a person moving in compass directions (N, E, S, W).
Eg: `NSN` represents a person moving
```
one step N
one step S
one step N
```

Your task is to read data from a file and find out how many people end up in the same position they started from. Create a new file called `answer.txt` where you have 1 line, for example: `count: 3`

Example

```sh
# input.txt
W => false
WE => true
```
With the above input, the total count would be (1) person ending up in the same position, and the resulting file `answer.txt` has the line `count: 1`


EXTENSION

You discover that each line represents different movements of the same person. Your task is to find out if the person end up back in the same place?

Example

```sh
# input.txt
W
WE
NES
```
Expected outcome: a file `answer.txt` that has 1 line with the word `true`.
