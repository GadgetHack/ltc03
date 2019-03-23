function beerSong (current) 
{
    let a;
    let left = current - 1;

    if ( current > 1 ) { 
        a = current + ` bottles of beer on the wall, ` + current + ` bottles of beer.
        Take one down, pass it around, ` + left + ` bottles of beer on the wall...`;
        console.log(a);
        beerSong(left);
    } else {
        a = current + ` bottle of beer on the wall, ` + current + ` bottle of beer.
        Take one down, pass it around, no more bottles of beer on the wall...
        No more bottles of beer on the wall, no more bottles of beer.
        We've taken them down and passed them around; now we're drunk and passed out!
        `;
        console.log(a);
    }
}


beerSong(99);
