console.log("Script.Js is Working")
const populate = async (value, currency) => {
    let myStr = ""
    console.log(currency)
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_7UStkUqQNBmahSoy8K635tE3Sjr5fK1UVPmVloZ2&base_currency=" + currency
    let response = await fetch(url)
    let rJson = await response.json()
    document.querySelector(".output").style.display = "block"
    for (let key of Object.keys(rJson["data"])) {

         myStr += `<tr>
            <td>${key}</td>
            <td>${rJson["data"][key]["code"]}</td>
            <td>${(rJson["data"][key]["value"] * value).toFixed(2)}</td>
        </tr>
`


    }
    console.log(myStr)
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;

}


const btn = document.querySelector(".btn")
btn.addEventListener("click", (e) => {
    e.preventDefault() // this prevents the default action associate with the event object of the particular HTML element.

    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='Currency']").value;
    populate(value, currency)
})

