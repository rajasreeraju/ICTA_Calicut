year=int(input("Enter a Year: "))
print(year)
if((year%400==0) or ((year%100!=0) and (year%4==0))):
    print("Year is a leap Year")
else:
    print("Not a leap year")