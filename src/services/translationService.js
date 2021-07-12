
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

// export function translate(sourceLanguage, targetLanguage, original){
//     //debugger;
//     console.log("Translating...");
            
//     var base64 = require('base-64');

//     var apiEndpoint = 'https://dictapi.lexicala.com/search-entries?source=global'
    
//     var username = 'm.tracey5021@gmail.com';
//     var password = 'y_W0rd53cUr!t';

//     var headers = new Headers();

//     headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password)); 
    
//     var baseTranslationUrl = apiEndpoint + '&language=' + sourceLanguage + '&text=' + original + '&morph=true&analyzed=true';
//     var translationDetailsUrl = apiEndpoint + '&language=' + targetLanguage + '&text={}&morph=true&analyzed=true';

//     fetch(baseTranslationUrl, {method:'GET',
//         headers: headers,
//     })
//     .then(function (response){ // converts response to obj, passed to next .then
//         return response.json();
//     })
//     .then(function (obj){
//         //debugger;
//         var translations = [];
//         for (var i = 0; i < obj.results.length; i ++){
//             var currentResult = obj.results[i];
//             for (var j = 0; j < currentResult.senses.length; j ++){
//                 var currentSense = currentResult.senses[j];
//                 var translation = currentSense.translations[targetLanguage].text;
//                 translations.push(translation);
//                 console.log(translation);
//             }
//         }

//         //var translationDetails = []
//         for (var k = 0; k < translations.length; k ++){
//             translationDetailsUrl.replace('{}', translations[i]);
//         }
//     })
//     .catch(function (error){
//         console.log('Unexpected error: ' + error);
//     });
// }

// export function assignPromise(promise, assignable){
//     promise().
//     then(function(result){
//         assignable = result;
//     });
// }

export function testApi(){

    // debugger;

    console.log('Testing...');

    var apiEndpoint = 'https://dictapi.lexicala.com/test';

    var username = 'm.tracey5021@gmail.com';
    var password = 'y_W0rd53cUr!t';

    var base64 = require('base-64');

    var headers = new Headers();

    headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password)); 
    
    const promise = fetch(apiEndpoint, {method: 'GET', headers: headers})
    .then((response) => response.json())
    .then((data) => {
        return data;
    })
    .catch(function(error){
        console.log('Error in translation: ' + error);
    });

    return promise;
}

export function translate(source, target, original){

    console.log('Translating...');

    var apiEndpoint = 'https://localhost:5001/api/translation/translate/' + source + '/' + target + '/' + original;
    
    const translation = fetch(apiEndpoint, {method: 'GET'})
    .then((response) => response.json())
    .then((data) => {
        return data;
    })
    .catch(function(error){
        console.log('Error in translation: ' + error);
    });

    return translation;


}
