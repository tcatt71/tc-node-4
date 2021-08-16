# SQL Joins

There will be an exercise and quiz at the end of this document

Combining multiple tables is where the real power of SQL lives. SQL can combine multiple tables on criteria that match and report them as one result set. That is where a JOIN clause comes in.

A JOIN clause is used to combine rows from two or more tables, based on a related column between them. Here are several Venn diagrams showing the visual representation of the different Joins available:

<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image3.jpg). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image3.jpg "image_tooltip")

While the majority of your joins will tend to be `INNER` or `LEFT` join statements, we will go over all the joins available to you:

## INNER JOIN

The `INNER JOIN` statement in SQL gets only the records where a match occurs on both tables. The result set looks like this:

<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image4.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image4.png "image_tooltip")

The `INNER JOIN` statement follows this syntax:

```
SELECT column_name(s)
FROM tableA
INNER JOIN tableB ON tableA.column_name = tableB.column_name;

-- Returns customer names and order IDs
-- only where the Orders.CustomerID matches the Customers.CustomerID
SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;
```

##

**LEFT JOIN**

The `LEFT JOIN` statement in SQL gets all the records from the left table and only records from the right table where a match occurs. The result set looks like this:

<p id="gdcalert5" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image5.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image5.png "image_tooltip")

The `LEFT JOIN` statement follows this syntax:

```
SELECT column_name(s)
FROM tableA
LEFT JOIN tableB ON tableA.column_name = tableB.column_name;

-- Returns all customer names and includes the order ID record
-- if the Orders.CustomerID matches the Customers.CustomerID
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.CustomerName;
```

## RIGHT JOIN

The `RIGHT JOIN` statement in SQL gets all the records from the right table and only records from the left table where a match occurs. The result set looks like this:

<p id="gdcalert6" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image6.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert7">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image6.png "image_tooltip")

The `RIGHT JOIN` statement follows this syntax:

```
SELECT column_name(s)
FROM tableA
RIGHT JOIN tableB ON tableA.column_name = tableB.column_name;

-- Returns all customer names and includes the order ID record
-- if the Orders.CustomerID matches the Customers.CustomerID
SELECT Customers.CustomerName, Orders.OrderID
FROM Orders
RIGHT JOIN Customers ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.CustomerName;
```

**Note:** Although Right Join is available to you, industry standard/best practice is to use a Left Join instead.

## FULL OUTER JOIN

The `FULL OUTER JOIN` statement in SQL gets all the records from both the left and right tables where a match occurs in either table. The result set looks like this:

<p id="gdcalert7" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image7.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert8">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image7.png "image_tooltip")

The `FULL OUTER JOIN` statement follows this syntax:

```
SELECT column_name(s)
FROM tableA
FULL OUTER JOIN tableB ON tableA.column_name = tableB.column_name;

-- Returns all customer names and order ID record
-- where the Orders.CustomerID matches the Customers.CustomerID
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
FULL OUTER JOIN Orders ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.CustomerName;
```

**Note:** Although Full Outer Join is available to you, there are very few cases where this Join will be required.

## LEFT EXCLUDING JOIN

The `LEFT EXCLUDING JOIN` statement in SQL gets all the records from the left table where a match does not occur on the right table. The result set looks like this:

<p id="gdcalert8" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image8.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert9">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image8.png "image_tooltip")

The `LEFT EXCLUDING JOIN` statement follows this syntax:

```
SELECT column_name(s)
FROM tableA
LEFT JOIN tableB ON tableA.column_name = tableB.column_name
WHERE tableB.column_name IS NULL;

-- Returns all customer names if the Orders.CustomerID is Null
SELECT Customers.CustomerName
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
WHERE Orders.CustomerID IS NULL;
```

## RIGHT EXCLUDING JOIN

The `RIGHT EXCLUDING JOIN` statement in SQL gets all the records from the right table where a match does not occur on the left table. The result set looks like this:

<p id="gdcalert9" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image9.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert10">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image9.png "image_tooltip")

The `RIGHT EXCLUDING JOIN` statement follows this syntax:

```
SELECT column_name(s)
FROM tableA
RIGHT JOIN tableB ON tableA.column_name = tableB.column_name
WHERE tableA.column_name IS NULL;

-- Returns all customer names if the Orders.CustomerID is Null
SELECT Customers.CustomerName
FROM Orders
RIGHT JOIN Customers ON Customers.CustomerID = Orders.CustomerID
WHERE Orders.CustomerID IS NULL;
```

**Note:** Although Right Excluding Join is available to you, industry standard/best practice is to use a Left Excluding Join instead.

## FULL OUTER EXCLUDING JOIN

The `FULL OUTER EXCLUDING JOIN` statement in SQL gets all the records from both the left and right tables where a match does not occur in either table. The result set looks like this:

<p id="gdcalert10" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image10.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert11">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image10.png "image_tooltip")

The `FULL OUTER EXCLUDING JOIN` statement follows this syntax:

```
SELECT column_name(s)
FROM tableA
FULL OUTER JOIN tableB
ON tableA.column_name = tableB.column_name
WHERE tableA.column_name IS NULL OR tableB.column_name IS NULL;

-- Returns all customer names
-- where a match doesn't occur in either Orders or Customers tables
SELECT Customers.CustomerName
FROM Customers
FULL OUTER JOIN Orders ON Customers.CustomerID = Orders.CustomerID
WHERE Customers.CustomerID IS NULL OR Orders.CustomerID IS NULL;
```

**Note:** Although Full Outer Excluding Join is available to you, there are very few cases where this Join will be required.

# Exercise:

# [Exercise Walkthrough Documentation](https://docs.google.com/document/d/1pgVCJI8E3nlvNkfhdIrkkJ0ebq6Uexa9AdexrlTTuIA/edit?usp=sharing)

[Click to Start the SQL Joins Exercise](https://docs.google.com/document/d/1pgVCJI8E3nlvNkfhdIrkkJ0ebq6Uexa9AdexrlTTuIA/edit?usp=sharing)
