# num1=int(input("Enter first number "))
# num2=int(input("Enter second number "))
# num3=int(input("Enter third number "))
# if(num1<num2):
#         l=num2
# else:
#         l=num1
# if(num3<l):
#         l=l
# else:
#         l=num3
# print("largest is: ",l)
def largest(x,y,z):
    if(num1<num2):
        l=num2
    else:
        l=num1
    if(num3<l):
        l=l
    else:
        l=num3
    return l
num1=int(input("Enter first number "))
num2=int(input("Enter second number "))
num3=int(input("Enter third number "))
lr=largest(num1,num2,num3)
print("Largest is: ",lr)
