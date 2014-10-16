function sum(num_list)
{
    var end = num_list.length;
    var sum_of_list = 0;
    for (i=0; i<end; i++)
    {
        sum_of_list += num_list[i];
    }
    return sum_of_list;
}

function is_even(n)
{
    return n % 2 === 0;
}

function filter(num_list)
{
    var end = num_list.length;
    var filtered_list = [];
    for(i=0; i<end; i++)
    {
        if (is_even(num_list[i]) === true)
            {
                filtered_list.push(num_list[i]);
            }
    }
    return filtered_list;
}

function fibonacci_set(max_num)
{
    if (max_num > 1)
    {
        var fib_list = [1];
        var current_fib = 1;
        while (current_fib < max_num)
        {
            fib_list.push(current_fib);
            var end = fib_list.length;
            current_fib = fib_list[end-1] + fib_list[end-2];
        }
    return fib_list;
    }
    else
    {
        return [1,1];
    }
}

console.log(sum(filter(fibonacci_set(4000000))));
