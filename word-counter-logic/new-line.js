/**
 * Create a functiont that validate the logic of new line into the word counter.
 * Avoid to add a word count if there is more than one new line.
 * @param string string_input
 * @param int position_input
 * @param int remove_num
 */

function newLine(string_input, position_input, remove_num) {
    if (string_input[position_input] === '\n' && string_input[position_input - 1] === '\n') {
        remove_num++;
    }
    if (string_input[position_input] === '\n' && string_input[position_input - 1] === '.') {
        remove_num++;
    }
    if (string_input[position_input] === '\n' && string_input[position_input - 1] === ',') {
        remove_num++;
    }
    if (string_input[position_input] === '\n' && string_input[position_input - 1] === ';') {
        remove_num++;
    }
    if (string_input[position_input] === '\n' && string_input[position_input - 1] === ':') {
        remove_num++;
    }
    if (string_input[position_input] === '\n' && string_input[position_input - 1] === '?') {
        remove_num++;
    }
    if (string_input[position_input] === '\n' && string_input[position_input - 1] === '-') {
        remove_num++;
    }
    if (string_input[position_input] === '\n' && string_input[position_input - 1] === '\'') {
        remove_num++;
    }
    if (
        string_input[position_input] === '\n' && string_input[position_input - 1] === ' '
        ||
        string_input[position_input] === '\n' && string_input[position_input - 1] === ' ' && string_input[position_input - 2] === ' '
        ) {
        remove_num++;
    }

    console.log(`Remove Num: ${remove_num}`);
}

export default newLine;
