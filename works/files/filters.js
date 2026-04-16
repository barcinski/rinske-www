return
document.write('<form>\
    <input name="s" type="radio" id="forsale" onchange="showForsale()"><label for="forsale">For Sale</label>\
    <input name="s" type="radio" id="archive" onchange="showSold()"><label for="archive">Archive</label>\
    <input name="s" type="radio" id="all" onchange="showAll()" checked><label for="all">All</label>\
    ');
//</form>');

function showForsale(){
    const o = document.getElementsByClassName("item")

    for ( const  foo of o){
        //console.log( getComputedStyle(foo).display)

        if(foo.hasAttribute("sold"))foo.style.display = 'none';
        else foo.style.display = 'inline-table';
    }
}

function showSold(){
    const o = document.getElementsByClassName("item")

    for ( const  foo of o){
        if(foo.hasAttribute("sold"))foo.style.display = 'inline-table';
        else foo.style.display = 'none';
    }   
}

function showAll(){
    const o = document.getElementsByClassName("item")

    for ( const  foo of o){
        foo.style.display = 'inline-table';
        
    }

}

document.write('\
    <input name="s" type="radio" id="havePrice" onchange="showHaveprice()"><label for="havePrice">Have Price</label>\
    <input name="s" type="radio" id="noPrice" onchange="showNoprice()"><label for="noPrice">No Price</label>\
</form>');


function showHaveprice(){
    const o = document.getElementsByClassName("item")

    for ( const  foo of o){
        if(foo.hasAttribute("price"))foo.style.display = 'inline-table';
        else foo.style.display = 'none';
    }   
}

function showNoprice(){
    const o = document.getElementsByClassName("item")

    for ( const  foo of o){
        if(foo.hasAttribute("price") || foo.hasAttribute("sold"))foo.style.display = 'none';
        else foo.style.display = 'inline-table';
    }
}