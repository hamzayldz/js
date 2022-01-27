// Information to reach API
const apiKey = 'your apiKey';
const url = 'https://api.rebrandly.com/v1/links';

const inputField = document.getElementById("input")

const shortenButton = document.getElementById("shorten")
const shortenUrl = () => {
    const urlToShorten = inputField.value
    console.log(urlToShorten)
    const data = JSON.stringify({ destination: urlToShorten });
    console.log(data)
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            renderResponse(xhr.response);
        }
    }
    xhr.open("POST", url)
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('apikey', apiKey)

    xhr.send(data);
    
}

// page elements

shortenButton.addEventListener("click", displayShortUrl)