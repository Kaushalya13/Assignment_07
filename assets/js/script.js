//----------------------------------Customer from-------------------------------------
var row_index = null;

//-----Submit-------
$("#customer_btn>button[type='button']").eq(0).on("click", () => {
    let cus_id = $("#cus_id").val();
    let name = $("#name").val();
    let salary = $("#salary").val();
    let address = $("#address").val();

    console.log(cus_id)
    console.log(name)
    console.log(salary)
    console.log(address)

    let record = `<tr><td class="cus_id">${cus_id}</td><td class="name">${name}</td><td class="salary">${salary}</td><td class="address">${address}</td></tr>`;
    $("#customer-tbl-body").append(record);

    $("#customer_btn>button[type='reset']").click();

});

//---------Click Row----------
$("#customer-tbl-body").on("click", "tr", function() {
    row_index = $(this).index();

    console.log(row_index);

    let cus_id = $(this).find(".cus_id").text();
    let name = $(this).find(".name").text();
    let salary = $(this).find(".salary").text();
    let address = $(this).find(".address").text();

    $("#cus_id").val(cus_id);
    $("#name").val(name);
    $("#salary").val(salary);
    $("#address").val(address);
})

//----------Update---------
$("#customer_btn>button[type='button']").eq(1).on("click", () => {
    let cus_id = $("#cus_id").val();
    let name = $("#name").val();
    let salary = $("#salary").val();
    let address = $("#address").val();

    console.log(cus_id)
    console.log(name)
    console.log(salary)
    console.log(address)

    let record = `<td class="cus_id">${cus_id}</td><td class="name">${name}</td><td class="salary">${salary}</td><td class="address">${address}</td>`;
    $("tbody>tr").eq(row_index).html(record);

    $("#customer_btn>button[type='reset']").click();

});

//----------Delete---------
$("#customer_btn>button[type='button']").eq(2).on("click", () => {
    $("tbody>tr").eq(row_index).remove();
    $("customer_btn>button[type='reset']").click();
})




//----------------------------------Item from-------------------------------------


var row_index = null;

//---------Submit---------
$("#item_btn>button[type='button']").eq(0).on("click", () => {
    let code = $("#code").val();
    let item_name = $("#item_name").val();
    let price = $("#price").val();
    let qty = $("#qty").val();

    console.log(code)
    console.log(item_name)
    console.log(price)
    console.log(qty)

    let record = `<tr><td class="code">${code}</td><td class="item_name">${item_name}</td><td class="price">${price}</td><td class="qty">${qty}</td></tr>`;
    $("#item-tbl-body").append(record);

    $("#item_btn>button[type='reset']").click();

});

//----------Click Row---------
$("#item-tbl-body").on("click", "tr", function() {
    row_index = $(this).index();

    console.log(row_index);

    let code = $(this).find(".code").text();
    let item_name = $(this).find(".item_name").text();
    let price = $(this).find(".price").text();
    let qty = $(this).find(".qty").text();

    $("#code").val(code);
    $("#item_name").val(item_name);
    $("#price").val(price);
    $("#qty").val(qty);
})

//---------Update--------
$("#item_btn>button[type='button']").eq(1).on("click", () => {
    let code = $("#code").val();
    let item_name = $("#item_name").val();
    let price = $("#price").val();
    let qty = $("#qty").val();

    console.log(code)
    console.log(item_name)
    console.log(price)
    console.log(qty)

    let record = `<td class="code">${code}</td><td class="item_name">${item_name}</td><td class="price">${price}</td><td class="qty">${qty}</td>`;
    $("tbody>tr").eq(row_index).html(record);

    $("#item_btn>button[type='reset']").click();

});

//----------Delete--------
$("#item_btn>button[type='button']").eq(2).on("click", () => {
    $("tbody>tr").eq(row_index).remove();
    $("#item_btn>button[type='reset']").click();
})




//----------------------------------Place order from-------------------------------------

var row_index1 = null;

//Submit
$("#storebtns>button[type='button']").eq(0).on("click", () => {
    let item_id = $("#item_id").val();
    let item_name = $("#item_name").val();
    let quantity = $("#quantity").val();
    let price = $("#price").val();
    let description = $("#description").val();

    let record = `<tr><td class="item_id">${item_id}</td><td class="item_name">${item_name}</td><td class="quantity">${quantity}</td><td class="price">${price}</td><td class="description">${description}</td></tr>`;
    $("#item-tbl-body").append(record);

    $("#storebtns>button[type='reset']").click();

});

//Click Row
$("tbody").on("click", "tr", function() {
    row_index1 = $(this).index();

    console.log(row_index1);

    let item_id = $(this).find(".item_id").text();
    let item_name = $(this).find(".item_name").text();
    let quantity = $(this).find(".quantity").text();
    let price = $(this).find(".price").text();
    let description = $(this).find(".description").text();

    $("#item_id").val(item_id);
    $("#item_name").val(item_name);
    $("#quantity").val(quantity);
    $("#price").val(price);
    $("#description").val(description);
})

//Update
$("#storebtns>button[type='button']").eq(1).on("click", () => {
    let item_id = $("#item_id").val();
    let item_name = $("#item_name").val();
    let quantity = $("#quantity").val();
    let price = $("#price").val();
    let description = $("#description").val();

    let record = `<td class="item_id">${item_id}</td><td class="item_name">${item_name}</td><td class="quantity">${quantity}</td><td class="price">${price}</td><td class="description">${description}</td>`;
    $("tbody>tr").eq(row_index1).html(record);

    $("#storebtns>button[type='reset']").click();

});

//Delete
$("#storebtns>button[type='button']").eq(2).on("click", () => {
    $("tbody>tr").eq(row_index1).remove();
    $("button[type='reset']").click();
})


//-----------------------------Place Order--------------------------------
let netTot = 0;
$("#placeOrderbtns>button[type='button']").eq(0).on("click", () => {
    let item_id = $("#item_id_placeOrder").val();
    let quantity = $("#quantity_placeOrder").val();
    let total = quantity*100;

    let record = `<tr><td class="item_id">${item_id}</td><td class="quantity">${quantity}</td><td class="price">${total}</td></tr>`;
    $("#placeOrder-tbody").append(record);

    netTot+=total;

    $("#tot").text(netTot);
});

//Calculate
$("#cal").on("click", () => {
    let cash = $("#amount").val()-netTot;

    $("#cash2").text(cash);
});

