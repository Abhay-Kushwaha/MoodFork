// Send Mail
document.getElementById('sendButton').addEventListener('click', function () {
    const emailInput = document.getElementById('emailInput');
    const messageInput = document.getElementById('messageInput');
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    if (!email || !message) {
        alert('Please enter both email and message before sending.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    fetch('/send_message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, message: message })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Server Error: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                alert(data.success);
                emailInput.value = ''; // Clear the email input field
                messageInput.value = ''; // Clear the message input field
            } else {
                alert(`Error: ${data.error}`);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to send the message.');
        });
});

let previewInterval;
let cap;
let captureTimer;
let capturedImageData = null;

function openModal() {
    startEmotionDetection();
    document.getElementById('customModal').style.display = 'block';
    fetchLivePreview();
    captureTimer = setTimeout(() => {
        closeModal();
        startEmotionDetection();
    }, 3000);
}

function closeModal() {
    document.getElementById('customModal').style.display = 'none';

    if (previewInterval) clearInterval(previewInterval);
    if (cap) {
        cap.release();
        cap = null;
    }
    if (captureTimer) clearTimeout(captureTimer);
}

function startEmotionDetection() {
    fetch('/detect_emotion')
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerText = `Detected Emotion: ${data.emotion}`;
            document.getElementById('food').innerText = `Suggested Food: ${data.food}`;
            getapi(data.food);
        })
        .catch(error => console.error('Error:', error));
}

async function getapi(query) {
    try {
        const response = await fetch(`https://api.foodoscope.com/recipe-search/recipe?searchText=${query}&region=Indian%20Subcontinent&subRegion=Indian&page=1&pageSize=1`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 0qs7hlV__xwtDXIuCwAWE7xCD6z9H8bS8dv8I92pJjp8W1yn'
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        if (data.payload?.data?.length > 0) {
            const item = data.payload.data[0];
            document.getElementById("imgmodal").src = item.img_url;
            document.getElementById("modal-link").href = item.url;
            document.getElementById("description-modal").innerHTML = `Process: ${item.Processes.replaceAll('||', ' -> ')}`;
            document.getElementById("title-recipeOfTheDay").textContent = `${query}`;
        }
        else {
            alert("No results found for the given query.");
            document.getElementById("imgmodal").src = 'static/img/error.jpg';
            document.getElementById("modal-link").innerHTML = `Close`;
            document.getElementById("modal-link").href = `/`;
            document.getElementById("modal-link").target = "_self";
            document.getElementById("description-modal").innerHTML = `No Recipe Available`;
            document.getElementById("title-recipeOfTheDay").textContent = `Not Found!!`;
        }
    }
    catch (e) {
        alert("Something went wrong while fetching the API.");
        console.error('Fetch error:', e);
    }
}

const allgetapi = async (query) => {
    try {
        const response = await fetch(`https://api.foodoscope.com/recipe-search/recipe?searchText=${query}&region=Indian%20Subcontinent&subRegion=Indian&page=3&pageSize=30' \ -H 'accept: application/json' \ -H 'Authorization: Bearer 0qs7hlV__xwtDXIuCwAWE7xCD6z9H8bS8dv8I92pJjp8W1yn`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 0qs7hlV__xwtDXIuCwAWE7xCD6z9H8bS8dv8I92pJjp8W1yn'
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        let str = ``;
        data.payload.data.map((items) => {
            let card = `
                        <div class="col">
                            <div class="card h-100 ">
                                <img src=${items.img_url} class="card-img-top" alt=""   height="210px">
                                <div class="card-body text-danger ">
                                    <h5 class="card-title"> Dish Name: ${items.Recipe_title}</h5>
                                    <p class="card-text"> <font style="color:black;">Process:</font> ${(items.Processes.replaceAll('||', ' -> '))}</p>
                                    <a href=${items.url} class="btn btn-primary" target="_blank">Get Full Process</a>
                                </div>
                            </div>  
                        </div> `;
            str = str + card;
            document.querySelector("#d1").innerHTML = str;
        });
    } catch (error) {
        console.error('Fetch error:', error);
    }
}