Here you go 👍
This is **Practical No. 4 – COMPLETE, CLEAN, RUNNABLE CODE** exactly how you can write it in **exam / practical file**.

---

## 🧪 Practical No. 4 – Pandas Series (Whole Code)

```python
# Practical No. 4
# Aim: Create one-dimensional data using Series and perform various operations

import pandas as pd

# Step 1: Create a Series
marks = pd.Series([85, 90, 78, 92, 88])
print("Marks Series:")
print(marks)
print()

# Step 2: Create Series with Custom Index
students = pd.Series(
    [85, 90, 78],
    index=["Alice", "Bob", "Charlie"]
)
print("Students Series:")
print(students)
print()

# Step 3: Accessing Elements
print("Marks of Alice:")
print(students["Alice"])
print()

# Step 4: Arithmetic Operations
print("Marks after adding 5:")
print(students + 5)
print()

# Step 5: Statistical Operations
print("Maximum Marks:", students.max())
print("Minimum Marks:", students.min())
print("Average Marks:", students.mean())
print()

# Step 6: Filtering Data
print("Students with marks greater than 80:")
print(students[students > 80])
print()

# Step 7: Updating Values
students["Bob"] = 95
print("Updated Students Series:")
print(students)
print()

# Step 8: Check Data Type
print("Data type of Series:")
print(students.dtype)
print()

# Step 9: Convert Series to List
print("Series converted to list:")
print(students.tolist())
```

---

## 📝 ONE-LINE AIM (Write this in practical file)

**Aim:** To create a Pandas Series and perform various operations on it.

---

## 🧠 ONE-LINE CONCLUSION (Very Important)

> Thus, we successfully created a Pandas Series and performed indexing, arithmetic, statistical, filtering, and conversion operations.

---

If you want next:

* 📄 **Practical 5 whole code**
* 🧾 **Exam-ready handwritten format**
* 🗣️ **Viva questions from Practical 4**

Just tell me 👍
