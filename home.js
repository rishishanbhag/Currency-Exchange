
let populate=async (value,currency) => {
    let mystr=""
   url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_x4wSUn4ij2Ky4pttAs4dPTznn5429QUb8y7xShUZ&base_currency="+ currency;
    let response= await fetch(url)
    let finalresponse = await response.json()
    console.log(finalresponse);
    document.querySelector(".output").style.display="block";

    for(let key of Object.keys(finalresponse["data"])){
        mystr+=
        `<tr>
        <td>${key}</td>
        <td>${finalresponse["data"][key]["code"]}</td>
        <td>${finalresponse["data"][key]["value"]* value}</td>
        </tr>
        `

    }
    const tabledata = document.querySelector("tbody");
    tabledata.innerHTML=mystr;

}

const btn=document.querySelector(".submit");
btn.addEventListener("click",(e) =>{
    e.preventDefault()
    const value=parseInt(document.querySelector("input[name='quantity']").value);
    const currency=document.querySelector("select[name='currency']").value;
    populate(value,currency);
});





