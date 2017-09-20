var apiurl = [{
    name: "NHSH",
    url: "http://203.72.63.54:8080/api"
}];

var cards = new Vue({
    el: '.station-list',
    data: {
        message: "Hello",
        items: []
    },
    beforeMount: function() {
        fetch(apiurl[0].url, {
            method: "GET"
        }).then((res) => {
            console.log("GET Data");
            return res.json();
        }).then((json) => {
            cards.items = json.data;
        }).catch((err) => {
            console.log("err");
            console.log(err);
        })
    }
})
Vue.component("cards", {
    render(h) {

    }
})
