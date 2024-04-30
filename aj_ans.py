arr=[2,4,5,6,7,8,9,10]

odd_list = [num for (i,num) in enumerate(arr) if i %2!=0]

odd_list.reverse()

i=1

for num in odd_list:
    
    arr[i]=num
    
    i+=2
print(arr)