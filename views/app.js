define(["require", "exports"], function (require, exports) {
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Sverre Andre Grand';
            config.map([
                { route: ['', 'about'], moduleId: './about', nav: true, title: 'About' },
                { route: 'resume', moduleId: './resume', nav: true },
                { route: 'projects', moduleId: './projects', nav: true },
                { route: 'skills', moduleId: './skills', nav: true }
            ]);
            this.router = router;
        };
        return App;
    })();
    exports.App = App;
});
