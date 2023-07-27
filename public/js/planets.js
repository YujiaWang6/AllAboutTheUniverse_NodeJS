const urlBase = "https://api.le-systeme-solaire.net/rest/bodies";

async function getPlanetsInfo(){
    var response = await fetch(
        urlBase,
        {
            method: "get",
            headers:{
                "Content-Type": "application/json"
            }
        }
    );
    return await response.json();
}

module.exports = {
    getPlanetsInfo
}