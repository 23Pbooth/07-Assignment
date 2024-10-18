function Calculate(){
    let dogSize = document.getElementById("dogSize").value;
    let days = document.getElementById("days").value;
    const taxrate = .047;
    // I used .047 for the tax rate because .47 seemed a bit much
    let price = dogSize * days;
    let tax = price * taxrate;
    let total = price + tax;
    document.getElementById("price").textContent = "Price: $" + price;
    document.getElementById("tax").textContent = "Tax: $" + tax.toFixed(2);
    document.getElementById("total").textContent = "Total: $" + total.toFixed(2);
}