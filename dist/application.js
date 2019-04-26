"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boot_1 = require("@loopback/boot");
const core_1 = require("@loopback/core");
const rest_explorer_1 = require("@loopback/rest-explorer");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const service_proxy_1 = require("@loopback/service-proxy");
exports.PackageKey = core_1.BindingKey.create('application.package');
const pkg = require('./../package.json');
class ApiCustomizationApplication extends boot_1.BootMixin(service_proxy_1.ServiceMixin(repository_1.RepositoryMixin(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        //TODO: Bind package.json to the application context
        this.bind(exports.PackageKey).to(pkg);
        // Customize @loopback/rest-explorer configuration here
        /*  this.bind(RestExplorerBindings.CONFIG).to({
            path: '/explorer',
          }); */
        this.component(rest_explorer_1.RestExplorerComponent);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controller'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
    }
}
exports.ApiCustomizationApplication = ApiCustomizationApplication;
//# sourceMappingURL=application.js.map