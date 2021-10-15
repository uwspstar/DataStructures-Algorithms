# Dictionary

- https://csharp-video-tutorials.blogspot.com/2013/08/part-72-what-is-dictionary-in-c.html

1. A dictionary is a collection of (key, value) pairs.
2. Dictionary class is present in System.Collections.Generic namespace.
3. When creating a dictionary, we need to specify the type for key and value.
4. Dictionary provides fast lookups for values using keys.
5. Keys in the dictionary must be unique.
6. TryGetValue()
7. Count()
8. Remove()
9. Clear()
10. Using LINQ extension methods with Dictionary
11. Different ways to convert an array into a dictionary

```cs
Dictionary<int, Customer> dictionaryCustomers = new Dictionary<int, Customer>

Customer customer1 = new Customer()
{
    ID = 1,
    Name = "Xw",
    Salary = 1000
};

dictionaryCustomers.Add(customer1.ID, customer1);

// You can also use var, to loop thru each key/value pair in a dictionary.
// foreach (var cKVP in dictionaryCustomers)
// Try to avoid using var, as this makes your code less readable

foreach (KeyValuePair<int, Customer> cKVP in dictionaryCustomers)
{
    Console.WriteLine("Key = " + cKVP.Key);
    Customer c = cKVP.Value;
    Console.WriteLine("ID = {0}, Name = {1}, Salary = {2}", c.ID, c.Name, c.Salary);
}

foreach (int key in dictionaryCustomers.Keys) // not Keys()
{
    // ... Console.WriteLine(key);
}

foreach (Customer customer in dictionaryCustomers.Values)
{
    //... Console.WriteLine(customer.Name);
}


// When accessing a dictionary value by key, make sure the dictionary
// contains the key, otherwise you will get KeyNotFound exception.
if (dictionaryCustomers.ContainsKey(110))
{
    Customer cus = dictionaryCustomers[110];
}

// TryGetValue (key, out value)
// When this method returns, contains the value associated with the specified key, if the key is found; otherwise, the default value for the type of the value parameter. This parameter is passed uninitialized.
bool keyExists = dict.TryGetValue(key, out value);
if (keyExists) {
Console.WriteLine("{0} exists in map", key);
}
else {
Console.WriteLine("{0} does not exist in map", key);
}

// To remove an item from the dictionary, use Remove() method
dictionaryCustomers.Remove(101);

// To remove all items from the dictionary, use Clear() method
dictionaryCustomers.Clear();

// Create an array of customers
Customer[] arrayCustomers = new Customer[3];
arrayCustomers[0] = customer1;

// Convert customer array to a dictionary using ToDictionary() method.
// In this example, key is Customer ID and value is the customer object
Dictionary<int, Customer> dict = arrayCustomers.ToDictionary(customer => customer.ID, customer => customer);

foreach (KeyValuePair<int, Customer> kvp in dict)
{
    // ...
}
```
