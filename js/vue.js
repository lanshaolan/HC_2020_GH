var vue = new Vue({
    el: '#app',
    data: function() {
        return {
            title: 'Test',
            body: 'Body',
        }
    },
    methods: {
        load: function(title, body) {
            this.title = title;
            this.body = body;
            $(this.$el).modal('show');
        }
    },
});