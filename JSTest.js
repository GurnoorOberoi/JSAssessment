/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFTCollection = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(Name, UID, Address, Marks) {
    let NFT = {
        Name: Name,
        UID: UID,
        Address: Address,
        Marks: Marks
    }
    NFTCollection.push(NFT);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < NFTCollection.length; i++) {
        console.log("\n\n---------Student Record-----------\n\n");
        console.log("Name:" + NFTCollection[i].Name);
        console.log("UID:" + NFTCollection[i].UID);
        console.log("Address:" + NFTCollection[i].Address);
        console.log("Marks:" + NFTCollection[i].Marks);
        console.log("\n\n----------------------------------\n\n");
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total number of NFTs minted" + NFTCollection.length);

}

// call your functions below this line
mintNFT("Rahul", 1, "Dehli", 95);
mintNFT("Vaibhavi", 2, "UP", 97);
mintNFT("Preeti", 3, "Mumbai", 88);
mintNFT("Aman", 4, "Hyderabad", 76);
listNFTs();
getTotalSupply();
