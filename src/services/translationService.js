
// format of json result:

// {
//     results: [
//         {
//             id: ''
//             source: ''
//             language: ''
//             headword: {
//                 text: ''
//                 pronounciation: ''
//                 pos: ''
//                 homograph: ''
//                 inflections: [
//                     {
//                         text: ''
//                         tense: ''
//                     }
//                 ]
//             }
//             senses: [
//                 {
//                     id: ''
//                     see: ''
//                     definition: ''
//                     subcategory: ''
//                     translations: {
//                         language: {
//                             text: ''
//                         }
//                     }
//                     examples: [
//                         {
//                             text: ''
//                             translations: ''
//                         }
//                     ]
//                     compositional_phrases: [
//                         {
//                             text: ''
//                             definition: ''
//                             translations: ''
//                             examples: []
//                         }
//                     ]
//                 }
//             ]
//             related_entries: []
//         }
//     ]
// }

export function translate(sourceLanguage, targetLanguage, original){
    debugger;
    console.log("Translating...");
            
    var base64 = require('base-64');

    var url = 'https://dictapi.lexicala.com/search-entries?source=global&language=' + sourceLanguage + '&text=' + original + '&morph=true&analyzed=true';
    var username = 'm.tracey5021@gmail.com';
    var password = 'y_W0rd53cUr!t';

    var headers = new Headers();

    headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));    

    fetch(url, {method:'GET',
        headers: headers,
    })
    .then(function (response){ // converts response to obj, passed to next .then
        return response.json();
    })
    .then(function (obj){
        debugger;
        var translations = [];
        for (var i = 0; i < obj.results.length; i ++){
            var currentResult = obj.results[i];
            for (var j = 0; j < currentResult.senses.length; j ++){
                var currentSense = currentResult.senses[j];
                var translation = currentSense.translations[targetLanguage].text;
                translations.push(translation);
                console.log(translation);
            }
        }
        return translations;
    })
    .catch(function (error){
        console.log('Unexpected error: ' + error);
    });
}

// var languageMap = {
//     '': ''
// };