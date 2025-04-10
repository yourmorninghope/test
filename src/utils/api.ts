export const fetchData = () =>
    fetch("https://api.thecatapi.com/v1/images/search").then((res) => res.json());