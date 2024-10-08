//DESCRIPTION: Finds all caps, converts to lowercase, and applies small caps. Works either on selected story, or whole doc.
// CS3 script by Harbs

//Download Link: http://in-tools.com/article/scripts-blog/all-caps-to-small-caps-script/

(function() 
{ 
if(app.documents.length==0){return} 
var doc=app.documents[0]; 
// Change the following to your style name! 
var character_style_name = 'Small Caps'; 
try{var range = app.selection[0].parentStory} 
catch (err){var range = doc} 
//comment out next line if you do not want styles. 
var charStyle = GetCharacterStyle(character_style_name,doc);

app.findGrepPreferences = null; 
app.findGrepPreferences.findWhat="\\u\\u+"; 
var finds=range.findGrep(); 
for (var i=0;i<finds.length;i++){ 
	finds[i].changecase(ChangecaseMode.lowercase); 
	//comment out next line if you do not want styles. 
	finds[i].applyCharacterStyle (charStyle) 
	//uncomment next line if you do not want styles. 
	//finds[i].capitalization=Capitalization.smallCaps; 
	} 
function GetCharacterStyle(styleName,doc){ 
	var charStyles=doc.allCharacterStyles; 
	for(var i=0;i<charStyles.length;i++){ 
		if(charStyles[i].name==styleName){ 
			return charStyles[i]; 
			} 
		} 
	return doc.characterStyles.add({name:styleName,capitalization:Capitalization.smallCaps}); 
	} 
} 
)(); 
