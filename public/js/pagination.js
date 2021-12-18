function senddata(product,totalPages,page) {
    let data = JSON.parse(product);
    // console.log(data,totalPages,page);

    let size = 10;


    pagination(page, totalPages);

    function pagination(current, totalPages) {
        let container = document.getElementById("pagination");
        let div = document.createElement("div");
    
        // to create previous button
        let prev = document.createElement("a");
        prev.class = "pagenav";
        prev.innerHTML = "❮";
        prev.setAttribute("class","text-2xl px-4 mx-2 py-2 hover:bg-gray-600 rounded");
        if (+current != 1) {
            let prevpage = +current - 1;
            prev.href = `/search?size=${size}&page=${prevpage}`
        }
        div.append(prev)

        // to create the page numbers along with href.
        for (var i = 1; i <= +totalPages; i++) {
            let pagenum = document.createElement("a");
            pagenum.innerHTML = i;
            pagenum.setAttribute("class","text-2xl mx-2 px-4 py-2 hover:bg-gray-600 rounded");
            pagenum.href = `/search?size=${size}&page=${i}`;
            div.append(pagenum);

            if(i == +current) {
                pagenum.setAttribute("class","text-2xl px-4 py-2 mx-2 hover:bg-gray-600 rounded border-2");
            }
        }

        // to create next button
        let next = document.createElement("a");
        next.innerHTML = "❯";
        next.setAttribute("class","text-2xl px-4 py-2 mx-2 hover:bg-gray-600 rounded")
        if (+current !== +totalPages) {
            let nextpage = +current + 1;
            next.href = `/search?size=${size}&page=${nextpage}`;
        }
        div.append(next);
        container.append(div)
    }
}