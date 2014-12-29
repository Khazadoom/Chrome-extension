walk(document.body);

//Modified by Brandon Wright 12/28/14
//taken from github at https://github.com/panicsteve/cloud-to-butt

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;


    //"Allegedly" to "Kinda Probably"
	v = v.replace(/\bAllegedly\b/g, "Kinda Probably");
	v = v.replace(/\ballegedly\b/g, "kinda probably");



    //"New Study" to "Tumblr Post"
	v = v.replace(/\bNew Study\b/g, "Tumblr Post");
	v = v.replace(/\bNew study\b/g, "Tumblr post");
	v = v.replace(/\bnew study\b/g, "Tumblr post");
	v = v.replace(/\bnew Study\b/g, "Tumblr Post");

	v = v.replace(/\bNew Studies\b/g, "Tumblr Posts");
	v = v.replace(/\bNew studies\b/g, "Tumblr posts");
	v = v.replace(/\bnew studies\b/g, "Tumblr posts");
	v = v.replace(/\bnew Studies\b/g, "Tumblr Posts");

    //"rebuild" to "avenge"
	v = v.replace(/\bRebuild\b/g, "Avenge");
	v = v.replace(/\brebuild\b/g, "avenge");

	v = v.replace(/\bRebuilt\b/g, "Avenged");
	v = v.replace(/\brebuilt\b/g, "avenged");


    //"Space" to "Spaaace"
	v = v.replace(/\bSpace\b/g, "Spaaace");
	v = v.replace(/\bspace\b/g, "spaaace");

    //"Google Glass" to "Virtual Boy"
	v = v.replace(/\bGoogle Glass\b/g, "Virtual Boy");
	v = v.replace(/\bGoogle glass\b/g, "Virtual Boy");
	v = v.replace(/\bgoogle glass\b/g, "Virtual Boy");
	v = v.replace(/\bgoogle Glass\b/g, "Virtual Boy");

    //"Smartphone" to "PokeDex"
	v = v.replace(/\bsmartphone\b/g, "pokédex");
	v = v.replace(/\bSmartphone\b/g, "Pokédex");

    //"Electric" to "Atomic"
	v = v.replace(/\bElectric\b/g, "Atomic");
	v = v.replace(/\belectric\b/g, "atomic");

    //"Senator" to "Elf-Lord"
	v = v.replace(/\bSenator\b/g, "Elf-Lord");
	v = v.replace(/\bsenator\b/g, "elf-lord");
	v = v.replace(/\bSenators\b/g, "Elf-Lords");
	v = v.replace(/\bsenators\b/g, "elf-lords");

    //"Car" to "Cat"
	v = v.replace(/\bCar\b/g, "Cat");
	v = v.replace(/\bcar\b/g, "cat");
	v = v.replace(/\bCars\b/g, "Cats");
	v = v.replace(/\bcars\b/g, "cats");
	;
    
    //Election to Eating Contest
	v = v.replace(/\bElection\b/g, "Eating contest");
	v = v.replace(/\belection\b/g, "eating contest");
	

    //Congressional Leaders to River Spirits
	v = v.replace(/\bCongressional Leaders\b/g, "River Spirits");
	v = v.replace(/\bCongressional leaders\b/g, "River spirits");
	v = v.replace(/\bcongressional leaders\b/g, "river spirits");
	v = v.replace(/\bcongressional Leaders\b/g, "river Spirits");
	

    //Homeland Security to Homestar Runner
	v = v.replace(/\bHomeland Security\b/g, "Homestar Runner");
	v = v.replace(/\bHomeland security\b/g, "Homestar runner");


    //Could not be reached for comment  to  is guilty and everyone knows it
	v = v.replace(/\bCould not be reached for comment\b/g, "Is guilty and everyone knows it");
	v = v.replace(/\bcould not be reached for comment\b/g, "is guilty and everyone knows it");


    //"Witnesses" to "These dudes I know"
	v = v.replace(/\bWitnesses\b/g, "These dudes I know");
	v = v.replace(/\bwitnesses\b/g, "these dudes I know");

    //the cloud to the butt
	v = v.replace(/\bThe Cloud\b/g, "My Butt");
	v = v.replace(/\bThe cloud\b/g, "My butt");
	v = v.replace(/\bthe Cloud\b/g, "my Butt");
	v = v.replace(/\bthe cloud\b/g, "my butt");

    //cloud to butt
	v = v.replace(/\bcloud\b/g, "butt");
	v = v.replace(/\bCloud\b/g, "Butt");

	v = v.replace(/\bclouds\b/g, "butts");
	v = v.replace(/\bClouds\b/g, "Butts");



	textNode.nodeValue = v;
}


