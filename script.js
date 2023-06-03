(() => {
    fetch("https://dummyjson.com/quotes")
        .then(data => data.json())
        .then(result => {
            const quotes = result.quotes;
            const ul = document.getElementById("quotesList")

            for(let quote of quotes) {
                const li = document.createElement("LI");
                const text = document.createTextNode(quote.quote);

                li.appendChild(text);
                ul.appendChild(li);
            }

        })
        .catch(error => alert(`something went wrong, ${error}`))
})();

const filterQuotes = () => {
    const searchText = document.getElementById("searchBox").value.toUpperCase();
    const ul = document.getElementById("quotesList");
    const liArr = ul.getElementsByTagName("LI");

    for(let li of liArr) {
        const quote = li.innerHTML;
        if(quote.toUpperCase().indexOf(searchText) > -1)
            li.style.display = "";
        else
            li.style.display = "none";
    }

}