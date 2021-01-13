const search_triplets = function (arr: number): number[] {
  const triplets: number[] = [];
  /* 
  a = arr.length - 2;
  b = arr.length - 1;

  gotchas
    - there may be repeat numbers in arr, but we only want unique combinations. but we don't want to skip repeats necessarily, eg [-1, -1, 2], we just need the combinations to be repeats.
  
  triplets: [-5, 2, 3], [-2, 1, 3]

  [-5, 2, -1, -2, 3]

  1) sort the array
  [-5, -2, -1, 2, 3]
       ^       a  b  
  while a < b (??)
  - if sum === 0, 
      it's a pair! push to results
        that means there can't possibly be more unique matches for this index by moving both a and b to the left.
      BUT: if b and a can move towards one another, there might be other combinations available for this index.
      if b - a > 2
        b--;
        a++;
      else
        increment i.
  - else if this sum > 0, 
      then move a to the left.
  - else (ie sum < 0)
    if (b-a > 1)
      a++;





  */
  return triplets;
};
