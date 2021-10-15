---
marp: true
theme: default
header: 'C# Tips'
footer: ''
paginate: true
size: 16:9
---

- https://csharp-video-tutorials.blogspot.com/p/free-c-video-tutorial-for-beginners.html

---

- All generic collection classes including List are strongly typed.
- arrays does not grow in size automatically.

```cs
for (int i = 0; i < listCustomers.Count; i++)
        {
            Customer customer = listCustomers[i];
            Console.WriteLine("ID = {0}, Name = {1}, Salary = {2}",
                     customer.ID, customer.Name, customer.Salary);
        }
}
```

```cs
foreach (Customer c in listCustomers)
        {
            Console.WriteLine("ID = {0}, Name = {1}, Salary = {2}", c.ID, c.Name, c.Salary);
        }
}

```
---
- Convert an array to a List - Use ToList() method
- Convert a list to an array - Use ToArray() method
```cs
Customer[] arrayCustomers = new Customer[3];
arrayCustomers[0] = customer1;
arrayCustomers[1] = customer2;
arrayCustomers[2] = customer3;

// To convert an array to a List, use ToList() method
List<Customer> listCustomers = arrayCustomers.ToList();
Customer[] arrayAllCustomers = listCustomers.ToArray();
```

---
- Convert a List to a Dictionary - Use ToDictionary() method
```cs
Dictionary<int, Customer> dictionaryCustomers = listCustomers.ToDictionary(x => x.ID);
foreach (KeyValuePair<int, Customer> keyValuePairCustomers in dictionaryCustomers)
{
    Console.WriteLine("Key = {0}", keyValuePairCustomers.Key);
    Customer c = keyValuePairCustomers.Value;
    Console.WriteLine("ID = {0}, Name = {1}, Salary = {2}", c.ID, c.Name, c.Salary);
}
```
