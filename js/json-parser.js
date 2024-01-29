const $before = document.getElementById('before');
const $after = document.getElementById('after');

const formatAndCopyJSON = () => {
    try {
        const decodedData = decodeURIComponent($before.value);
        console.log(decodedData);
        const parsedJSON = JSON.parse(decodedData);
        console.log(parsedJSON);
        const formattedJSON = JSON.stringify(parsedJSON, null, 4);
        console.log(formattedJSON);
        $after.value = formattedJSON;
    } catch (e) {
        console.error('Error in formatting JSON: ', e);
        $after.value = 'Invalid JSON data.';
    }
};

$before.addEventListener('change', formatAndCopyJSON);