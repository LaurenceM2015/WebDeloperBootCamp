# Mini Linter 


<p>
 This app iterating over arrays to improve the quality of a paragraph and gather some information about that paragraph.
 Mini Linter is the same type of work that word processing software does. Or like Linking.
</p>

<h2>Instruction</h2>

<ol>
    <li>
    In the code editor, there is a string called story. We want to gather some information about the individual words and sentences in the string. Let’s split the string into individual words and save them in a new array called storyWords.
    </li>
    <li>Log how many words there are in this story to the console.</li>
    <li>There is an array of words that are unnecessary. Iterate over your array to filter out these words. Save the remaining words in an array called betterWords. There are several ways that you could achieve this.</li>
    <li>There is an array of words called overusedWords. These are words overused in this story. You want to let the user of your program know how many times they have used these overused words. There are two ways to achieve this. Try it on your own first. If you need help, consult the hint.</li>
    <li>Now, count how many sentences are in the paragraph.
    This may seem tricky, but remember that all of the sentences in this paragraph end with a period (.) or an exclamation mark (!). You could iterate over the array and add 1 to a sentence counter variable for each word that has a period or exclamation mark as its final character.</li>
    <ul>Log these items to the console:
        <ul>
            <li>The word count</li>
            <li>The sentence count</li>
            <li>The number of times each overused word appears</li>
        </ul>
    </li>
    <li>Now, log the betterWords array to the console as a single string.</li>
    <li>
        <ul>
            <li>For the overused words, remove it every other time it appears.</li>
            <li>Write a function that finds the word that appears the greatest number of times.</li>
            <li>Replaced overused words with something else.</li>
        </ul>
    </li>
</ol>
