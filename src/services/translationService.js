export function translate(sourceLanguage, targetLanguage, original){
    debugger;
    console.log("Translating...");
            
    var base64 = require('base-64');

    var apiEndpoint = 'https://dictapi.lexicala.com/search-entries?source=global&language=' + sourceLanguage + '&text=';
    var username = 'm.tracey5021@gmail.com';
    var password = 'y_W0rd53cUr!t';

    var headers = new Headers();

    headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));

    // this.originalWordData = newValue.split(" ");

    var url = apiEndpoint + original;
    debugger;
    fetch(url, {method:'GET',
        headers: headers,
    })
    .then(function (response){ // converts response to obj, passed to next .then
        return response.json();
    })
    .then(function (obj){
        console.log(obj);
        var translations = obj.results[0].senses[0].translations;
        console.log(translations);
        var englishTranslations = translations.en;
        console.log(englishTranslations);
        var english;
        if (Array.isArray(englishTranslations)){
            english = englishTranslations[0].text;
        }else{
            english = englishTranslations.text;
        }
        return english;
    })
    .catch(function (error){
        console.log('Unexpected error: ' + error);
    });
}
