
function return_duplicates(some_list)
{
    list_length = some_list.length;
    dupes = {};

    for(i=0; i<list_length; i++)
    {
       for(j=i+1; j<list_length; j++)
       {
           if ((some_list[i] === some_list[j]) && (!(some_list[i] in dupes)))
            {
                dupes[some_list[i]] = true;
            }
       }
    }
    key_list = Object.keys(dupes);
    return key_list;
}