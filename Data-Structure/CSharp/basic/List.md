# List

- https://csharp-video-tutorials.blogspot.com/2013/08/part-74-list-collection-class-in-c.html

# System.Collections.Generic

1. Dictionary
2. List
3. Stack
4. Queue etc

- A List class can be used to create a collection of any type.
- Unlike arrays, lists can grow in size automatically. This class also provides methods to search, sort, and manipulate lists.

1. Contains() function - Use this function to check if an item exists in the list. This method returns true if the items exists, else false.

2. Exists() function - Use this function, to check if an item exists in the list based on a condition. This method returns true if the items exists, else false.

3. Find() function - This method searches for an element that matches the conditions defined by the specified lambda expression and returns the first matching item from the list.

4. FindLast() function - This method searches for an element that matches the conditions defined by the specified lambda expression and returns the Last matching item from the list.

5. FindAll() function - This method returns all the items from the list that match the conditions specified by the lambda expression.

6. FindIndex() function - This method returns the index of the first item, that matches the condition specified by the lambda expression. There are 2 other overloads of this method which allows us to specify the range of elements to search, with in the list.

7. FindLastIndex() function - This method returns the index of the last item, that matches the condition specified by the lambda expression. There are 2 other overloads of this method which allows us to specify the range of elements to search, with in the list.

8. Convert an array to a List - Use ToList() method

9. Convert a list to an array - Use ToArray() method

```cs
 Customer[] arrayAllCustomers = listCustomers.ToArray();
```

10. Convert a List to a Dictionary - Use ToDictionary() method

```cs
Dictionary<int, Customer> dictionaryCustomers = listCustomers.ToDictionary(x => x.ID);
foreach (KeyValuePair<int, Customer> kVP in dictionaryCustomers)
{
    Console.WriteLine("Key = {0}", kVP.Key);
    Customer c = kVP.Value;
    Console.WriteLine("ID = {0}, Name = {1}, Salary = {2}", c.ID, c.Name, c.Salary);
}
```

11. Convert an array to a dictionary using ToDictionary() method.

```cs
// To add an element to the list, use Add() method.
listCustomers.Add(customer1);

// Items can be retrieved from the list by index.
Customer customer = listCustomers[0];

for (int i = 0; i < listCustomers.Count; i++)
{
    //...
}

foreach (Customer c in listCustomers)
{
    //...
}

// If you want to insert an item at a specific index location of the list, use Insert() method.
// The following line will insert customer3 object at index location 1.
listCustomers.Insert(1, customer3);
```
