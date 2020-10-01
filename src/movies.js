
// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies){
    let newArray=movies.map(function(obj){
        return obj.director
    });
    return newArray;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
    let spielberg=movies.filter(function(obj){
        return obj.director==="Steven Spielberg" && obj.genre.includes("Drama")
    });
    return spielberg.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    if(movies.length===0){
        return 0;
    }
    let totalRate=movies.reduce(function(sum,obj){
        if(!obj.rate){
            return sum;
        }
        return sum+ obj.rate

    }, 0);
    return parseFloat((totalRate/movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    let dramaMovies=movies.filter(function(obj){
        return obj.genre.includes("Drama")
    });

    return ratesAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear (movies){
    if(movies.length===0){
        return []; 
    }
    movies.sort(function(a,b){
        if (a.year>b.year){
            return 1;
        }
        else if (a.year<b.year){
            return -1;
        }
        else{
            return 0;
        }
    });
    return movies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    if(movies.length===0){
        return []; 
    }
    let moviesTitle=movies.slice().sort(function(a,b){
        if (a.title>b.title){
            return 1;
        }
        else if (a.title<b.title){
            return -1;
        }
        else{
            return 0;
        }
    });
    let onlyTitle=moviesTitle.map(function(obj){
        return obj.title
    });
    return onlyTitle.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
