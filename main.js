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

    // Define an empty array where will be stored the inputs
    let words;

    // Use event keyup for gettings the inputs
    dom_input.addEventListener('keyup', e => {

        // Create a variable that gets ReGex space, tabs and new lines
        const regSpace = new RegExp('\\s');

        // Create a variable that gets ReGex special characters
        const regSpecial = new RegExp(/[!-;:,.?]/);

        // Create a variable that gets ReGex numbers
        const regNum = new RegExp(/[0-9]/);

        // Create two variables that determines the number of the words
        let words_num = -1;
        let remove_num = 0;

        // Save inputs into an array saperating the words by regSpace
        words = e.target.value.split(regSpace);

        /**
         * Loop through the input string for removing
         * double inputs
         * e.g double dots
         * e.g double new lines
         * e.g double commas
         */
        for (let x = 0; x < e.target.value.length; x++) {

            /** \n */
            // Avoid to add a word count if there is more than one new line
            if (e.target.value[x] === '\n' && e.target.value[x -1] === '\n') {
                remove_num++;
            }
            if (e.target.value[x] === '\n' && e.target.value[x - 1] === '.') {
                remove_num++;
            }
            if (e.target.value[x] === '\n' && e.target.value[x - 1] === ',') {
                remove_num++;
            }
            if (e.target.value[x] === '\n' && e.target.value[x - 1] === ';') {
                remove_num++;
            }
            if (e.target.value[x] === '\n' && e.target.value[x - 1] === ':') {
                remove_num++;
            }
            if (e.target.value[x] === '\n' && e.target.value[x - 1] === '?') {
                remove_num++;
            }
            if (e.target.value[x] === '\n' && e.target.value[x - 1] === '-') {
                remove_num++;
            }
            if (e.target.value[x] === '\n' && e.target.value[x - 1] === '\'') {
                remove_num++;
            }
            if (
                e.target.value[x] === '\n' && e.target.value[x - 1] === ' '
                ||
                e.target.value[x] === '\n' && e.target.value[x - 1] === ' ' && e.target.value[x - 2] === ' '
                ) {
                remove_num++;
            }

            /** spaces */
            if (e.target.value[x] === ' ' && e.target.value[x - 1] === ' ') {
                remove_num++;
            }
            if (e.target.value[x] === ' ' && e.target.value[x - 1] === '\n') {
                remove_num++;
            }

            /** . */
            // Avoid to add a word count if there is more than one dot
            if (e.target.value[x] === '.' && e.target.value[x - 1] !== '.' && x !== 0) {
                words_num++;
            }
            // Avoid to add a word count if there is a space after a dot
            if (e.target.value[x] === ' ' && e.target.value[x - 1] === '.') {
                remove_num++;
            }

            // Avoid to add a word count if there is a dot after a space
            if (e.target.value[x] === '.' && e.target.value[x - 1] === ' ') {
                remove_num++;
            }

            // Avoid to add a word count if there is a . after a new line
            if (e.target.value[x] === '.' && e.target.value[x - 1] === '\n') {
                remove_num++;
            }

            /** ? */
            // Avoid to add a word count if there is more than one ?
            if (e.target.value[x] === '?' && e.target.value[x - 1] !== '?' && x !== 0) {
                words_num++;
            }
            // Avoid to add a word count if there is a space after a ?
            if (e.target.value[x] === ' ' && e.target.value[x - 1] === '?') {
                remove_num++;
            }

            // Avoid to add a word count if there is a ? after a space
            if (e.target.value[x] === '?' && e.target.value[x - 1] === ' ') {
                remove_num++;
            }

            // Avoid to add a word count if there is a ? after a new line
            if (e.target.value[x] === '?' && e.target.value[x - 1] === '\n') {
                remove_num++;
            }

            /** ; */
            // Avoid to add a word count if there is more than one ;
            if (e.target.value[x] === ';' && e.target.value[x - 1] !== ';' && x !== 0) {
                words_num++;
            }
            // Avoid to add a word count if there is a space after a ;
            if (e.target.value[x] === ' ' && e.target.value[x - 1] === ';') {
                remove_num++;
            }

            // Avoid to add a word count if there is a ; after a space
            if (e.target.value[x] === ';' && e.target.value[x - 1] === ' ') {
                remove_num++;
            }

            // Avoid to add a word count if there is a ; after a new line
            if (e.target.value[x] === ';' && e.target.value[x - 1] === '\n') {
                remove_num++;
            }

            /** , */
            // Avoid to add a word count if there is more than one ,
            if (e.target.value[x] === ',' && e.target.value[x - 1] !== ',' && x !== 0) {
                words_num++;
            }
            // Avoid to add a word count if there is a space after a ,
            if (e.target.value[x] === ' ' && e.target.value[x - 1] === ',') {
                remove_num++;
            }

            // Avoid to add a word count if there is a , after a space
            if (e.target.value[x] === ',' && e.target.value[x - 1] === ' ') {
                remove_num++;
            }

            // Avoid to add a word count if there is a , after a new line
            if (e.target.value[x] === ',' && e.target.value[x - 1] === '\n') {
                remove_num++;
            }

            /** : */
            // Avoid to add a word count if there is more than one :
            if (e.target.value[x] === ':' && e.target.value[x - 1] !== ':' && x !== 0) {
                words_num++;
            }
            // Avoid to add a word count if there is a space after a :
            if (e.target.value[x] === ' ' && e.target.value[x - 1] === ':') {
                remove_num++;
            }

            // Avoid to add a word count if there is a : after a space
            if (e.target.value[x] === ':' && e.target.value[x - 1] === ' ') {
                remove_num++;
            }

            // Avoid to add a word count if there is a : after a new line
            if (e.target.value[x] === ':' && e.target.value[x - 1] === '\n') {
                remove_num++;
            }

            /** ! */
            // Avoid to add a word count if there is more than one !
            if (e.target.value[x] === '!' && e.target.value[x - 1] !== '!' && x !== 0) {
                words_num++;
            }
            // Avoid to add a word count if there is a space after a !
            if (e.target.value[x] === ' ' && e.target.value[x - 1] === '!') {
                remove_num++;
            }

            // Avoid to add a word count if there is a ! after a space
            if (e.target.value[x] === '!' && e.target.value[x - 1] === ' ') {
                remove_num++;
            }

            // Avoid to add a word count if there is a ! after a new line
            if (e.target.value[x] === '!' && e.target.value[x - 1] === '\n') {
                remove_num++;
            }

            /** - */
            // Avoid to add a word count if there is more than one :
            if (e.target.value[x] === '-' && e.target.value[x - 1] !== '-' && x !== 0) {
                words_num++;
            }
            // Avoid to add a word count if there is a space after a -
            if (e.target.value[x] === ' ' && e.target.value[x - 1] === '-') {
                remove_num++;
            }

            // Avoid to add a word count if there is a - after a space
            if (e.target.value[x] === '-' && e.target.value[x - 1] === ' ') {
                remove_num++;
            }

            // Avoid to add a word count if there is a - after a new line
            if (e.target.value[x] === '-' && e.target.value[x - 1] === '\n') {
                remove_num++;
            }

            /** ' */
            // Avoid to add a word count if there is more than one '
            // as well ass if ' is not the first input
            if (e.target.value[x] === '\'' && e.target.value[x - 1] !== '\'' && x !== 0) {
                words_num++;
            }
            // Avoid to add a word count if there is a space after a '
            if (e.target.value[x] === ' ' && e.target.value[x - 1] === '\'') {
                remove_num++;
            }

            // Avoid to add a word count if there is a ' after a space
            if (e.target.value[x] === '\'' && e.target.value[x - 1] === ' ') {
                remove_num++;
            }

            // Avoid to add a word count if there is a ' after a new line
            if (e.target.value[x] === '\'' && e.target.value[x - 1] === '\n') {
                remove_num++;
            }

            /** " */
            // Avoid to add a word count if there is more than one "
            // as well ass if " is not the first input
            if (e.target.value[x] === '"' && e.target.value[x - 1] !== '"' && x !== 0) {
                words_num++;
            }

            // Avoid to add a word count if there is a space after a "
            if (e.target.value[x] === ' ' && e.target.value[x - 1] === '"') {
                remove_num++;
            }

            // Avoid to add a word count if there is a " after a space
            if (e.target.value[x] === '"' && e.target.value[x - 1] === ' ') {
                remove_num++;
            }

            // Avoid to add a word count if there is a " after a special characters
            if (e.target.value[x] === '"' && regSpecial.test(e.target.value[x - 1])) {
                remove_num++;
            }

            // Avoid to add a word count if there is a fload number
            if (e.target.value[x] === '.' || e.target.value[x] === ',' && regNum.test(e.target.value[x - 1])) {
                remove_num++;
            }

        }

        // // Determine the number of ther words
        words_num = words_num + words.length - remove_num;

        // DOM output
        dom_output.innerHTML = `Word count: ${words_num} (max ${max_words})`;
    })
}

// Call the functions
words_count(100, words_input, words_output);
