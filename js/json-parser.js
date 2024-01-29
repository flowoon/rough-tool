const $before = document.getElementById('before');
const $after = document.getElementById('after');

const formatAndCopyJSON = () => {
    try {
        const spaceCount = document.getElementById('spaceCount').value;
        const decodedData = decodeURIComponent($before.value);
        const parsedJSON = JSON.parse(decodedData);
        const formattedJSON = JSON.stringify(parsedJSON, null, Number(spaceCount));
        $after.value = formattedJSON;
    } catch (e) {
        console.error('Error in formatting JSON: ', e);
        $after.value = 'Invalid JSON data.';
    }
};

$before.addEventListener('change', formatAndCopyJSON);