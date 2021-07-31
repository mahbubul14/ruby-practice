function pageCount(n, p) {
    // Write your code here
    halfBook = n/2;
    leftSide = p/2;
    rightSide = (halfBook - leftSide);
    result = Math.min(halfBook - rightSide)
    console.log(result);
}
pageCount(11, 4);

// public class DrawingBook {

// 	static int pageCount(int n, int p) {

// 		int totalPageTurnCountFromFront = n / 2;
// 		int targetPageTurnCountFromFront = p / 2;
// 		int targetPageTurnCountFromBack = totalPageTurnCountFromFront - targetPageTurnCountFromFront;

// 		return Math.min(targetPageTurnCountFromFront, targetPageTurnCountFromBack);

// 	}