import { mnm3e } from "./module/config.js"
import MM3ActorSheet from "./module/sheets/MM3ActorSheet.js"
import MM3ItemSheet from "./module/sheets/MM3ItemSheet.js"




Hooks.once("init", function() {
    console.log("mnm3e | Initializing Mutants & Masterminds 3e System");

    CONFIG.mnm3e = mnm3e;

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("mnm3e", MM3ActorSheet, { makeDefault: true });

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("mnm3e", MM3ItemSheet, { makeDefault: true });
    
    registerHandlebarsHelpers();
});

function registerHandlebarsPartial(name, path) {
    preloadTemplate(path)
        .then(function (templates) {
            Handlebars.registerPartial(name, templates[0]);
        });
}

async function preloadTemplate(path) {
    return loadTemplates([path]);
}

function registerHandlebarsHelpers() {
    Handlebars.registerHelper("concat", function(a, b) {
        if(b != ""){
            return a + b;
        }else{
            return 0;
        }
    });
    Handlebars.registerHelper("sum", function(a,b){
        if (isNumber(a) && isNumber(b)) {
            return Number(a) + Number(b);
          }
          if (typeof a === 'string' && typeof b === 'string') {
            return a + b;
          }
          return '';
    });
}

