var apiurl = [{
    name: "NHSH",
    url: "http://203.72.63.54:5000/api"
}];

var cards = new Vue({
    el: '.station-list',
    data: {
        message: "Hello",
        items: [
            {"location": "內湖高中", "temperature": "20", "humidity": "20", "light": "2", "UV": "5", "rainfall": "200", "time": "2017-09-18T04:45:15.650Z" }, 
            {"location": "北一女中", "temperature": "21", "humidity": "2", "light": "4", "UV": "3", "rainfall": "5" }, 
            {"location": "中山女高", "temperature": "22", "humidity": "2", "light": "4", "UV": "3", "rainfall": "5" }, 
            {"location": "景美女中", "temperature": "23", "humidity": "2", "light": "4", "UV": "3", "rainfall": "5" }, 
            {"location": "華僑中學", "temperature": "24", "humidity": "2", "light": "4", "UV": "3", "rainfall": "5" }, 
        ]
    },
    beforeMount: function() {
        /*
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
        */
    }
})
Vue.component("cards", {
    render(h) {

    }
})