// Set DOM variables
const words_input = document.getElementById('words_input');
const words_output = document.getElementById('words_output');

/**
 * Create a function that allows to count words.
 * This function gets three
 * @param int max_words that is equal to the max
 * of the words allowed.
 * @param string dom_input that indicates the DOM
 * id where the function gets the words.
 * @param string dom_output that indicates the DOM
 * id where print out:
 *      A - Number of word count - e.g. "Word count: 90"
 *      B - Max words allowed - e.g. "(max 100)"
 */

const words_count = (max_words, dom_input, dom_output) => {

    // Use event keyup for gettings the inputs
    dom_input.addEventListener('keyup', e => {

        /**
         * Create a function where to store the words
         * using build-in match JS function and
         * RegEx in the following way:
         *      \b match word boundaries
         *      \w+ match word characters
         *      -? match hyphens
         */
        let words = e.target.value.match(/\b[-?(\w+)?]+\b/gi);

        // DOM output
        dom_output.innerHTML = `Word count: ${words ? words.length : '0'} (max ${max_words})`;
    })
}

// Call the functions
words_count(100, words_input, words_output);
