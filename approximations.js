/**
*	@title Calculus Approximation Functions
*	@author Josh Gibbs - uPaymeiFixit@gmail.com
*/

approximations = {

	/**
 	*	@param {function} f Function being approximated, takes one integer argument
 	*	@param {number} a Lower bound of function
 	*	@param {number} b Upper bound of function
 	*	@param {number} n Quatity of subintervals
 	*/

	left: function(f, a, b, n)
	{
		deltax = (b-a)/n
		sum = 0

		for(i = 1; i <= n; i++)
			sum += f( a+deltax*(i-1) )

		return deltax * sum
	},

	right: function(f, a, b, n)
	{
		deltax = (b-a)/n
		sum = 0

		for(i = 1; i <= n; i++)
			sum += f( a+deltax*i )
		
		return deltax * sum
	},

	midpoint: function(f, a, b, n)
	{
		deltax = (b-a)/n
		sum = 0

		for(i = 1; i <= n; i++)
			sum += f( a + ( deltax*(i-1) + deltax*i )/2 )
		
		return deltax * sum
	},

	trapezoid: function(f, a, b, n)
	{
		deltax = (b-a)/n
		sum = 0

		for(i = 0; i <= n; i++)
		{
			if (i == 0 || i == n) k = 1; // i = 0 or n
			else k = 2; // 0 < i < n
			sum += k*f( a+deltax*i )
		}
		
		return deltax/2 * sum
	},

	simpsons: function(f, a, b, n)
	{
		deltax = (b-a)/n
		sum = 0

		for(i = 0; i <= n; i++)
		{	
			if (i == 0 || i == n) k = 1 // i = 0 or n
			else if (i%2) k = 4 // i is odd
			else k = 2 // i is even
			sum += k*f( a+deltax*i )
		}
		
		return deltax/3 * sum
	}

}

// This is an example of a valid first parameter to be passed into approximations' functions
function f(x) {
	return x/(1+Math.pow(x));
}