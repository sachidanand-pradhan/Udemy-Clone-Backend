function senddata(product,totalPages,page) {
    let data = JSON.parse(product);
    console.log(data,totalPages,page);

    function pagination(current, totalPages) {
        let container = document.getElementById("pagination");
        let div = document.createElement("div");
        let prev = document.createElement("a");
        prev.class = "pagenav";
        prev.innerHTML = "❮";
        prev.setAttribute("class","text-2xl px-4 py-2 hover:bg-gray-600 rounded");
        if (+current != 1) {
            let prevpage = +current - 1;
            prev.href = `/search?size=${totalPages}&page=${prevpage}`
        }
        div.append(prev)

        for (var i = 1; i <= +totalPages; i++) {
            let pagenum = document.createElement("a");
            pagenum.innerHTML = i;
            pagenum.setAttribute("class","text-2xl px-4 py-2 hover:bg-gray-600 rounded");
            if (+current != i) {
                pagenum.href = `/search?size=${totalPages}&page=${i}`;
            }
            div.append(pagenum)
        }
        let next = document.createElement("a");
        next.innerHTML = "❯";
        next.setAttribute("class","text-2xl px-4 py-2 hover:bg-gray-600 rounded")
        if (+current !== +totalPages) {
            let nextpage = +current + 1;
            next.href = `/search?size=${totalPages}&page=${nextpage}`
        }
        div.append(next);
        container.append(div)
    }
    pagination(page, totalPages);
}