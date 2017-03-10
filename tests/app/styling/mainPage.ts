import * as pagesModule from "tns-core-modules/ui/page";
import * as enums from "tns-core-modules/ui/enums";
import * as stackLayoutModule from "tns-core-modules/ui/layouts/stack-layout";
import * as buttonModule from "tns-core-modules/ui/button";
import * as labelModule from "tns-core-modules/ui/label";
import * as textFieldModule from "tns-core-modules/ui/text-field";
import * as textViewModule from "tns-core-modules/ui/text-view";
import * as colorModule from "tns-core-modules/color";

export function createPage() {
    var width = 200;
    var textAlignment = enums.TextAlignment.right;

    var stack = new stackLayoutModule.StackLayout();
    var view;

    view = new buttonModule.Button();
    view.width = width;
    view.style.backgroundColor = new colorModule.Color("Blue");
    view.style.textAlignment = textAlignment;
    view.text = "Button";
    stack.addChild(view);

    view = new labelModule.Label();
    view.width = width;
    view.text = "Label";
    view.style.backgroundColor = new colorModule.Color("Green");
    view.style.textAlignment = textAlignment;
    stack.addChild(view);

    view = new textFieldModule.TextField();
    view.width = width;
    view.text = "TextField";
    view.style.backgroundColor = new colorModule.Color("Yellow");
    view.style.textAlignment = textAlignment;
    stack.addChild(view);

    view = new textViewModule.TextView();
    view.width = width;
    view.text = "TextView";
    view.style.backgroundColor = new colorModule.Color("Red");
    view.style.textAlignment = textAlignment;
    stack.addChild(view);

    var page = new pagesModule.Page();
    page.content = stack;
    return page;
}
//export var Page = page;
