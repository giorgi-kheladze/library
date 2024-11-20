function showList(section){
    const list = document.querySelector(`[data-list=${section}]`)
    const arrow = document.querySelector(`[data-arrow=${section}]`)

    list.classList.toggle("show")

    if (list.classList.contains("show")) {
        arrow.style.transform = "rotate(90deg)";
    } else {
        arrow.style.transform = "rotate(0deg)";
    }
}