var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import * as strings from 'ThreeColumnPageWebPartStrings';
import { sp } from "@pnp/sp";
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);
// import custom styles
require('./assets/bootstrap/dashboard.scss');
import { library } from '@fortawesome/fontawesome-svg-core';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(far, fas);
dom.watch();
Vue.component('font-awesome-icon', FontAwesomeIcon);
import router from './router';
import App from './components/App.vue';
var ThreeColumnPageWebPart = /** @class */ (function (_super) {
    __extends(ThreeColumnPageWebPart, _super);
    function ThreeColumnPageWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThreeColumnPageWebPart.prototype.onInit = function () {
        sp.setup({
            spfxContext: this.context
        });
        console.log("Super onInit called: " + this.context.pageContext.web.absoluteUrl);
        return Promise.resolve();
    };
    ThreeColumnPageWebPart.prototype.render = function () {
        var _this = this;
        var id = "wp-" + this.instanceId;
        this.domElement.innerHTML = "<div id=\"" + id + "\"></div>";
        var el = new Vue({
            el: "#" + id,
            router: router,
            render: function (h) { return h(App, {
                props: {
                    description: _this.properties.description
                }
            }); }
        });
    };
    Object.defineProperty(ThreeColumnPageWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    ThreeColumnPageWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return ThreeColumnPageWebPart;
}(BaseClientSideWebPart));
export default ThreeColumnPageWebPart;
//# sourceMappingURL=ThreeColumnPageWebPart.js.map