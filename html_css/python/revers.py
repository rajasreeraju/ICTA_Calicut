# n=int(input("enter a number: "))
# rev=0
# while(n>0):
#     o=n%10
#     rev=(rev*10)+o
#     n=int(n/10)
# print(rev)
def reverse(n):
    rev=0
    while(n>0):
        o=n%10
        rev=(rev*10)+o
        n=n//10
    return rev
a=int(input("Enter a number"))
res=reverse(a)
print(res)