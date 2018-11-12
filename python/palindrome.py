def palindrome(n): 
    num=n
    rev=0
    while(n!=0):
        o=n%10
        rev=(rev*10)+o
        n=int(n/10)
    if(rev==num):
        print("number is palindrome")
    else:
         print("number is not palindrome")
x=int(input("enter a number: "))
a=palindrome(x)
   
