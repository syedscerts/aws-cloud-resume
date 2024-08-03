const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch("https://dpsh7xwblxmvnhberezob7fxpi0srjxt.lambda-url.us-west-2.on.aws/");
        let data = await response.json();
        counter.innerHTML = `Views: ${data}`;
    } catch (error) {
        console.error("Error fetching the counter data:", error);
        counter.innerHTML = "Views: Error loading data";
    }
}

updateCounter();
