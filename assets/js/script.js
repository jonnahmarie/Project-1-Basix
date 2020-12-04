$("#submit").on("click", function() {
    localStorage.clear();
    const itemName = $("#item-name").val();
    const userZip = $("#user-zip").val();
    const distance = $("option:selected").val();
    localStorage.setItem("itemName", JSON.stringify(itemName));
    localStorage.setItem("userZip", JSON.stringify(userZip));
    localStorage.setItem("distance", JSON.stringify(distance));
})